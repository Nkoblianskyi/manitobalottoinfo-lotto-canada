"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ResponsiblePlayBanner from "@/components/responsible-play-banner"
import AgeVerificationPopup from "@/components/age-verification-popup"

const PROVINCES = [
  "Alberta",
  "British Columbia",
  "Quebec",
]

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    province: "",
    agreeToTerms: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => {
      router.push("/login")
    }, 2000)
  }

  const canSubmit =
    formData.agreeToTerms && formData.fullName && formData.email && formData.password && formData.province

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <AgeVerificationPopup />
      <Header />

      <div className="flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-md bg-white border border-[#e4e4e7] rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#10b981] mb-2">Create Account</h1>
            <p className="text-[#71717a] text-sm">Log in to access saved preferences and selections</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#10b981] mb-2">Full Name</label>
              <Input
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="border-[#e4e4e7] bg-[#fafafa] focus:border-[#10b981] focus:ring-[#10b981] rounded-xl"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#10b981] mb-2">Email Address</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="border-[#e4e4e7] bg-[#fafafa] focus:border-[#10b981] focus:ring-[#10b981] rounded-xl"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#10b981] mb-2">Password</label>
              <div className="relative">
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="border-[#e4e4e7] bg-[#fafafa] focus:border-[#10b981] focus:ring-[#10b981] rounded-xl pr-10"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a1a1aa] hover:text-[#71717a]"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-xs text-[#10b981] mt-1">Password must be at least 8 characters.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#10b981] mb-2">Province/Territory:</label>
              <Select
                value={formData.province}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, province: value }))}
              >
                <SelectTrigger className="border-[#e4e4e7] bg-[#fafafa] focus:border-[#10b981] rounded-xl text-[#10b981]">
                  <SelectValue placeholder="Select a Province" />
                </SelectTrigger>
                <SelectContent>
                  {PROVINCES.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeToTerms: checked as boolean }))}
                  className="mt-0.5 border-[#e4e4e7] data-[state=checked]:bg-[#10b981] data-[state=checked]:border-[#10b981]"
                />
                <label htmlFor="terms" className="text-sm text-[#71717a] leading-relaxed">
                  I confirm I am 18+ and agree to the{" "}
                  <Link href="/privacy-policy" className="text-[#10b981] hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
            </div>

            <Button
              type="submit"
              disabled={!canSubmit}
              className="w-full bg-white border-2 border-[#e4e4e7] hover:bg-[#fafafa] text-[#0a0a0a] font-medium py-6 rounded-xl disabled:opacity-50"
            >
              Register Account
            </Button>
          </form>

          <div className="text-center mt-6">
            <p className="text-[#71717a] text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-[#10b981] hover:underline font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      <ResponsiblePlayBanner />

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-10 text-center">
            <div className="w-16 h-16 bg-[#10b981] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Registration Successful!</h3>
            <p className="text-[#71717a]">Redirecting to login page...</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
