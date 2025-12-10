"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ResponsiblePlayBanner from "@/components/responsible-play-banner"
import AgeVerificationPopup from "@/components/age-verification-popup"
import { Mail, Phone, MapPin, CheckCircle, X, Clock, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [agreed, setAgreed] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) return
    setShowSuccessPopup(true)
    setFormData({ fullName: "", email: "", subject: "", message: "" })
    setAgreed(false)
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <AgeVerificationPopup />
      <Header />

      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-3xl shadow-2xl max-w-md w-full p-10 relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-4 right-4 text-[#71717a] hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#10b981]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-[#10b981]" />
              </div>

              <h2 className="text-2xl font-bold text-white mb-3">Message Sent Successfully!</h2>

              <p className="text-[#a1a1aa] mb-6">
                Thank you for contacting ManitobaLottoInfo. Your inquiry has been received and our team will review it
                promptly.
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-4 mb-8">
                <p className="text-sm text-[#a1a1aa]">
                  Expected response time: <span className="text-[#10b981] font-semibold">within 48 hours</span>
                </p>
                <p className="text-xs text-[#71717a] mt-2">
                  Please check your email inbox and spam folder for our reply.
                </p>
              </div>

              <Button
                onClick={() => setShowSuccessPopup(false)}
                className="bg-[#10b981] hover:bg-[#059669] text-white font-semibold px-8 py-3 rounded-xl w-full transition-all"
              >
                Got it, thanks!
              </Button>
            </div>
          </div>
        </div>
      )}

      <section className="bg-[#0a0a0a] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#10b981]/10 text-[#10b981] text-sm font-medium px-4 py-2 rounded-full mb-6">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">Contact Us</h1>
          <p className="text-[#a1a1aa] text-lg max-w-xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Our team typically responds within 48 hours.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white border border-[#e4e4e7] rounded-2xl p-8">
                <h2 className="text-xl font-bold text-[#0a0a0a] mb-2">Send us a Message</h2>
                <p className="text-sm text-[#71717a] mb-6">
                  Fill out the form below for any inquiries, partnership opportunities, or feedback.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#0a0a0a] mb-2">Full Name</label>
                    <Input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full border-[#e4e4e7] rounded-xl bg-[#fafafa] focus:border-[#10b981] focus:ring-[#10b981] h-12"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0a0a0a] mb-2">Email Address</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email address"
                      className="w-full border-[#e4e4e7] rounded-xl bg-[#fafafa] focus:border-[#10b981] focus:ring-[#10b981] h-12"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0a0a0a] mb-2">Subject</label>
                    <Input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="What is your inquiry about?"
                      className="w-full border-[#e4e4e7] rounded-xl bg-[#fafafa] focus:border-[#10b981] focus:ring-[#10b981] h-12"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0a0a0a] mb-2">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      rows={5}
                      className="w-full border-[#e4e4e7] rounded-xl bg-[#fafafa] focus:border-[#10b981] focus:ring-[#10b981] resize-none"
                      required
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <Checkbox
                      id="agree"
                      checked={agreed}
                      onCheckedChange={(checked) => setAgreed(checked as boolean)}
                      className="mt-0.5 border-[#e4e4e7] data-[state=checked]:bg-[#10b981] data-[state=checked]:border-[#10b981]"
                    />
                    <label htmlFor="agree" className="text-sm text-[#71717a] cursor-pointer leading-relaxed">
                      I agree to ManitobaLottoInfo using my details to respond to this inquiry.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    disabled={!agreed}
                    className="bg-[#10b981] hover:bg-[#059669] text-white font-semibold px-8 py-3 h-12 rounded-xl disabled:opacity-50 transition-all flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Location Card */}
              <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-5">Our Location</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#10b981]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#10b981]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white mb-1">Address</p>
                      <span className="text-[#a1a1aa] text-sm leading-relaxed block">
                        201 Portage Ave, Suite 1600
                        <br />
                        Winnipeg, MB R3B 3K6
                        <br />
                        Canada
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#10b981]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#10b981]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white mb-1">Email</p>
                      <a
                        href="mailto:hello@manitobalottoinfo.com"
                        className="text-[#a1a1aa] text-sm hover:text-[#10b981] transition-colors"
                      >
                        hello@manitobalottoinfo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#10b981]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#10b981]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white mb-1">Phone</p>
                      <a
                        href="tel:+12047294158"
                        className="text-[#a1a1aa] text-sm hover:text-[#10b981] transition-colors"
                      >
                        +1 (204) 729-4158
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-white border border-[#e4e4e7] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#10b981]/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#10b981]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0a0a0a]">Business Hours</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-[#71717a]">Monday - Friday</span>
                    <span className="text-[#0a0a0a] font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#71717a]">Saturday</span>
                    <span className="text-[#0a0a0a] font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#71717a]">Sunday</span>
                    <span className="text-[#71717a]">Closed</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#e4e4e7]">
                    <p className="text-xs text-[#71717a]">All times are in Central Standard Time (CST)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResponsiblePlayBanner />
      <Footer />
    </div>
  )
}
