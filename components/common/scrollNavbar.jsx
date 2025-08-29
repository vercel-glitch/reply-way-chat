import React, { useState, useEffect } from 'react'
import Container from './Container'
import { Link as ScrollLink } from 'react-scroll'

export default function ScrollNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('features')

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
      
      // Update active section based on scroll position
      const sections = ['features', 'solutions', 'products-and-services', 'customer-stories', 'get-started']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Featured news', to: 'features' },
    { name: 'Solutions', to: 'solutions' },
    { name: 'Products and services', to: 'products-and-services' },
    { name: 'Customer stories', to: 'customer-stories' },
    { name: 'Get started', to: 'get-started' }
  ]

  return (
    <nav className={` z-50 transition-all duration-300 hidden lg:block ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100' 
        : 'bg-white'
    }`}>
      <Container className=" py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-gray-700 font-medium">ChatwayApp</span>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <ScrollLink 
                to={item.to} 
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                key={index} 
                className="relative group cursor-pointer"
              >
                <span className={`text-sm font-medium transition-colors ${
                  activeSection === item.to
                    ? 'text-purple-700' 
                    : 'text-gray-700 hover:text-purple-700'
                }`}>
                  {item.name}
                </span>
                {activeSection === item.to && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 rounded-full"></div>
                )}
                {activeSection !== item.to && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                )}
              </ScrollLink>
            ))}
          </div>

          {/* CTA Button */}
          <button className="px-6 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors shadow-sm">
            See plans and pricing
          </button>
        </div>
      </Container>
    </nav>
  )
}