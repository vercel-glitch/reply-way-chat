import React from 'react'
import Link from 'next/link'
import { Globe, Check, X } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {/* Column 1: What's new */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">What's new</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Surface Book 3</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Surface Pro</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Microsoft Copilot</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Microsoft 365</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Windows 11 apps</Link></li>
            </ul>
          </div>

          {/* Column 2: Microsoft Store */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Microsoft Store</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Account profile</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Download Center</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Microsoft Store Support</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Extended holiday returns</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Order tracking</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Support</Link></li>
            </ul>
          </div>

          {/* Column 3: Education */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Education</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Microsoft in education</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Devices for education</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Microsoft Teams for Education</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Microsoft 365 Education</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Office Education</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Educator training and development</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Deals for students and parents</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Azure for students</Link></li>
            </ul>
          </div>

          {/* Column 4: Business */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Business</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Microsoft Cloud</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Microsoft Security</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Azure</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Dynamics 365</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Microsoft 365</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Microsoft Advertising</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Microsoft 365 Copilot</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Microsoft Teams</Link></li>
            </ul>
          </div>

          {/* Column 5: Developer & IT */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Developer & IT</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Microsoft Developer</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Microsoft Learn</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Support for AI marketplace apps</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Microsoft Tech Community</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Azure Marketplace</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">AppSource</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Microsoft Power Platform</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Visual Studio</Link></li>
            </ul>
          </div>

          {/* Column 6: Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Careers</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">About Microsoft</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Company news</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Privacy at Microsoft</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Investors</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Diversity and inclusion</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Accessibility</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-gray-900">Sustainability</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            {/* Left side */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
              {/* Language selector */}
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">English (Other)</span>
              </div>

              {/* Privacy Choices */}
              <div className="flex items-center space-x-2">
                <Link href="#" className="text-gray-700 hover:text-gray-900">Your Privacy Choices</Link>
                <div className="relative">
                  <div className="w-8 h-4 bg-blue-600 rounded-full flex items-center justify-between px-1">
                    <Check className="w-2 h-2 text-white" />
                    <X className="w-2 h-2 text-white" />
                  </div>
                </div>
              </div>

              {/* Consumer Health Privacy */}
              <Link href="#" className="text-gray-700 hover:text-gray-900">Consumer Health Privacy</Link>
            </div>

            {/* Right side */}
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <Link href="#" className="text-gray-700 hover:text-gray-900">Contact Microsoft</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">Privacy</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">Terms of use</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">Trademarks</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">About our ads</Link>
              <span className="text-gray-700">© Microsoft 2025</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
