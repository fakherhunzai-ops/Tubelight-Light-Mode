import { useState } from 'react';

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('sms');

  const products = {
    sms: {
      icon: 'ri-message-3-line',
      title: 'SMS',
      description: 'Get your SMS workflow with a customer letter by Tubelight, powered by a global super-network of direct connections. Reach customers instantly with reliable, high-throughput SMS delivery across 190+ countries.',
      features: [
        'Global SMS delivery to 190+ countries',
        'Two-way messaging with DLT compliance',
        'Smart routing for optimal delivery',
        'Unicode support for multilingual messages',
        'Real-time delivery reports & analytics',
        '10,000 SMS per second throughput'
      ],
      image: 'https://readdy.ai/api/search-image?query=A%20modern%20SaaS%20dashboard%20UI%20screenshot%20showing%20SMS%20campaign%20management%20interface%20with%20message%20composer%20panel%20on%20the%20left%20showing%20a%20text%20message%20preview%20on%20a%20smartphone%20mockup%20on%20the%20right%20side%20delivery%20rate%20percentage%20charts%20green%20tick%20delivery%20status%20rows%20contact%20list%20table%20with%20phone%20numbers%20clean%20white%20background%20blue%20accent%20colors%20professional%20enterprise%20software%20design&width=700&height=500&seq=sms-product-ui-tbl-v3&orientation=landscape'
    },
    whatsapp: {
      icon: 'ri-whatsapp-line',
      title: 'WhatsApp',
      description: 'Scale the reach of your business using the network of 2 billion active users on the world\'s most popular messenger app in 190 countries. Send rich media, interactive buttons, and automated conversations via the official WhatsApp Business API.',
      features: [
        'Official WhatsApp Business Solution Provider',
        'Rich media: images, videos, documents',
        'Interactive buttons & quick replies',
        'Template message approval & management',
        'End-to-end encrypted conversations',
        '2 billion+ reachable users globally'
      ],
      image: 'https://readdy.ai/api/search-image?query=A%20polished%20SaaS%20product%20UI%20screenshot%20showing%20WhatsApp%20Business%20API%20messaging%20dashboard%20with%20a%20chat%20conversation%20panel%20displaying%20rich%20media%20message%20bubbles%20with%20image%20thumbnails%20quick%20reply%20buttons%20and%20call%20to%20action%20buttons%20on%20a%20smartphone%20frame%20on%20the%20right%20analytics%20panel%20showing%20open%20rate%20delivered%20rate%20on%20the%20left%20clean%20white%20background%20green%20WhatsApp%20accent%20colors%20enterprise%20software&width=700&height=500&seq=whatsapp-product-ui-tbl-v3&orientation=landscape'
    },
    voice: {
      icon: 'ri-phone-line',
      title: 'Voice',
      description: 'Engage with your customer better by simplifying your business process communication using our cloud telephony platform. Enable IVR, call recording, voice broadcasting, and real-time call management at scale.',
      features: [
        'Cloud-based contact center suite',
        'IVR with multi-level flow builder',
        'Call recording & transcription',
        'Voice broadcasting campaigns',
        'Real-time call analytics & monitoring',
        '5,000 calls per second capacity'
      ],
      image: 'https://readdy.ai/api/search-image?query=A%20professional%20SaaS%20dashboard%20UI%20screenshot%20showing%20cloud%20telephony%20voice%20call%20management%20interface%20with%20IVR%20flow%20diagram%20builder%20showing%20connected%20nodes%20and%20decision%20trees%20on%20the%20left%20a%20live%20call%20monitoring%20panel%20showing%20active%20calls%20queue%20status%20agent%20availability%20status%20bars%20real-time%20call%20duration%20counters%20clean%20white%20background%20blue%20accent%20colors%20enterprise%20contact%20center%20software%20design&width=700&height=500&seq=voice-product-ui-tbl-v3&orientation=landscape'
    },
    ai: {
      icon: 'ri-robot-line',
      title: 'Conversational AI',
      description: 'Enhance your customers conversation by automating the workflow. Automated Chat and Voice bots help boost engagement (CSAT), solve issue in real time. Build intelligent, context-aware conversations across all channels.',
      features: [
        'AI-powered chatbot & voicebot builder',
        'Natural language understanding (NLU)',
        'Omnichannel bot deployment',
        'Live agent handoff & escalation',
        'CSAT improvement & real-time resolution',
        'Pre-built templates for common use cases'
      ],
      image: 'https://readdy.ai/api/search-image?query=A%20sleek%20SaaS%20product%20UI%20screenshot%20showing%20conversational%20AI%20chatbot%20builder%20interface%20with%20a%20visual%20drag%20and%20drop%20flow%20canvas%20showing%20bot%20conversation%20nodes%20connected%20by%20arrows%20on%20the%20left%20a%20live%20chat%20preview%20panel%20on%20the%20right%20showing%20AI%20bot%20responses%20with%20typing%20indicator%20user%20messages%20and%20bot%20replies%20CSAT%20score%20widget%20satisfaction%20percentage%20donut%20chart%20clean%20white%20background%20blue%20purple%20accent%20colors%20modern%20enterprise%20AI%20software&width=700&height=500&seq=ai-product-ui-tbl-v3&orientation=landscape'
    },
    rcs: {
      icon: 'ri-chat-smile-3-line',
      title: 'RCS Messaging',
      description: 'New Rich channel for brands giving the look to regular SMS, giving the back to regular SMS. Stand out with branded conversations right in customer SMS inboxes. Deliver rich cards, carousels, and suggested actions natively.',
      features: [
        'Branded sender with logo & verified badge',
        'Rich cards, carousels & suggested replies',
        'Read receipts & delivery confirmation',
        'Native Android messaging experience',
        'Fallback to SMS for unsupported devices',
        'Interactive buttons & quick actions'
      ],
      image: 'https://readdy.ai/api/search-image?query=A%20modern%20SaaS%20dashboard%20UI%20screenshot%20showing%20RCS%20Rich%20Communication%20Services%20messaging%20campaign%20interface%20with%20a%20smartphone%20mockup%20on%20the%20right%20displaying%20a%20branded%20RCS%20message%20with%20a%20company%20logo%20verified%20checkmark%20badge%20a%20rich%20card%20with%20product%20image%20carousel%20interactive%20action%20buttons%20suggested%20replies%20on%20the%20left%20a%20campaign%20analytics%20panel%20showing%20impressions%20clicks%20conversion%20rate%20clean%20white%20background%20blue%20accent%20colors%20enterprise%20messaging%20platform%20design&width=700&height=500&seq=rcs-product-ui-tbl-v3&orientation=landscape'
    }
  };

  const tabs = [
    { id: 'sms', label: 'SMS' },
    { id: 'whatsapp', label: 'WhatsApp' },
    { id: 'voice', label: 'Voice' },
    { id: 'ai', label: 'Conversational AI' },
    { id: 'rcs', label: 'RCS Messaging' },
  ];

  const activeProduct = products[activeTab as keyof typeof products];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-['Plus_Jakarta_Sans'] text-5xl font-bold">
            Every conversation is an opportunity.{' '}
            <span style={{color: '#0F48DC'}}>Connect with your customers</span>
            <br />on channel of their choice
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Inter']">
            Reach out. Engage. Enhance across Channels! Tubelight's powerful CPaaS platform brings all your communication channels under one roof.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={activeTab === tab.id ? { backgroundColor: '#0F48DC' } : {}}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-12 space-y-8">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl shadow-lg" style={{backgroundColor: '#0F48DC'}}>
                <i className={`${activeProduct.icon} text-3xl text-white`}></i>
              </div>

              <div className="space-y-4">
                <h3 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-gray-900">
                  {activeProduct.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {activeProduct.description}
                </p>
              </div>

              <div className="space-y-3">
                {activeProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0" style={{backgroundColor: '#0F48DC'}}>
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-[15px] text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#" className="inline-flex items-center gap-2 text-[15px] font-semibold group" style={{color: '#0F48DC'}}>
                Explore {activeProduct.title}
                <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>

            {/* Right Visual */}
            <div className="relative p-8 flex items-center justify-center" style={{backgroundColor: 'rgba(15,72,220,0.04)'}}>
              <div className="w-full h-full">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
