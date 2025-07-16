import React, { useState, useEffect } from 'react';
import { Heart, Eye, ChevronLeft, ChevronRight} from 'lucide-react';

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
            
        }
    ];


 };