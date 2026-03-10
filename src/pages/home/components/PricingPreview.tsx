
import { useState } from 'react';

export default function PricingPreview() {
  const [billingType, setBillingType] = useState<'payg' | 'monthly'>('payg');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for startups and small projects',
      price: billingType === 'payg' ? '$0.045' : '$99',
      unit: billingType === 'payg' ? 'per SMS' : 'per month',
      features: [
        '2,500 messages/month included',
        'SMS & Email APIs',
        'Basic analytics dashboard',
        'Email support (24hr response)',
        'API documentation & SDKs',
        'DLT compliance support'
      ],
      cta: 'Start Building Free',
      highlighted: false
    },
    {
      name: 'Growth',
      description: 'For scaling businesses',
      price: billingType === 'payg' ? '$0.038' : '$299',
      unit: billingType === 'payg' ? 'per SMS' : 'per month',
      features: [
        '25,000 messages/month included',
        'SMS, WhatsApp, Voice, Email, OTP',
        'Advanced analytics & reporting',
        'Priority support (4hr response)',
        'Custom sender IDs & branding',
        'Webhook integrations',
        'Phone number lookup',
        'Multi-channel campaigns'
      ],
      cta: 'Start Free Trial',
      highlighted: true,
      badge: 'Most Popular'
    },
    {
      name: 'Enterprise',
      description: 'For large-scale operations',
      price: 'Custom',
      unit: 'pricing',
      features: [
        'Unlimited message volume',
        'Dedicated infrastructure & IPs',
        'Custom API integrations',
        '24/7 phone & chat support',
        '99.99% SLA guarantees',
        'Dedicated account manager',
        'Volume-based discounts',
        'White-label solutions',
        'Advanced security & compliance'
      ],
      cta: 'Talk to Sales',
      highlighted: false
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-12 space-y-6">
          <h2 className="font-['Plus_Jakarta_Sans'] text-5xl font-bold text-gray-900">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-['Inter']">
            Pay only for what you use. No hidden fees, no setup costs. Scale up or down anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1.5 gap-1">
            <button
              onClick={() => setBillingType('payg')}
              className={`px-6 py-2.5 rounded-full text-[15px] font-semibold transition-all whitespace-nowrap ${
                billingType === 'payg' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Pay as you go
            </button>
            <button
              onClick={() => setBillingType('monthly')}
              className={`px-6 py-2.5 rounded-full text-[15px] font-semibold transition-all whitespace-nowrap ${
                billingType === 'monthly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly plans
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all hover:shadow-xl hover:-translate-y-1 ${
                plan.highlighted ? 'border-transparent shadow-lg' : 'border-gray-100 shadow-sm'
              }`}
              style={plan.highlighted ? { outline: '2px solid #0F48DC', outlineOffset: '-2px' } : {}}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1.5 text-white text-sm font-semibold rounded-full shadow-lg whitespace-nowrap" style={{backgroundColor: '#0F48DC'}}>
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </div>

                <div className="py-4">
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-5xl font-bold"
                      style={plan.highlighted ? { color: '#0F48DC' } : { color: '#111827' }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-base text-gray-600">{plan.unit}</span>
                  </div>
                </div>

                <div className="space-y-3 py-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5"
                        style={plan.highlighted ? { backgroundColor: '#0F48DC' } : { backgroundColor: '#e5e7eb' }}
                      >
                        <i className={`ri-check-line text-sm ${plan.highlighted ? 'text-white' : 'text-gray-600'}`}></i>
                      </div>
                      <span className="text-[15px] text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className="w-full py-3.5 rounded-xl text-[15px] font-semibold transition-all whitespace-nowrap"
                  style={
                    plan.highlighted
                      ? { backgroundColor: '#0F48DC', color: '#fff' }
                      : { backgroundColor: '#f3f4f6', color: '#111827' }
                  }
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[15px] font-semibold group"
            style={{color: '#0F48DC'}}
          >
            Compare all features &amp; pricing
            <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
