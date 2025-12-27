import { useState } from 'react';

export default function TasksDeliverables() {
  const [openCategory, setOpenCategory] = useState<number | null>(0);

  const categories = [
    {
      name: 'Brand & Strategy',
      icon: 'ri-lightbulb-line',
      color: 'bg-[#2D1B4E]',
      count: 8,
      items: [
        'Complete brand audit and competitive analysis',
        'Brand positioning and messaging framework',
        'Target audience persona development',
        'Brand voice and tone guidelines',
        'Visual identity system and logo design',
        'Brand style guide documentation',
        'Marketing strategy roadmap',
        'Quarterly goal setting and KPI definition',
      ],
    },
    {
      name: 'Website & SEO',
      icon: 'ri-global-line',
      color: 'bg-[#4A9B9B]',
      count: 10,
      items: [
        'Professional website design and development',
        'Mobile-responsive optimization',
        'SEO keyword research and implementation',
        'On-page SEO optimization',
        'Google My Business setup and optimization',
        'XML sitemap and robots.txt configuration',
        'Page speed optimization',
        'SSL certificate and security setup',
        'Contact forms and booking integration',
        'Analytics and tracking implementation',
      ],
    },
    {
      name: 'Content Creation',
      icon: 'ri-article-line',
      color: 'bg-[#9B4A9B]',
      count: 12,
      items: [
        '24 blog posts (4 per month)',
        '48 social media posts (8 per month)',
        '12 email newsletters (2 per month)',
        '6 lead magnets and downloadable guides',
        '12 video scripts for YouTube/Reels',
        'Content calendar for 6 months',
        'Image and graphic design assets',
        'Infographics and visual content',
        'Case studies and testimonials',
        'FAQ and knowledge base content',
        'Product/service descriptions',
        'About and bio page content',
      ],
    },
    {
      name: 'Social Media',
      icon: 'ri-instagram-line',
      color: 'bg-[#C19B2F]',
      count: 9,
      items: [
        'Instagram profile optimization',
        'Facebook business page setup',
        'Pinterest board creation',
        'YouTube channel setup',
        'Social media content templates',
        'Hashtag strategy development',
        'Community engagement plan',
        'Influencer outreach campaign',
        'Social media advertising campaigns',
      ],
    },
    {
      name: 'Email Marketing',
      icon: 'ri-mail-line',
      color: 'bg-[#4A9B4A]',
      count: 7,
      items: [
        'Email marketing platform setup',
        'Welcome email sequence (5 emails)',
        'Newsletter template design',
        'Lead nurture automation workflow',
        'Abandoned cart email sequence',
        'Re-engagement campaign',
        'Email list segmentation strategy',
      ],
    },
    {
      name: 'Analytics & Reporting',
      icon: 'ri-bar-chart-line',
      color: 'bg-[#D4AF37]',
      count: 6,
      items: [
        'Monthly performance reports',
        'Google Analytics dashboard setup',
        'Social media analytics reports',
        'ROI tracking and analysis',
        'A/B testing reports',
        'Final comprehensive 6-month report',
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F8F6F3] to-[#FAFAF8] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-1.5 lg:mb-2 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Complete Deliverables Package
          </h2>
          <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            72 tangible outputs across 6 categories throughout the 6-month engagement
          </p>
        </div>

        <div className="space-y-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenCategory(openCategory === index ? null : index)}
                className="w-full flex items-center justify-between p-3 sm:p-4 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className={`${category.color} w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <i className={`${category.icon} text-base sm:text-lg text-white`}></i>
                  </div>
                  <div className="text-left">
                    <h3 className="text-base sm:text-lg font-bold text-[#2D1B4E] tracking-tight">{category.name}</h3>
                    <p className="text-xs text-[#4A4A4A]">{category.count} deliverables</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-[#E8E3F3] text-[#2D1B4E] px-3 py-1 rounded-full text-sm font-semibold">
                    {category.count}
                  </span>
                  <i
                    className={`ri-arrow-down-s-line text-2xl text-[#4A4A4A] transition-transform duration-300 ${
                      openCategory === index ? 'rotate-180' : ''
                    }`}
                  ></i>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openCategory === index ? 'max-h-[1000px]' : 'max-h-0'
                }`}
              >
                <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                  <ul className="space-y-1.5 sm:space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border-2 border-[#D4AF37] flex items-center justify-center mt-0.5 mr-2 flex-shrink-0 cursor-pointer hover:bg-[#D4AF37] transition-colors group">
                          <i className="ri-check-line text-xs text-[#D4AF37] group-hover:text-white"></i>
                        </div>
                        <span className="text-xs text-[#4A4A4A] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
