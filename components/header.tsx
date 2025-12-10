"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#10b981] rounded-lg flex items-center justify-center">
              <Image src="/favicon.ico" alt="Lotto 649 logo" width={32} height={32} />
            </div>
            <span className="text-xl font-semibold text-white tracking-tight">ManitobaLottoInfo</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#a1a1aa] hover:text-white text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/about-us" className="text-[#a1a1aa] hover:text-white text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-[#a1a1aa] hover:text-white text-sm font-medium transition-colors">
              Contact
            </Link>
            <Link href="/login" className="text-[#a1a1aa] hover:text-white text-sm font-medium transition-colors">
              Login
            </Link>
            <Link href="/signup" className="text-[#a1a1aa] hover:text-white text-sm font-medium transition-colors">
              Register
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/buy-tickets">
              <Button className="bg-[#10b981] hover:bg-[#059669] text-white font-medium px-6 py-2 rounded-lg">
                Buy Tickets
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden text-white hover:text-[#10b981] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#1a1a1a]">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link href="/" className="text-[#a1a1aa] hover:text-white font-medium">
                Home
              </Link>
              <Link href="/about-us" className="text-[#a1a1aa] hover:text-white font-medium">
                About
              </Link>
              <Link href="/contact" className="text-[#a1a1aa] hover:text-white font-medium">
                Contact
              </Link>
              <Link href="/login" className="text-[#a1a1aa] hover:text-white font-medium">
                Login
              </Link>
              <Link href="/signup" className="text-[#a1a1aa] hover:text-white font-medium">
                Register
              </Link>
              <Link href="/buy-tickets">
                <Button className="bg-[#10b981] hover:bg-[#059669] text-white font-medium px-6 py-2 rounded-lg w-full">
                  Buy Tickets
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
