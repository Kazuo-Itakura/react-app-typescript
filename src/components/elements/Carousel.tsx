import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CarouselProps {
  carousel_parts: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ carousel_parts }) => {
  return (
    <ResponsiveCarousel
      showArrows
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      selectedItem={0}
      centerMode
      centerSlidePercentage={50}
    >
      {carousel_parts.map((part, index) => (
        <div key={index}>{part}</div>
      ))}
    </ResponsiveCarousel>
  );
};

export default Carousel;
