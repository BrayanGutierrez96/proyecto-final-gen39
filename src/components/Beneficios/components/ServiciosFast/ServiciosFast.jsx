import React from "react";
import deliveryImage from '/src/assets/deliver-truck.png';

export const ServiciosFast = ({ className }) => {
    return (
        <div className={`flex flex-col items-center text-center space-y-4 ${className}`}>
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center relative">
              <div className="absolute w-12 h-12 rounded-full bg-black z-10"></div>
              <img 
                src={deliveryImage} 
                alt="Delivery Truck" 
                className="w-8 h-8 relative z-20 brightness-0 invert" 
              />
            </div>
               
            <h3 className="text-lg font-bold text-black">FREE AND FAST DELIVERY</h3>
            <p className="text-sm text-gray-600 max-w-[200px]">
                Free delivery for all orders over $140
            </p>
        </div>
    )
}