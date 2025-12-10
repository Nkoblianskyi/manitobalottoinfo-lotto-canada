import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#10b981] rounded-lg flex items-center justify-center">
                  <Image src="/favicon.ico" alt="Lotto 649 logo" width={32} height={32} />
                </div>
                <span className="text-xl font-semibold text-white tracking-tight">ManitobaLottoInfo</span>
              </Link>
              
            </div>
            <p className="text-[#71717a] text-sm leading-relaxed max-w-md">
              Your trusted source for Canadian lottery information. We provide comprehensive lottery details and number
              selection services for informational purposes only.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Navigation</h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-sm text-[#71717a] hover:text-[#10b981] transition-colors">
                Home
              </Link>
              <Link href="/about-us" className="block text-sm text-[#71717a] hover:text-[#10b981] transition-colors">
                About
              </Link>
              <Link href="/buy-tickets" className="block text-sm text-[#71717a] hover:text-[#10b981] transition-colors">
                Buy Tickets
              </Link>
              <Link href="/contact" className="block text-sm text-[#71717a] hover:text-[#10b981] transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Legal</h4>
            <nav className="space-y-3">
              <Link
                href="/cookies-policy"
                className="block text-sm text-[#71717a] hover:text-[#10b981] transition-colors"
              >
                Cookies Policy
              </Link>
              <Link
                href="/privacy-policy"
                className="block text-sm text-[#71717a] hover:text-[#10b981] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/responsible-gaming"
                className="block text-sm text-[#71717a] hover:text-[#10b981] transition-colors"
              >
                Responsible Gaming
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 mb-8">
          <div className="text-xs text-[#52525b] space-y-3 max-w-4xl">
            <p>
              Think before you play. Play responsibly. If you need help, call 1-800-461-0140 or visit{" "}
              <a
                href="https://aidejeu.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#10b981] hover:underline"
              >
                aidejeu.ca
              </a>
            </p>
            <p>
              This website is operated by 2025 Winnipeg Blue Bombers under license LGCA 1482-RF-47323. Gambling is
              strictly prohibited for individuals under the age of 18.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="bg-white rounded-xl p-4 flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://aidejeu.ca/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity flex items-center justify-center"
            >
              <img
                src="/images/gambling-naltkqif.webp"
                alt="Gambling Help and Referral"
                className="h-10 w-auto object-contain"
              />
            </a>
            <a
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity flex items-center justify-center"
            >
              <img src="/gamblingaware.webp" alt="GambleAware" className="h-10 w-auto object-contain" />
            </a>
            <a
              href="https://gamblershelp.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity flex items-center justify-center"
            >
              <img
                src="/images/gamblers-help-dhjxeuqa.webp"
                alt="Gambler's Help 1800 858 858"
                className="h-10 w-auto object-contain"
              />
            </a>
            <a
              href="https://www.mbll.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity flex items-center justify-center"
            >
              <img
                src="/images/manitoba-czi2vbyz.webp"
                alt="Manitoba Liquor & Lotteries"
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>

          <p className="text-xs text-[#52525b]">© 2025 Manitoba Liquor & Lotteries Corporation</p>
        </div>
      </div>
    </footer>
  )
}
