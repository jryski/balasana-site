import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1A2332] text-white py-16 px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold text-[#2A9D8F] mb-4">
              BALASANA
            </h3>
            <p className="text-sm text-[#A8B5C3] leading-relaxed">
              Balance from the inside out. Science-backed wellness for mind, body, and spirit.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">
              Products
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-[#A8B5C3] hover:text-white transition-colors">
                  BalanceEQ Line
                </Link>
              </li>
              <li>
                <Link href="/products#focus" className="text-[#A8B5C3] hover:text-white transition-colors">
                  EQ:Focus
                </Link>
              </li>
              <li>
                <Link href="/products#restore" className="text-[#A8B5C3] hover:text-white transition-colors">
                  EQ:Restore
                </Link>
              </li>
              <li>
                <Link href="/products#bundles" className="text-[#A8B5C3] hover:text-white transition-colors">
                  Bundles
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/story" className="text-[#A8B5C3] hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/transparency" className="text-[#A8B5C3] hover:text-white transition-colors">
                  Transparency
                </Link>
              </li>
              <li>
                <Link href="/evidence" className="text-[#A8B5C3] hover:text-white transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/coas" className="text-[#A8B5C3] hover:text-white transition-colors">
                  COAs
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-[#A8B5C3] hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#A8B5C3] hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-[#A8B5C3] hover:text-white transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-[#A8B5C3] hover:text-white transition-colors">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2C3E50] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#A8B5C3]">
            © 2025 Balasana LLC. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-[#A8B5C3] hover:text-white transition-colors text-sm">
              Privacy
            </Link>
            <Link href="/terms" className="text-[#A8B5C3] hover:text-white transition-colors text-sm">
              Terms
            </Link>
            <Link href="/accessibility" className="text-[#A8B5C3] hover:text-white transition-colors text-sm">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}