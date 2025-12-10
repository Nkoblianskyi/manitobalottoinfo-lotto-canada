"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Shuffle, Plus, Check, Info, Trash2, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ResponsiblePlayBanner from "@/components/responsible-play-banner"
import AgeVerificationPopup from "@/components/age-verification-popup"
import Image from "next/image"

const TICKET_PRICE = 5.0
const TAX_RATE = 0.05

const LOTTERY_GAMES = {
  lotto649: {
    name: "Lotto 6/49",
    maxNumbers: 49,
    selectCount: 6,
    color: "#c8102e",
    logo: "/images/lotto-649-bdedv7iu.webp",
    draws: "Wednesday & Saturday",
  },
  lottomax: {
    name: "Lotto Max",
    maxNumbers: 50,
    selectCount: 7,
    color: "#0066cc",
    logo: "/images/loto-max-tn7zzhj0.webp",
    draws: "Tuesday & Friday",
  },
  dailygrand: {
    name: "Daily Grand",
    maxNumbers: 49,
    selectCount: 5,
    color: "#d4a418",
    logo: "/images/daily-grant-d03cezku.webp",
    draws: "Monday & Thursday",
  },
}

const PROVINCES = ["Alberta", "British Columbia", "Quebec"]

function BuyTicketsContent() {
  const searchParams = useSearchParams()
  const initialGame = searchParams.get("game") || "lotto649"

  const [selectedGame, setSelectedGame] = useState<keyof typeof LOTTERY_GAMES>(
    initialGame as keyof typeof LOTTERY_GAMES,
  )
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([])
  const [cart, setCart] = useState<{ game: string; numbers: number[]; gameKey: string }[]>([])
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [province, setProvince] = useState("")
  const [ageConfirmed, setAgeConfirmed] = useState(false)
  const [cookiesAccepted, setCookiesAccepted] = useState(false)
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const currentGame = LOTTERY_GAMES[selectedGame]

  const toggleNumber = (num: number) => {
    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== num))
    } else if (selectedNumbers.length < currentGame.selectCount) {
      setSelectedNumbers([...selectedNumbers, num])
    }
  }

  const quickPick = () => {
    const numbers: number[] = []
    while (numbers.length < currentGame.selectCount) {
      const rand = Math.floor(Math.random() * currentGame.maxNumbers) + 1
      if (!numbers.includes(rand)) {
        numbers.push(rand)
      }
    }
    setSelectedNumbers(numbers.sort((a, b) => a - b))
  }

  const addToCart = () => {
    if (selectedNumbers.length === currentGame.selectCount) {
      setCart([...cart, { game: currentGame.name, numbers: [...selectedNumbers], gameKey: selectedGame }])
      setSelectedNumbers([])
    }
  }

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  const subtotal = cart.length * TICKET_PRICE
  const taxes = subtotal * TAX_RATE
  const total = subtotal + taxes

  const canSubmit =
    cart.length > 0 && fullName && email && province && ageConfirmed && cookiesAccepted && privacyAccepted

  const handleSubmit = () => {
    if (canSubmit) {
      setShowSuccess(true)
    }
  }

  const handleGameChange = (game: string) => {
    setSelectedGame(game as keyof typeof LOTTERY_GAMES)
    setSelectedNumbers([])
  }

  useEffect(() => {
    setSelectedNumbers([])
  }, [selectedGame])

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <AgeVerificationPopup />
      <Header />

      <section className="bg-[#0a0a0a] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-[#10b981] text-sm font-medium mb-2 block">Buy Tickets</span>
              <h1 className="text-2xl md:text-3xl font-bold text-white">Select Your Numbers</h1>
            </div>
            <div className="flex items-center gap-4 bg-[#1a1a1a] rounded-xl px-5 py-3">
              <ShoppingCart className="w-5 h-5 text-[#10b981]" />
              <span className="text-white font-medium">{cart.length} ticket(s) in cart</span>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white border border-[#e4e4e7] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 bg-[#10b981] rounded-lg flex items-center justify-center text-white text-sm font-bold">
                  1
                </span>
                <h2 className="text-lg font-semibold text-[#0a0a0a]">Choose Your Game</h2>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {Object.entries(LOTTERY_GAMES).map(([key, game]) => (
                  <button
                    key={key}
                    onClick={() => handleGameChange(key)}
                    className={`relative rounded-xl p-4 text-left transition-all ${
                      selectedGame === key
                        ? "bg-[#fafafa] border-2 border-[#10b981] shadow-lg shadow-[#10b981]/10"
                        : "bg-[#fafafa] border border-[#e4e4e7] hover:border-[#10b981]/50"
                    }`}
                  >
                    {selectedGame === key && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-[#10b981] rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <div className="h-10 mb-3">
                      <Image
                        src={game.logo || "/placeholder.svg"}
                        alt={game.name}
                        width={80}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-xs text-[#71717a]">{game.selectCount} numbers</div>
                  </button>
                ))}
              </div>
            </section>

            <section className="bg-white border border-[#e4e4e7] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#10b981] rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    2
                  </span>
                  <h2 className="text-lg font-semibold text-[#0a0a0a]">Pick Your Numbers</h2>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#71717a]">Selected:</span>
                  <span className="font-bold text-[#10b981]">
                    {selectedNumbers.length}/{currentGame.selectCount}
                  </span>
                </div>
              </div>

              {/* Selected numbers display */}
              <div className="bg-[#fafafa] rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-4 h-4 text-[#71717a]" />
                  <span className="text-sm text-[#71717a]">
                    Select <strong className="text-[#0a0a0a]">{currentGame.selectCount}</strong> numbers from 1 to{" "}
                    {currentGame.maxNumbers}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: currentGame.selectCount }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold transition-all ${
                        selectedNumbers[i]
                          ? "bg-[#10b981] text-white shadow-lg shadow-[#10b981]/30"
                          : "bg-white border-2 border-dashed border-[#e4e4e7] text-[#e4e4d8]"
                      }`}
                    >
                      {selectedNumbers[i] || "?"}
                    </div>
                  ))}
                </div>
              </div>

              {/* Number grid */}
              <div className="grid grid-cols-7 sm:grid-cols-10 gap-2 mb-6">
                {Array.from({ length: currentGame.maxNumbers }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    onClick={() => toggleNumber(num)}
                    disabled={selectedNumbers.length >= currentGame.selectCount && !selectedNumbers.includes(num)}
                    className={`aspect-square rounded-xl text-sm font-medium transition-all ${
                      selectedNumbers.includes(num)
                        ? "bg-[#10b981] text-white shadow-lg shadow-[#10b981]/20 scale-110"
                        : selectedNumbers.length >= currentGame.selectCount
                          ? "bg-[#fafafa] text-[#d4d4d8] cursor-not-allowed"
                          : "bg-[#fafafa] text-[#0a0a0a] hover:bg-[#fafafa] hover:border-[#10b981] border border-[#e4e4e7]"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={quickPick}
                  variant="outline"
                  className="border-[#e4e4e7] text-[#0a0a0a] hover:bg-[#fafafa] rounded-xl bg-white"
                >
                  <Shuffle className="w-4 h-4 mr-2" />
                  Quick Pick
                </Button>
                <Button
                  onClick={() => setSelectedNumbers([])}
                  variant="outline"
                  className="border-[#e4e4e7] text-[#71717a] hover:bg-[#fafafa] rounded-xl bg-white"
                >
                  Clear All
                </Button>
                <Button
                  onClick={addToCart}
                  disabled={selectedNumbers.length !== currentGame.selectCount}
                  className="bg-[#10b981] hover:bg-[#059669] text-white rounded-xl disabled:opacity-50 ml-auto"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </section>

            <section className="bg-white border border-[#e4e4e7] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 bg-[#10b981] rounded-lg flex items-center justify-center text-white text-sm font-bold">
                  3
                </span>
                <h2 className="text-lg font-semibold text-[#0a0a0a]">Your Information</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mb-6">
                <div>
                  <Label htmlFor="fullName" className="text-[#0a0a0a] font-medium text-sm mb-2 block">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="border-[#e4e4e7] focus:border-[#10b981] focus:ring-[#10b981] rounded-xl"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[#0a0a0a] font-medium text-sm mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-[#e4e4e7] focus:border-[#10b981] focus:ring-[#10b981] rounded-xl"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label className="text-[#0a0a0a] font-medium text-sm mb-2 block">Province/Territory</Label>
                <Select value={province} onValueChange={setProvince}>
                  <SelectTrigger className="border-[#e4e4e7] rounded-xl">
                    <SelectValue placeholder="Select your province" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px] overflow-y-auto">
                    {PROVINCES.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-[#fafafa] rounded-xl p-5 space-y-4">
                <h4 className="font-medium text-[#0a0a0a] text-sm">Agreements & Confirmations</h4>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="age"
                    checked={ageConfirmed}
                    onCheckedChange={(checked) => setAgeConfirmed(checked as boolean)}
                    className="mt-0.5 data-[state=checked]:bg-[#10b981] data-[state=checked]:border-[#10b981]"
                  />
                  <Label htmlFor="age" className="text-sm text-[#71717a] leading-relaxed cursor-pointer">
                    I confirm I am <strong className="text-[#0a0a0a]">18 years or older</strong> and agree to the{" "}
                    <Link href="/privacy-policy" className="text-[#10b981] hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="cookies"
                    checked={cookiesAccepted}
                    onCheckedChange={(checked) => setCookiesAccepted(checked as boolean)}
                    className="mt-0.5 data-[state=checked]:bg-[#10b981] data-[state=checked]:border-[#10b981]"
                  />
                  <Label htmlFor="cookies" className="text-sm text-[#71717a] leading-relaxed cursor-pointer">
                    I accept the{" "}
                    <Link href="/cookies-policy" className="text-[#10b981] hover:underline">
                      Cookies Policy
                    </Link>
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="privacy"
                    checked={privacyAccepted}
                    onCheckedChange={(checked) => setPrivacyAccepted(checked as boolean)}
                    className="mt-0.5 data-[state=checked]:bg-[#10b981] data-[state=checked]:border-[#10b981]"
                  />
                  <Label htmlFor="privacy" className="text-sm text-[#71717a] leading-relaxed cursor-pointer">
                    I understand and accept the{" "}
                    <Link href="/privacy-policy" className="text-[#10b981] hover:underline">
                      Terms and Conditions
                    </Link>
                  </Label>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white border border-[#e4e4e7] rounded-2xl overflow-hidden">
                <div className="bg-[#0a0a0a] px-6 py-4">
                  <h2 className="font-semibold text-white flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Your Cart
                  </h2>
                </div>

                <div className="p-6">
                  {cart.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-[#fafafa] rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <ShoppingCart className="w-8 h-8 text-[#d4d4d8]" />
                      </div>
                      <p className="text-[#71717a] text-sm">No tickets added yet</p>
                      <p className="text-[#a1a1aa] text-xs mt-1">Select numbers and add to cart</p>
                    </div>
                  ) : (
                    <div className="space-y-3 mb-6">
                      {cart.map((item, index) => {
                        const gameInfo = LOTTERY_GAMES[item.gameKey as keyof typeof LOTTERY_GAMES]
                        return (
                          <div key={index} className="bg-[#fafafa] rounded-xl p-4 relative group">
                            <button
                              onClick={() => removeFromCart(index)}
                              className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50"
                            >
                              <Trash2 className="w-3 h-3 text-red-500" />
                            </button>
                            <div className="flex items-center gap-2 mb-3">
                              <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: gameInfo?.color || "#10b981" }}
                              />
                              <span className="font-medium text-sm text-[#0a0a0a]">{item.game}</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {item.numbers.map((num) => (
                                <span
                                  key={num}
                                  className="w-8 h-8 bg-[#10b981] rounded-lg flex items-center justify-center text-white text-xs font-bold"
                                >
                                  {num}
                                </span>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}

                  <div className="border-t border-[#e4e4e7] pt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#71717a]">
                        Subtotal ({cart.length} ticket{cart.length !== 1 ? "s" : ""})
                      </span>
                      <span className="text-[#0a0a0a]">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#71717a]">Taxes (5%)</span>
                      <span className="text-[#0a0a0a]">${taxes.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-[#e4e4e7] pt-3 flex justify-between">
                      <span className="font-semibold text-[#0a0a0a]">Total</span>
                      <span className="font-bold text-xl text-[#10b981]">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                disabled={!canSubmit}
                className="w-full bg-[#10b981] hover:bg-[#059669] text-white py-6 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Complete Purchase
              </Button>

              <p className="text-xs text-center text-[#71717a]">For informational purposes only.</p>
            </div>
          </div>
        </div>
      </main>

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0a0a0a] border border-[#27272a] rounded-3xl p-10 max-w-md mx-4 text-center">
            <div className="w-20 h-20 bg-[#10b981] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Order Submitted!</h2>
            <p className="text-[#71717a] mb-6 leading-relaxed">
              Your lottery ticket order has been submitted successfully. Please expect further instructions via email.
            </p>
            <div className="space-y-3">
              <Button
                onClick={() => {
                  setShowSuccess(false)
                  setCart([])
                  setFullName("")
                  setEmail("")
                  setProvince("")
                  setAgeConfirmed(false)
                  setCookiesAccepted(false)
                  setPrivacyAccepted(false)
                }}
                className="w-full bg-[#10b981] hover:bg-[#059669] text-white rounded-xl py-5"
              >
                Buy More Tickets
              </Button>
              <Link href="/" className="block">
                <Button
                  variant="outline"
                  className="w-full border-[#27272a] text-white hover:bg-[#1a1a1a] rounded-xl py-5 bg-transparent"
                >
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <ResponsiblePlayBanner />
      <Footer />
    </div>
  )
}

export default function BuyTicketsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-[#10b981] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-[#71717a]">Loading...</p>
          </div>
        </div>
      }
    >
      <BuyTicketsContent />
    </Suspense>
  )
}
