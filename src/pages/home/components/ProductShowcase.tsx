import { useState } from 'react';

const channels = [
  {
    id: 'sms',
    name: 'SMS',
    icon: 'ri-message-3-line',
    color: 'bg-blue-500',
    title: 'SMS API',
    description: 'Send transactional and promotional SMS at scale with our reliable SMS gateway. Reach customers instantly with high delivery rates and real-time tracking.',
    features: ['99.9% Delivery Rate', 'Global Coverage', 'Two-way Messaging', 'Unicode Support'],
    image: 'https://readdy.ai/api/search-image?query=Modern%20SMS%20messaging%20dashboard%20interface%20showing%20message%20analytics%20with%20delivery%20statistics%20real-time%20metrics%20and%20conversation%20threads%20on%20clean%20white%20background%20with%20blue%20accent%20colors%20professional%20business%20software%20UI%20design&width=600&height=400&seq=sms-dash-001&orientation=landscape'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: 'ri-whatsapp-line',
    color: 'bg-green-500',
    title: 'WhatsApp Business API',
    description: 'Connect with customers on their favorite messaging platform. Send notifications, provide support, and build relationships through WhatsApp Business API.',
    features: ['Rich Media Support', 'Template Messages', 'Interactive Buttons', 'Verified Business Profile'],
    image: 'https://readdy.ai/api/search-image?query=WhatsApp%20Business%20API%20dashboard%20showing%20chat%20conversations%20with%20customers%20message%20templates%20and%20analytics%20panels%20on%20clean%20interface%20with%20green%20accent%20colors%20modern%20business%20communication%20platform%20UI&width=600&height=400&seq=wa-dash-001&orientation=landscape'
  },
  {
    id: 'voice',
    name: 'Voice',
    icon: 'ri-phone-line',
    color: 'bg-purple-500',
    title: 'Voice API',
    description: 'Build powerful voice experiences with our programmable voice API. Make and receive calls, create IVR systems, and enable voice-based authentication.',
    features: ['HD Voice Quality', 'IVR Builder', 'Call Recording', 'Number Masking'],
    image: 'https://readdy.ai/api/search-image?query=Voice%20call%20analytics%20dashboard%20showing%20active%20calls%20call%20duration%20statistics%20and%20IVR%20flow%20diagram%20on%20modern%20interface%20with%20purple%20accent%20colors%20telecommunication%20software%20UI%20design&width=600&height=400&seq=voice-dash-001&orientation=landscape'
  },
  {
    id: 'ai',
    name: 'Conversational AI',
    icon: 'ri-robot-line',
    color: 'bg-indigo-500',
    title: 'Conversational AI',
    description: 'Deploy intelligent chatbots and virtual assistants powered by advanced NLP. Automate customer interactions while maintaining natural, human-like conversations.',
    features: ['Natural Language Processing', 'Multi-language Support', 'Intent Recognition', 'Sentiment Analysis'],
    image: 'https://readdy.ai/api/search-image?query=AI%20chatbot%20dashboard%20interface%20showing%20conversation%20flows%20with%20natural%20language%20processing%20analytics%20intent%20recognition%20graphs%20and%20bot%20performance%20metrics%20on%20modern%20UI%20with%20indigo%20accent%20colors&width=600&height=400&seq=ai-dash-001&orientation=landscape'
  },
  {
    id: 'rcs',
    name: 'RCS',
    icon: 'ri-chat-4-line',
    color: 'bg-teal-500',
    title: 'RCS Messaging',
    description: 'Next-generation messaging with rich media, interactive buttons, and verified sender identity. Deliver app-like experiences directly in the native messaging app.',
    features: ['Rich Media Cards', 'Suggested Actions', 'Verified Sender', 'Read Receipts'],
    image: 'https://readdy.ai/api/search-image?query=RCS%20messaging%20platform%20dashboard%20showing%20rich%20media%20message%20cards%20with%20interactive%20buttons%20carousel%20layouts%20and%20engagement%20analytics%20on%20clean%20interface%20with%20teal%20accent%20colors%20modern%20messaging%20UI&width=600&height=400&seq=rcs-dash-001&orientation=landscape'
  }
];

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('sms');
  const activeChannel = channels.find(c => c.id === activeTab) || channels[0];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Omnichannel Communication Platform
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Connect with your customers on their preferred channels. One API, multiple channels, infinite possibilities.
          </p>
        </div>

        {/* Tab Navigation - Responsive */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12 px-2">
          {channels.map((channel) => (
            <button
              key={channel.id}
              onClick={() => setActiveTab(channel.id)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                activeTab === channel.id
                  ? 'bg-gray-900 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <i className={`${channel.icon} text-lg sm:text-xl`}></i>
              <span className="text-sm sm:text-base">{channel.name}</span>
            </button>
          ))}
        </div>

        {/* Content Panel - Responsive Grid */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content - Stacks on top on mobile */}
            <div className="order-1">
              <div className={`inline-flex items-center gap-2 ${activeChannel.color} text-white px-4 py-2 rounded-full mb-4 sm:mb-6`}>
                <i className={`${activeChannel.icon} text-lg sm:text-xl`}></i>
                <span className="font-semibold text-sm sm:text-base">{activeChannel.name}</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                {activeChannel.title}
              </h3>
              
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                {activeChannel.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {activeChannel.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <i className="ri-check-line text-green-600 text-sm sm:text-base"></i>
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="px-6 sm:px-8 py-3 sm:py-3.5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl whitespace-nowrap text-sm sm:text-base">
                  Get Started
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-50 transition-colors border-2 border-gray-200 whitespace-nowrap text-sm sm:text-base">
                  View Documentation
                </button>
              </div>
            </div>

            {/* Right Image - Stacks below on mobile */}
            <div className="order-2">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                <div className="w-full h-64 sm:h-80 lg:h-96">
                  <img
                    src={activeChannel.image}
                    alt={`${activeChannel.name} Dashboard`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
