
import { useState } from 'react';

export default function DeveloperSection() {
  const [copied, setCopied] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('node');

  const codeExamples = {
    node: `// Node.js - Send SMS with Tubelight
const TubelightCommunications = new (require(
  \'tubelight-communications\'
))({
  YOUR_ACCESS_KEY: process.env.YOUR_ACCESS_KEY,
});

const message = new TubelightCommunications.SMS({
  to: \'+919876543210\',
  from: \'TBLTCM\',
  message: \'Your OTP is 123456. Valid for 10 minutes.\',
  route: \'transactional\'
});

message.send().then((response) => {
  console.log(\'Message ID:\', response.message_id);
  console.log(\'Status:\', response.status);
});`,
    python: `# Python - Send SMS with Tubelight
import TubelightCommunications

client = TubelightCommunications.Client(
    access_key=\'YOUR_ACCESS_KEY\'
)

message = client.sms.send(
    to=\'+919876543210\',
    from_=\'TBLTCM\',
    message=\'Your OTP is 123456. Valid for 10 minutes.\',
    route=\'transactional\'
)

print(f"Message ID: {message.message_id}")
print(f"Status: {message.status}")`,
    java: `// Java - Send SMS with Tubelight
import com.tubelightcommunications.TubelightClient;
import com.tubelightcommunications.model.SMSMessage;

TubelightClient client = new TubelightClient(
    System.getenv("YOUR_ACCESS_KEY")
);

SMSMessage message = SMSMessage.builder()
    .to("+919876543210")
    .from("TBLTCM")
    .message("Your OTP is 123456.")
    .route("transactional")
    .build();

client.sms().send(message);`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeLanguage as keyof typeof codeExamples]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sdks = [
    { id: 'node', label: 'Node.js' },
    { id: 'python', label: 'Python' },
    { id: 'java', label: 'Java' },
    { label: 'PHP' },
    { label: 'Go' },
    { label: 'Ruby' }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="font-['Plus_Jakarta_Sans'] text-5xl font-bold text-white leading-tight">
              For Developers,
              <br />
              <span style={{color: '#5B8EF0'}}>By Developers</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Tubelight programmable API infrastructure enables developers to easily integrate communication APIs and create solutions of their choice. Create a free developer account today to access API and SDKs.
            </p>

            <div>
              <p className="text-sm text-gray-400 mb-3 font-semibold uppercase tracking-wider">Available SDKs</p>
              <div className="flex flex-wrap gap-3">
                {sdks.map((sdk) => (
                  <button
                    key={sdk.label}
                    onClick={() => sdk.id && setActiveLanguage(sdk.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
                      sdk.id && activeLanguage === sdk.id
                        ? 'text-white border-transparent shadow-lg'
                        : 'bg-gray-800 text-gray-300 border-gray-700 hover:text-white'
                    }`}
                    style={sdk.id && activeLanguage === sdk.id ? { backgroundColor: '#0F48DC', borderColor: '#0F48DC' } : {}}
                  >
                    {sdk.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://tubelightcommunications.com/dev-doc/developer.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-white text-[15px] font-semibold rounded-xl hover:shadow-xl transition-all group"
                style={{backgroundColor: '#0F48DC'}}
              >
                Documentation
                <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform"></i>
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white text-[15px] font-semibold rounded-xl hover:bg-gray-700 transition-all border border-gray-700">
                Get API Keys
              </a>
            </div>
          </div>

          {/* Right Code Block */}
          <div className="relative">
            <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-gray-400 ml-2">
                    {activeLanguage === 'node' ? 'send-sms.js' : activeLanguage === 'python' ? 'send_sms.py' : 'SendSMS.java'}
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-300 hover:text-white bg-gray-700 rounded-lg transition-all cursor-pointer"
                >
                  <i className={`${copied ? 'ri-check-line' : 'ri-file-copy-line'} text-base`}></i>
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div className="p-6 overflow-x-auto">
                <pre className="text-sm leading-relaxed font-mono">
                  <code className="text-gray-300">
                    {codeExamples[activeLanguage as keyof typeof codeExamples]}
                  </code>
                </pre>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-6 -right-6 rounded-xl shadow-2xl p-6 border-4 border-gray-900" style={{backgroundColor: '#0F48DC'}}>
              <div className="text-white">
                <div className="text-3xl font-bold">99.99%</div>
                <div className="text-sm opacity-90">Infrastructure Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
