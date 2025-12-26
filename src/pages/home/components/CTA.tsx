export default function CTA() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#2D1B4E] via-[#1A0F2E] to-[#2D1B4E] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#D4AF37] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block bg-[#D4AF37]/20 backdrop-blur-sm rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 mb-3 sm:mb-4">
          <span className="text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">Ready to Begin?</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
          Let's Transform Your
          <br />
          <span className="text-[#D4AF37]">Spiritual Business</span>
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
          This comprehensive 6-month plan is designed to elevate your numerology and tarot practice, 
          attract your ideal clients, and build a thriving online presence that resonates with seekers worldwide.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-14 lg:mb-16">
          <button className="bg-[#D4AF37] text-[#2D1B4E] px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-[#C19B2F] transition-all shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 whitespace-nowrap cursor-pointer">
            <i className="ri-check-double-line mr-2"></i>
            Accept Proposal
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-white/20 transition-all whitespace-nowrap cursor-pointer">
            <i className="ri-question-line mr-2"></i>
            Schedule a Call
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-12 sm:mb-14 lg:mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl lg:rounded-2xl p-5 sm:p-6 lg:p-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="ri-calendar-check-line text-lg sm:text-xl lg:text-2xl text-[#2D1B4E]"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 sm:mb-2">6 Months</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Comprehensive engagement period</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl lg:rounded-2xl p-5 sm:p-6 lg:p-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="ri-trophy-line text-lg sm:text-xl lg:text-2xl text-[#2D1B4E]"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 sm:mb-2">72 Deliverables</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Tangible outputs across all categories</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl lg:rounded-2xl p-5 sm:p-6 lg:p-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="ri-line-chart-line text-lg sm:text-xl lg:text-2xl text-[#2D1B4E]"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 sm:mb-2">11.5x ROI</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Expected return on investment</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-8 max-w-3xl mx-auto">
          <div className="flex items-start space-x-3 sm:space-x-4 text-left">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
              <i className="ri-shield-star-line text-base sm:text-lg lg:text-xl text-[#2D1B4E]"></i>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">Our Commitment to You</h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                We're not just service providers—we're your growth partners. With transparent communication, 
                regular reporting, and a performance guarantee, your success is our top priority. If we don't 
                achieve 70% of targets by Month 6, we'll work an additional month at no cost.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-4">Questions about the proposal?</p>
          <div className="flex items-center justify-center space-x-6">
            <a href="mailto:your@email.com" className="text-[#D4AF37] hover:text-white transition-colors flex items-center cursor-pointer">
              <i className="ri-mail-line mr-2"></i>
              your@email.com
            </a>
            <span className="text-gray-600">|</span>
            <a href="tel:+919876543210" className="text-[#D4AF37] hover:text-white transition-colors flex items-center cursor-pointer">
              <i className="ri-phone-line mr-2"></i>
              +91 98765 43210
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500">
            <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors cursor-pointer">
              Powered by Readdy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
