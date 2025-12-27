
import { useState } from 'react';

export default function Investment() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'onetime'>('monthly');

  const monthlyBreakdown = [
    { month: 'Month 1', amount: '₹37,500', focus: 'Foundation & Discovery' },
    { month: 'Month 2', amount: '₹37,500', focus: 'Content & Engagement' },
    { month: 'Month 3', amount: '₹37,500', focus: 'Growth & Visibility' },
    { month: 'Month 4', amount: '₹37,500', focus: 'Conversion & Sales' },
    { month: 'Month 5', amount: '₹37,500', focus: 'Scale & Automate' },
    { month: 'Month 6', amount: '₹37,500', focus: 'Optimize & Report' },
  ];

  const features = [
    'Complete digital marketing strategy',
    '72 tangible deliverables',
    'Dedicated team of specialists',
    'Weekly progress updates',
    'Monthly performance reports',
    'Direct communication access',
    'Performance guarantee included',
    'Unlimited revisions on deliverables',
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#2D1B4E] to-[#1A0F2E] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-5 sm:mb-6 lg:mb-8">
          <div className="inline-block bg-[#E8E3F3] rounded-full px-2 py-0.5 mb-1 sm:mb-1.5">
            <span className="text-xs font-semibold text-[#2D1B4E] tracking-wider uppercase">Investment</span>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 lg:mb-1.5 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Flexible Payment Options
          </h2>
          <p className="text-xs text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose the payment plan that works best for your business
          </p>
        </div>

        {/* Payment Toggle */}
        <div className="flex justify-center mb-4 sm:mb-5 lg:mb-6">
          <div className="bg-white/10 backdrop-blur-md rounded-full p-1.5 inline-flex">
            <button
              onClick={() => setSelectedPlan('monthly')}
              className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                selectedPlan === 'monthly'
                  ? 'bg-[#D4AF37] text-[#2D1B4E]'
                  : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              Monthly Payment
            </button>
            <button
              onClick={() => setSelectedPlan('onetime')}
              className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all relative whitespace-nowrap ${
                selectedPlan === 'onetime'
                  ? 'bg-[#D4AF37] text-[#2D1B4E]'
                  : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              One-Time Payment
              <span className="absolute -top-1.5 -right-1.5 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {/* Pricing Card */}
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#C19B2F] p-3 sm:p-4 lg:p-5 text-center">
              <h3 className="text-sm sm:text-base font-bold text-[#2D1B4E] mb-0.5">
                {selectedPlan === 'monthly' ? 'Monthly Payment Plan' : 'One-Time Payment'}
              </h3>
              <p className="text-xs text-[#2D1B4E]/80 mb-2 sm:mb-3">
                {selectedPlan === 'monthly' ? '6 monthly installments' : 'One-time payment with 15% discount'}
              </p>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg lg:rounded-xl p-2.5 sm:p-3 lg:p-4 mb-2">
                {selectedPlan === 'monthly' ? (
                  <>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2D1B4E] mb-0.5">₹37,500</div>
                    <div className="text-xs text-[#2D1B4E]/80">per month × 6 months</div>
                    <div className="mt-2 pt-2 border-t border-[#2D1B4E]/20">
                      <div className="text-xs sm:text-sm font-semibold text-[#2D1B4E]">Total: ₹2,25,000</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-xs text-[#2D1B4E]/60 line-through mb-0.5">₹2,25,000</div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2D1B4E] mb-0.5">₹1,91,250</div>
                    <div className="text-xs text-[#2D1B4E]/80">one-time payment</div>
                    <div className="mt-2 pt-2 border-t border-[#2D1B4E]/20">
                      <div className="inline-flex items-center bg-green-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                        <i className="ri-price-tag-3-line mr-1"></i>
                        Save ₹33,750 (15% OFF)
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="bg-[#2D1B4E]/10 rounded-lg lg:rounded-xl p-3 sm:p-4 text-left">
                <div className="flex items-start space-x-2 text-xs sm:text-sm text-[#2D1B4E]">
                  <i className="ri-information-line text-base sm:text-lg mt-0.5 flex-shrink-0"></i>
                  <p>
                    <strong>Note:</strong> Ad campaign budget is separate and depends on your allocation. 
                    This fee covers our complete service delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 lg:p-6">
              <h4 className="text-base sm:text-lg font-bold text-[#2D1B4E] mb-3 sm:mb-4">What's Included</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-green-600 text-sm sm:text-base mt-0.5 mr-2 flex-shrink-0"></i>
                    <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-[#2D1B4E] to-[#4A4A9B] text-white py-2 sm:py-2.5 rounded-lg lg:rounded-xl text-xs sm:text-sm font-semibold hover:shadow-xl transition-all whitespace-nowrap cursor-pointer">
                <i className="ri-check-double-line mr-1.5"></i>
                Accept Proposal
              </button>
            </div>
          </div>

          {/* Monthly Breakdown */}
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-2xl p-4 sm:p-5 lg:p-6">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#2D1B4E] mb-3 sm:mb-4 lg:mb-5 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              {selectedPlan === 'monthly' ? 'Monthly Payment Schedule' : 'Investment Breakdown'}
            </h3>
            
            <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
              {monthlyBreakdown.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2.5 sm:p-3 bg-gradient-to-r from-[#F8F6F3] to-[#E8E3F3] rounded-lg lg:rounded-xl hover:shadow-md transition-all"
                >
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-[#2D1B4E]">{item.month}</div>
                    <div className="text-xs text-gray-600">{item.focus}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-base sm:text-lg font-bold text-[#D4AF37]">
                      {selectedPlan === 'monthly' ? item.amount : '₹31,875'}
                    </div>
                    {selectedPlan === 'onetime' && (
                      <div className="text-xs text-gray-500 line-through">{item.amount}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#2D1B4E] to-[#1A0F2E] rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5 text-white">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="text-sm sm:text-base font-semibold">Total Investment</span>
                <span className="text-xl sm:text-2xl font-bold text-[#D4AF37]">
                  {selectedPlan === 'monthly' ? '₹2,25,000' : '₹1,91,250'}
                </span>
              </div>
              {selectedPlan === 'onetime' && (
                <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-white/20">
                  <span className="text-xs text-gray-300">You Save</span>
                  <span className="text-base sm:text-lg font-bold text-green-400">₹33,750</span>
                </div>
              )}
            </div>

            <div className="mt-3 sm:mt-4 lg:mt-5 p-2.5 sm:p-3 bg-blue-50 rounded-lg lg:rounded-xl">
              <div className="flex items-start space-x-2">
                <i className="ri-shield-star-line text-base sm:text-lg text-blue-600 flex-shrink-0"></i>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#1A1A1A] mb-0.5">Payment Terms</h4>
                  <p className="text-xs text-[#4A4A4A]">
                    {selectedPlan === 'monthly' 
                      ? 'First payment due upon proposal acceptance. Subsequent payments due on the 1st of each month.'
                      : 'Full payment due within 7 days of proposal acceptance. 15% discount applied automatically.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Projection */}
        <div className="mt-10 sm:mt-12 lg:mt-14 max-w-6xl mx-auto bg-white rounded-xl lg:rounded-2xl shadow-2xl p-5 sm:p-6 lg:p-8">
          <div className="text-center mb-5 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-1.5 sm:mb-2 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Expected Return on Investment
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4A4A]">Conservative projections based on industry benchmarks</p>
          </div>

          <div className="grid md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            <div className="text-center p-3 sm:p-4 lg:p-5 bg-gradient-to-br from-[#F5F5F0] to-[#FAFAF5] rounded-xl lg:rounded-2xl">
              <div className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-1 sm:mb-1.5">60+</div>
              <div className="text-xs sm:text-sm text-gray-600">Monthly Bookings</div>
              <div className="text-xs text-gray-500 mt-0.5 sm:mt-1">by Month 6</div>
            </div>
            <div className="text-center p-3 sm:p-4 lg:p-5 bg-gradient-to-br from-[#F5F5F0] to-[#FAFAF5] rounded-xl lg:rounded-2xl">
              <div className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-1 sm:mb-1.5">₹7,200</div>
              <div className="text-xs text-[#4A4A4A]">Avg. Monthly Revenue</div>
              <div className="text-xs text-gray-500 mt-0.5">per booking</div>
            </div>
            <div className="text-center p-3 sm:p-4 lg:p-5 bg-gradient-to-br from-[#F5F5F0] to-[#FAFAF5] rounded-xl lg:rounded-2xl">
              <div className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-1 sm:mb-1.5">₹4.32L</div>
              <div className="text-xs text-[#4A4A4A]">Monthly Revenue</div>
              <div className="text-xs text-gray-500 mt-0.5">by Month 6</div>
            </div>
            <div className="text-center p-3 sm:p-4 lg:p-5 bg-gradient-to-br from-[#C9A961] to-[#D4AF37] rounded-xl lg:rounded-2xl">
              <div className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-1 sm:mb-1.5">11.5x</div>
              <div className="text-xs text-[#1A1A1A] font-semibold">ROI Potential</div>
              <div className="text-xs text-[#1A1A1A]/80 mt-0.5">within 6 months</div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-line-chart-line text-xl text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#2D1B4E] mb-2">Conservative Estimate</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Based on 60 monthly bookings at ₹7,200 average value, you could generate ₹4,32,000 in monthly revenue 
                  by Month 6. That's an {selectedPlan === 'onetime' ? '11.5x' : '9.6x'} return on your marketing investment, 
                  with continued growth potential beyond the initial 6 months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
