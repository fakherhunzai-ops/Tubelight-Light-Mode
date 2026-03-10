
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
    <section className="py-24 bg-[#F7F9FF]" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: '#0F48DC18', color: '#0F48DC' }}
          >
            Contact Us
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get in <span style={{ color: '#0F48DC' }}>Touch</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Have questions about our platform? Our team is ready to help you find the right communication solution for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left info panel */}
          <div className="lg:col-span-2 space-y-8">
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
                className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-xl shrink-0"
                  style={{ backgroundColor: '#0F48DC15' }}
                >
                  <i className={`${item.icon} text-xl`} style={{ color: '#0F48DC' }}></i>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{item.title}</p>
                  <p className="font-semibold text-gray-800 text-sm">{item.detail}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
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
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-lg border border-gray-100 p-8 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-2"
                  style={{ backgroundColor: '#0F48DC15' }}
                >
                  <i className="ri-checkbox-circle-line text-4xl" style={{ color: '#0F48DC' }}></i>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900">Message Sent!</h3>
                <p className="text-gray-500 max-w-sm">
                  Thanks for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer whitespace-nowrap"
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
                className="space-y-5"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
                      style={{ ['--tw-ring-color' as string]: '#0F48DC40' }}
                      onFocus={e => (e.target.style.borderColor = '#0F48DC')}
                      onBlur={e => (e.target.style.borderColor = '')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-all"
                      onFocus={e => (e.target.style.borderColor = '#0F48DC')}
                      onBlur={e => (e.target.style.borderColor = '')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Work Email <span className="text-red-400">*</span></label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-all"
                    onFocus={e => (e.target.style.borderColor = '#0F48DC')}
                    onBlur={e => (e.target.style.borderColor = '')}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Company</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-all"
                      onFocus={e => (e.target.style.borderColor = '#0F48DC')}
                      onBlur={e => (e.target.style.borderColor = '')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-all"
                      onFocus={e => (e.target.style.borderColor = '#0F48DC')}
                      onBlur={e => (e.target.style.borderColor = '')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interested In</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map(service => (
                      <label key={service} className="flex items-center gap-1.5 cursor-pointer">
                        <input type="checkbox" name="services" value={service} className="hidden peer" />
                        <span className="px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 text-gray-600 peer-checked:text-white transition-all cursor-pointer select-none"
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
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message <span className="text-red-400">*</span>
                    <span className={`ml-2 text-xs font-normal ${charCount > 480 ? 'text-red-400' : 'text-gray-400'}`}>
                      {charCount}/500
                    </span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    maxLength={500}
                    placeholder="Tell us about your use case or ask us anything..."
                    onChange={e => setCharCount(e.target.value.length)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-all resize-none"
                    onFocus={e => (e.target.style.borderColor = '#0F48DC')}
                    onBlur={e => (e.target.style.borderColor = '')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60 cursor-pointer whitespace-nowrap"
                  style={{ backgroundColor: '#0F48DC' }}
                >
                  {loading ? (
                    <>
                      <i className="ri-loader-4-line animate-spin text-lg"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="ri-send-plane-line text-lg"></i>
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
