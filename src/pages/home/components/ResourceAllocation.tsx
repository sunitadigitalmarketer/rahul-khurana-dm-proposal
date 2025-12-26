export default function ResourceAllocation() {
  const resources = [
    {
      category: 'Time Investment',
      icon: 'ri-time-line',
      color: 'from-[#2D1B4E] to-[#4A4A9B]',
      items: [
        { label: 'Strategy & Planning', hours: '60 hours', percentage: '13%' },
        { label: 'Content Creation', hours: '120 hours', percentage: '27%' },
        { label: 'Design & Development', hours: '90 hours', percentage: '20%' },
        { label: 'Campaign Management', hours: '100 hours', percentage: '22%' },
        { label: 'Analytics & Reporting', hours: '50 hours', percentage: '11%' },
        { label: 'Client Communication', hours: '30 hours', percentage: '7%' },
      ],
      total: '450 hours',
    },
    {
      category: 'Service Fee Breakdown',
      icon: 'ri-money-dollar-circle-line',
      color: 'from-[#C19B2F] to-[#D4AF37]',
      items: [
        { label: 'Month 1: Foundation', amount: '₹37,500', percentage: '16.7%' },
        { label: 'Month 2: Content', amount: '₹37,500', percentage: '16.7%' },
        { label: 'Month 3: Growth', amount: '₹37,500', percentage: '16.7%' },
        { label: 'Month 4: Conversion', amount: '₹37,500', percentage: '16.7%' },
        { label: 'Month 5: Scale', amount: '₹37,500', percentage: '16.7%' },
        { label: 'Month 6: Optimize', amount: '₹37,500', percentage: '16.7%' },
      ],
      total: '₹2,25,000',
      note: 'Ad campaign budget excluded',
    },
    {
      category: 'Team Allocation',
      icon: 'ri-team-line',
      color: 'from-[#4A9B9B] to-[#2D9B9B]',
      items: [
        { label: 'Digital Strategist', role: 'Lead & Planning', availability: 'Full engagement' },
        { label: 'Content Writer', role: 'Blogs & Copy', availability: 'Months 1-6' },
        { label: 'Social Media Manager', role: 'Community & Posts', availability: 'Months 2-6' },
        { label: 'SEO Specialist', role: 'Optimization', availability: 'Months 3-6' },
        { label: 'Ads Manager', role: 'Paid Campaigns', availability: 'Months 3-6' },
        { label: 'Data Analyst', role: 'Reporting & Insights', availability: 'Full engagement' },
      ],
      total: '6 specialists',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FAFAF8] to-[#F8F6F3] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="inline-block bg-[#E8E3F3] rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 mb-2 sm:mb-3">
            <span className="text-xs font-semibold text-[#2D1B4E] tracking-wider uppercase">Resources</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2D1B4E] mb-2 lg:mb-3 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Resource Allocation Overview
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive breakdown of time, investment, and team dedication for your success
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className={`bg-gradient-to-r ${resource.color} p-3 sm:p-4`}>
                <div className="flex items-center space-x-2 mb-1.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${resource.icon} text-base sm:text-lg text-white`}></i>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{resource.category}</h3>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mt-2 sm:mt-3">{resource.total}</div>
                {resource.note && (
                  <div className="text-xs text-white/80 mt-2 italic">{resource.note}</div>
                )}
              </div>

              <div className="p-3 sm:p-4">
                <div className="space-y-2 sm:space-y-3">
                  {resource.items.map((item, idx) => (
                    <div key={idx} className="border-b border-gray-200 pb-2 sm:pb-3 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-xs font-medium text-gray-800 leading-relaxed">{item.label}</span>
                        {item.percentage && (
                          <span className="text-xs font-bold px-2 py-1 rounded-full bg-[#E8E3F3] text-[#2D1B4E] whitespace-nowrap">
                            {item.percentage}
                          </span>
                        )}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-[#D4AF37]">
                        {item.hours || item.amount || item.role}
                      </div>
                      {item.availability && (
                        <div className="text-xs text-gray-500 mt-1">{item.availability}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-[#2D1B4E] to-[#1A0F2E] rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">450+</div>
              <div className="text-sm text-gray-300">Total Hours Invested</div>
              <div className="text-xs text-gray-400 mt-1">Across 6 months</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">₹2,25,000</div>
              <div className="text-sm text-gray-300">Service Fee</div>
              <div className="text-xs text-gray-400 mt-1">Ad budget separate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">6</div>
              <div className="text-sm text-gray-300">Expert Team Members</div>
              <div className="text-xs text-gray-400 mt-1">Dedicated specialists</div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-information-line text-xl text-[#2D1B4E]"></i>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Important Note on Ad Budget</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  The ₹2,25,000 service fee covers our complete digital marketing services, strategy, content creation, 
                  and campaign management. Paid advertising budget (for platforms like Google Ads, Facebook Ads, Instagram Ads) 
                  is separate and will be determined based on your goals and market competition. We recommend a monthly ad 
                  budget of ₹15,000-₹30,000 for optimal results, which will be directly paid to the advertising platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
