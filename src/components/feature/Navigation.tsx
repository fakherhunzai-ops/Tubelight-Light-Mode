import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, string> = {
  'SMS': 'ri-message-2-line',
  'WhatsApp Business API': 'ri-whatsapp-line',
  'Voice': 'ri-phone-line',
  'RCS Messaging': 'ri-chat-4-line',
  'Conversational AI': 'ri-robot-line',
  'MuCH': 'ri-shield-check-line',
  'Flash Call': 'ri-flashlight-line',
  'Number Lookup': 'ri-search-eye-line',
  'Campaigner': 'ri-megaphone-line',
  '1nbox': 'ri-inbox-line',
  'Contact Center Suite': 'ri-headphone-line',
  'Authentication & OTP': 'ri-lock-password-line',
  'Marketing Campaigns': 'ri-bar-chart-line',
  'Transactional Alerts': 'ri-notification-3-line',
  'Documentation': 'ri-file-code-line',
  'SDKs & Libraries': 'ri-code-s-slash-line',
  'API Reference': 'ri-terminal-box-line',
  'Code Samples': 'ri-braces-line',
  'API Status': 'ri-pulse-line',
  'Changelog': 'ri-git-commit-line',
  'Blog': 'ri-article-line',
  'Case Studies': 'ri-trophy-line',
  'Help Center': 'ri-question-line',
  'Webinars': 'ri-live-line',
  'Guides & Tutorials': 'ri-book-open-line',
  'Contact Us': 'ri-customer-service-2-line',
  'About Us': 'ri-building-line',
  'Careers': 'ri-briefcase-line',
  'Partners': 'ri-handshake-line',
  'Press Kit': 'ri-newspaper-line',
  'Trust & Security': 'ri-shield-star-line',
  'Contact': 'ri-mail-send-line',
};

const colorMap: Record<string, string> = {
  'SMS': 'bg-green-50 text-green-600',
  'WhatsApp Business API': 'bg-emerald-50 text-emerald-600',
  'Voice': 'bg-orange-50 text-orange-600',
  'RCS Messaging': 'bg-purple-50 text-purple-600',
  'Conversational AI': 'bg-pink-50 text-pink-600',
  'MuCH': 'bg-blue-50 text-[#0F48DC]',
  'Flash Call': 'bg-yellow-50 text-yellow-600',
  'Number Lookup': 'bg-teal-50 text-teal-600',
  'Campaigner': 'bg-red-50 text-red-600',
  '1nbox': 'bg-indigo-50 text-indigo-600',
  'Contact Center Suite': 'bg-cyan-50 text-cyan-600',
  'Authentication & OTP': 'bg-blue-50 text-[#0F48DC]',
  'Marketing Campaigns': 'bg-orange-50 text-orange-600',
  'Transactional Alerts': 'bg-yellow-50 text-yellow-600',
  'Documentation': 'bg-blue-50 text-[#0F48DC]',
  'SDKs & Libraries': 'bg-green-50 text-green-600',
  'API Reference': 'bg-purple-50 text-purple-600',
  'Code Samples': 'bg-pink-50 text-pink-600',
  'API Status': 'bg-emerald-50 text-emerald-600',
  'Changelog': 'bg-orange-50 text-orange-600',
  'Blog': 'bg-blue-50 text-[#0F48DC]',
  'Case Studies': 'bg-yellow-50 text-yellow-600',
  'Help Center': 'bg-teal-50 text-teal-600',
  'Webinars': 'bg-red-50 text-red-600',
  'Guides & Tutorials': 'bg-indigo-50 text-indigo-600',
  'Contact Us': 'bg-cyan-50 text-cyan-600',
  'About Us': 'bg-blue-50 text-[#0F48DC]',
  'Careers': 'bg-green-50 text-green-600',
  'Partners': 'bg-purple-50 text-purple-600',
  'Press Kit': 'bg-orange-50 text-orange-600',
  'Trust & Security': 'bg-teal-50 text-teal-600',
  'Contact': 'bg-pink-50 text-pink-600',
};

interface DropdownItem {
  name: string;
  desc: string;
  badge?: string;
}

interface MegaMenuConfig {
  columns: { heading: string; items: DropdownItem[] }[];
  featured?: { title: string; desc: string; cta: string; icon: string; color: string };
}

