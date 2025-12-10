import Header from "@/components/header"
import Footer from "@/components/footer"
import ResponsiblePlayBanner from "@/components/responsible-play-banner"
import AgeVerificationPopup from "@/components/age-verification-popup"
import { Shield, Eye, Globe, Lock, FileCheck, Users, Heart, Award, BookOpen } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <AgeVerificationPopup />
      <Header />

      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#10b981]/10 text-[#10b981] text-sm font-medium px-4 py-2 rounded-full mb-6">
            About ManitobaLottoInfo
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
            Your Gateway to Canadian Lottery Information
          </h1>
          <p className="text-[#a1a1aa] text-lg leading-relaxed max-w-2xl mx-auto">
            ManitobaLottoInfo is dedicated to providing Canadians with comprehensive, accurate, and up-to-date
            information about provincial and national lottery games.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#10b981] font-medium text-sm uppercase tracking-wider mb-4 block">
                Our Purpose
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-6">Empowering Informed Decisions</h2>
              <p className="text-[#71717a] leading-relaxed mb-6">
                At ManitobaLottoInfo, we understand that navigating the world of lotteries can be overwhelming. That's
                why we've created a platform that breaks down complex lottery rules, odds, and prize structures into
                easy-to-understand information.
              </p>
              <p className="text-[#71717a] leading-relaxed">
                Our goal is to ensure that every visitor leaves our site with a clear understanding of how Canadian
                lottery games work, what to expect, and how to participate responsibly.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-2xl p-6">
                <BookOpen className="w-8 h-8 text-[#10b981] mb-4" />
                <h4 className="font-semibold text-[#0a0a0a] mb-2">Educational Focus</h4>
                <p className="text-xs text-[#71717a]">Detailed game explanations and rules</p>
              </div>
              <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-2xl p-6">
                <Globe className="w-8 h-8 text-[#10b981] mb-4" />
                <h4 className="font-semibold text-[#0a0a0a] mb-2">Canada-Wide</h4>
                <p className="text-xs text-[#71717a]">Coverage of all major Canadian lotteries</p>
              </div>
              <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-2xl p-6">
                <Heart className="w-8 h-8 text-[#10b981] mb-4" />
                <h4 className="font-semibold text-[#0a0a0a] mb-2">User-First</h4>
                <p className="text-xs text-[#71717a]">Designed with your needs in mind</p>
              </div>
              <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-2xl p-6">
                <Award className="w-8 h-8 text-[#10b981] mb-4" />
                <h4 className="font-semibold text-[#0a0a0a] mb-2">Quality Content</h4>
                <p className="text-xs text-[#71717a]">Accurate and verified information</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4">What We Offer</h2>
            <p className="text-[#71717a] max-w-xl mx-auto">
              Explore the comprehensive services and resources available on our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#e4e4e7] rounded-2xl p-8 hover:border-[#10b981] transition-colors">
              <div className="w-12 h-12 bg-[#10b981]/10 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-[#10b981]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0a0a0a] mb-3">Lottery Information</h3>
              <p className="text-sm text-[#71717a] leading-relaxed">
                Comprehensive details about Lotto 6/49, Lotto Max, Daily Grand, and other Canadian lottery games
                including draw schedules, prize structures, and winning odds.
              </p>
            </div>

            <div className="bg-white border border-[#e4e4e7] rounded-2xl p-8 hover:border-[#10b981] transition-colors">
              <div className="w-12 h-12 bg-[#10b981]/10 rounded-xl flex items-center justify-center mb-5">
                <Globe className="w-6 h-6 text-[#10b981]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0a0a0a] mb-3">Number Selection</h3>
              <p className="text-sm text-[#71717a] leading-relaxed">
                Our platform allows users to select their preferred lottery numbers using our easy-to-use interface.
                Choose your lucky numbers or use Quick Pick for random selection.
              </p>
            </div>

            <div className="bg-white border border-[#e4e4e7] rounded-2xl p-8 hover:border-[#10b981] transition-colors">
              <div className="w-12 h-12 bg-[#10b981]/10 rounded-xl flex items-center justify-center mb-5">
                <Shield className="w-6 h-6 text-[#10b981]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0a0a0a] mb-3">Responsible Gaming</h3>
              <p className="text-sm text-[#71717a] leading-relaxed">
                We prioritize responsible gaming by providing resources, support information, and clear guidelines to
                help our users make informed decisions about lottery participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-[#10b981]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-[#10b981]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0a0a0a] mb-1">Privacy Protected</h4>
                  <p className="text-sm text-[#71717a]">
                    Your personal information is handled with the utmost care and protected by industry-standard
                    security measures.
                  </p>
                </div>
              </div>

              <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-[#10b981]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-5 h-5 text-[#10b981]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0a0a0a] mb-1">Verified Information</h4>
                  <p className="text-sm text-[#71717a]">
                    All lottery data, game rules, and odds are sourced from official channels and regularly updated for
                    accuracy.
                  </p>
                </div>
              </div>

              <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-[#10b981]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-[#10b981]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0a0a0a] mb-1">Community Focused</h4>
                  <p className="text-sm text-[#71717a]">
                    We're committed to serving the Canadian community with reliable lottery information and excellent
                    customer support.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[#10b981] font-medium text-sm uppercase tracking-wider mb-4 block">Our Values</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-6">Built on Trust and Transparency</h2>
              <p className="text-[#71717a] leading-relaxed mb-6">
                ManitobaLottoInfo operates with complete transparency. We clearly disclose who we are, what services we
                provide, and how we operate. Our commitment to honesty is at the core of everything we do.
              </p>
              <p className="text-[#71717a] leading-relaxed">
                We believe that informed users are happy users. That's why we invest significant effort into creating
                educational content that helps Canadians understand lottery games better.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0a0a0a] rounded-3xl p-10 md:p-14">
            <div className="text-center">
              <div className="w-14 h-14 bg-[#10b981]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-7 h-7 text-[#10b981]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Important Disclosure</h2>
              <div className="space-y-4 text-[#a1a1aa] text-sm leading-relaxed">
                <p>
                  ManitobaLottoInfo is an{" "}
                  <span className="text-[#10b981] font-medium">independent informational platform</span>. We are{" "}
                  <span className="text-white font-medium">NOT</span> affiliated with, endorsed by, or directly operated
                  by any government-run provincial or national lottery organization in Canada.
                </p>
                <p>
                  All content on this website is provided for{" "}
                  <span className="text-white font-medium">informational and entertainment purposes</span>. Users must
                  be <span className="text-[#10b981] font-medium">18 years of age or older</span> to access our
                  services.
                </p>
                <p>
                  If you or someone you know is struggling with gambling-related issues, we strongly encourage seeking
                  professional help. Visit our{" "}
                  <a href="/responsible-gaming" className="text-[#10b981] hover:underline">
                    Responsible Gaming
                  </a>{" "}
                  page for support resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4">By the Numbers</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-2xl p-6">
              <div className="text-4xl font-bold text-[#10b981] mb-2">3+</div>
              <div className="text-sm text-[#71717a]">Lottery Games Covered</div>
            </div>
            <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-2xl p-6">
              <div className="text-4xl font-bold text-[#10b981] mb-2">24/7</div>
              <div className="text-sm text-[#71717a]">Platform Availability</div>
            </div>
            <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-2xl p-6">
              <div className="text-4xl font-bold text-[#10b981] mb-2">13</div>
              <div className="text-sm text-[#71717a]">Provinces & Territories</div>
            </div>
            <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-2xl p-6">
              <div className="text-4xl font-bold text-[#10b981] mb-2">100%</div>
              <div className="text-sm text-[#71717a]">Canadian Focused</div>
            </div>
          </div>
        </div>
      </section>

      <ResponsiblePlayBanner />
      <Footer />
    </div>
  )
}
