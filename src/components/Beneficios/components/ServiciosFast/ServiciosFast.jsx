import React from "react";
import deliveryImage from '/src/assets/deliver-truck.png';

export const ServiciosFast = ({ className }) => {
    return (
        <div className={`flex flex-col items-center text-center space-y-4 ${className}`}>
            {/* Icon container */}
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center relative">
              <div className="absolute w-12 h-12 rounded-full bg-black z-10"></div>
              <img 
                src={deliveryImage} 
                alt="Delivery Truck" 
                className="w-8 h-8 relative z-20 brightness-0 invert" 
              />
            </div>
                {/* <svg 
                    className="w-8 h-8 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path d="M18 8h-2V7c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h1.17c-.11-.31-.17-.65-.17-1a3 3 0 0 1 6 0c0 .35-.06.69-.17 1h2.34c-.11-.31-.17-.65-.17-1a3 3 0 0 1 6 0c0 .35-.06.69-.17 1H20c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zM8 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM18 10h2l-2-2v2z"/>
                </svg> */}
            

            {/* Titulo */}
            <h3 className="text-lg font-bold text-black">FREE AND FAST DELIVERY</h3>

            {/* Descripción */}
            <p className="text-sm text-gray-600 max-w-[200px]">
                Free delivery for all orders over $140
            </p>
        </div>
    )
}