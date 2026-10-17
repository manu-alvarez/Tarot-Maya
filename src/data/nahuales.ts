// nahuales.json - Datos canónicos de los 20 Nahuales del Tzolk'in

export interface NahualData {
  number: number;
  nameYucateco: string;
  nameKiche: string;
  nameEnglish: string;
  glyphPath: string; // SVG path del glifo
  meaning: {
    upright: string;
    shadow: string;
    guide: string;
    ally: string;
    hidden: string;
  };
  element: 'Water' | 'Air' | 'Earth' | 'Fire';
  direction: 'East' | 'North' | 'West' | 'South';
  colorNeon: string;
  colorHex: string;
  associatedPlanet: string;
  associatedNumber: number; // 1-13 tonos
  keywords: string[];
  description: string;
}

export const NAHUALES: NahualData[] = [
  {
    number: 1,
    nameYucateco: 'Imix',
    nameKiche: 'Imox',
    nameEnglish: 'Crocodile',
    glyphPath: 'M10 20 L20 10 L30 20 L20 30 Z', // Simplified - would be full SVG
    meaning: {
      upright: 'La matriz primordial, el origen de todo lo que existe. Fertilidad, nacimiento, potencial ilimitado.',
      shadow: 'El instinto primario sin filtro. Dependencia, egoísmo, bloqueo del crecimiento.',
      guide: 'Confía en tu instinto más profundo. Todo lo que necesitas está dentro de ti.',
      ally: 'La tierra que te sustenta. Los ancestros que te observan.',
      hidden: 'La sombra del cocodrilo: lo que no quieres ver de tu origen.',
    },
    element: 'Water',
    direction: 'East',
    colorNeon: '#00FFFF',
    colorHex: '#00FFFF',
    associatedPlanet: 'Venus',
    associatedNumber: 1,
    keywords: ['matriz', 'origen', 'fertilidad', 'nacimiento', 'instinto'],
    description: 'El Cocodrilo, la matriz primigenia de la vida. El agua que todo lo sostiene.'
  },
  {
    number: 2,
    nameYucateco: 'Ik\'',
    nameKiche: 'Iq\'',
    nameEnglish: 'Wind',
    glyphPath: 'M20 5 L40 35 L10 35 Z',
    meaning: {
      upright: 'El aliento vital, la comunicación, el pensamiento que se expande como el viento.',
      shadow: 'La dispersión mental. El viento sin rumbo, las palabras que hieren sin medida.',
      guide: 'Habla tu verdad. Tu voz tiene poder para mover montañas.',
      ally: 'El mensajero del universo. Las ideas que llegan como regalos.',
      hidden: 'El viento que silba entre los muertos: lo no dicho.',
    },
    element: 'Air',
    direction: 'North',
    colorNeon: '#FFFFFF',
    colorHex: '#FFFFFF',
    associatedPlanet: 'Júpiter',
    associatedNumber: 2,
    keywords: ['viento', 'aliento', 'comunicación', 'pensamiento', 'libertad'],
    description: 'El Viento, el aliento de vida. Lo que respira el universo a través de ti.'
  },
  {
    number: 3,
    nameYucateco: 'Ak\'bal',
    nameKiche: 'Aq\'ab\'al',
    nameEnglish: 'Night',
    glyphPath: 'M20 5 L15 35 L25 35 Z',
    meaning: {
      upright: 'La noche sagrada, el refugio, el sueño profundo que revela el futuro.',
      shadow: 'El miedo a la oscuridad. El aislamiento, la depresión, la desconexión.',
      guide: 'Busca la luz en la oscuridad. Tu intuición brilla más que cualquier estrella.',
      ally: 'La luna que te guía. Los sueños que te hablan en la noche.',
      hidden: 'La noche eterna: lo que temes enfrentar a la luz.',
    },
    element: 'Earth',
    direction: 'West',
    colorNeon: '#9B30FF',
    colorHex: '#9B30FF',
    associatedPlanet: 'Mercurio',
    associatedNumber: 3,
    keywords: ['noche', 'refugio', 'sueño', 'intuición', 'misterio'],
    description: 'La Noche, la casa del misterio. Donde se revelan los secretos del alma.'
  },
  {
    number: 4,
    nameYucateco: 'K\'an',
    nameKiche: 'Kan',
    nameEnglish: 'Corn',
    glyphPath: 'M15 10 L25 5 L35 10 L30 30 L10 30 Z',
    meaning: {
      upright: 'El maíz sagrado, la red de la vida, la abundancia que fluye de la tierra.',
      shadow: 'La avaricia. La red que atrapa. El hambre que no se sacía.',
      guide: 'Tu sustento viene de la tierra. Comparte lo que has cosechado.',
      ally: 'La semilla que plantas hoy. La comunidad que te alimenta.',
      hidden: 'El maíz podrido: lo que ya no da fruto pero se resiste a soltar.',
    },
    element: 'Earth',
    direction: 'South',
    colorNeon: '#FFFF00',
    colorHex: '#FFFF00',
    associatedPlanet: 'Venus',
    associatedNumber: 4,
    keywords: ['maíz', 'abundancia', 'red', 'sustento', 'comunidad'],
    description: 'El Maíz, la red dorada de la vida. Lo que cosechas y lo que compartes.'
  },
  {
    number: 5,
    nameYucateco: 'Chic\'chan',
    nameKiche: 'Kawoq',
    nameEnglish: 'Serpent',
    glyphPath: 'M10 20 L20 10 L30 20 L25 30 L15 30 Z',
    meaning: {
      upright: 'La serpiente de fuego, la fuerza vital transformadora, la kundalini despierta.',
      shadow: 'La serpiente venenosa. La ira reprimida, la destrucción sin control.',
      guide: 'Despierta tu poder interior. El fuego sagrado que te transforma.',
      ally: 'La energía que fluye por tu columna. La transformación que buscas.',
      hidden: 'La serpiente muerta: el poder que se ha dormido dentro de ti.',
    },
    element: 'Water',
    direction: 'East',
    colorNeon: '#00FF00',
    colorHex: '#00FF00',
    associatedPlanet: 'Marte',
    associatedNumber: 5,
    keywords: ['serpiente', 'fuerza', 'transformación', 'fuego', 'kundalini'],
    description: 'La Serpiente, el fuego sagrado. La energía que se eleva hacia tu corona.'
  },
  {
    number: 6,
    nameYucateco: 'K\'imi',
    nameKiche: 'Kame',
    nameEnglish: 'Death',
    glyphPath: 'M20 5 L10 35 L30 35 Z',
    meaning: {
      upright: 'La transformación final, la muerte como puerta al renacimiento, el sacrificio sagrado.',
      shadow: 'El miedo a morir. La rigidez del corazón, la resistencia al cambio.',
      guide: 'Todo lo que muere renace más fuerte. Deja ir lo que ya no te sirve.',
      ally: 'La muerte que libera. El nuevo ciclo que comienza tras el final.',
      hidden: 'La muerte que no quieres nombrar: lo que debes soltar.',
    },
    element: 'Air',
    direction: 'North',
    colorNeon: '#FF00FF',
    colorHex: '#FF00FF',
    associatedPlanet: 'Luna',
    associatedNumber: 6,
    keywords: ['muerte', 'transformación', 'sacrificio', 'renacimiento', 'cambio'],
    description: 'La Muerte, el puente entre mundos. Lo que termina da paso a lo nuevo.'
  },
  {
    number: 7,
    nameYucateco: 'Manik\'',
    nameKiche: 'Kej',
    nameEnglish: 'Deer',
    glyphPath: 'M15 10 L25 5 L35 10 L30 25 L10 25 Z',
    meaning: {
      upright: 'El venado, el cazador de propósito, la carga que llevas con gracia.',
      shadow: 'El cazador perdido. La obsesión, la adicción, la huida constante.',
      guide: 'Caza con intención. Tu presa está al alcance de tu mirada.',
      ally: 'La presa que te eligió. El camino que te conduce al triunfo.',
      hidden: 'El venado herido: la herida que llevas y que aún no has sanado.',
    },
    element: 'Earth',
    direction: 'West',
    colorNeon: '#FF8C00',
    colorHex: '#FF8C00',
    associatedPlanet: 'Mercurio',
    associatedNumber: 7,
    keywords: ['venado', 'cazador', 'propósito', 'carga', 'gracia'],
    description: 'El Venado, el guerrero de la cacería. Lo que persigues con determinación.'
  },
  {
    number: 8,
    nameYucateco: 'Lamat',
    nameKiche: 'Q\'anil',
    nameEnglish: 'Star',
    glyphPath: 'M20 5 L10 20 L30 20 Z',
    meaning: {
      upright: 'La estrella, Venus como guía, la belleza que ilumina, la prosperidad.',
      shadow: 'La estrella que se apaga. La vanidad, la superficialidad, la búsqueda vacía.',
      guide: 'Brilla como la estrella que eres. Tu luz guía a los que te rodean.',
      ally: 'Venus que susurra tu nombre. La belleza que encuentras en lo cotidiano.',
      hidden: 'La estrella oculta: la luz que no quieres revelar.',
    },
    element: 'Water',
    direction: 'South',
    colorNeon: '#FF1493',
    colorHex: '#FF1493',
    associatedPlanet: 'Venus',
    associatedNumber: 8,
    keywords: ['estrella', 'Venus', 'belleza', 'prosperidad', 'guía'],
    description: 'La Estrella, la luz de Venus. Lo que guía tu camino con luminosidad.'
  },
  {
    number: 9,
    nameYucateco: 'Muluk',
    nameKiche: 'Toj',
    nameEnglish: 'Water',
    glyphPath: 'M15 10 L25 5 L35 15 L30 30 L10 30 Z',
    meaning: {
      upright: 'El agua que fluye, la ofrenda, el pago kármico, la purificación.',
      shadow: 'El agua que ahoga. El exceso emocional, la falta de límites.',
      guide: 'Deja que el agua te limpie. Lo que fluye se renueva.',
      ally: 'El río que te lleva. La ofrenda que recibes con gratitud.',
      hidden: 'El agua turbia: lo que no quieres ver en el fondo de tu ser.',
    },
    element: 'Water',
    direction: 'East',
    colorNeon: '#00BFFF',
    colorHex: '#00BFFF',
    associatedPlanet: 'Júpiter',
    associatedNumber: 9,
    keywords: ['agua', 'ofrenda', 'purificación', 'flujo', 'karma'],
    description: 'El Agua, la fuerza limpiadora. Lo que fluye se renueva siempre.'
  },
  {
    number: 10,
    nameYucateco: 'Ok',
    nameKiche: 'Tz\'i\'',
    nameEnglish: 'Dog',
    glyphPath: 'M20 10 L15 30 L25 30 Z',
    meaning: {
      upright: 'El perro, el guía leal, la amistad verdadera, la familia.',
      shadow: 'El perro perdido. La lealtad ciega, la dependencia, la traición.',
      guide: 'Busca tu manada. La lealtad genuina te protege.',
      ally: 'El perro que te cuida. La amistad incondicional.',
      hidden: 'El perro que se fue: la lealtad que perdiste.',
    },
    element: 'Air',
    direction: 'North',
    colorNeon: '#FFFFFF',
    colorHex: '#FFFFFF',
    associatedPlanet: 'Mercurio',
    associatedNumber: 10,
    keywords: ['perro', 'lealtad', 'familia', 'amistad', 'guía'],
    description: 'El Perro, el guardián leal. Lo que protege con su vida.'
  },
  {
    number: 11,
    nameYucateco: 'Chuwen',
    nameKiche: 'B\'atz\'',
    nameEnglish: 'Monkey',
    glyphPath: 'M15 10 L25 5 L35 10 L30 30 L10 30 Z',
    meaning: {
      upright: 'El mono, el artesano del tiempo, la creatividad, el juego sagrado.',
      shadow: 'El mono travieso. La distracción, el juego sin propósito, el desorden.',
      guide: 'Juega con intención. Tu creatividad es un don sagrado.',
      ally: 'El tiempo que baila. La alegría que te mantiene vivo.',
      hidden: 'El mono silencioso: la creatividad que reprimiste.',
    },
    element: 'Earth',
    direction: 'West',
    colorNeon: '#FFD700',
    colorHex: '#FFD700',
    associatedPlanet: 'Venus',
    associatedNumber: 11,
    keywords: ['mono', 'creatividad', 'tiempo', 'juego', 'artesano'],
    description: 'El Mono, el artesano del tiempo. La creatividad que baila con el universo.'
  },
  {
    number: 12,
    nameYucateco: 'Eb\'',
    nameKiche: 'E',
    nameEnglish: 'Grass',
    glyphPath: 'M10 30 L20 10 L30 30 Z',
    meaning: {
      upright: 'La hierba, el camino largo, la verdad que se revela paso a paso.',
      shadow: 'La hierba seca. La verdad que no se quiere escuchar, el camino difícil.',
      guide: 'Camina con paciencia. La verdad revela su curso.',
      ally: 'El camino que elegiste. La verdad que te espera al final.',
      hidden: 'La hierba invisible: la verdad que no quieres ver.',
    },
    element: 'Earth',
    direction: 'South',
    colorNeon: '#32CD32',
    colorHex: '#32CD32',
    associatedPlanet: 'Júpiter',
    associatedNumber: 12,
    keywords: ['hierba', 'camino', 'verdad', 'paciencia', 'dificultad'],
    description: 'La Hierba, el camino largo. La verdad que se revela con el tiempo.'
  },
  {
    number: 13,
    nameYucateco: 'Ben',
    nameKiche: 'Aj',
    nameEnglish: 'Reed',
    glyphPath: 'M20 5 L15 35 L25 35 Z',
    meaning: {
      upright: 'La caña, la columna vertebral, la autoridad, el liderazgo.',
      shadow: 'La caña quebrada. La autoridad corrupta, el líder tirano.',
      guide: 'Sé la columna que otros necesitan. Tu autoridad es un regalo.',
      ally: 'La caña que te sostiene. El liderazgo que asumes con honor.',
      hidden: 'La caña muerta: la autoridad que perdiste sin darte cuenta.',
    },
    element: 'Water',
    direction: 'East',
    colorNeon: '#FF4500',
    colorHex: '#FF4500',
    associatedPlanet: 'Marte',
    associatedNumber: 13,
    keywords: ['caña', 'columna', 'autoridad', 'liderazgo', 'honor'],
    description: 'La Caña, la columna de la vida. La autoridad que sostiene.'
  },
  {
    number: 14,
    nameYucateco: 'Ix',
    nameKiche: 'I\'x',
    nameEnglish: 'Jaguar',
    glyphPath: 'M15 10 L25 5 L35 10 L30 30 L10 30 Z',
    meaning: {
      upright: 'El jaguar, la magia, la tierra sagrada, la transformación silenciosa.',
      shadow: 'El jaguar enjaulado. La magia reprimida, el poder sin dirección.',
      guide: 'Despierta tu poder interior. El jaguar que habita en ti.',
      ally: 'La tierra que te transforma. La magia que fluye natural.',
      hidden: 'El jaguar dormido: el poder que aún no has despertado.',
    },
    element: 'Earth',
    direction: 'North',
    colorNeon: '#FFD700',
    colorHex: '#FFD700',
    associatedPlanet: 'Venus',
    associatedNumber: 14,
    keywords: ['jaguar', 'magia', 'tierra', 'transformación', 'poder'],
    description: 'El Jaguar, el guardián de la noche. La magia que duerme en la tierra.'
  },
  {
    number: 15,
    nameYucateco: 'Men',
    nameKiche: 'Tz\'ikin',
    nameEnglish: 'Eagle',
    glyphPath: 'M20 5 L10 25 L30 25 Z',
    meaning: {
      upright: 'El águila, la visión elevada, el futuro que se vislumbra, el maestro.',
      shadow: 'El águila herida. La visión distorsionada, la arrogancia.',
      guide: 'Mira desde las alturas. Tu visión del futuro te guía.',
      ally: 'El futuro que te espera. El maestro que te envía señales.',
      hidden: 'El águila ciega: la visión que no quieres ver.',
    },
    element: 'Air',
    direction: 'West',
    colorNeon: '#FFA500',
    colorHex: '#FFA500',
    associatedPlanet: 'Marte',
    associatedNumber: 15,
    keywords: ['águila', 'visión', 'futuro', 'maestro', 'elevación'],
    description: 'El Águila, la visión que ve desde arriba. El futuro que se revela.'
  },
  {
    number: 16,
    nameYucateco: 'K\'ib\'',
    nameKiche: 'Ajmaq',
    nameEnglish: 'Owl',
    glyphPath: 'M20 5 L10 30 L30 30 Z',
    meaning: {
      upright: 'El búho, el perdón, el karma que se equilibra, la sabiduría.',
      shadow: 'El búho que llora. El karma pesado, la culpa, el arrepentimiento.',
      guide: 'Perdona para liberar. El karma que se equilibra con compasión.',
      ally: 'La sabiduría que llega. El perdón que te libera.',
      hidden: 'El búho triste: el karma que cargas sin querer.',
    },
    element: 'Water',
    direction: 'South',
    colorNeon: '#8A2BE2',
    colorHex: '#8A2BE2',
    associatedPlanet: 'Mercurio',
    associatedNumber: 16,
    keywords: ['búho', 'perdón', 'karma', 'sabiduría', 'compasión'],
    description: 'El Búho, el mensajero del karma. El perdón que libera.'
  },
  {
    number: 17,
    nameYucateco: 'Kab\'an',
    nameKiche: 'Noj',
    nameEnglish: 'Earth',
    glyphPath: 'M15 10 L25 5 L35 10 L30 30 L10 30 Z',
    meaning: {
      upright: 'La tierra, el terremoto, la mente estable, la base de todo.',
      shadow: 'La tierra temblorosa. La mente inestable, el fundamento frágil.',
      guide: 'Encuentra tu centro. La tierra que te sostiene es tu mente.',
      ally: 'La estabilidad que construyes. La mente que te mantiene firme.',
      hidden: 'La tierra vacía: el fundamento que colapsa.',
    },
    element: 'Earth',
    direction: 'East',
    colorNeon: '#8B4513',
    colorHex: '#8B4513',
    associatedPlanet: 'Venus',
    associatedNumber: 17,
    keywords: ['tierra', 'estabilidad', 'mente', 'centro', 'base'],
    description: 'La Tierra, el fundamento de todo. Lo que sostiene tu existencia.'
  },
  {
    number: 18,
    nameYucateco: 'Etz\'nab\'',
    nameKiche: 'Tijax',
    nameEnglish: 'Flint',
    glyphPath: 'M20 5 L10 15 L30 15 Z',
    meaning: {
      upright: 'El pedernal, la verdad, la justicia, la cuchillo que corta la ilusión.',
      shadow: 'El pedernal oxidado. La verdad distorsionada, la justicia ciega.',
      guide: 'Busca la verdad con fuego. La justicia que necesitas.',
      ally: 'La verdad que te libera. La justicia que te protege.',
      hidden: 'El pedernal roto: la verdad que no quieres ver.',
    },
    element: 'Air',
    direction: 'North',
    colorNeon: '#C0C0C0',
    colorHex: '#C0C0C0',
    associatedPlanet: 'Venus',
    associatedNumber: 18,
    keywords: ['pedernal', 'verdad', 'justicia', 'cuchillo', 'ilusión'],
    description: 'El Pedernal, la hoja de la verdad. Lo que corta la ilusión.'
  },
  {
    number: 19,
    nameYucateco: 'K\'awak',
    nameKiche: 'Kawoq',
    nameEnglish: 'Storm',
    glyphPath: 'M20 5 L10 20 L30 20 Z',
    meaning: {
      upright: 'La tormenta, el trueno, la familia, el cambio repentino que renueva.',
      shadow: 'La tormenta destructiva. El cambio que destruye sin piedad.',
      guide: 'Sé la tormenta que renueva. El cambio que traes con amor.',
      ally: 'La familia que te acompaña. La tormenta que pasa y deja la calma.',
      hidden: 'La tormenta que viene: el cambio que no quieres enfrentar.',
    },
    element: 'Water',
    direction: 'West',
    colorNeon: '#1E90FF',
    colorHex: '#1E90FF',
    associatedPlanet: 'Marte',
    associatedNumber: 19,
    keywords: ['tormenta', 'trueno', 'familia', 'cambio', 'renovación'],
    description: 'La Tormenta, el cambio que transforma. La familia que te sostiene.'
  },
  {
    number: 20,
    nameYucateco: 'Ajaw',
    nameKiche: 'Junajpu',
    nameEnglish: 'Sun',
    glyphPath: 'M20 5 C10 15 10 35 20 35 C30 35 30 15 20 5 Z',
    meaning: {
      upright: 'El sol, el señor, la flor, la luz que todo lo ilumina, el completador.',
      shadow: 'El sol cegador. La arrogancia del poder, la luz que quema sin compasión.',
      guide: 'Brilla como el sol. Tu luz es un regalo para el mundo.',
      ally: 'El sol que te calienta. La flor que abre con tu luz.',
      hidden: 'El sol oculto: la luz que no quieres revelar.',
    },
    element: 'Fire',
    direction: 'South',
    colorNeon: '#FFD700',
    colorHex: '#FFD700',
    associatedPlanet: 'Sol',
    associatedNumber: 20,
    keywords: ['sol', 'señor', 'flor', 'luz', 'completador'],
    description: 'El Sol, el señor del tiempo. La luz que todo lo ilumina.'
  }
];

