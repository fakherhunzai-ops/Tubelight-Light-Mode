
export default function Footer() {
  const footerLinks = {
    Products: ['SMS', 'WhatsApp Business API', 'Voice', 'RCS Messaging', 'Conversational AI', 'MuCH', 'Flash Call', 'Number Lookup'],
    Solutions: ['Campaigner', '1nbox', 'Contact Center Suite', 'Authentication & OTP', 'Marketing Campaigns', 'Transactional Alerts'],
    Developers: ['Documentation', 'API Reference', 'SDKs & Libraries', 'Code Examples', 'Integration Guides', 'API Status', 'Changelog'],
    Resources: ['Blog', 'Case Studies', 'Help Center', 'Webinars', 'Guides & Tutorials', 'Pricing Calculator'],
    Company: ['About Us', 'Careers', 'Partners', 'Contact Us', 'Press Kit', 'Trust & Security', 'Compliance']
  };

  const socialLinks = [
    { icon: 'ri-linkedin-line', url: 'https://www.linkedin.com/company/tubelight-communications/' },
    { icon: 'ri-twitter-x-line', url: 'https://twitter.com/tubelightcomm' },
    { icon: 'ri-github-line', url: '#' },
    { icon: 'ri-youtube-line', url: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-[1440px] mx-auto px-8 py-20">
        <div className="grid grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{backgroundColor: '#0F48DC'}}>
                <i className="ri-flashlight-fill text-white text-lg"></i>
              </div>
              <span className="text-lg font-bold text-white">Tubelight</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              A CPaaS company that empowers brands through its Omnichannel communication platform to engage customers via the channel of their choice.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:text-white transition-all cursor-pointer"
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0F48DC')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '')}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-all cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Row */}
        <div className="mb-10 flex items-center gap-10 py-6 px-8 rounded-2xl" style={{backgroundColor: 'rgba(15,72,220,0.15)'}}>
          <div className="flex items-center gap-3 text-gray-300">
            <i className="ri-phone-line text-xl" style={{color: '#5B8EF0'}}></i>
            <span className="text-sm font-medium">+91 77084 72894</span>
          </div>
          <div className="w-px h-5 bg-gray-700"></div>
          <div className="flex items-center gap-3 text-gray-300">
            <i className="ri-mail-line text-xl" style={{color: '#5B8EF0'}}></i>
            <span className="text-sm font-medium">hello@tubelightcommunications.com</span>
          </div>
          <div className="w-px h-5 bg-gray-700"></div>
          <div className="flex items-center gap-3 text-gray-300">
            <i className="ri-map-pin-line text-xl" style={{color: '#5B8EF0'}}></i>
            <span className="text-sm font-medium">India · Global Operations</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex items-center justify-between">
          <p className="text-sm text-gray-400">
            © 2024 Tubelight Communications Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {['Privacy Policy', 'Terms of Service', 'Security & Compliance', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
