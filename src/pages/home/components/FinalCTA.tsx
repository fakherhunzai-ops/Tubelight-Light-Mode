
export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden" style={{backgroundColor: '#0F48DC'}}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Plus_Jakarta_Sans'] text-5xl font-bold text-white mb-4">
            Get in touch!
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to transform your customer communications? Start for free or talk to our experts to find the right solution for your business.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16">
          {/* Left Path - Try for Free */}
          <div className="text-center space-y-6 p-12 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/15 transition-all group">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/20 mx-auto group-hover:scale-110 transition-transform">
              <i className="ri-rocket-line text-4xl text-white"></i>
            </div>

            <div className="space-y-3">
              <h3 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-white">
                Try for Free
              </h3>
              <p className="text-lg text-white/90 max-w-md mx-auto">
                Get your API credentials instantly. Start sending messages in minutes with our developer-friendly platform. No credit card required.
              </p>
            </div>

            <a
              href="https://tubelightcommunications.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#0F48DC] text-base font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2 mx-auto whitespace-nowrap cursor-pointer"
            >
              Start Building Free
              <i className="ri-arrow-right-line text-xl"></i>
            </a>

            <p className="text-sm text-white/80">
              Free trial credits • No credit card required • 5-minute setup
            </p>
          </div>

          {/* Right Path - Talk to Expert */}
          <div className="text-center space-y-6 p-12 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/15 transition-all group">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/20 mx-auto group-hover:scale-110 transition-transform">
              <i className="ri-customer-service-2-line text-4xl text-white"></i>
            </div>

            <div className="space-y-3">
              <h3 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-white">
                Talk to Expert
              </h3>
              <p className="text-lg text-white/90 max-w-md mx-auto">
                Need enterprise solutions or custom integrations? Our experts are ready to help you design the perfect communication strategy for your business.
              </p>
            </div>

            <a
              href="mailto:hello@tubelightcommunications.com"
              className="px-8 py-4 bg-transparent border-2 border-white text-white text-base font-semibold rounded-xl hover:bg-white hover:text-[#0F48DC] transition-all inline-flex items-center gap-2 mx-auto whitespace-nowrap cursor-pointer"
            >
              Contact Sales
              <i className="ri-mail-send-line text-xl"></i>
            </a>

            <p className="text-sm text-white/80">
              Custom pricing • Dedicated support • Enterprise SLA • 24/7 availability
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-10 py-5 bg-white/10 rounded-2xl border border-white/20">
            <div className="flex items-center gap-3 text-white">
              <i className="ri-phone-line text-xl"></i>
              <span className="font-medium">+91 77084 72894</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-3 text-white">
              <i className="ri-mail-line text-xl"></i>
              <span className="font-medium">hello@tubelightcommunications.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
