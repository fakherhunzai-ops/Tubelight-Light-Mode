const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 pt-20">
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl animate-pulse" style={{backgroundColor: 'rgba(15,72,220,0.15)'}}></div>
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl animate-pulse delay-1000" style={{backgroundColor: 'rgba(15,72,220,0.10)'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl animate-pulse delay-500" style={{backgroundColor: 'rgba(15,72,220,0.08)'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border shadow-sm" style={{borderColor: 'rgba(15,72,220,0.2)'}}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: '#0F48DC'}}></span>
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                Trusted by 10,000+ businesses worldwide
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span style={{color: '#0F48DC'}}>Conversational AI</span>
              <br />
              <span className="text-gray-900">Powered Customer</span>
              <br />
              <span className="text-gray-900">Engagement Platform</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Tubelight is a CPaaS company that empowers brands, through its Omnichannel communication platform, to engage their customers via the channel of their choice. Empowering Brands for a Superlative Customer experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-white text-base sm:text-lg font-bold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
                style={{backgroundColor: '#0F48DC'}}
              >
                Try for Free
                <i className="ri-arrow-right-line ml-2"></i>
              </a>
              <a
                href="#"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 text-base sm:text-lg font-bold rounded-xl border-2 hover:shadow-xl transform hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
                style={{borderColor: 'rgba(15,72,220,0.3)'}}
              >
                Talk to Expert
                <i className="ri-phone-line ml-2"></i>
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8">
              {[
                { value: '10K', label: 'SMS Per Second' },
                { value: '<300MS', label: 'Platform Latency' },
                { value: '99.99%', label: 'Infrastructure Uptime' },
                { value: '5K', label: 'Calls Per Second' },
              ].map((m, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold" style={{color: '#0F48DC'}}>{m.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Floating Dashboard Mockup */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20 animate-pulse" style={{backgroundColor: '#0F48DC'}}></div>
              
              {/* Dashboard Card */}
              <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Header */}
                <div className="p-4 sm:p-6" style={{backgroundColor: '#0F48DC'}}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white/80 rounded-full"></div>
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white/60 rounded-full"></div>
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white/40 rounded-full"></div>
                    </div>
                    <div className="text-white text-xs sm:text-sm font-semibold">Tubelight Dashboard</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl" style={{backgroundColor: 'rgba(15,72,220,0.06)'}}>
                      <div className="flex items-center space-x-2 mb-2">
                        <i className="ri-message-3-line text-base sm:text-xl" style={{color: '#0F48DC'}}></i>
                        <span className="text-xs sm:text-sm font-medium text-gray-600">SMS Sent</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">1.2M</div>
                      <div className="text-[10px] sm:text-xs text-green-600 mt-1">↑ 23% this month</div>
                    </div>
                    <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl" style={{backgroundColor: 'rgba(15,72,220,0.06)'}}>
                      <div className="flex items-center space-x-2 mb-2">
                        <i className="ri-whatsapp-line text-green-600 text-base sm:text-xl"></i>
                        <span className="text-xs sm:text-sm font-medium text-gray-600">WhatsApp</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">850K</div>
                      <div className="text-[10px] sm:text-xs text-green-600 mt-1">↑ 18% this month</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-around py-3 sm:py-4 bg-gray-50 rounded-xl sm:rounded-2xl">
                    {[
                      { icon: 'ri-message-3-fill', label: 'SMS' },
                      { icon: 'ri-whatsapp-fill', label: 'WhatsApp', color: '#22c55e' },
                      { icon: 'ri-phone-fill', label: 'Voice' },
                      { icon: 'ri-mail-fill', label: 'Email' },
                    ].map((ch, i) => (
                      <div key={i} className="text-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-1 sm:mb-2 mx-auto" style={{backgroundColor: ch.color || '#0F48DC'}}>
                          <i className={`${ch.icon} text-white text-sm sm:text-base lg:text-xl`}></i>
                        </div>
                        <div className="text-[10px] sm:text-xs font-medium text-gray-600">{ch.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between p-2 sm:p-3 bg-white border border-gray-100 rounded-lg sm:rounded-xl hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700">OTP delivered</span>
                      </div>
                      <span className="text-[10px] sm:text-xs text-gray-500">2 min ago</span>
                    </div>
                    <div className="flex items-center justify-between p-2 sm:p-3 bg-white border border-gray-100 rounded-lg sm:rounded-xl hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#0F48DC'}}></div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700">Campaign sent</span>
                      </div>
                      <span className="text-[10px] sm:text-xs text-gray-500">5 min ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
