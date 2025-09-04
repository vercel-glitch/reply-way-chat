import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center">
          {/* Logo Section */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image 
              src="/st-images/logo.png" 
              alt="ChatwayApp Logo" 
              width={120} 
              height={40} 
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}
