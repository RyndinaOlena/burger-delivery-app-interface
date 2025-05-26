import React from 'react';
import Card from './Card';
import { imageData } from '../data/images';

const Gallery: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {imageData.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Gallery;