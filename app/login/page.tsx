"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Check, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ResponsiblePlayBanner from "@/components/responsible-play-banner"
import AgeVerificationPopup from "@/components/age-verification-popup"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => {
      router.push("/")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <AgeVerificationPopup />
      <Header />

      <div className="flex items-center justify-center min-h-[60vh] py-12 px-6">
        <div className="w-full max-w-md bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Login</h1>
            <p className="text-[#71717a] text-sm">Log in to access saved preferences and selections</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#a1a1aa] mb-2">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[#1a1a1a] border-[#2a2a2a] text-white focus:border-[#10b981] focus:ring-[#10b981] rounded-xl placeholder:text-[#52525b]"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#a1a1aa] mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-[#1a1a1a] border-[#2a2a2a] text-white focus:border-[#10b981] focus:ring-[#10b981] rounded-xl placeholder:text-[#52525b] pr-10"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#52525b] hover:text-[#a1a1aa]"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  className="border-[#2a2a2a] data-[state=checked]:bg-[#10b981] data-[state=checked]:border-[#10b981]"
                />
                <label htmlFor="remember" className="text-sm text-[#a1a1aa]">
                  Remember Me
                </label>
              </div>
              <Link href="#" className="text-sm text-[#10b981] hover:underline">
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-white hover:bg-[#e4e4e7] text-[#0a0a0a] font-medium py-6 rounded-xl"
            >
              Login
            </Button>
          </form>

          <div className="text-center mt-6">
            <p className="text-[#71717a] text-sm">
              New to ManitobaLottoInfo?{" "}
              <Link href="/signup" className="text-[#10b981] hover:underline font-medium">
                Create an Account
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
            <h3 className="text-2xl font-bold text-white mb-2">Login Successful!</h3>
            <p className="text-[#71717a]">Redirecting to homepage...</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
