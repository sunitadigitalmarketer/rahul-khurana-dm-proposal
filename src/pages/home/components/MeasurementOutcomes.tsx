export default function MeasurementOutcomes() {
  const kpis = [
    {
      category: 'Website Performance',
      metrics: [
        { name: 'Monthly Website Visitors', baseline: '500', target: '2,500', growth: '400%' },
        { name: 'Average Session Duration', baseline: '1:30', target: '4:00', growth: '167%' },
        { name: 'Bounce Rate', baseline: '65%', target: '35%', growth: '-46%' },
        { name: 'Page Load Speed', baseline: '4.5s', target: '1.8s', growth: '-60%' },
      ],
      icon: 'ri-line-chart-line',
      color: 'from-[#2D1B4E] to-[#4A4A9B]',
    },
    {
      category: 'Social Media Growth',
      metrics: [
        { name: 'Instagram Followers', baseline: '200', target: '5,000', growth: '2400%' },
        { name: 'Facebook Page Likes', baseline: '150', target: '3,500', growth: '2233%' },
        { name: 'Engagement Rate', baseline: '2%', target: '8%', growth: '300%' },
        { name: 'Monthly Reach', baseline: '1K', target: '50K', growth: '4900%' },
      ],
      icon: 'ri-instagram-line',
      color: 'from-[#4A9B9B] to-[#2D9B9B]',
    },
    {
      category: 'Lead Generation',
      metrics: [
        { name: 'Monthly Leads', baseline: '10', target: '80', growth: '700%' },
        { name: 'Email Subscribers', baseline: '50', target: '2,000', growth: '3900%' },
        { name: 'Conversion Rate', baseline: '1.5%', target: '5%', growth: '233%' },
        { name: 'Cost Per Lead', baseline: '₹4,000', target: '₹1,200', growth: '-70%' },
      ],
      icon: 'ri-user-add-line',
      color: 'from-[#9B4A9B] to-[#7B2A7B]',
    },
    {
      category: 'Revenue Impact',
      metrics: [
        { name: 'Monthly Bookings', baseline: '15', target: '60', growth: '300%' },
        { name: 'Average Booking Value', baseline: '₹6,000', target: '₹9,000', growth: '50%' },
        { name: 'Monthly Revenue', baseline: '₹90,000', target: '₹5,40,000', growth: '500%' },
        { name: 'Customer Lifetime Value', baseline: '₹18,000', target: '₹63,750', growth: '254%' },
      ],
      icon: 'ri-money-dollar-circle-line',
      color: 'from-[#C19B2F] to-[#D4AF37]',
    },
  ];

  const reportingSchedule = [
    { frequency: 'Weekly', deliverable: 'Quick performance snapshot', icon: 'ri-calendar-check-line' },
    { frequency: 'Bi-Weekly', deliverable: 'Campaign performance review', icon: 'ri-file-chart-line' },
    { frequency: 'Monthly', deliverable: 'Comprehensive analytics report', icon: 'ri-file-list-3-line' },
    { frequency: 'Quarterly', deliverable: 'Strategic review & planning', icon: 'ri-presentation-line' },
  ];

  return (
    <section id="outcomes" className="min-h-screen bg-gradient-to-br from-[#FAFAF8] to-[#F8F6F3] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="inline-block bg-[#E8E3F3] rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 mb-2 sm:mb-3">
            <span className="text-xs font-semibold text-[#2D1B4E] tracking-wider uppercase">Success Metrics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2D1B4E] mb-2 lg:mb-3 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Measurement &amp; Expected Outcomes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Clear, measurable KPIs to track progress and demonstrate ROI throughout the engagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
          {kpis.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className={`bg-gradient-to-r ${category.color} p-6`}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <i className={`${category.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {category.metrics.map((metric, idx) => (
                    <div key={idx} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-medium text-gray-700">{metric.name}</span>
                        <span
                          className={`text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap ${
                            metric.growth.startsWith('-')
                              ? 'bg-green-100 text-green-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {metric.growth}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 mb-1">Baseline</div>
                          <div className="text-lg font-bold text-gray-600">{metric.baseline}</div>
                        </div>
                        <i className="ri-arrow-right-line text-[#D4AF37] text-xl"></i>
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 mb-1">Target</div>
                          <div className="text-lg font-bold text-[#2D1B4E]">{metric.target}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-[#2D1B4E] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Reporting &amp; Communication Schedule
            </h3>
            <p className="text-gray-600">
              Stay informed with regular updates and transparent reporting throughout the engagement
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {reportingSchedule.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-[#F5F5F5] to-[#E8E3F3] rounded-2xl hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#2D1B4E] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${item.icon} text-2xl text-white`}></i>
                </div>
                <div className="text-xl font-bold text-[#2D1B4E] mb-2">{item.frequency}</div>
                <div className="text-sm text-gray-600">{item.deliverable}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-shield-check-line text-xl text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#2D1B4E] mb-2">Performance Guarantee</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  If we don't achieve at least 70% of the outlined targets by month 6, we'll continue working 
                  with you for an additional month at no extra cost until we reach the agreed-upon goals. 
                  Your success is our success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
