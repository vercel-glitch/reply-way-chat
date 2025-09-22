import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-[#0b1220] text-white rounded-t-2xl pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top: Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand + Description */}
          <div>
            <div className="flex md:block justify-center md:justify-start">
              <Link href="/" className="inline-flex items-center hover:opacity-90 transition-opacity">
                <Image 
                  src="/footer.png" 
                  alt="ReplyWay Logo" 
                  width={140} 
                  height={44} 
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <p className="mt-5 text-sm leading-6 text-white text-center md:text-left">
              ReplyWay helps teams communicate, collaborate, and get work done faster with
              modern messaging, meetings, and task tools in one unified workspace.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white mb-4 text-center md:text-left">
              Quick Links
            </h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <Link href="/" className="text-white hover:opacity-90 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/features" className="text-white hover:opacity-90 transition-colors">Features</Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:opacity-90 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:opacity-90 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white mb-4 text-center md:text-left">
              Legal
            </h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <Link href="/terms-and-conditions" className="text-white hover:opacity-90 transition-colors">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-white hover:opacity-90 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/cookies-policy" className="text-white hover:opacity-90 transition-colors">Cookies Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-white">© 2025 ReplyWay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
