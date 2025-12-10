import { Cookie, Shield, Settings, Eye, FileText, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AgeVerificationPopup from "@/components/age-verification-popup"

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <AgeVerificationPopup />
      <Header />

      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#10b981] rounded-2xl mb-6">
              <Cookie className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4">Cookies Policy</h1>
            <p className="text-[#71717a] max-w-2xl mx-auto leading-relaxed">
              Learn how ManitobaLottoInfo uses cookies to enhance your experience and protect your privacy.
            </p>
            <div className="mt-4 text-sm text-[#a1a1aa] flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              Last updated: December 2024
            </div>
          </div>

          {/* What are Cookies */}
          <div className="mb-10">
            <div className="bg-white border border-[#e4e4e7] rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#10b981]/10 rounded-xl flex items-center justify-center mr-4">
                  <FileText className="w-5 h-5 text-[#10b981]" />
                </div>
                <h2 className="text-xl font-bold text-[#0a0a0a]">What are Cookies?</h2>
              </div>
              <p className="text-[#71717a] leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. They help us
                provide you with a better experience by remembering your preferences, keeping you logged in, and helping
                us understand how you use our platform.
              </p>
            </div>
          </div>

          {/* Types of Cookies */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-6 text-center">Types of Cookies We Use</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Essential Cookies",
                  description:
                    "These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.",
                  icon: Shield,
                  examples: ["Login sessions", "Security tokens", "Load balancing"],
                },
                {
                  title: "Functional Cookies",
                  description:
                    "These cookies allow us to remember choices you make and provide enhanced, more personal features.",
                  icon: Settings,
                  examples: ["Language preferences", "Theme settings", "Form data"],
                },
                {
                  title: "Analytics Cookies",
                  description:
                    "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
                  icon: Eye,
                  examples: ["Page views", "User behavior", "Performance metrics"],
                },
                {
                  title: "Marketing Cookies",
                  description:
                    "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
                  icon: FileText,
                  examples: ["Ad targeting", "Campaign tracking", "Social media integration"],
                },
              ].map((cookie, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#e4e4e7] rounded-2xl p-6 hover:border-[#10b981] transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#10b981]/10 rounded-xl flex items-center justify-center mr-3">
                      <cookie.icon className="w-5 h-5 text-[#10b981]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0a0a0a]">{cookie.title}</h3>
                  </div>
                  <p className="text-[#71717a] text-sm leading-relaxed mb-4">{cookie.description}</p>
                  <div>
                    <h4 className="text-[#0a0a0a] font-medium text-sm mb-2">Examples:</h4>
                    <ul className="text-[#71717a] text-sm space-y-1">
                      {cookie.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full mr-2"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cookie Management */}
          <div className="mb-10">
            <div className="bg-white border border-[#e4e4e7] rounded-2xl p-8">
              <h2 className="text-xl font-bold text-[#0a0a0a] mb-4">Managing Your Cookie Preferences</h2>
              <div className="space-y-4 text-[#71717a]">
                <p className="leading-relaxed">
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights
                  by setting your preferences in the cookie consent manager that appears when you first visit our
                  website.
                </p>
                <div className="bg-[#10b981]/5 border border-[#10b981]/20 p-4 rounded-xl">
                  <h3 className="text-[#0a0a0a] font-medium mb-2">Browser Settings</h3>
                  <p className="text-sm">
                    You can also set or amend your web browser controls to accept or refuse cookies. If you choose to
                    reject cookies, you may still use our website though your access to some functionality and areas may
                    be restricted.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third Party Cookies */}
          <div className="mb-10">
            <div className="bg-white border border-[#e4e4e7] rounded-2xl p-8">
              <h2 className="text-xl font-bold text-[#0a0a0a] mb-4">Third-Party Cookies</h2>
              <div className="space-y-4 text-[#71717a]">
                <p className="leading-relaxed">
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics
                  of the service, deliver advertisements on and through the service, and so on.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#fafafa] p-4 rounded-xl border border-[#e4e4e7]">
                    <h3 className="text-[#0a0a0a] font-medium mb-2">Google Analytics</h3>
                    <p className="text-sm">Used to analyze website traffic and user behavior</p>
                  </div>
                  <div className="bg-[#fafafa] p-4 rounded-xl border border-[#e4e4e7]">
                    <h3 className="text-[#0a0a0a] font-medium mb-2">Social Media</h3>
                    <p className="text-sm">Integration with social media platforms for sharing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-[#0a0a0a] rounded-2xl p-8 text-center text-white">
            <h2 className="text-xl font-bold mb-4">Questions About Cookies?</h2>
            <p className="text-[#a1a1aa] leading-relaxed mb-6 max-w-lg mx-auto">
              If you have any questions about our use of cookies or other technologies, please contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <div className="text-center">
                <div className="text-2xl mb-2">📧</div>
                <div className="text-sm text-[#10b981]">support@manitobalottoinfo.com</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📞</div>
                <div className="text-sm text-[#10b981]">1-800-461-0140</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
