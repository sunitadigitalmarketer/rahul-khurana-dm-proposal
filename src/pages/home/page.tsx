import { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Milestones from './components/Milestones';
import MonthlyTimeline from './components/MonthlyTimeline';
import TasksDeliverables from './components/TasksDeliverables';
import ResourceAllocation from './components/ResourceAllocation';
import Investment from './components/Investment';
import MeasurementOutcomes from './components/MeasurementOutcomes';
import CTA from './components/CTA';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const accumulatorTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRef = useRef(false);
  const scrollAccumulatorRef = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const totalSlides = 10;

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Prevent rapid scrolling - only allow one scroll action at a time
      if (isScrollingRef.current) {
        return;
      }
      
      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTimeRef.current;
      
      // Detect touchpad vs mouse wheel
      // Touchpads typically send events with deltaMode === 0 (pixels) and smaller deltas
      const isTouchpad = e.deltaMode === 0 && Math.abs(e.deltaY) < 100;
      
      if (isTouchpad) {
        // For touchpad: accumulate scroll deltas
        scrollAccumulatorRef.current += e.deltaY;
        
        // Touchpad threshold: accumulate 50px worth of scrolling
        const touchpadThreshold = 50;
        
        if (Math.abs(scrollAccumulatorRef.current) > touchpadThreshold) {
          isScrollingRef.current = true;
          lastScrollTimeRef.current = now;
          
          if (scrollAccumulatorRef.current > 0 && currentSlide < totalSlides - 1) {
            setCurrentSlide(prev => prev + 1);
          } else if (scrollAccumulatorRef.current < 0 && currentSlide > 0) {
            setCurrentSlide(prev => prev - 1);
          }
          
          // Reset accumulator
          scrollAccumulatorRef.current = 0;
          
          // Clear accumulator timeout
          if (accumulatorTimeoutRef.current) {
            clearTimeout(accumulatorTimeoutRef.current);
            accumulatorTimeoutRef.current = null;
          }
          
          // Cooldown period - prevent scrolling for 500ms after a slide change
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }
          
          scrollTimeoutRef.current = setTimeout(() => {
            isScrollingRef.current = false;
          }, 500);
        } else {
          // Reset accumulator if no scroll for 200ms (user stopped scrolling)
          if (accumulatorTimeoutRef.current) {
            clearTimeout(accumulatorTimeoutRef.current);
          }
          accumulatorTimeoutRef.current = setTimeout(() => {
            scrollAccumulatorRef.current = 0;
          }, 200);
        }
      } else {
        // For mouse wheel: use direct threshold
        const mouseThreshold = 30;
        
        if (Math.abs(e.deltaY) > mouseThreshold) {
          isScrollingRef.current = true;
          lastScrollTimeRef.current = now;
          
          if (e.deltaY > 0 && currentSlide < totalSlides - 1) {
            setCurrentSlide(prev => prev + 1);
          } else if (e.deltaY < 0 && currentSlide > 0) {
            setCurrentSlide(prev => prev - 1);
          }
          
          // Cooldown period - prevent scrolling for 600ms after a slide change
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }
          
          scrollTimeoutRef.current = setTimeout(() => {
            isScrollingRef.current = false;
          }, 600);
        }
      }
    };

    // Attach to window to capture all wheel events
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (accumulatorTimeoutRef.current) {
        clearTimeout(accumulatorTimeoutRef.current);
      }
    };
  }, [currentSlide, totalSlides]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: currentSlide * window.innerWidth,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-[#F5F5F0]">
      <div 
        ref={containerRef}
        className="flex h-screen overflow-x-hidden overflow-y-hidden snap-x snap-mandatory slide-container"
        style={{ 
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth'
        }}
      >
        <div className="min-w-full h-full snap-start snap-always">
          <Hero />
        </div>
        <div className="min-w-full h-full snap-start snap-always overflow-y-auto">
          <Overview />
        </div>
        <div className="min-w-full h-full snap-start snap-always overflow-y-auto">
          <Milestones />
        </div>
        <div className="min-w-full h-full snap-start snap-always overflow-y-auto">
          <MonthlyTimeline month={1} />
        </div>
        <div className="min-w-full h-full snap-start snap-always overflow-y-auto">
          <MonthlyTimeline month={2} />
        </div>
        <div className="min-w-full h-full snap-start snap-always overflow-y-auto">
          <MonthlyTimeline month={3} />
        </div>
        <div className="min-w-full h-full snap-start snap-always overflow-y-auto">
          <TasksDeliverables />
        </div>
        <div className="min-w-full h-full snap-start snap-always overflow-y-auto">
          <ResourceAllocation />
        </div>
        <div className="min-w-full h-full snap-start snap-always overflow-y-auto">
          <Investment />
        </div>
        <div className="min-w-full h-full snap-start snap-always overflow-y-auto">
          <MeasurementOutcomes />
        </div>
        <div className="min-w-full h-full snap-start snap-always">
          <CTA />
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center space-x-1.5 sm:space-x-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md border border-white/20">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentSlide === index
                ? 'w-5 sm:w-6 h-1.5 sm:h-2 bg-[#D4AF37]'
                : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-400/60 hover:bg-gray-500/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      {currentSlide > 0 && (
        <button
          onClick={() => goToSlide(currentSlide - 1)}
          className="fixed left-3 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 z-50 w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-white/20 flex items-center justify-center hover:bg-white/90 hover:shadow-lg transition-all cursor-pointer group"
          aria-label="Previous slide"
        >
          <i className="ri-arrow-left-s-line text-lg sm:text-xl lg:text-2xl text-[#2D1B4E] group-hover:scale-110 transition-transform"></i>
        </button>
      )}
      
      {currentSlide < totalSlides - 1 && (
        <button
          onClick={() => goToSlide(currentSlide + 1)}
          className="fixed right-3 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-50 w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-white/20 flex items-center justify-center hover:bg-white/90 hover:shadow-lg transition-all cursor-pointer group"
          aria-label="Next slide"
        >
          <i className="ri-arrow-right-s-line text-lg sm:text-xl lg:text-2xl text-[#2D1B4E] group-hover:scale-110 transition-transform"></i>
        </button>
      )}

      {/* Slide Counter */}
      <div className="fixed top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6 z-40 bg-white/80 backdrop-blur-sm px-2.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full shadow-md border border-white/20">
        <span className="text-xs sm:text-sm font-semibold text-[#2D1B4E]">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>
    </div>
  );
}
