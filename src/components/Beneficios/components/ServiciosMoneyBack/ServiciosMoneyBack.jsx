import React from "react";
import shieldImage from '/src/assets/shield.png';

export const ServiciosMoneyBack = ({ className }) => {
    return (
        <div className={`flex flex-col items-center text-center space-y-4 ${className}`}>

           <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center relative">
  <div className="absolute w-12 h-12 rounded-full bg-black z-10"></div>
  <img 
    src={shieldImage} 
    alt="Shield" 
    className="w-8 h-8 relative z-20 brightness-0 invert" 
  />
</div>
<h3 className="text-lg font-bold text-black">MONEY BACK GUARANTEE</h3>
<p className="text-sm text-gray-600 max-w-[200px]">We return money within 30 days</p>
</div>
    )
}