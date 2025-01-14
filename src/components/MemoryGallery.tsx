import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MemoryItem } from '../types';

const memories: MemoryItem[] = [
  {
    date: '2023-01-01',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486',
    caption: 'Our first date at the coffee shop'
  },
  {
    date: '2023-02-14',
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7',
    caption: 'Valentine\'s Day dinner'
  },
  {
    date: '2023-06-15',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2',
    caption: 'Summer beach day'
  }
];

export function MemoryGallery() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextMemory = () => {
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const prevMemory = () => {
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-center mb-8">Our Beautiful Memories</h2>
      
      <div className="relative">
        <button
          onClick={prevMemory}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <img
            src={memories[currentIndex].image}
            alt={memories[currentIndex].caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <p className="text-white text-lg">{memories[currentIndex].caption}</p>
            <p className="text-white/80 text-sm">{memories[currentIndex].date}</p>
          </div>
        </div>

        <button
          onClick={nextMemory}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
}