import React from "react";
import headsetImage from '/src/assets/headset.png';



export const ServiciosCustomer = ({ className }) => {
    return (
        <div className={`flex flex-col items-center text-center space-y-4 ${className}`}>
            {/* Icon container */}
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center relative">
                          <div className="absolute w-12 h-12 rounded-full bg-black z-10"></div>
                          <img 
                            src={headsetImage} 
                            alt="Headset" 
                            className="w-8 h-8 relative z-20 brightness-0 invert" 
                          />
                        </div>
                {/* <svg
                    className="w-10 h-10"
                    fill="none"
                    height="40"
                    viewBox="0 0 40 40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                >
                     <path
                        d="M10.4 33V16.75C10.4 14.1641 11.4114 11.6842 13.2118 9.85571C15.0121 8.02723 17.4539 7 20 7C22.5461 7 24.9879 8.02723 26.7882 9.85571C28.5886 11.6842 29.6 14.1641 29.6 16.75V33M4 22.5431C4 19.207 7.2 18.375 10.4 18.375V33C8.70261 33 7.07475 32.3152 5.87452 31.0962C4.67428 29.8772 4 28.2239 4 26.5V22.5431ZM36 22.5431C36 19.207 32.8 18.375 29.6 18.375V33C31.2974 33 32.9252 32.3152 34.1255 31.0962C35.3257 29.8772 36 28.2239 36 26.5V22.5431Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    />
                </svg> */}
            

            {/* Titulo */}
            <h3 className="text-lg font-bold text-black">24/7 CUSTOMER SERVICE</h3>

            {/* Descripción */}
            <p className="text-sm text-gray-600 max-w-[200px]">
                Friendly 24/7 customer support
            </p>
        </div>
    )
}