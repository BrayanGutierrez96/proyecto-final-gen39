import React, { useState, useEffect } from 'react';
import './JBLCard.css';
import jblImage from '../../assets/jbl.png';

const JBLCard = () => {
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);
const formatTime = (seconds) => {
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  const daysText = d > 0 ? `${d}d ` : '';
  return `${daysText}${h.toString().padStart(2, '0')}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
};

  const handleBuyNow = () => {
    window.location.href = '';
  };

  return (
    <div className="jbl-card">
      <img src={jblImage} alt="JBL Speaker" className="jbl-image" />
      <div className="jbl-info">
        <h2 className="jbl-title">JBL Flip</h2>
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