const megaMenus: Record<string, MegaMenuConfig> = {
  products: {
    columns: [
      {
        heading: 'Messaging',
        items: [
          { name: 'SMS', desc: 'High-throughput global SMS delivery' },
          { name: 'WhatsApp Business API', desc: 'Rich messaging for 2B+ users', badge: 'Popular' },
          { name: 'RCS Messaging', desc: 'Next-gen branded rich messaging' },
        ],
      },
      {
        heading: 'Voice & AI',
        items: [
          { name: 'Voice', desc: 'Cloud telephony & IVR solutions' },
          { name: 'Conversational AI', desc: 'AI-powered chatbots & voicebots', badge: 'New' },
          { name: 'Flash Call', desc: 'Instant phone number verification' },
        ],
      },
      {
        heading: 'Intelligence',
        items: [
          { name: 'MuCH', desc: 'Omni Channel authenticated service' },
          { name: 'Number Lookup', desc: 'Real-time phone number intelligence' },
        ],
      },
    ],
    featured: {
      title: 'Start Building Today',
      desc: 'Get API credentials instantly. No credit card required.',
      cta: 'Try for Free →',
      icon: 'ri-rocket-line',
      color: '#0F48DC',
    },
  },
  solutions: {
    columns: [
      {
        heading: 'Platforms',
        items: [
          { name: 'Campaigner', desc: 'Intelligent multi-channel campaigns', badge: 'Popular' },
          { name: '1nbox', desc: 'Unified omnichannel inbox' },
          { name: 'Contact Center Suite', desc: 'Omnichannel customer engagement' },
        ],
      },
      {
        heading: 'Use Cases',
        items: [
          { name: 'Authentication & OTP', desc: 'Secure 2FA & verification' },
          { name: 'Marketing Campaigns', desc: 'Drive engagement at scale' },
          { name: 'Transactional Alerts', desc: 'Real-time customer notifications' },
        ],
      },
    ],
    featured: {
      title: 'See It in Action',
      desc: 'Book a personalized demo with our solutions team.',
      cta: 'Book a Demo →',
      icon: 'ri-presentation-line',
      color: '#0F48DC',
    },
  },
  developers: {
    columns: [
      {
        heading: 'Get Started',
        items: [
          { name: 'Documentation', desc: 'API references & integration guides' },
          { name: 'SDKs & Libraries', desc: 'Node.js, Python, Java, PHP & more' },
          { name: 'API Reference', desc: 'Complete REST API documentation' },
        ],
      },
      {
        heading: 'Resources',
        items: [
          { name: 'Code Samples', desc: 'Ready-to-use code examples' },
          { name: 'API Status', desc: 'Real-time platform status' },
          { name: 'Changelog', desc: 'Latest updates & releases' },
        ],
      },
    ],
    featured: {
      title: 'Developer-First Platform',
      desc: 'Integrate in minutes with our clean REST APIs and SDKs.',
      cta: 'View Docs →',
      icon: 'ri-code-s-slash-line',
      color: '#0F48DC',
    },
  },
  resources: {
    columns: [
      {
        heading: 'Learn',
        items: [
          { name: 'Blog', desc: 'Latest insights & product updates' },
          { name: 'Guides & Tutorials', desc: 'Step-by-step integration guides' },
          { name: 'Webinars', desc: 'Live & on-demand sessions' },
        ],
      },
      {
        heading: 'Support',
        items: [
          { name: 'Case Studies', desc: 'Customer success stories' },
          { name: 'Help Center', desc: 'Support documentation' },
          { name: 'Contact Us', desc: 'Get in touch with our team' },
        ],
      },
    ],
    featured: {
      title: 'Customer Stories',
      desc: 'See how leading brands use Tubelight to grow.',
      cta: 'Read Case Studies →',
      icon: 'ri-trophy-line',
      color: '#0F48DC',
    },
  },
  company: {
    columns: [
      {
        heading: 'Who We Are',
        items: [
          { name: 'About Us', desc: 'Our story & mission' },
          { name: 'Careers', desc: 'Join our growing team', badge: 'Hiring' },
          { name: 'Partners', desc: 'Become a Tubelight partner' },
        ],
      },
      {
        heading: 'Trust',
        items: [
          { name: 'Press Kit', desc: 'Media resources & brand assets' },
          { name: 'Trust & Security', desc: 'Compliance & data protection' },
          { name: 'Contact', desc: 'Reach out to us' },
        ],
      },
    ],
    featured: {
      title: 'We\'re Hiring!',
      desc: 'Join a fast-growing team building the future of communications.',
      cta: 'View Open Roles →',
      icon: 'ri-team-line',
      color: '#0F48DC',
    },
  },
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleDropdown = (item: string) => {
    setOpenDropdown(prev => (prev === item ? null : item));
  };

  const toggleMobileAccordion = (item: string) => {
    setMobileAccordion(prev => (prev === item ? null : item));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileAccordion(null);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={navRef}>
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group flex-shrink-0">
              <img src="/logo.png" alt="Tubelight Communications" className="h-8 w-auto transform group-hover:scale-105 transition-transform" />
              <span className="text-lg lg:text-xl font-bold text-gray-900">Tubelight</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {(['products', 'solutions', 'developers', 'resources', 'company'] as const).map((item) => (
                <div key={item} className="relative">
                  <button
                    onClick={() => toggleDropdown(item)}
                    className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer flex items-center whitespace-nowrap ${
                      isScrolled
                        ? openDropdown === item ? 'text-[#0F48DC] bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                        : openDropdown === item ? 'text-[#0F48DC] bg-white/70' : 'text-gray-800 hover:text-gray-900 hover:bg-white/50'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <i className={`ri-arrow-down-s-line ml-1 text-xs transition-transform duration-200 ${openDropdown === item ? 'rotate-180' : ''}`}></i>
                  </button>

                  {openDropdown === item && (
                    <div
                      className="absolute top-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                      style={{ left: '50%', transform: 'translateX(-50%)', minWidth: '680px', maxWidth: '90vw' }}
                    >
                      {/* Top accent bar */}
                      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #0F48DC, #4f8ef7)' }}></div>

                      <div className="flex flex-col xl:flex-row">
                        {/* Columns */}
                        <div className="flex-1 p-5 grid gap-x-6" style={{ gridTemplateColumns: `repeat(${megaMenus[item].columns.length}, 1fr)` }}>
                          {megaMenus[item].columns.map((col, ci) => (
                            <div key={ci}>
                              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 px-1">{col.heading}</p>
                              <div className="space-y-0.5">
                                {col.items.map((subItem, idx) => (
                                  <a
                                    key={idx}
                                    href="#"
                                    onClick={() => setOpenDropdown(null)}
                                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition-all group cursor-pointer"
                                  >
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${colorMap[subItem.name] || 'bg-gray-100 text-gray-500'}`}>
                                      <i className={`${iconMap[subItem.name] || 'ri-apps-line'} text-sm`}></i>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2">
                                        <span className="font-semibold text-gray-900 text-sm group-hover:text-[#0F48DC] transition-colors leading-tight">
                                          {subItem.name}
                                        </span>
                                        {subItem.badge && (
                                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white whitespace-nowrap" style={{ backgroundColor: subItem.badge === 'New' ? '#10b981' : subItem.badge === 'Hiring' ? '#f59e0b' : '#0F48DC' }}>
                                            {subItem.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-xs text-gray-500 mt-0.5 leading-snug">{subItem.desc}</p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Featured Panel */}
                        {megaMenus[item].featured && (
                          <div className="w-full xl:w-52 flex-shrink-0 p-5 border-t xl:border-t-0 xl:border-l border-gray-100" style={{ background: 'linear-gradient(135deg, #f0f5ff 0%, #e8f0fe 100%)' }}>
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: '#0F48DC' }}>
                              <i className={`${megaMenus[item].featured!.icon} text-white text-lg`}></i>
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm leading-snug mb-1.5">
                              {megaMenus[item].featured!.title}
                            </h4>
                            <p className="text-xs text-gray-500 leading-relaxed mb-4">
                              {megaMenus[item].featured!.desc}
                            </p>
                            <a
                              href="#"
                              onClick={() => setOpenDropdown(null)}
                              className="inline-flex items-center text-xs font-bold transition-all hover:gap-2 gap-1 cursor-pointer"
                              style={{ color: '#0F48DC' }}
                            >
                              {megaMenus[item].featured!.cta}
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Bottom bar */}
                      <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs text-gray-400">Tubelight Communications</span>
                        <a
                          href="#"
                          onClick={() => setOpenDropdown(null)}
                          className="text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                          style={{ color: '#0F48DC' }}
                        >
                          View all {item} <i className="ri-arrow-right-line"></i>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <Link
                to="/pricing"
                className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${isScrolled ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50' : 'text-gray-800 hover:text-gray-900 hover:bg-white/50'}`}
              >
                Pricing
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
              <a
                href="https://tubelightcommunications.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 xl:px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer"
              >
                Sign In
              </a>
              <a
                href="https://tubelightcommunications.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 xl:px-6 py-2.5 text-white text-sm font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
                style={{ backgroundColor: '#0F48DC' }}
              >
                Try for Free
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 sm:p-3 text-gray-700 hover:text-gray-900 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl sm:text-2xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMobileMenu}
        ></div>

        {/* Drawer */}
        <div
          className={`absolute top-16 left-0 right-0 bottom-0 bg-white overflow-y-auto transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
            {/* Accordion Menu Items */}
            {(['products', 'solutions', 'developers', 'resources', 'company'] as const).map((item) => (
              <div key={item} className="border-b border-gray-100 pb-3 sm:pb-4">
                <button
                  onClick={() => toggleMobileAccordion(item)}
                  className="w-full flex items-center justify-between py-3 sm:py-4 text-left cursor-pointer min-h-[44px]"
                >
                  <span className="text-base sm:text-lg font-semibold text-gray-900 capitalize">{item}</span>
                  <i className={`ri-arrow-down-s-line text-lg sm:text-xl transition-transform duration-200 ${mobileAccordion === item ? 'rotate-180' : ''}`}></i>
                </button>

                {mobileAccordion === item && (
                  <div className="mt-2 space-y-4 pl-2">
                    {megaMenus[item].columns.map((col, ci) => (
                      <div key={ci}>
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{col.heading}</p>
                        <div className="space-y-2">
                          {col.items.map((subItem, idx) => (
                            <a
                              key={idx}
                              href="#"
                              onClick={closeMobileMenu}
                              className="flex items-start gap-3 p-2 rounded-lg hover:bg-blue-50 transition-all cursor-pointer"
                            >
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${colorMap[subItem.name] || 'bg-gray-100 text-gray-500'}`}>
                                <i className={`${iconMap[subItem.name] || 'ri-apps-line'} text-sm`}></i>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="font-semibold text-gray-900 text-sm leading-tight">
                                    {subItem.name}
                                  </span>
                                  {subItem.badge && (
                                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white whitespace-nowrap" style={{ backgroundColor: subItem.badge === 'New' ? '#10b981' : subItem.badge === 'Hiring' ? '#f59e0b' : '#0F48DC' }}>
                                      {subItem.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-gray-500 mt-0.5 leading-snug">{subItem.desc}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Featured in Mobile */}
                    {megaMenus[item].featured && (
                      <div className="mt-4 p-4 rounded-xl" style={{ background: 'linear-gradient(135deg, #f0f5ff 0%, #e8f0fe 100%)' }}>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: '#0F48DC' }}>
                          <i className={`${megaMenus[item].featured!.icon} text-white text-lg`}></i>
                        </div>
                        <h4 className="font-bold text-gray-900 text-sm leading-snug mb-1.5">
                          {megaMenus[item].featured!.title}
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed mb-3">
                          {megaMenus[item].featured!.desc}
                        </p>
                        <a
                          href="#"
                          onClick={closeMobileMenu}
                          className="inline-flex items-center text-xs font-bold gap-1 cursor-pointer"
                          style={{ color: '#0F48DC' }}
                        >
                          {megaMenus[item].featured!.cta}
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Pricing Link */}
            <Link
              to="/pricing"
              onClick={closeMobileMenu}
              className="block py-3 text-base font-semibold text-gray-900"
            >
              Pricing
            </Link>

            {/* CTA Buttons in Mobile */}
            <div className="pt-4 sm:pt-5 space-y-2.5 sm:space-y-3 border-t border-gray-100">
              <a
                href="https://tubelightcommunications.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="block w-full px-6 py-3 sm:py-3.5 text-center text-sm sm:text-base font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer min-h-[44px] flex items-center justify-center"
              >
                Sign In
              </a>
              <a
                href="https://tubelightcommunications.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="block w-full px-6 py-3 sm:py-3.5 text-center text-white text-sm sm:text-base font-semibold rounded-lg hover:shadow-lg transition-all cursor-pointer min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#0F48DC' }}
              >
                Try for Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;