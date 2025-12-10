"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function AgeVerificationPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const verified = localStorage.getItem("ageVerified")
    if (!verified) {
      setIsOpen(true)
    }
  }, [])

  const handleConfirm = () => {
    localStorage.setItem("ageVerified", "true")
    setIsOpen(false)
  }

  const handleDeny = () => {
    window.location.href = "https://www.google.com"
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md">
      <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-10 max-w-md mx-4 text-center shadow-2xl">
        <div className="w-24 h-24 bg-[#10b981] rounded-2xl flex items-center justify-center mx-auto mb-8">
          <span className="text-white text-4xl font-bold">18+</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-3">Age Verification</h2>
        <p className="text-[#71717a] mb-8 text-sm leading-relaxed">
          This website contains lottery information and services. You must be 18 years or older to continue.
        </p>
        <div className="flex flex-col gap-3">
          <Button
            onClick={handleConfirm}
            className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-medium py-6 rounded-xl text-base"
          >
            I am 18 or older — Enter
          </Button>
          <Button
            onClick={handleDeny}
            variant="outline"
            className="w-full border-[#27272a] text-[#71717a] hover:bg-[#1a1a1a] hover:text-white font-medium py-6 rounded-xl bg-transparent text-base"
          >
            I am under 18 — Exit
          </Button>
        </div>
        <p className="text-xs text-[#52525b] mt-6">
          By entering, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}
