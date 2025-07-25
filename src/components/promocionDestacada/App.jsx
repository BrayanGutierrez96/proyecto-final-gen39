import React, { useState, useEffect } from 'react';
import jblImage from '../../assets/jbl.png'; // Ajusta ruta si es otra carpeta
import './JBLCard.css'; // Asegúrate que coincida el nombre

const JBLCard = () => {
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

 const formatTime = (seconds) => {
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${d}d ${h.toString().padStart(2, '0')}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
};

  const handleBuyNow = () => {
    window.location.href = 'https://www.jbl.com/product-page';
  };

  return (
    <div className="jbl-card">
      <img src={jblImage} alt="JBL Flip 6" className="jbl-image" />
      <h2 className="jbl-title">JBL Flip 6</h2>
      <p className="jbl-category">Altavoz Bluetooth</p>
      <p className="jbl-timer">
        Oferta termina en: {timeLeft > 0 ? formatTime(timeLeft) : '¡Oferta finalizada!'}
      </p>
      <button
        onClick={handleBuyNow}
        disabled={timeLeft <= 0}
        aria-label="Comprar ahora JBL"
        className="jbl-button"
      >
        ¡Buy Now!
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="app-container">
      <h1>Tienda JBL</h1>
      <JBLCard />
    </div>
  );
}

export default App;
