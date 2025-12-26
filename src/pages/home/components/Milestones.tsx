export default function Milestones() {
  const milestones = [
    {
      month: 'Month 1',
      title: 'Foundation & Discovery',
      items: ['Brand audit', 'Competitor analysis', 'Website optimization', 'Social media setup']
    },
    {
      month: 'Month 2',
      title: 'Content & Engagement',
      items: ['Content calendar', 'Blog strategy', 'Email campaigns', 'Community building']
    },
    {
      month: 'Month 3',
      title: 'Growth & Visibility',
      items: ['SEO optimization', 'Paid advertising', 'Influencer outreach', 'Analytics setup']
    },
    {
      month: 'Month 4',
      title: 'Conversion & Sales',
      items: ['Sales funnel', 'Lead magnets', 'Booking system', 'Client testimonials']
    },
    {
      month: 'Month 5',
      title: 'Scale & Automate',
      items: ['Marketing automation', 'Retargeting campaigns', 'Partnership development', 'Course creation']
    },
    {
      month: 'Month 6',
      title: 'Optimize & Report',
      items: ['Performance review', 'Strategy refinement', 'Future roadmap', 'Success celebration']
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#2D1B4E] to-[#1A0F2E] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 lg:mb-3 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            6-Month Journey
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
            24 strategic milestones across six transformative months
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border-2 border-[#D4AF37]/30 rounded-lg lg:rounded-xl p-4 sm:p-6 hover:border-[#D4AF37] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                  {milestone.month}
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <span className="text-[#2D1B4E] font-bold text-xs sm:text-sm">{index + 1}</span>
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                {milestone.title}
              </h3>

              <ul className="space-y-1.5 sm:space-y-2">
                {milestone.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-sm sm:text-base mt-0.5 mr-2 flex-shrink-0"></i>
                    <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
