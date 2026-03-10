import { useState } from 'react';

const services = ['SMS API', 'WhatsApp Business API', 'Voice API', 'OTP & 2FA', 'Email API', 'RCS Messaging', 'Other'];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    if (message.length > 500) return;

    setLoading(true);
    const data = new URLSearchParams();
    new FormData(form).forEach((value, key) => {
      if (key === 'services') return;
    });

    // Collect all form fields
    const formData = new FormData(form);
    const selectedServices: string[] = [];
    formData.forEach((value, key) => {
      if (key === 'services') {
        selectedServices.push(value as string);
      } else {
        data.append(key, value as string);
      }
    });
    if (selectedServices.length > 0) {
      data.append('services', selectedServices.join(', '));
    }

    try {
      await fetch('https://readdy.ai/api/form/d6ir029boei3uoqmppag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      setSubmitted(true);
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#F7F9FF]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <span
            className="inline-block text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4"
            style={{ backgroundColor: '#0F48DC18', color: '#0F48DC' }}
          >
            Contact Us
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Get in <span style={{ color: '#0F48DC' }}>Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto px-4">
            Have questions about our platform? Our team is ready to help you find the right communication solution for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left info panel */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Contact cards */}
            {[
              {
                icon: 'ri-phone-line',
                title: 'Call Us',
                detail: '+91 77084 72894',
                sub: 'Mon–Fri, 9am–6pm IST',
              },
              {
                icon: 'ri-mail-line',
                title: 'Email Us',
                detail: 'hello@tubelightcommunications.com',
                sub: 'We reply within 24 hours',
              },
              {
                icon: 'ri-map-pin-line',
                title: 'Our Office',
                detail: 'Mumbai, India',
                sub: 'Global delivery, local support',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl shrink-0"
                  style={{ backgroundColor: '#0F48DC15' }}
                >
                  <i className={`${item.icon} text-lg sm:text-xl`} style={{ color: '#0F48DC' }}></i>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{item.title}</p>
                  <p className="font-semibold text-gray-800 text-sm break-words">{item.detail}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: 'ri-linkedin-fill', href: 'https://www.linkedin.com/company/tubelight-communications/' },
                  { icon: 'ri-twitter-x-line', href: 'https://twitter.com/tubelightcomm' },
                  { icon: 'ri-youtube-line', href: 'https://tubelightcommunications.com' },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:text-white transition-all cursor-pointer"
                    style={{ ['--hover-bg' as string]: '#0F48DC' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = '#0F48DC';
                      (e.currentTarget as HTMLElement).style.borderColor = '#0F48DC';
                      (e.currentTarget as HTMLElement).style.color = '#fff';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = '';
                      (e.currentTarget as HTMLElement).style.borderColor = '';
                      (e.currentTarget as HTMLElement).style.color = '';
                    }}
                  >
                    <i className={`${s.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3 bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center gap-3 sm:gap-4">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-2"
                  style={{ backgroundColor: '#0F48DC15' }}
                >
                  <i className="ri-checkbox-circle-line text-3xl sm:text-4xl" style={{ color: '#0F48DC' }}></i>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold text-gray-900">Message Sent!</h3>
                <p className="text-sm sm:text-base text-gray-500 max-w-sm px-4">
                  Thanks for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer whitespace-nowrap"
                  style={{ backgroundColor: '#0F48DC' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                data-readdy-form
                id="contact-form"
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-2.5">First Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      placeholder="John"
                      className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-gray-200 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all min-h-[44px]"
                      style={{ ['--tw-ring-color' as string]: '#0F48DC40' }}
                      onFocus={e => (e.target.style.borderColor = '#0F48DC')}
                      onBlur={e => (e.target.style.borderColor = '')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-2.5">Last Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      placeholder="Doe"
                      className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-gray-200 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all min-h-[44px]"
                      onFocus={e => (e.target.style.borderColor = '#0F48DC')}
                      onBlur={e => (e.target.style.borderColor = '')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-2.5">Work Email <span className="text-red-400">*</span></label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-gray-200 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all min-h-[44px]"
                    onFocus={e => (e.target.style.borderColor = '#0F48DC')}
                    onBlur={e => (e.target.style.borderColor = '')}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-2.5">Company</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Acme Inc."
                      className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-gray-200 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all min-h-[44px]"
                      onFocus={e => (e.target.style.borderColor = '#0F48DC')}
                      onBlur={e => (e.target.style.borderColor = '')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-2.5">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-gray-200 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all min-h-[44px]"
                      onFocus={e => (e.target.style.borderColor = '#0F48DC')}
                      onBlur={e => (e.target.style.borderColor = '')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2.5 sm:mb-3">Interested In</label>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {services.map(service => (
                      <label key={service} className="flex items-center gap-2 cursor-pointer touch-target min-h-[44px]">
                        <input type="checkbox" name="services" value={service} className="hidden peer" />
                        <span className="px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-lg sm:rounded-full text-xs sm:text-sm font-medium border border-gray-200 text-gray-600 peer-checked:text-white transition-all cursor-pointer select-none"
                          style={{}}
                          onMouseEnter={e => (e.currentTarget.style.borderColor = '#0F48DC')}
                          onMouseLeave={e => (e.currentTarget.style.borderColor = '')}
                        >
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-2.5">
                    Message <span className="text-red-400">*</span>
                    <span className={`ml-2 text-xs font-normal ${charCount > 480 ? 'text-red-400' : 'text-gray-400'}`}>
                      {charCount}/500
                    </span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    maxLength={500}
                    placeholder="Tell us about your use case or ask us anything..."
                    onChange={e => setCharCount(e.target.value.length)}
                    className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-gray-200 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all resize-none min-h-[120px]"
                    onFocus={e => (e.target.style.borderColor = '#0F48DC')}
                    onBlur={e => (e.target.style.borderColor = '')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 sm:py-4 rounded-lg sm:rounded-xl text-white font-semibold text-base sm:text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60 cursor-pointer whitespace-nowrap min-h-[44px]"
                  style={{ backgroundColor: '#0F48DC' }}
                >
                  {loading ? (
                    <>
                      <i className="ri-loader-4-line animate-spin text-lg sm:text-xl"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="ri-send-plane-line text-lg sm:text-xl"></i>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting, you agree to our{' '}
                  <a href="#" className="underline hover:text-gray-600">Privacy Policy</a>.
                  We never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}