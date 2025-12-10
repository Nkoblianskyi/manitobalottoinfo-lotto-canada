import Link from "next/link"

export default function ResponsiblePlayBanner() {
  return (
    <div className="bg-[#18181b] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#10b981]/10 rounded-2xl mb-6">
          <span className="text-[#10b981] text-2xl font-bold">18+</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-6">Responsible Play</h2>
        <div className="space-y-4 text-sm text-[#a1a1aa] max-w-2xl mx-auto">
          <p>
            <span className="text-white font-medium">Age Restriction:</span> All participants must be 18 years of age or
            older to use our services.
          </p>
          <p>
            <span className="text-white font-medium">Informational Purpose:</span> ManitobaLottoInfo provides lottery
            information and educational resources. We are not affiliated with any official government lottery operators.
          </p>
          <p className="pt-2">
            Review our{" "}
            <Link href="/privacy-policy" className="text-[#10b981] hover:underline">
              Privacy Policy
            </Link>{" "}
            for full details.
          </p>
        </div>
      </div>
    </div>
  )
}
