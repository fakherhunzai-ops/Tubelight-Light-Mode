export default function DeveloperSection() {
  const codeExample = `// Send SMS with Tubelight API
const response = await fetch('https://api.tubelight.com/v1/sms', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    to: '+919876543210',
    message: 'Hello from Tubelight!',
    sender_id: 'TLIGHT'
  })
});`;

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content - Stacks on top on mobile */}
          <div className="order-1">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full mb-4 sm:mb-6 border border-blue-500/30">
              <i className="ri-code-s-slash-line text-lg sm:text-xl"></i>
              <span className="font-semibold text-sm sm:text-base">Developer First</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              For Developers,<br />By Developers
            </h2>

            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Simple, powerful APIs designed for developers. Get started in minutes with our comprehensive documentation, SDKs, and 24/7 developer support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <i className="ri-book-open-line text-blue-400 text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Rich Documentation</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Detailed guides and API references</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <i className="ri-terminal-box-line text-green-400 text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Multiple SDKs</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Node.js, Python, PHP, Java & more</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <i className="ri-flashlight-line text-purple-400 text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Quick Integration</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Get started in under 5 minutes</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <i className="ri-customer-service-2-line text-orange-400 text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1">24/7 Support</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Always here to help you build</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="px-6 sm:px-8 py-3 sm:py-3.5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl whitespace-nowrap text-sm sm:text-base">
                View Documentation
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/20 whitespace-nowrap text-sm sm:text-base">
                Explore SDKs
              </button>
            </div>
          </div>

          {/* Right Code Block - Stacks below on mobile */}
          <div className="order-2 relative">
            {/* Floating Stats Badge - Repositioned for mobile */}
            <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-4 lg:-top-8 lg:-right-8 bg-gradient-to-br from-green-400 to-green-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-2xl z-10 transform rotate-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold">API Status</div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold">99.99% Uptime</div>
                </div>
              </div>
            </div>

            {/* Code Block with horizontal scroll on mobile */}
            <div className="bg-gray-950 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              {/* Code Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-gray-900 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs sm:text-sm text-gray-400 font-mono">send-sms.js</span>
              </div>

              {/* Code Content - Scrollable on mobile */}
              <div className="p-4 sm:p-6 overflow-x-auto">
                <pre className="text-xs sm:text-sm text-gray-300 font-mono leading-relaxed">
                  <code>{codeExample}</code>
                </pre>
              </div>

              {/* Code Footer */}
              <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-900 border-t border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                <div className="flex items-center gap-2">
                  <i className="ri-check-double-line text-green-400 text-base sm:text-lg"></i>
                  <span className="text-xs sm:text-sm text-gray-400">Request successful</span>
                </div>
                <button className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 whitespace-nowrap">
                  <i className="ri-file-copy-line"></i>
                  Copy code
                </button>
              </div>
            </div>

            {/* Additional Info Cards - Stack on mobile */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-xs sm:text-sm text-gray-400">Programming Languages</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">50K+</div>
                <div className="text-xs sm:text-sm text-gray-400">Active Developers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
