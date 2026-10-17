import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MayaTarotApp from './components/MayaTarotApp';
import './styles/neon-theme.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MayaTarotApp />} />
      </Routes>
    </Router>
  );
}

export default App;