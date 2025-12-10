import Header from "@/components/header"
import Footer from "@/components/footer"
import ResponsiblePlayBanner from "@/components/responsible-play-banner"
import AgeVerificationPopup from "@/components/age-verification-popup"

export default function ResponsibleGamingPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <AgeVerificationPopup />
      <Header />

      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#10b981] mb-6">Responsible Gaming</h1>
            <p className="text-[#71717a] leading-relaxed">
              At ManitobaLottoInfo, we encourage responsible participation in all gaming activities. We understand the
              importance of promoting healthy, responsible gaming practices and supporting those who may face challenges
              with gambling.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#10b981] mb-4">Important Disclaimer:</h2>
            <p className="text-[#71717a] leading-relaxed">
              ManitobaLottoInfo is an informational platform. If you or someone you know is struggling with
              gambling-related issues, we urge you to seek professional help immediately.
            </p>
          </div>

          {/* Golden Rules */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#10b981] mb-4">Golden Rules of Responsible Play</h2>
            <p className="text-[#71717a] mb-4">
              If you decide to engage in real-money lotteries or gambling activities, please consider these important
              principles:
            </p>
            <ul className="space-y-3 text-[#71717a]">
              <li className="flex items-start">
                <span className="text-[#10b981] mr-2">•</span>
                <span>
                  <span className="text-[#0a0a0a] font-medium">Set a Budget:</span> Never gamble with money meant for
                  essential needs like rent, food, or bills. Only use funds that you can afford to lose.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#10b981] mr-2">•</span>
                <span>
                  <span className="text-[#0a0a0a] font-medium">Time Limits:</span> Set specific time limits for gaming,
                  and be sure to stick to them regardless of the outcome.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#10b981] mr-2">•</span>
                <span>
                  <span className="text-[#0a0a0a] font-medium">Know the Odds:</span> Understand that lotteries and
                  gambling activities are based on chance, and winning substantial prizes is very unlikely.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#10b981] mr-2">•</span>
                <span>
                  <span className="text-[#0a0a0a] font-medium">Don't Chase Losses:</span> Avoid the temptation to try
                  and win back lost money, as this behavior often leads to deeper financial problems.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#10b981] mr-2">•</span>
                <span>
                  <span className="text-[#0a0a0a] font-medium">Keep it Fun:</span> Remember, gambling should be
                  enjoyable entertainment. It should never be used as a solution for financial problems.
                </span>
              </li>
            </ul>
          </div>

          {/* Warning Signs */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#10b981] mb-4">
              Recognizing the Warning Signs of Problem Gambling
            </h2>
            <p className="text-[#71717a] mb-4">
              Problem gambling can impact anyone. If you notice these signs in yourself or someone you know, it may be
              time to reach out for help:
            </p>
            <ul className="space-y-3 text-[#71717a]">
              <li className="flex items-start">
                <span className="text-[#10b981] mr-2">•</span>
                <span>
                  <span className="text-[#0a0a0a] font-medium">Financial Strain:</span> Borrowing money or selling
                  personal belongings to fund gambling activities or recover losses.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#10b981] mr-2">•</span>
                <span>
                  <span className="text-[#0a0a0a] font-medium">Secrecy:</span> Hiding gambling activities from family
                  and friends, or lying about losses.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#10b981] mr-2">•</span>
                <span>
                  <span className="text-[#0a0a0a] font-medium">Loss of Control:</span> Being unable to stop or control
                  the urge to gamble, even when it's causing harm.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#10b981] mr-2">•</span>
                <span>
                  <span className="text-[#0a0a0a] font-medium">Neglecting Responsibilities:</span> Prioritizing gambling
                  over work, school, or family obligations.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#10b981] mr-2">•</span>
                <span>
                  <span className="text-[#0a0a0a] font-medium">Emotional Distress:</span> Feeling anxious, guilty, or
                  depressed when you can't gamble or after a gambling session.
                </span>
              </li>
            </ul>
          </div>

          {/* Getting Help */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#10b981] mb-4">Getting Help in Canada</h2>
            <p className="text-[#71717a] mb-6">
              If you or someone you know is experiencing difficulties related to gambling, support is available across
              Canada. Please reach out to one of the following resources:
            </p>

            <div className="bg-white border border-[#e4e4e7] rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-bold text-[#10b981] mb-4">National Support:</h3>
              <div className="space-y-4 text-[#71717a]">
                <div>
                  <p className="font-medium text-[#0a0a0a]">ConnexOntario - Problem Gambling Helpline</p>
                  <p>
                    Available 24/7: <span className="text-[#10b981]">1-866-531-2600</span>
                  </p>
                  <p>
                    Visit:{" "}
                    <a
                      href="https://www.connexontario.ca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#10b981] hover:underline"
                    >
                      www.connexontario.ca
                    </a>
                  </p>
                </div>
                <div>
                  <p className="font-medium text-[#0a0a0a]">GambleAware</p>
                  <p>
                    Visit:{" "}
                    <a
                      href="https://www.gambleaware.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#10b981] hover:underline"
                    >
                      www.gambleaware.org
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e4e4e7] rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-bold text-[#0a0a0a] mb-4">Manitoba Resources:</h3>
              <div className="space-y-4 text-[#71717a]">
                <div>
                  <p className="font-medium text-[#0a0a0a]">Addictions Foundation of Manitoba (AFM)</p>
                  <p>
                    Phone: <span className="text-[#10b981]">1-855-662-6605</span>
                  </p>
                  <p>
                    Visit:{" "}
                    <a
                      href="https://afm.mb.ca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#10b981] hover:underline"
                    >
                      afm.mb.ca
                    </a>
                  </p>
                </div>
                <div>
                  <p className="font-medium text-[#0a0a0a]">Manitoba Liquor & Lotteries - Responsible Gaming</p>
                  <p>
                    Visit:{" "}
                    <a
                      href="https://www.mbll.ca/content/responsible-gaming"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#10b981] hover:underline"
                    >
                      www.mbll.ca
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e4e4e7] rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#0a0a0a] mb-4">Additional Resources:</h3>
              <div className="space-y-4 text-[#71717a]">
                <div>
                  <p className="font-medium text-[#0a0a0a]">Responsible Gambling Council</p>
                  <p>
                    Visit:{" "}
                    <a
                      href="https://www.responsiblegambling.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#10b981] hover:underline"
                    >
                      www.responsiblegambling.org
                    </a>
                  </p>
                </div>
                <div>
                  <p className="font-medium text-[#0a0a0a]">Gambler's Help</p>
                  <p>
                    Phone: <span className="text-[#10b981]">1800 858 858</span>
                  </p>
                  <p>
                    Visit:{" "}
                    <a
                      href="https://gamblershelp.com.au"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#10b981] hover:underline"
                    >
                      gamblershelp.com.au
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* End of updated resources */}
          </div>
        </div>
      </div>

      <ResponsiblePlayBanner />
      <Footer />
    </div>
  )
}
