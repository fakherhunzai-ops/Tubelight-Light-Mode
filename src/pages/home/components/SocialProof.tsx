
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
    <section className="py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-['Plus_Jakarta_Sans'] text-5xl font-bold text-gray-900">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Inter']">
            Simple programmable APIs, detailed analytics, direct carriers relationships and outstanding customer support empower you to focus on your business innovation and growth while our Omnichannel Platform handles your business communications.
          </p>
        </div>

        {/* Logo Marquee */}
        <div className="mb-20 overflow-hidden rounded-2xl py-10" style={{backgroundColor: 'rgba(15,72,220,0.04)'}}>
          <div className="flex gap-12 animate-scroll">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center gap-3 px-8 py-3 text-gray-400 hover:text-gray-600 transition-colors whitespace-nowrap"
              >
                <i className={`${logo.icon} text-2xl`}></i>
                <span className="text-xl font-bold">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid grid-cols-3">
                {/* Left - Logo */}
                <div className="flex items-center justify-center p-8" style={{backgroundColor: '#0F48DC'}}>
                  <div className="text-6xl font-bold text-white">{study.logo}</div>
                </div>

                {/* Right - Content */}
                <div className="col-span-2 p-8 space-y-6">
                  <div className="relative">
                    <i className="ri-double-quotes-l text-4xl text-gray-200 absolute -top-2 -left-2"></i>
                    <p className="text-base text-gray-700 leading-relaxed relative z-10 pl-6">
                      {study.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 pt-4">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-2xl font-bold" style={{color: '#0F48DC'}}>
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-sm font-semibold text-gray-900">{study.author}</div>
                    <div className="text-sm text-gray-600">{study.role}</div>
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
