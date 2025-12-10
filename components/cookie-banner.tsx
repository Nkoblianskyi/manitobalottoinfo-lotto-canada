"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl shadow-2xl p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-white font-semibold">Cookie Notice</h3>
          <button onClick={() => setShowBanner(false)} className="text-[#71717a] hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-[#71717a] text-sm mb-5 leading-relaxed">
          We use cookies to enhance your experience on our platform. By continuing to browse, you agree to our use of
          cookies. Learn more in our{" "}
          <Link href="/cookies-policy" className="text-[#10b981] hover:underline">
            Cookies Policy
          </Link>
          .
        </p>
        <div className="flex gap-3">
          <Button
            onClick={handleAccept}
            className="bg-[#10b981] hover:bg-[#059669] text-white text-sm px-5 py-2 rounded-xl"
          >
            Accept
          </Button>
          <Button
            onClick={handleDecline}
            variant="outline"
            className="border-[#27272a] text-[#a1a1aa] hover:bg-[#1a1a1a] hover:text-white text-sm px-5 py-2 rounded-xl bg-transparent"
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  )
}
