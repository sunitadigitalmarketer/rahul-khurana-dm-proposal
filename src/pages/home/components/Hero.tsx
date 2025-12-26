export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D1B4E] via-[#1A0F2E] to-[#0D0618]">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="md:col-span-3 space-y-4 lg:space-y-6">
            <div className="space-y-2 lg:space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-[1.1] tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Six-Month Digital
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic text-[#D4AF37] leading-[1.1] tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Transformation Journey
              </h1>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl font-light">
              A comprehensive digital marketing strategy designed specifically for numerology and tarot reading services, 
              delivering measurable growth and spiritual connection with your ideal clients.
            </p>

            <div className="flex flex-wrap gap-2 lg:gap-3">
              <div className="backdrop-blur-md bg-white/10 border-2 border-[#D4AF37] rounded-lg lg:rounded-xl px-3 lg:px-4 py-2 lg:py-3">
                <div className="text-xl lg:text-2xl font-bold text-[#D4AF37]">6</div>
                <div className="text-xs text-gray-300 mt-0.5 font-medium">Months</div>
              </div>
              <div className="backdrop-blur-md bg-white/10 border-2 border-[#D4AF37] rounded-lg lg:rounded-xl px-3 lg:px-4 py-2 lg:py-3">
                <div className="text-xl lg:text-2xl font-bold text-[#D4AF37]">24</div>
                <div className="text-xs text-gray-300 mt-0.5 font-medium">Milestones</div>
              </div>
              <div className="backdrop-blur-md bg-white/10 border-2 border-[#D4AF37] rounded-lg lg:rounded-xl px-3 lg:px-4 py-2 lg:py-3">
                <div className="text-xl lg:text-2xl font-bold text-[#D4AF37]">100%</div>
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
              <div className="absolute bottom-3 lg:bottom-4 right-3 lg:right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 lg:px-4 py-1.5 lg:py-2 shadow-lg">
                <p className="text-xs font-medium text-[#2D1B4E]">Customized for Spiritual Practitioners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
