import React from "react";
import shieldImage from '/src/assets/shield.png';

export const ServiciosMoneyBack = ({ className }) => {
    return (
        <div className={`flex flex-col items-center text-center space-y-4 ${className}`}>
            {/* Icon container para el Escudo con marca de verificación */}
           <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center relative">
  <div className="absolute w-12 h-12 rounded-full bg-black z-10"></div>
  <img 
    src={shieldImage} 
    alt="Shield" 
    className="w-8 h-8 relative z-20 brightness-0 invert" 
  />
</div>
                {/* Escudo con marca de verificación */}
                {/* <svg 
                    className="w-8 h-8 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg> */}
            
            
            {/* Titulo */}
            <h3 className="text-lg font-bold text-black">MONEY BACK GUARANTEE</h3>

            {/* Descripción */}
            <p className="text-sm text-gray-600 max-w-[200px]">
                We return money within 30 days
            </p>
        </div>
    )
}