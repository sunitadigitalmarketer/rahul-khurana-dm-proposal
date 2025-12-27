interface MonthlyTimelineProps {
  month: number;
}

export default function MonthlyTimeline({ month }: MonthlyTimelineProps) {
  const monthData: Record<number, {
    title: string;
    focus: string;
    weeks: Array<{
      week: string;
      tasks: string[];
      deliverables: string[];
    }>;
    resources: {
      hours: string;
      budget: string;
      team: string[];
    };
  }> = {
    1: {
      title: 'Foundation & Discovery',
      focus: 'Building the groundwork for digital success',
      weeks: [
        {
          week: 'Week 1-2',
          tasks: ['Complete brand audit', 'Analyze competitors', 'Define target audience'],
          deliverables: ['Brand analysis report', 'Competitor matrix', 'Audience personas']
        },
        {
          week: 'Week 3-4',
          tasks: ['Website optimization', 'Social media setup', 'Content strategy'],
          deliverables: ['Optimized website', 'Social profiles', 'Content calendar']
        }
      ],
      resources: {
        hours: '80 hours',
        budget: '₹37,500',
        team: ['Digital Strategist', 'Web Developer', 'Content Writer']
      }
    },
    2: {
      title: 'Content & Engagement',
      focus: 'Creating compelling content and building community',
      weeks: [
        {
          week: 'Week 1-2',
          tasks: ['Launch blog series', 'Email campaign setup', 'Social media content'],
          deliverables: ['4 blog posts', 'Email templates', '20 social posts']
        },
        {
          week: 'Week 3-4',
          tasks: ['Community engagement', 'Video content', 'Newsletter launch'],
          deliverables: ['Engagement strategy', '2 videos', 'First newsletter']
        }
      ],
      resources: {
        hours: '75 hours',
        budget: '₹37,500',
        team: ['Content Creator', 'Social Media Manager', 'Video Editor']
      }
    },
    3: {
      title: 'Growth & Visibility',
      focus: 'Expanding reach and driving traffic',
      weeks: [
        {
          week: 'Week 1-2',
          tasks: ['SEO optimization', 'Paid ad campaigns', 'Influencer outreach'],
          deliverables: ['SEO report', 'Ad campaigns live', 'Partnership list']
        },
        {
          week: 'Week 3-4',
          tasks: ['Analytics setup', 'Performance tracking', 'A/B testing'],
          deliverables: ['Analytics dashboard', 'Performance report', 'Test results']
        }
      ],
      resources: {
        hours: '70 hours',
        budget: '₹37,500',
        team: ['SEO Specialist', 'Ads Manager', 'Data Analyst']
      }
    }
  };

  const data = monthData[month];

  return (
    <section className="min-h-screen bg-[#FAFAF8] pt-10 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-5 sm:mb-6 lg:mb-8">
          <div className="inline-block bg-[#D4AF37] text-[#2D1B4E] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold mb-1.5 sm:mb-2">
            MONTH {month}
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2D1B4E] mb-1.5 lg:mb-2 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            {data.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {data.focus}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
          {data.weeks.map((week, index) => (
            <div key={index} className="bg-white rounded-lg lg:rounded-xl p-3 sm:p-4 shadow-lg border-2 border-gray-100">
              <h3 className="text-base sm:text-lg font-bold text-[#2D1B4E] mb-2 sm:mb-3 tracking-tight">{week.week}</h3>
              
              <div className="mb-2 sm:mb-3">
                <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1 sm:mb-1.5">Tasks</h4>
                <ul className="space-y-1">
                  {week.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="ri-arrow-right-circle-fill text-[#D4AF37] text-xs sm:text-sm mt-0.5 mr-2 flex-shrink-0"></i>
                      <span className="text-gray-700 text-xs leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1 sm:mb-1.5">Deliverables</h4>
                <ul className="space-y-1">
                  {week.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-[#2D1B4E] text-xs sm:text-sm mt-0.5 mr-2 flex-shrink-0"></i>
                      <span className="text-gray-700 text-xs font-medium leading-relaxed">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#2D1B4E] to-[#1A0F2E] rounded-lg lg:rounded-xl p-3 sm:p-4 text-white">
          <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Resource Allocation
          </h3>
          <div className="grid md:grid-cols-3 gap-3 sm:gap-4">
            <div>
              <div className="flex items-center mb-1">
                <i className="ri-time-line text-[#D4AF37] text-sm sm:text-base mr-2 flex-shrink-0"></i>
                <span className="text-xs text-gray-300">Time Investment</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-[#D4AF37]">{data.resources.hours}</p>
            </div>
            <div>
              <div className="flex items-center mb-1">
                <i className="ri-money-dollar-circle-line text-[#D4AF37] text-sm sm:text-base mr-2 flex-shrink-0"></i>
                <span className="text-xs text-gray-300">Service Fee</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-[#D4AF37]">{data.resources.budget}</p>
              <p className="text-xs text-gray-400 mt-0.5">Ad budget excluded</p>
            </div>
            <div>
              <div className="flex items-center mb-1">
                <i className="ri-team-line text-[#D4AF37] text-sm sm:text-base mr-2 flex-shrink-0"></i>
                <span className="text-xs text-gray-300">Team Members</span>
              </div>
              <div className="space-y-0.5 mt-1 sm:mt-1.5">
                {data.resources.team.map((member, idx) => (
                  <p key={idx} className="text-xs text-gray-300">{member}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
