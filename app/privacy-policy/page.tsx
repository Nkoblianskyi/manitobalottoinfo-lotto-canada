import { Shield, Lock, Eye, Users, FileText, Clock, Phone, Mail } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AgeVerificationPopup from "@/components/age-verification-popup"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <AgeVerificationPopup />
      <Header />

      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#10b981] rounded-2xl mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4">Privacy Policy</h1>
            <p className="text-[#71717a] max-w-2xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how ManitobaLottoInfo collects, uses, and protects
              your personal information.
            </p>
            <div className="mt-4 text-sm text-[#a1a1aa] flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              Last updated: December 2024
            </div>
          </div>

          {/* Information We Collect */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-6 text-center">Information We Collect</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Personal Information",
                  description:
                    "Information you provide when creating an account or using our services, including your name, email, address, and payment details.",
                  icon: Users,
                  items: [
                    "Full name and contact details",
                    "Date of birth and address",
                    "Payment information",
                    "Identity verification documents",
                  ],
                },
                {
                  title: "Usage Information",
                  description:
                    "Information about how you use our website and services, including your interactions, preferences, and technical data.",
                  icon: Eye,
                  items: [
                    "Website usage patterns",
                    "Device and browser information",
                    "IP address and location",
                    "Game preferences and history",
                  ],
                },
              ].map((section, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#e4e4e7] rounded-2xl p-6 hover:border-[#10b981] transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#10b981]/10 rounded-xl flex items-center justify-center mr-3">
                      <section.icon className="w-5 h-5 text-[#10b981]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0a0a0a]">{section.title}</h3>
                  </div>
                  <p className="text-[#71717a] text-sm leading-relaxed mb-4">{section.description}</p>
                  <div>
                    <h4 className="text-[#0a0a0a] font-medium text-sm mb-2">Includes:</h4>
                    <ul className="text-[#71717a] text-sm space-y-1">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How We Use Information */}
          <div className="mb-10">
            <div className="bg-white border border-[#e4e4e7] rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-[#10b981]/10 rounded-xl flex items-center justify-center mr-4">
                  <FileText className="w-5 h-5 text-[#10b981]" />
                </div>
                <h2 className="text-xl font-bold text-[#0a0a0a]">How We Use Your Information</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Service Provision",
                    desc: "To provide, maintain, and improve our lottery services and platform functionality.",
                  },
                  {
                    title: "Account Management",
                    desc: "To create and manage your account, process transactions, and provide customer support.",
                  },
                  {
                    title: "Legal Compliance",
                    desc: "To comply with legal obligations, including age verification and responsible gaming requirements.",
                  },
                  {
                    title: "Communication",
                    desc: "To send you important updates, promotional offers, and service-related communications.",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-[#fafafa] p-4 rounded-xl border border-[#e4e4e7]">
                    <h3 className="text-[#0a0a0a] font-medium mb-2">{item.title}</h3>
                    <p className="text-[#71717a] text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="mb-10">
            <div className="bg-white border border-[#e4e4e7] rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-[#10b981]/10 rounded-xl flex items-center justify-center mr-4">
                  <Lock className="w-5 h-5 text-[#10b981]" />
                </div>
                <h2 className="text-xl font-bold text-[#0a0a0a]">How We Protect Your Data</h2>
              </div>
              <p className="text-[#71717a] leading-relaxed mb-6">
                We implement industry-standard security measures to protect your personal information from unauthorized
                access, disclosure, alteration, or destruction.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: "🔐", title: "Encryption", desc: "SSL/TLS encryption for all data transmission" },
                  { icon: "🛡️", title: "Secure Storage", desc: "Protected servers with access controls" },
                  { icon: "👥", title: "Limited Access", desc: "Only authorized personnel can access data" },
                ].map((item, index) => (
                  <div key={index} className="bg-[#10b981]/5 border border-[#10b981]/20 p-4 rounded-xl text-center">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h3 className="text-[#0a0a0a] font-medium mb-1">{item.title}</h3>
                    <p className="text-[#71717a] text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-6 text-center">Your Privacy Rights</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: "Access", description: "Request a copy of your personal information", icon: "👁️" },
                { title: "Correction", description: "Request correction of inaccurate data", icon: "✏️" },
                { title: "Deletion", description: "Request deletion of your information", icon: "🗑️" },
                { title: "Portability", description: "Request transfer of your data", icon: "📦" },
                { title: "Objection", description: "Object to certain data processing", icon: "🚫" },
                { title: "Restriction", description: "Request restriction of processing", icon: "⏸️" },
              ].map((right, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#e4e4e7] rounded-2xl p-4 text-center hover:border-[#10b981] transition-colors"
                >
                  <div className="text-2xl mb-2">{right.icon}</div>
                  <h3 className="text-[#10b981] font-semibold text-sm mb-1">{right.title}</h3>
                  <p className="text-[#71717a] text-xs">{right.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-[#0a0a0a] rounded-2xl p-8 text-white">
            <h2 className="text-xl font-bold mb-4 text-center">Contact Our Privacy Team</h2>
            <p className="text-[#a1a1aa] leading-relaxed mb-6 text-center max-w-lg mx-auto">
              If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please
              contact us using the information below.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#1a1a1a] p-4 rounded-xl text-center">
                <Mail className="w-6 h-6 mx-auto mb-2 text-[#10b981]" />
                <h3 className="font-medium mb-1 text-sm">Email</h3>
                <p className="text-[#71717a] text-sm">privacy@manitobalottoinfo.com</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-xl text-center">
                <Phone className="w-6 h-6 mx-auto mb-2 text-[#10b981]" />
                <h3 className="font-medium mb-1 text-sm">Phone</h3>
                <p className="text-[#71717a] text-sm">1-800-461-0140</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-xl text-center">
                <FileText className="w-6 h-6 mx-auto mb-2 text-[#10b981]" />
                <h3 className="font-medium mb-1 text-sm">Response Time</h3>
                <p className="text-[#71717a] text-sm">Within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
