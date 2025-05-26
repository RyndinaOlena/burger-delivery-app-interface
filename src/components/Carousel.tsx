import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { imageData } from '../data/images';

const Carousel: React.FC = () => {
    const featuredImages = imageData.filter(img => img.featured);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const goToNext = useCallback(() => {
        setCurrentIndex(current =>
            current === featuredImages.length - 1 ? 0 : current + 1
        );
    }, [featuredImages.length]);

    const goToPrevious = () => {
        setCurrentIndex(current =>
            current === 0 ? featuredImages.length - 1 : current - 1
        );
    };

    // Auto-advance slides
    useEffect(() => {
        let interval: number | undefined;

        if (isAutoPlaying) {
            interval = window.setInterval(() => {
                goToNext();
            }, 5000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isAutoPlaying, goToNext]);

    // Pause auto-play on hover
    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    if (featuredImages.length === 0) {
        return null;
    }

    return (
        <div
            className="relative overflow-hidden rounded-lg shadow-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative h-64 md:h-96">
                {featuredImages.map((item, index) => (
                    <div
                        key={item.id}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
                            <p className="text-sm md:text-base text-slate-200">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-200"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>

            <button
                onClick={goToNext}
                className="absolute top-1/2 right-2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-200"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {featuredImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-white w-4'
                            : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;