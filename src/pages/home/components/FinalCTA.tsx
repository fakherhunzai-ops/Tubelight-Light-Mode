export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden" style={{backgroundColor: '#0F48DC'}}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            Get in touch!
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto px-4">
            Ready to transform your customer communications? Start for free or talk to our experts to find the right solution for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 mb-10 sm:mb-12 lg:mb-16">
          {/* Left Path - Try for Free */}
          <div className="text-center space-y-4 sm:space-y-5 lg:space-y-6 p-6 sm:p-8 lg:p-12 bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/20 hover:bg-white/15 transition-all group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl sm:rounded-2xl bg-white/20 mx-auto group-hover:scale-110 transition-transform">
              <i className="ri-rocket-line text-2xl sm:text-3xl lg:text-4xl text-white"></i>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h3 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                Try for Free
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-md mx-auto px-4">
                Get your API credentials instantly. Start sending messages in minutes with our developer-friendly platform. No credit card required.
              </p>
            </div>

            <a
              href="https://tubelightcommunications.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0F48DC] text-sm sm:text-base font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2 mx-auto whitespace-nowrap cursor-pointer"
            >
              Start Building Free
              <i className="ri-arrow-right-line text-lg sm:text-xl"></i>
            </a>

            <p className="text-xs sm:text-sm text-white/80 px-4">
              Free trial credits • No credit card required • 5-minute setup
            </p>
          </div>

          {/* Right Path - Talk to Expert */}
          <div className="text-center space-y-4 sm:space-y-5 lg:space-y-6 p-6 sm:p-8 lg:p-12 bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/20 hover:bg-white/15 transition-all group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl sm:rounded-2xl bg-white/20 mx-auto group-hover:scale-110 transition-transform">
              <i className="ri-customer-service-2-line text-2xl sm:text-3xl lg:text-4xl text-white"></i>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h3 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                Talk to Expert
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-md mx-auto px-4">
                Need enterprise solutions or custom integrations? Our experts are ready to help you design the perfect communication strategy for your business.
              </p>
            </div>

            <a
              href="mailto:hello@tubelightcommunications.com"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white text-sm sm:text-base font-semibold rounded-xl hover:bg-white hover:text-[#0F48DC] transition-all inline-flex items-center gap-2 mx-auto whitespace-nowrap cursor-pointer"
            >
              Contact Sales
              <i className="ri-mail-send-line text-lg sm:text-xl"></i>
            </a>

            <p className="text-xs sm:text-sm text-white/80 px-4">
              Custom pricing • Dedicated support • Enterprise SLA • 24/7 availability
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-white/10 rounded-xl sm:rounded-2xl border border-white/20 w-full sm:w-auto">
            <div className="flex items-center gap-2 sm:gap-3 text-white text-sm sm:text-base">
              <i className="ri-phone-line text-lg sm:text-xl"></i>
              <span className="font-medium">+91 77084 72894</span>
            </div>
            <div className="hidden sm:block w-px h-5 sm:h-6 bg-white/30"></div>
            <div className="flex items-center gap-2 sm:gap-3 text-white text-sm sm:text-base break-all sm:break-normal">
              <i className="ri-mail-line text-lg sm:text-xl"></i>
              <span className="font-medium">hello@tubelightcommunications.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}