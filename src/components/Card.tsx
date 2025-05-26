import React, { useState } from 'react';
import { ImageItem } from '../data/images';

interface CardProps {
    item: ImageItem;
}

const Card: React.FC<CardProps> = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative overflow-hidden bg-white dark:bg-slate-800 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'
                        }`}
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                <div className="mt-3 flex justify-between items-center">
                    <span className="inline-block px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded">
                        {item.category}
                    </span>
                    {item.featured && (
                        <span className="inline-block px-2 py-1 text-xs bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 rounded">
                            Featured
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;