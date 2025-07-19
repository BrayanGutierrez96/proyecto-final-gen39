import React from 'react';

import ps5Image from '/src/assets/playstation.png';
import womenCollectionImage from '/src/assets/girls.png';
import speakersImage from '/src/assets/echo.png';
import perfumeImage from '/src/assets/perfume.png';

const FeaturedNewArrival = () => {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-10 lg:gap-15 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
      {/* Header Section */}
      <div className="flex flex-col items-start gap-3 md:gap-5 w-full">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-4 h-8 md:w-5 md:h-10 relative">
            <div className="w-full h-full rounded bg-[#db4444]"></div>
          </div>
          <div className="text-[#db4444] font-poppins text-sm md:text-base font-bold leading-tight">
            Featured
          </div>
        </div>
        <div className="text-black font-inter text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-wide">
          New Arrival
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 w-full">
        {/* PlayStation 5 - Main Featured Item */}
        <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[600px] rounded bg-black relative overflow-hidden">
          <img 
            src={ps5Image} 
            alt="PlayStation 5" 
            className="w-full h-full object-cover"
          />
          <div className="absolute left-4 sm:left-6 md:left-8 bottom-4 sm:bottom-6 md:bottom-8 w-48 sm:w-52 md:w-60">
            <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4">
              <div className="flex flex-col items-start gap-2 md:gap-4">
                <div className="text-white font-inter text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
                  PlayStation 5
                </div>
                <div className="text-white font-poppins text-xs sm:text-sm leading-tight">
                  Black and White version of the PS5 coming out on sale.
                </div>
              </div>
              <div className="shop-now-link cursor-pointer hover:opacity-80 transition-opacity">
                <div className="text-white font-poppins text-sm md:text-base font-medium leading-tight underline">
                  Shop Now
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Items */}
        <div className="flex flex-col items-center gap-6 md:gap-8 w-full lg:w-1/2">
          {/* Women's Collections */}
          <div className="w-full h-48 sm:h-56 md:h-64 lg:h-[284px] rounded bg-[#0d0d0d] relative overflow-hidden">
            <img 
              src={womenCollectionImage} 
              alt="Women's Collections" 
              className="w-full h-full object-cover"
            />
            <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 md:bottom-8 w-48 sm:w-52 md:w-64">
              <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4">
                <div className="flex flex-col items-start gap-2 md:gap-4">
                  <div className="text-white font-inter text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
                    Women's Collections
                  </div>
                  <div className="text-white font-poppins text-xs sm:text-sm leading-tight">
                    Featured woman collections that give you another vibe.
                  </div>
                </div>
                <div className="shop-now-link cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="text-white font-poppins text-sm md:text-base font-medium leading-tight underline">
                    Shop Now
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - Speakers and Perfume */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 w-full">
            {/* Speakers */}
            <div className="w-full sm:w-1/2 h-48 sm:h-56 md:h-64 lg:h-[284px] rounded bg-black relative overflow-hidden">
              <div className="background-blur absolute w-full h-full top-0 left-0 bg-black bg-opacity-30">
              </div>
              <div className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-[196px] lg:h-[196px] left-1/2 top-4 sm:top-6 md:top-8 lg:top-11 transform -translate-x-1/2">
                <img 
                  src={speakersImage} 
                  alt="Amazon Wireless Speakers" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 md:bottom-8 w-40 sm:w-44 md:w-52 lg:w-60">
                <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4">
                  <div className="flex flex-col items-start gap-2 md:gap-4">
                    <div className="text-white font-inter text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
                      Speakers
                    </div>
                    <div className="text-white font-poppins text-xs sm:text-sm leading-tight">
                      Amazon wireless speakers
                    </div>
                  </div>
                  <div className="shop-now-link cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="text-white font-poppins text-sm md:text-base font-medium leading-tight underline">
                      Shop Now
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Perfume */}
            <div className="w-full sm:w-1/2 h-48 sm:h-56 md:h-64 lg:h-[284px] rounded bg-black relative overflow-hidden">
              <div className="background-blur absolute w-full h-full top-0 left-0">
                <img 
                  src={perfumeImage} 
                  alt="GUCCI INTENSE OUD EDP" 
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-[196px] lg:h-[196px] left-1/2 top-4 sm:top-6 md:top-8 lg:top-11 transform -translate-x-1/2 z-10">
                <img 
                  src={perfumeImage} 
                  alt="GUCCI INTENSE OUD EDP" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 md:bottom-8 w-40 sm:w-44 md:w-52 lg:w-60 z-10">
                <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4">
                  <div className="flex flex-col items-start gap-2 md:gap-4">
                    <div className="text-white font-inter text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
                      Perfume
                    </div>
                    <div className="text-white font-poppins text-xs sm:text-sm leading-tight">
                      GUCCI INTENSE OUD EDP
                    </div>
                  </div>
                  <div className="shop-now-link cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="text-white font-poppins text-sm md:text-base font-medium leading-tight underline">
                      Shop Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNewArrival;