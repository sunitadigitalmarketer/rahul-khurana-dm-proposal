import { useState, useEffect } from 'react';

interface NavbarProps {
  currentSlide: number;
  goToSlide: (index: number) => void;
  totalSlides: number;
}

export default function Navbar({ currentSlide, goToSlide }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-full px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://public.readdy.ai/ai/img_res/ebcc8368-5b0d-4c39-960f-5a304064988b.png"
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-bold text-[#2D1B4E]">
              Digital Growth
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => goToSlide(0)}
              className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                currentSlide === 0 ? 'text-[#D4AF37]' : 'text-gray-700 hover:text-[#2D1B4E]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => goToSlide(1)}
              className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                currentSlide === 1 ? 'text-[#D4AF37]' : 'text-gray-700 hover:text-[#2D1B4E]'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => goToSlide(2)}
              className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                currentSlide === 2 ? 'text-[#D4AF37]' : 'text-gray-700 hover:text-[#2D1B4E]'
              }`}
            >
              Milestones
            </button>
            <button
              onClick={() => goToSlide(3)}
              className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                currentSlide >= 3 && currentSlide <= 5 ? 'text-[#D4AF37]' : 'text-gray-700 hover:text-[#2D1B4E]'
              }`}
            >
              Timeline
            </button>
            <button
              onClick={() => goToSlide(6)}
              className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                currentSlide === 6 ? 'text-[#D4AF37]' : 'text-gray-700 hover:text-[#2D1B4E]'
              }`}
            >
              Tasks
            </button>
            <button
              onClick={() => goToSlide(7)}
              className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                currentSlide === 7 ? 'text-[#D4AF37]' : 'text-gray-700 hover:text-[#2D1B4E]'
              }`}
            >
              Resources
            </button>
            <button
              onClick={() => goToSlide(8)}
              className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                currentSlide === 8 ? 'text-[#D4AF37]' : 'text-gray-700 hover:text-[#2D1B4E]'
              }`}
            >
              Outcomes
            </button>
          </div>

          <button 
            onClick={() => goToSlide(9)}
            className="bg-[#D4AF37] text-[#2D1B4E] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#C19B2F] transition-all whitespace-nowrap cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
