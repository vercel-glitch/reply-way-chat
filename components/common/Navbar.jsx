import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, MessageCircle, Video, Users, Smartphone, AppWindow, Building } from 'lucide-react'
import Container from '../common/Container'
import { navigationData } from '../../src/data/featuresPages'

export default function Navbar() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 border py-3 relative">
      <Container className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          {/* ChatwayApp Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-gray-700 font-medium">ChatwayApp</span>
          </Link>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-300"></div>

          {/* App Name */}
          <span className="text-gray-900 font-semibold hidden lg:block">Chat</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">

          {/* Features Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsFeaturesOpen(true)}
            onMouseLeave={() => setIsFeaturesOpen(false)}
          >
            <div className="flex items-center space-x-1 cursor-pointer group">
              <span className={`text-gray-600 hover:text-gray-900 transition-colors ${isFeaturesOpen ? 'text-gray-900' : ''}`}>
                Features
              </span>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isFeaturesOpen ? 'rotate-180 text-gray-700' : 'group-hover:text-gray-700'}`} />
            </div>

            {/* Dropdown Menu */}
            {isFeaturesOpen && (
              <div className="absolute top-full left-0 mt-0 w-[800px]   py-6 z-[9999]">
                <div className='border  bg-white rounded-lg shadow-xl border-gray-200  '>
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-8">
                      {navigationData.features.map((section, index) => (
                        <div key={index} className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <section.icon className="w-5 h-5 text-blue-600" />
                            <h3 className="font-semibold text-gray-900 text-sm">{section.title}</h3>
                          </div>
                          <ul className="space-y-2">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  href={item.href}
                                  className="text-gray-600 hover:text-blue-600 text-sm block py-1 transition-colors"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-1 cursor-pointer group">
            <span className="text-gray-600 hover:text-gray-900">Pricing</span>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
          </div>

          <div className="flex items-center space-x-1 cursor-pointer group">
            <span className="text-gray-600 hover:text-gray-900">Solutions</span>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
          </div>

          <div className="flex items-center space-x-1 cursor-pointer group">
            <span className="text-gray-600 hover:text-gray-900">Resources</span>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
          </div>

          <div className="flex items-center space-x-1 cursor-pointer group">
            <span className="text-gray-600 hover:text-gray-900">Support</span>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 hidden lg:block border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
            Download App
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
            Sign in
          </button>
        </div>
      </Container>
    </nav>
  )
}