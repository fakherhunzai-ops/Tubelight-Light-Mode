export default function SocialProof() {
  const logos = [
    { name: 'CallHealth', icon: 'ri-heart-pulse-line' },
    { name: 'DishTV', icon: 'ri-tv-2-line' },
    { name: 'WeSchool', icon: 'ri-graduation-cap-line' },
    { name: 'JustDial', icon: 'ri-search-2-line' },
    { name: '99acres', icon: 'ri-building-2-line' },
    { name: 'Clarity', icon: 'ri-lightbulb-line' },
    { name: 'TechVentures', icon: 'ri-rocket-line' },
    { name: 'FinServe', icon: 'ri-bank-line' },
    { name: 'HealthConnect', icon: 'ri-hospital-line' },
    { name: 'EduTech', icon: 'ri-book-open-line' },
  ];

  const caseStudies = [
    {
      company: 'E-commerce Platform',
      logo: 'EC',
      quote: 'Tubelight\'s WhatsApp Business API and Omnichannel platform transformed our customer engagement. We achieved 91% better engagement on customer support, enabling us to resolve queries faster and improve CSAT scores significantly.',
      metrics: [
        { value: '91%', label: 'Better Engagement on Customer Support' },
        { value: '10K+', label: 'SMS Per Second' },
        { value: '99.99%', label: 'Infrastructure Uptime' }
      ],
      author: 'Head of Customer Experience',
      role: 'Leading E-commerce Brand'
    },
    {
      company: 'Financial Services',
      logo: 'FS',
      quote: 'With Tubelight\'s MuCH — Omni Channel authenticated service, we safeguarded sensitive financial transactions while maintaining a seamless user experience. Platform latency under 300ms and 5K calls per second are true game-changers for our operations.',
      metrics: [
        { value: '<300ms', label: 'Platform Latency' },
        { value: '5K+', label: 'Calls Per Second' },
        { value: '99.99%', label: 'Infrastructure Uptime' }
      ],
      author: 'Chief Technology Officer',
      role: 'Financial Services Provider'
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-['Inter']">
            Simple programmable APIs, detailed analytics, direct carriers relationships and outstanding customer support empower you to focus on your business innovation and growth while our Omnichannel Platform handles your business communications.
          </p>
        </div>

        {/* Logo Marquee */}
        <div className="mb-12 md:mb-20 overflow-hidden rounded-xl sm:rounded-2xl py-6 sm:py-8 md:py-10" style={{backgroundColor: 'rgba(15,72,220,0.04)'}}>
          <div className="flex gap-6 sm:gap-8 md:gap-12 animate-scroll">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center gap-2 sm:gap-2.5 md:gap-3 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-gray-400 hover:text-gray-600 transition-colors whitespace-nowrap"
              >
                <i className={`${logo.icon} text-lg sm:text-xl md:text-2xl`}></i>
                <span className="text-sm sm:text-base md:text-xl font-bold">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3">
                {/* Left - Logo */}
                <div className="flex items-center justify-center p-6 sm:p-7 md:p-8" style={{backgroundColor: '#0F48DC'}}>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">{study.logo}</div>
                </div>

                {/* Right - Content */}
                <div className="col-span-1 sm:col-span-2 p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="relative">
                    <i className="ri-double-quotes-l text-2xl sm:text-3xl md:text-4xl text-gray-200 absolute -top-2 -left-2"></i>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed relative z-10 pl-5 sm:pl-6">
                      {study.quote}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 pt-2 sm:pt-3 md:pt-4">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="space-y-0.5 sm:space-y-1">
                        <div className="text-base sm:text-lg md:text-2xl font-bold" style={{color: '#0F48DC'}}>
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 sm:pt-3 md:pt-4 border-t border-gray-100">
                    <div className="text-xs sm:text-sm font-semibold text-gray-900">{study.author}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{study.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}