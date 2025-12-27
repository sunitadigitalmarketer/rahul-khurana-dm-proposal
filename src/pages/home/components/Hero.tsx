export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Rich base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0d2e] via-[#2d1b4e] via-[#3d2a5e] to-[#1a0d2e]"></div>
      
      {/* Elegant gold shimmer overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 15% 30%, rgba(212, 175, 55, 0.25) 0%, transparent 40%),
                         radial-gradient(circle at 85% 70%, rgba(212, 175, 55, 0.2) 0%, transparent 45%),
                         radial-gradient(circle at 50% 50%, rgba(184, 134, 11, 0.15) 0%, transparent 60%)`
      }}></div>
      
      {/* Deep purple velvet texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d1b4e]/80 via-[#3d2a5e]/60 to-[#1a0d2e]/80"></div>
      
      {/* Elegant pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(212, 175, 55, 0.1) 2px, rgba(212, 175, 55, 0.1) 4px)`
      }}></div>
      
      {/* Sophisticated depth layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
      
      {/* Luxurious gold accent glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-soft-light opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#B8860B] rounded-full mix-blend-soft-light opacity-10 blur-3xl"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid md:grid-cols-5 gap-6 lg:gap-8 items-center w-full">
          <div className="md:col-span-3 space-y-3 lg:space-y-4">
            <div className="space-y-1.5 lg:space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-[1.1] tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Six-Month Digital
              </h1>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl italic text-[#D4AF37] leading-[1.1] tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Transformation Journey
              </h1>
            </div>

            <p className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed max-w-2xl font-light">
              A comprehensive digital marketing strategy designed specifically for numerology and tarot reading services, 
              delivering measurable growth and spiritual connection with your ideal clients.
            </p>

            <div className="flex flex-wrap gap-2 lg:gap-3">
              <div className="backdrop-blur-md bg-white/10 border-2 border-[#D4AF37] rounded-lg lg:rounded-xl px-3 lg:px-4 py-1.5 lg:py-2">
                <div className="text-lg lg:text-xl font-bold text-[#D4AF37]">6</div>
                <div className="text-xs text-gray-300 mt-0.5 font-medium">Months</div>
              </div>
              <div className="backdrop-blur-md bg-white/10 border-2 border-[#D4AF37] rounded-lg lg:rounded-xl px-3 lg:px-4 py-1.5 lg:py-2">
                <div className="text-lg lg:text-xl font-bold text-[#D4AF37]">24</div>
                <div className="text-xs text-gray-300 mt-0.5 font-medium">Milestones</div>
              </div>
              <div className="backdrop-blur-md bg-white/10 border-2 border-[#D4AF37] rounded-lg lg:rounded-xl px-3 lg:px-4 py-1.5 lg:py-2">
                <div className="text-lg lg:text-xl font-bold text-[#D4AF37]">100%</div>
                <div className="text-xs text-gray-300 mt-0.5 font-medium">Measurable ROI</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 relative hidden md:block">
            <div className="relative rounded-l-[20px] lg:rounded-l-[24px] overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=mystical%20tarot%20cards%20and%20crystals%20arranged%20in%20sacred%20geometry%20pattern%20on%20dark%20purple%20velvet%20cloth%20with%20soft%20candlelight%20creating%20dramatic%20shadows%20and%20spiritual%20atmosphere%20professional%20photography%20high%20quality%20detailed%20composition&width=600&height=800&seq=hero-tarot-image-001&orientation=portrait"
                alt="Tarot and Crystals"
                className="w-full h-[300px] lg:h-[400px] xl:h-[450px] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
