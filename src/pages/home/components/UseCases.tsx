
export default function UseCases() {
  const cases = [
    {
      icon: 'ri-megaphone-line',
      title: 'Campaigner',
      description: 'Target your customers by automating and designing your intelligent campaign strategy on their preferred channels. Drive higher engagement with personalized, multi-channel marketing campaigns powered by AI.',
      link: '#'
    },
    {
      icon: 'ri-inbox-line',
      title: '1nbox',
      description: 'Omnichannel, one shared inbox. Find, share and share information collaborate, and resolve customer queries faster. Bring all your customer conversations into a single, unified workspace for your team.',
      link: '#'
    },
    {
      icon: 'ri-headphone-line',
      title: 'Contact Center Suite',
      description: 'Omnichannel, customer engagement on one workspace available to teams and agent on the go. Manage voice, chat, and digital interactions seamlessly with real-time monitoring and analytics.',
      link: '#'
    },
    {
      icon: 'ri-shield-keyhole-line',
      title: 'Authentication & OTP',
      description: 'Secure your users with multi-channel OTP delivery via SMS, Voice, and Flash Call. MuCH — Safe guard your sensitive and financial transactions using Omni Channel authenticated service.',
      link: '#'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-['Plus_Jakarta_Sans'] text-5xl font-bold text-gray-900">
            Engage &amp; Manage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Inter']">
            Tubelight Communications integrates with leading 3rd party Softwares, e-commerce platforms, CRMs, and marketing tools. Its AI powered omni channel communication platform supports brands to engage &amp; manage their customers conversations to enhance their customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-6">
                <div className="w-20 h-20 flex items-center justify-center rounded-2xl" style={{backgroundColor: '#0F48DC'}}>
                  <i className={`${useCase.icon} text-4xl text-white`}></i>
                </div>

                <div className="space-y-3">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900">
                    {useCase.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>

                <a
                  href={useCase.link}
                  className="inline-flex items-center gap-2 text-[15px] font-semibold group-hover:gap-3 transition-all"
                  style={{color: '#0F48DC'}}
                >
                  Learn more
                  <i className="ri-arrow-right-line text-lg"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
