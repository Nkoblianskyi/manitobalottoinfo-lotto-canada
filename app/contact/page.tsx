import Header from "@/components/header"
import Footer from "@/components/footer"
import ResponsiblePlayBanner from "@/components/responsible-play-banner"
import AgeVerificationPopup from "@/components/age-verification-popup"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <AgeVerificationPopup />
      <Header />

      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4">Contact Us</h1>
            <p className="text-[#71717a] max-w-2xl mx-auto leading-relaxed">
              Have questions or need assistance? Our team is here to help. Reach out through any of the channels below.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border border-[#e4e4e7] rounded-2xl p-6 hover:border-[#10b981] transition-colors">
              <div className="w-12 h-12 bg-[#10b981]/10 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#10b981]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0a0a0a] mb-2">Email Support</h3>
              <p className="text-[#71717a] text-sm mb-3">For general inquiries and support</p>
              <a href="mailto:support@manitobalottoinfo.com" className="text-[#10b981] hover:underline font-medium">
                support@manitobalottoinfo.com
              </a>
            </div>

            <div className="bg-white border border-[#e4e4e7] rounded-2xl p-6 hover:border-[#10b981] transition-colors">
              <div className="w-12 h-12 bg-[#10b981]/10 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#10b981]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0a0a0a] mb-2">Phone Support</h3>
              <p className="text-[#71717a] text-sm mb-3">Speak with our team directly</p>
              <a href="tel:1-800-461-0140" className="text-[#10b981] hover:underline font-medium">
                1-800-461-0140
              </a>
            </div>

            <div className="bg-white border border-[#e4e4e7] rounded-2xl p-6 hover:border-[#10b981] transition-colors">
              <div className="w-12 h-12 bg-[#10b981]/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#10b981]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0a0a0a] mb-2">Mailing Address</h3>
              <p className="text-[#71717a] text-sm mb-3">Send us correspondence</p>
              <p className="text-[#0a0a0a] text-sm">
                ManitobaLottoInfo
                <br />
                Winnipeg, MB, Canada
              </p>
            </div>

            <div className="bg-white border border-[#e4e4e7] rounded-2xl p-6 hover:border-[#10b981] transition-colors">
              <div className="w-12 h-12 bg-[#10b981]/10 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#10b981]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0a0a0a] mb-2">Support Hours</h3>
              <p className="text-[#71717a] text-sm mb-3">When we're available</p>
              <p className="text-[#0a0a0a] text-sm">
                Monday - Friday: 9AM - 6PM CST
                <br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#e4e4e7] rounded-2xl p-8 mb-12">
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-[#0a0a0a] mb-2">What is ManitobaLottoInfo?</h3>
                <p className="text-[#71717a] text-sm leading-relaxed">
                  ManitobaLottoInfo is an informational platform that provides comprehensive details about Canadian
                  lottery games including Lotto 6/49, Lotto Max, and Daily Grand.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[#0a0a0a] mb-2">How long does it take to get a response?</h3>
                <p className="text-[#71717a] text-sm leading-relaxed">
                  We typically respond to all inquiries within 24-48 business hours. For urgent matters, please call our
                  support line.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[#0a0a0a] mb-2">
                  Is ManitobaLottoInfo affiliated with official lottery operators?
                </h3>
                <p className="text-[#71717a] text-sm leading-relaxed">
                  No. We are an independent informational service and are not affiliated with any official lottery
                  operators or government organizations.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-[#0a0a0a] rounded-2xl p-8 text-center">
            <h3 className="text-white font-bold mb-3">Important Notice</h3>
            <p className="text-[#71717a] text-sm leading-relaxed max-w-2xl mx-auto">
              ManitobaLottoInfo is an independent informational service and is NOT affiliated with, endorsed by, or
              operated by any official government lottery organization. All content is for informational purposes only.
            </p>
          </div>
        </div>
      </div>

      <ResponsiblePlayBanner />
      <Footer />
    </div>
  )
}
