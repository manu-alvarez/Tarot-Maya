import React, { useState, useEffect, useCallback, useRef } from 'react';
import { NAHUALES, TONES, getNahualByNumber, getToneByNumber, getDirectionName, getElementName } from '../data/nahuales';
import { TzolkinEngine } from '../utils/tzolkin-engine';

// Types
interface MayaCard {
  nahual: number;
  tone: number;
  position: string;
  element: string;
  direction: string;
  neonColor: string;
}

interface ReadingResult {
  cards: MayaCard[];
  readingType: string;
  date: string;
  kin: { day: number; nahual: number; tone: number };
}

type AnimationPhase = 'idle' | 'shuffle' | 'reveal' | 'complete';

export const MayaTarotApp: React.FC = () => {
  // State
  const [phase, setPhase] = useState<'landing' | 'selection' | 'reading' | 'results'>('landing');
  const [readingType, setReadingType] = useState<'daily' | 'cross' | 'year' | 'free'>('daily');
  const [cards, setCards] = useState<MayaCard[]>([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [animationPhase, setAnimationPhase] = useState<AnimationPhase>('idle');
  const [birthDate, setBirthDate] = useState('');
  const [history, setHistory] = useState<ReadingResult[]>([]);
  const [showParticles, setShowParticles] = useState(true);
  const [activeNahual, setActiveNahual] = useState<number | null>(null);
  const [selectedCards, setSelectedCards] = useState<MayaCard[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);
  
  const engine = useRef(new TzolkinEngine());
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Particle animation
  useEffect(() => {
    if (!showParticles || !particleCanvasRef.current) return;
    
    const canvas = particleCanvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number; size: number; color: string; alpha: number;
    }> = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    
    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: ['#00FFFF', '#FF00FF', '#FFD700', '#00FF00'][Math.floor(Math.random() * 4)],
        alpha: Math.random() * 0.5 + 0.1,
      });
    }
    
    const animate = () => {
      ctx.fillStyle = 'rgba(5, 5, 8, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        
        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * 0.2;
        ctx.fill();
      });
      
      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [showParticles]);

  // Generate random card
  const generateRandomCard = useCallback((): MayaCard => {
    const nahual = Math.floor(Math.random() * 20) + 1;
    const tone = Math.floor(Math.random() * 13) + 1;
    const nahualData = getNahualByNumber(nahual);
    const toneData = getToneByNumber(tone);
    
    return {
      nahual,
      tone,
      position: 'free',
      element: nahualData?.element || 'Water',
      direction: nahualData?.direction || 'East',
      neonColor: nahualData?.colorNeon || '#00FFFF',
    };
  }, []);

  // Shuffle cards
  const shuffleCards = useCallback((count: number): MayaCard[] => {
    const result: MayaCard[] = [];
    for (let i = 0; i < count; i++) {
      result.push(generateRandomCard());
    }
    return result;
  }, [generateRandomCard]);

  // Start reading
  const startReading = () => {
    setShowParticles(true);
    setPhase('reading');
    setAnimationPhase('shuffle');
    setIsShuffling(true);
    
    // Calculate cards based on reading type
    let count = 3;
    if (readingType === 'cross') count = 5;
    if (readingType === 'year') count = 13;
    
    // Fisher-Yates shuffle simulation
    const newCards = shuffleCards(count);
    setCards(newCards);
    
    // Reveal cards with delay
    setTimeout(() => {
      setAnimationPhase('reveal');
    }, 1500);
    
    setTimeout(() => {
      setAnimationPhase('complete');
      setPhase('results');
    }, 3000);
  };

  // Calculate kin for date
  const calculateKin = (date: Date) => {
    return engine.current.getKinByCorrelation(date, '584283');
  };

  // Get card position name
  const getPositionName = (index: number): string => {
    const names = ['Centro', 'Este', 'Norte', 'Sur', 'Oeste'];
    return names[index] || `Posición ${index + 1}`;
  };

  // Render glyph SVG
  const renderGlyph = (nahual: number, size: number = 80) => {
    const nahualData = getNahualByNumber(nahual);
    const color = nahualData?.colorNeon || '#00FFFF';
    
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" className="animate-morph-glow">
        <defs>
          <filter id={`glow-${nahual}`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <circle cx="20" cy="20" r="15" fill="none" stroke={color} strokeWidth="1" filter={`url(#glow-${nahual})`} />
        <text x="20" y="25" textAnchor="middle" fill={color} fontSize="16" fontWeight="bold">
          {nahual}
        </text>
      </svg>
    );
  };

  // Render card component
  const CardComponent: React.FC<{ card: MayaCard; index: number; isRevealing: boolean }> = ({ card, index, isRevealing }) => {
    const nahualData = getNahualByNumber(card.nehual);
    
    return (
      <div 
        className={`relative glass-panel p-6 transition-all duration-700 transform ${
          isRevealing 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-10 scale-90'
        }`}
        style={{ 
          transitionDelay: `${index * 200}ms`,
          borderColor: card.neonColor,
          boxShadow: `0 0 30px ${card.neonColor}33, inset 0 0 30px ${card.neonColor}11`,
        }}
      >
        <div className="text-center">
          <div className="mb-4 animate-pulse-neon">
            {renderGlyph(card.nahual, 60)}
          </div>
          <h3 
            className="text-xl font-bold mb-2" 
            style={{ color: card.neonColor, textShadow: `0 0 10px ${card.neonColor}` }}
          >
            {nahualData?.nameYucateco || '...'}
          </h3>
          <p className="text-sm text-gray-400 mb-2">{nahualData?.nameEnglish}</p>
          <div className="flex justify-center gap-2 mt-3">
            <span 
              className="px-2 py-1 rounded-full text-xs" 
              style={{ backgroundColor: `${card.neonColor}22`, color: card.neonColor }}
            >
              Tono {card.tone}
            </span>
            <span 
              className="px-2 py-1 rounded-full text-xs" 
              style={{ backgroundColor: `${card.neonColor}22`, color: card.neonColor }}
            >
              {getDirectionName(card.direction)}
            </span>
          </div>
          {isRevealing && (
            <div className="mt-4 text-left text-sm text-gray-300 animate-slide-up">
              <p className="mb-2"><strong className="text-white">Guía:</strong> {nahualData?.meaning.guide}</p>
              <p className="mb-2"><strong className="text-white">Desafío:</strong> {nahualData?.meaning.shadow}</p>
              <p><strong className="text-white">Aliado:</strong> {nahualData?.meaning.ally}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-neon-bg relative overflow-hidden">
      {/* Particle Canvas */}
      <canvas 
        ref={particleCanvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: showParticles ? 1 : 0 }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        
        {/* Header */}
        <header className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 neon-text glow-cyan" style={{ color: '#00FFFF' }}>
            TAROT MAYA
          </h1>
          <p className="text-xl text-gray-400">Calendario Sagrado Tzolk'in</p>
        </header>

        {/* Landing Phase */}
        {phase === 'landing' && (
          <div className="text-center space-y-8 animate-slide-up">
            <div className="glass-panel p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 glow-gold">Selecciona tu lectura</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => { setReadingType('daily'); startReading(); }}
                  className="glass-panel p-6 hover:scale-105 transition-transform duration-300 text-left"
                  style={{ borderColor: '#00FFFF' }}
                >
                  <h3 className="text-xl font-bold glow-cyan">Lectura del Día</h3>
                  <p className="text-sm text-gray-400 mt-2">Tu kin del día, guía personalizada</p>
                </button>
                
                <button
                  onClick={() => { setReadingType('cross'); startReading(); }}
                  className="glass-panel p-6 hover:scale-105 transition-transform duration-300 text-left"
                  style={{ borderColor: '#FF00FF' }}
                >
                  <h3 className="text-xl font-bold glow-magenta">Cruz Maya</h3>
                  <p className="text-sm text-gray-400 mt-2">5 cartas: guía, desafío, aliado, oculto</p>
                </button>
                
                <button
                  onClick={() => { setReadingType('year'); startReading(); }}
                  className="glass-panel p-6 hover:scale-105 transition-transform duration-300 text-left"
                  style={{ borderColor: '#FFD700' }}
                >
                  <h3 className="text-xl font-bold glow-gold">Rueda del Año</h3>
                  <p className="text-sm text-gray-400 mt-2">13 lunas, 20 nahuales, tu año</p>
                </button>
                
                <button
                  onClick={() => { setReadingType('free'); startReading(); }}
                  className="glass-panel p-6 hover:scale-105 transition-transform duration-300 text-left"
                  style={{ borderColor: '#00FF00' }}
                >
                  <h3 className="text-xl font-bold glow-green">Tirada Libre</h3>
                  <p className="text-sm text-gray-400 mt-2">3, 5, 7 o 9 cartas a elección</p>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Reading Phase - Shuffle Animation */}
        {phase === 'reading' && (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <div className="animate-spin text-6xl mb-6" style={{ color: '#00FFFF' }}>
                ✦
              </div>
              <h2 className="text-3xl font-bold neon-text glow-cyan mb-4">
                Barajando...
              </h2>
              <p className="text-gray-400">Las energías del Tzolk'in se revelan</p>
              
              {/* Animated card pile */}
              <div className="mt-12 relative w-32 h-48 mx-auto">
                {[...Array(cards.length)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-24 h-32 glass-panel rounded-lg"
                    style={{
                      left: `${i * 8}px`,
                      top: `${i * 4}px`,
                      borderColor: '#00FFFF',
                      transform: `rotate(${i * 5}deg)`,
                      animation: `particle-float ${2 + i * 0.2}s ease-in-out infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results Phase */}
        {phase === 'results' && (
          <div className="animate-slide-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold neon-text glow-gold mb-4">Tu Lectura</h2>
              <p className="text-gray-400">
                {readingType === 'daily' && 'Lectura del Día'}
                {readingType === 'cross' && 'Cruz Maya'}
                {readingType === 'year' && 'Rueda del Año'}
                {readingType === 'free' && 'Tirada Libre'}
              </p>
            </div>

            {/* Cards Grid */}
            <div className={`grid gap-6 mb-8 ${
              readingType === 'cross' ? 'md:grid-cols-3 md:grid-rows-2' :
              readingType === 'year' ? 'grid-cols-2 md:grid-cols-4' :
              'grid-cols-1 md:grid-cols-3'
            }`}>
              {cards.map((card, index) => (
                <CardComponent
                  key={index}
                  card={card}
                  index={index}
                  isRevealing={animationPhase === 'complete'}
                />
              ))}
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setPhase('landing');
                  setAnimationPhase('idle');
                }}
                className="glass-panel px-6 py-3 hover:scale-105 transition-transform"
                style={{ borderColor: '#FF00FF' }}
              >
                Nueva Lectura
              </button>
              <button
                onClick={() => {
                  // Export functionality would go here
                  alert('Exportación en desarrollo');
                }}
                className="glass-panel px-6 py-3 hover:scale-105 transition-transform"
                style={{ borderColor: '#00FFFF' }}
              >
                Exportar PDF
              </button>
            </div>
          </div>
        )}

        {/* History Panel */}
        {history.length > 0 && (
          <div className="fixed bottom-4 right-4 glass-panel p-4 max-w-xs">
            <h3 className="text-sm font-bold glow-cyan mb-2">Lecturas Anteriores</h3>
            <ul className="text-xs text-gray-400 space-y-1">
              {history.slice(-5).reverse().map((r, i) => (
                <li key={i}>{r.date} - {r.readingType}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Mouse glow effect */}
      <div 
        className="fixed pointer-events-none z-0 w-64 h-64 rounded-full blur-3xl opacity-20 transition-all duration-300"
        style={{
          left: mousePos.x - 128,
          top: mousePos.y - 128,
          backgroundColor: '#00FFFF',
        }}
      />
    </div>
  );
};

export default MayaTarotApp;