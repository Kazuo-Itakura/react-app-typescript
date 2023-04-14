// Carousel.tsx

import React, { useState } from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CarouselProps {
  carousel_parts: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ carousel_parts }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentItem(index);
  };

  const handlePrevClick = () => {
    setCurrentItem(currentItem === 0 ? carousel_parts.length - 1 : currentItem - 1);
  };

  const handleNextClick = () => {
    setCurrentItem(currentItem === carousel_parts.length - 1 ? 0 : currentItem + 1);
  };

  return (
    <div>
      <ResponsiveCarousel
        showArrows={false}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        selectedItem={currentItem}
        centerMode
        centerSlidePercentage={50}
        onChange={handleSlideChange}
      >
        {carousel_parts.map((part, index) => (
          <div key={index}>{part}</div>
        ))}
      </ResponsiveCarousel>
      <div className="flex items-center justify-center mt-4">
        <button className="mr-4" onClick={handlePrevClick}>
          {'<'}
        </button>
        {carousel_parts.map((_, index) => (
          <span
            key={index}
            className={`mx-1 w-4 h-4 rounded-full ${
              index === currentItem ? 'bg-black' : 'bg-gray-300'
            }`}
          ></span>
        ))}
        <button className="ml-4" onClick={handleNextClick}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
