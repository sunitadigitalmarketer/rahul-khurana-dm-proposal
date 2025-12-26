export default function Overview() {
  return (
    <section className="min-h-screen bg-[#FAFAF8] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2D1B4E] mb-2 lg:mb-3 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Project Overview
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Strategic roadmap to elevate your spiritual practice through digital excellence
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-[#E8E3F3] rounded-xl lg:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg">
            <div className="inline-block bg-white rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 mb-3 sm:mb-4">
              <span className="text-xs font-semibold text-[#2D1B4E] tracking-wider uppercase">Client Focus</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A0F2E] mb-3 sm:mb-4 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Numerology &amp; Tarot Reading Services
            </h2>

            <p className="text-sm sm:text-base text-[#4A4A4A] mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-4xl font-light">
              Elevating your spiritual practice through strategic digital marketing. This comprehensive 6-month plan 
              is designed to establish your online presence, attract your ideal clients, and build a thriving spiritual 
              business that resonates with seekers of guidance and enlightenment.
            </p>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
              <div className="border-l-4 border-[#D4AF37] pl-3 sm:pl-4">
                <h3 className="text-base sm:text-lg font-bold text-[#2D1B4E] mb-2 sm:mb-3 tracking-tight">Current State</h3>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-[#4A4A4A]">
                  <li className="flex items-start">
                    <i className="ri-checkbox-blank-circle-fill text-xs text-[#D4AF37] mt-1 mr-2 flex-shrink-0"></i>
                    <span className="leading-relaxed">Limited online visibility</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-blank-circle-fill text-xs text-[#D4AF37] mt-1 mr-2 flex-shrink-0"></i>
                    <span className="leading-relaxed">Inconsistent client bookings</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-blank-circle-fill text-xs text-[#D4AF37] mt-1 mr-2 flex-shrink-0"></i>
                    <span className="leading-relaxed">Minimal social media presence</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-blank-circle-fill text-xs text-[#D4AF37] mt-1 mr-2 flex-shrink-0"></i>
                    <span className="leading-relaxed">No structured marketing strategy</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#D4AF37] pl-3 sm:pl-4">
                <h3 className="text-base sm:text-lg font-bold text-[#2D1B4E] mb-2 sm:mb-3 tracking-tight">Desired Outcomes</h3>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-[#4A4A4A]">
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-sm sm:text-base text-green-600 mr-2 flex-shrink-0"></i>
                    <span className="leading-relaxed">Strong brand identity online</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-sm sm:text-base text-green-600 mr-2 flex-shrink-0"></i>
                    <span className="leading-relaxed">Consistent client flow</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-sm sm:text-base text-green-600 mr-2 flex-shrink-0"></i>
                    <span className="leading-relaxed">Engaged community following</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-sm sm:text-base text-green-600 mr-2 flex-shrink-0"></i>
                    <span className="leading-relaxed">Automated booking system</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#D4AF37] pl-3 sm:pl-4">
                <h3 className="text-base sm:text-lg font-bold text-[#2D1B4E] mb-2 sm:mb-3 tracking-tight">Success Metrics</h3>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-[#4A4A4A]">
                  <li className="flex items-start">
                    <span className="text-lg sm:text-xl font-bold text-[#D4AF37] mr-2 flex-shrink-0">3x</span>
                    <span className="mt-0.5 leading-relaxed">Website traffic increase</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lg sm:text-xl font-bold text-[#D4AF37] mr-2 flex-shrink-0">5k+</span>
                    <span className="mt-0.5 leading-relaxed">Social media followers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lg sm:text-xl font-bold text-[#D4AF37] mr-2 flex-shrink-0">50+</span>
                    <span className="mt-0.5 leading-relaxed">Monthly bookings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lg sm:text-xl font-bold text-[#D4AF37] mr-2 flex-shrink-0">85%</span>
                    <span className="mt-0.5 leading-relaxed">Client retention rate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
