import React, { useState, useEffect } from 'react';
import { Heart, Eye, ChevronLeft, ChevronRight} from 'lucide-react';
import './flashSalesSection.css'
 const FlashSalesSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 8,
        minutes: 25,
        seconds: 49
    });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [wishlist, setWishlist] = useState( new Set() );

    //Datos de prueba para productos
    const products = [
        {
            id:1,
            name: "iPhone 16",
            currentPrice: 18000,
            originalPrice: 20000,
            discount: 10,
            rating: 4.9,
            reviews: 120,
            image:  "https://i.imgur.com/lHOuyDc.jpeg"
        },
        {
            id:2,
            name: "Casio LF-30W-2A",
            currentPrice: 675,
            originalPrice: 750,
            discount: 10,
            rating: 4.6,
            reviews: 15,
            image: "https://i.imgur.com/vwCBJsK.jpeg"
        },
        {
            id:3,
            name: "Audifonos inalambricos JBL Tune 520BT",
            currentPrice: 500,
            originalPrice: 1000,
            discount: 50,
            rating: 4.2,
            reviews: 89,
            image: "https://i.imgur.com/Cu8mlkh.jpeg"
        },
        {
            id:4,
            name: "Ajedrez de Zelda COLECCION",
            currentPrice: 975,
            originalPrice: 1300,
            discount: 25,
            rating: 4.9,
            reviews: 4,
            image: "https://i.imgur.com/M76k5OT.jpeg"
        },
        {
            id:5,
            name: "Klipsch KD-400 Altavoces",
            currentPrice: 1899,
            originalPrice: 2499,
            discount: 24,
            rating: 4.6,
            reviews: 13,
            image: "https://i.imgur.com/IUrbxFM.jpeg"
        }
    ];

    // Countdown timer effect
    useEffect( () => {
        const timer = setInterval( () => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                } 
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const toggleWishlist = (productId) => {
        setWishlist(prev => {
            const newWishlist = new Set(prev);
            if(newWishlist.has(productId)){
                newWishlist.delete(productId);
            } else {
                newWishlist.add(productId);
            } 
            return newWishlist;
        });
    }

    const nextProducts = () => {
        setCurrentIndex(prev => (prev + 1) % Math.max(1, products.length - 3));
    }

    const prevProducts = () => {
        setCurrentIndex(prev => (prev - 1 + Math.max(1, products.length - 3)) % Math.max(1, products.length - 3));
    }

    const renderStars = (rating) => {
        return Array.from({ length: 5}, (_, i)=>(
            <span key={i} className={`text-yellow-400 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                ★
            </span>
        ));
    };

    const visibleProducts = products.slice(currentIndex, currentIndex + 4);

    return(
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* {Header Section} */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-5 h-10 bg-red-500 rounded"></div>
                        <span className="text-red-500 font-semibold">Hoy</span>
                    </div>
                </div>
            </div>

            {/* Title and Countdown */}
            <div className='flex items-center justify-between mb-8'>
                <div className='flex items-center gap-8'>
                    <h2 className='text-4xl font-bold text-gray-900'>Venta Flash</h2>

                    {/* Countdown Timer */}
                    <div className='flex items-center gap-4'>
                        <div className='text-center'>
                            <div className='text-xs text-gray mb-1'>Días</div>
                            <div className='text-2xl font-bold'>{timeLeft.days.toString().padStart(2,'0')}</div>
                        </div>

                        <div className='text-2xl font-bold text-red-500'>:</div>
                        <div className='text-center'>
                            <div className='text-xs text-gray-600 mb-1'>Horas</div>
                            <div className='text-2xl font-bold'>{timeLeft.days.toString().padStart(2,'0')}</div>
                        </div>

                        <div className='text-2xl font-bold text-red-500'>:</div>
                        <div className="text-center">
                            <div className="text-xs text-gray-600 mb-1">Minutos</div>
                            <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                        </div>

                        <div className='text-2xl font-bold text-red-500'>:</div>
                        <div className="text-center">
                            <div className="text-xs text-gray-600 mb-1">Segundos</div>
                            <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                        </div>
                        
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className='flex gap-2'>
                     <button
                        onClick={prevProducts}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                        onClick={nextProducts}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
           
            </div> 

            {/* Products Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
                {visibleProducts.map((product) => (
                    <div key={product.id} className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group'>
                        {/* Product Image Container */}
                        <div className='relative bg-gray-50 h-64 flex items-center justify-center'>
                         
                         {/* Discount Badge */}
                            <div className='absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium'>
                                --{product.discount}%
                            </div>

                            {/* Action Buttons */}
                            <div className='absolute top-3 right-3 flex flex-col gap-2'>
                                <button
                                    onClick={ () => toggleWishlist(product.id)}
                                    className='p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow'
                                >
                                    <Heart
                                        className = {`w-4 h-4 ${wishlist.has(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                                    />
                                </button>

                                <button className='p-2 bg-white rounded-full shadow-sm hover: shadow-md transition-shadow'>
                                    <Eye className="w-4 h-4 text-gray-600"/>
                                </button>
                            </div>

                            {/* Product Image Placeholder */}
                           <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-40 h-40 object-cover rounded-lg images"
                            />

                             {/* Add to Cart Button - appears on hover */}
                                <div className="absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <button className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors">
                                        Añadir al Carrito
                                    </button>
                                </div>

                        </div>

                        {/* Product Info */}
                        <div className='p-4'>
                            <h3 className='font-medium text-gray-900 mb-2'>{product.name}</h3>
                            
                            {/* Pricing */}
                            <div className='flex items-center gap-2 mb-2'>
                                <span className='text-red-500 font-bold'>${product.currentPrice}</span>
                                <span className='text-gray-500 line-through'>${product.originalPrice}</span>
                            </div>

                            {/* Rating */}
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    {renderStars(product.rating)}
                                </div>
                                <span className='text-gray-500 text-sm'>({product.reviews})</span>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            
            {/* View All Products Button */}
            <div className='text-center'>
                <button className='bg-red-500 text-white px-12 py-3 rounded font-medium hover:bg-red-600 transition-colors'>
                    Mostrar Todos Los Productos
                </button>
            </div>
                
        </div>
    );
};

export default FlashSalesSection;