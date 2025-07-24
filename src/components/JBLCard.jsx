import React, { useState, useEffect } from 'react';
import './JBLCard.css';
import jblImage from '../assets/jbl.png'; // Ajusta ruta según tu estructura

const JBLCard = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hora en segundos

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  //  Formato hh:mm:ss
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  //  Redirección al producto
  const handleBuyNow = () => {
    // alert('Producto agregado al carrito'); // Puedes dejar esto si quieres
    window.location.href = '';
  };

  return (
    <div className="jbl-card">
      <img src={jblImage} alt="JBL Speaker" className="jbl-image" />
      <div className="jbl-info">
        <h2 className="jbl-title">JBL Flip 6</h2>
        <p className="jbl-category">Altavoz Bluetooth</p>
        <p className="jbl-timer">
          Oferta termina en:{' '}
          <span id="jbl-timer">
            {timeLeft > 0 ? formatTime(timeLeft) : '¡Oferta finalizada!'}
          </span>
        </p>
        <button
          className="jbl-button"
          onClick={handleBuyNow}
          aria-label="Comprar ahora JBL"
          disabled={timeLeft <= 0}
        >
          ¡Buy Now!
        </button>
      </div>
    </div>
  );
};

export default JBLCard;