export interface ToneData {
  number: number;
  name: string;
  quality: string;
  keywords: string[];
}

export const TONES: ToneData[] = [
  { number: 1, name: 'Jun', quality: 'Unidad', keywords: ['inicio', 'semilla', 'unidad'] },
  { number: 2, name: 'Keb\'', quality: 'Dualidad', keywords: ['polaridad', 'elección', 'dualidad'] },
  { number: 3, name: 'Oxib\'', quality: 'Acción', keywords: ['movimiento', 'creación', 'acción'] },
  { number: 4, name: 'Kajib\'', quality: 'Estabilidad', keywords: ['fundación', 'forma', 'estabilidad'] },
  { number: 5, name: 'Job\'', quality: 'Empoderamiento', keywords: ['centro', 'poder', 'empoderamiento'] },
  { number: 6, name: 'Waqib\'', quality: 'Flujo', keywords: ['equilibrio', 'ritmo', 'flujo'] },
  { number: 7, name: 'Wuqub\'', quality: 'Espejo', keywords: ['reflexión', 'verdad', 'espejo'] },
  { number: 8, name: 'Wajxaqib\'', quality: 'Armonía', keywords: ['justicia', 'integración', 'armonía'] },
  { number: 9, name: 'B\'elejeb\'', quality: 'Intención', keywords: ['realización', 'fruto', 'intención'] },
  { number: 10, name: 'Lajuj', quality: 'Manifestación', keywords: ['completitud', 'comunidad', 'manifestación'] },
  { number: 11, name: 'Julajuj', quality: 'Resolución', keywords: ['prueba', 'liberación', 'resolución'] },
  { number: 12, name: 'Kab\'lajuj', quality: 'Comprensión', keywords: ['síntesis', 'sabiduría', 'comprensión'] },
  { number: 13, name: 'Oxlajuj', quality: 'Trascendencia', keywords: ['ascensión', 'maestro', 'trascendencia'] }
];

export interface ReadingResult {
  kin: {
    day: number;
    nahual: number;
    tone: number;
    element: string;
    direction: string;
  };
  interpretations: {
    nahual: NahualData;
    tone: ToneData;
    position: string;
    message: string;
  };
  guidance: {
    advice: string;
    challenge: string;
    ally: string;
    hidden: string;
  };
}

export function getNahualByNumber(num: number): NahualData | undefined {
  return NAHUALES.find(n => n.number === num);
}

export function getToneByNumber(num: number): ToneData | undefined {
  return TONES.find(t => t.number === num);
}

export function getDirectionName(dir: string): string {
  const names: Record<string, string> = {
    'East': 'Este (Lak\'in)',
    'North': 'Norte (Xaman)',
    'West': 'Oeste (Chik\'in)',
    'South': 'Sur (Nojol)'
  };
  return names[dir] || dir;
}

export function getElementName(el: string): string {
  const names: Record<string, string> = {
    'Water': 'Agua',
    'Air': 'Aire',
    'Earth': 'Tierra',
    'Fire': 'Fuego'
  };
  return names[el] || el;
}