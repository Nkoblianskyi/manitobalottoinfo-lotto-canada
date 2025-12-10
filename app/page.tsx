"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Target, Newspaper, ShieldCheck, Award, TrendingUp, Calendar, DollarSign } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import AgeVerificationPopup from "@/components/age-verification-popup"
import ResponsiblePlayBanner from "@/components/responsible-play-banner"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <AgeVerificationPopup />
      <Header />
      <CookieBanner />

      <section className="relative bg-[#0a0a0a] py-20 md:py-32 px-6 overflow-hidden">
        {/* Background lottery image */}
        <div className="absolute inset-0">
          <Image
            src="/colorful-lottery-balls-golden-coins-confetti-celeb.jpg"
            alt="Lottery background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/70 to-[#0a0a0a]/50" />
        </div>

        {/* Decorative elements */}

        <div className="relative max-w-6xl mx-auto z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#10b981]/10 border border-[#10b981]/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse" />
                <span className="text-[#10b981] text-sm font-medium">Manitoba Lottery Information</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Explore Canadian Lotteries with Confidence
              </h1>

              <p className="text-[#a1a1aa] text-lg mb-8 leading-relaxed">
                Comprehensive information about Lotto 6/49, Lotto Max, and Daily Grand. Select your lucky numbers and
                learn about each draw format.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/buy-tickets">
                  <Button className="bg-[#10b981] hover:bg-[#059669] text-white font-medium px-8 py-6 rounded-xl text-base">
                    Buy Tickets
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/about-us">
                  <Button
                    variant="outline"
                    className="border-[#27272a] text-white hover:bg-[#1a1a1a] font-medium px-8 py-6 rounded-xl bg-transparent text-base"
                  >
                    Learn About Us
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#27272a] rounded-3xl p-8">
                  <div className="grid grid-cols-5 gap-3 mb-6">
                    {[7, 14, 23, 31, 42, 49].map((num, i) => (
                      <div
                        key={num}
                        className={`aspect-square rounded-xl flex items-center justify-center text-lg font-bold ${
                          i < 5 ? "bg-[#10b981] text-white" : "bg-[#27272a] text-[#71717a]"
                        }`}
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#71717a]">Lotto 6/49 Selection</span>
                    <span className="text-[#10b981] font-medium">6 numbers selected</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#10b981] text-white text-xs font-medium px-4 py-2 rounded-full">
                  For informational purposes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-[#10b981] font-medium text-sm uppercase tracking-wider mb-3 block">
                Featured Games
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a]">Canadian Lottery Draws</h2>
            </div>
            <p className="text-[#71717a] max-w-md">
              Select a lottery game below to learn about its rules, odds, and prize structure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-[#fafafa] border border-[#e4e4e7] rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[#10b981]/5 transition-all duration-500 h-full">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c8102e] to-[#ff4d4d]" />
              <div className="p-8 h-full flex flex-col">
                <div className="h-20 flex items-center mb-6">
                  <Image
                    src="/images/lotto-649-bdedv7iu.webp"
                    alt="Lotto 6/49"
                    width={140}
                    height={70}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">Lotto 6/49</h3>
                <p className="text-sm text-[#71717a] mb-6 leading-relaxed flex-grow">
                  Canada's classic nationwide lottery. Select 6 numbers from 1-49 for a chance at the jackpot, plus
                  guaranteed prize draws with every ticket.
                </p>

                <div className="mt-auto">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-3 text-center">
                      <div className="text-xs text-[#71717a] mb-1">Numbers</div>
                      <div className="font-semibold text-[#0a0a0a]">6 of 49</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center">
                      <div className="text-xs text-[#71717a] mb-1">Draws</div>
                      <div className="font-semibold text-[#0a0a0a]">Wed & Sat</div>
                    </div>
                  </div>

                  <Link href="/buy-tickets?game=lotto649">
                    <Button className="w-full bg-[#0a0a0a] hover:bg-[#10b981] text-white rounded-xl py-5 transition-colors">
                      Select Numbers
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative bg-[#fafafa] border border-[#e4e4e7] rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[#10b981]/5 transition-all duration-500 h-full">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066cc] to-[#00a3ff]" />
              <div className="p-8 h-full flex flex-col">
                <div className="h-20 flex items-center mb-6">
                  <Image
                    src="/images/loto-max-tn7zzhj0.webp"
                    alt="Lotto Max"
                    width={140}
                    height={70}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">Lotto Max</h3>
                <p className="text-sm text-[#71717a] mb-6 leading-relaxed flex-grow">
                  Canada's biggest jackpot game. Choose 7 numbers from 1-50. MaxMillions bonus draws are added when
                  jackpots reach their maximum.
                </p>

                <div className="mt-auto">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-3 text-center">
                      <div className="text-xs text-[#71717a] mb-1">Numbers</div>
                      <div className="font-semibold text-[#0a0a0a]">7 of 50</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center">
                      <div className="text-xs text-[#71717a] mb-1">Draws</div>
                      <div className="font-semibold text-[#0a0a0a]">Tue & Fri</div>
                    </div>
                  </div>

                  <Link href="/buy-tickets?game=lottomax">
                    <Button className="w-full bg-[#0a0a0a] hover:bg-[#10b981] text-white rounded-xl py-5 transition-colors">
                      Select Numbers
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative bg-[#fafafa] border border-[#e4e4e7] rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[#10b981]/5 transition-all duration-500 h-full">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4a418] to-[#ffd700]" />
              <div className="p-8 h-full flex flex-col">
                <div className="h-20 flex items-center mb-6">
                  <Image
                    src="/images/daily-grant-d03cezku.webp"
                    alt="Daily Grand"
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">Daily Grand</h3>
                <p className="text-sm text-[#71717a] mb-6 leading-relaxed flex-grow">
                  Win $1,000 a day for life! Select 5 main numbers from 1-49 plus 1 Grand Number from 1-7. Choose
                  between daily payments or lump sum.
                </p>

                <div className="mt-auto">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-3 text-center">
                      <div className="text-xs text-[#71717a] mb-1">Numbers</div>
                      <div className="font-semibold text-[#0a0a0a]">5+1 of 49/7</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center">
                      <div className="text-xs text-[#71717a] mb-1">Draws</div>
                      <div className="font-semibold text-[#0a0a0a]">Mon & Thu</div>
                    </div>
                  </div>

                  <Link href="/buy-tickets?game=dailygrand">
                    <Button className="w-full bg-[#0a0a0a] hover:bg-[#10b981] text-white rounded-xl py-5 transition-colors">
                      Select Numbers
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-[#a1a1aa] mt-10">
            *Logos shown are for illustrative purposes only and do not represent official trademarks.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#10b981] font-medium text-sm uppercase tracking-wider mb-3 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Buy Your Ticket</h2>
            <p className="text-[#71717a] max-w-xl mx-auto">
              Follow these simple steps to select your numbers and complete your order.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                step: "01",
                title: "Select a Game",
                desc: "Choose from Lotto 6/49, Lotto Max, or Daily Grand based on your preference.",
              },
              {
                icon: Zap,
                step: "02",
                title: "Pick Numbers",
                desc: "Select your lucky numbers manually or use Quick Pick for random selection.",
              },
              {
                icon: DollarSign,
                step: "03",
                title: "Review Cart",
                desc: "Check your selections and ticket cost before proceeding to checkout.",
              },
              {
                icon: Award,
                step: "04",
                title: "Complete Order",
                desc: "Enter your details and submit your order. You'll receive confirmation via email.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-[#1a1a1a] border border-[#27272a] rounded-2xl p-6 hover:border-[#10b981]/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#10b981]/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#10b981]" />
                  </div>
                  <span className="text-[#10b981] font-bold text-sm">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[#71717a] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#10b981] font-medium text-sm uppercase tracking-wider mb-3 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6">
                Built for Canadian Lottery Enthusiasts
              </h2>
              <p className="text-[#71717a] leading-relaxed mb-8">
                ManitobaLottoInfo provides a comprehensive platform for exploring Canadian lotteries. Whether you're
                curious about game rules or want to select your lucky numbers, we've got you covered.
              </p>

              <div className="space-y-4">
                {[
                  "Detailed information on all major Canadian lotteries",
                  "Easy number selection and ticket ordering",
                  "Responsible gaming resources and support links",
                  "Mobile-friendly interface for on-the-go access",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#52525b]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-2xl p-6 text-center">
                <ShieldCheck className="w-8 h-8 text-[#10b981] mx-auto mb-3" />
                <h4 className="font-semibold text-[#0a0a0a] mb-1">Secure</h4>
                <p className="text-xs text-[#71717a]">Your data is protected</p>
              </div>
              <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-2xl p-6 text-center">
                <Newspaper className="w-8 h-8 text-[#10b981] mx-auto mb-3" />
                <h4 className="font-semibold text-[#0a0a0a] mb-1">Informative</h4>
                <p className="text-xs text-[#71717a]">Accurate lottery details</p>
              </div>
              <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-2xl p-6 text-center">
                <TrendingUp className="w-8 h-8 text-[#10b981] mx-auto mb-3" />
                <h4 className="font-semibold text-[#0a0a0a] mb-1">Updated</h4>
                <p className="text-xs text-[#71717a]">Current game info</p>
              </div>
              <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-2xl p-6 text-center">
                <Calendar className="w-8 h-8 text-[#10b981] mx-auto mb-3" />
                <h4 className="font-semibold text-[#0a0a0a] mb-1">24/7 Access</h4>
                <p className="text-xs text-[#71717a]">Always available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4">Ready to Explore Canadian Lotteries?</h2>
          <p className="text-[#71717a] mb-8 max-w-xl mx-auto">
            Select your lucky numbers today and experience the excitement of Canadian lottery games.
          </p>
          <Link href="/buy-tickets">
            <Button className="bg-[#10b981] hover:bg-[#059669] text-white font-medium px-10 py-6 rounded-xl text-base">
              Buy Tickets Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <ResponsiblePlayBanner />
      <Footer />
    </div>
  )
}
