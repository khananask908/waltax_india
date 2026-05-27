'use client';

import { useEffect, useState, useMemo } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import LazyImage from '../ui/LazyImage';

const OptimizedImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  
  // Memoize carousel images to prevent re-creation
  const carouselImages = useMemo(() => [
    {
      url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      title: 'Business Registration Made Easy',
      description: 'Start your business journey with expert guidance',
    },
    {
      url: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg',
      title: 'Tax & Compliance Solutions',
      description: 'Stay compliant with our comprehensive services',
    },
    {
      url: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
      title: 'Legal Support & Advisory',
      description: 'Expert legal guidance for your business needs',
    },
  ], []);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    slides: {
      perView: 1,
      spacing: 0,
    },
    // Optimize performance
    renderMode: "performance",
    drag: true,
  });

  useEffect(() => {
    if (!instanceRef.current) return;
    
    const autoplayInterval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);

    return () => clearInterval(autoplayInterval);
  }, [instanceRef]);

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider h-[500px] md:h-[600px]">
        {carouselImages.map((image, idx) => (
          <div key={idx} className="keen-slider__slide relative">
            <LazyImage
              src={image.url}
              alt={image.title}
              width={1600}
              height={600}
              quality={85}
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative h-full flex items-center justify-center text-center px-4">
              <div className="max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                  {image.title}
                </h2>
                <p className="text-xl text-white/90">
                  {image.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <>
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {carouselImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === idx ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default OptimizedImageCarousel;