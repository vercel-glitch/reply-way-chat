import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Navbar from '../components/common/Navbar'
import Container from '../components/common/Container'
import Footer from '../components/common/Footer'
import { MessageCircle, Video, Users, FileText, Shield, Zap } from 'lucide-react'
import Image from 'next/image'

export default function Features() {
  const heroRef = useRef(null)

  const features = [
    {
      icon: MessageCircle,
      title: "Real-time Messaging",
      description: "Instant communication with your team through secure, fast messaging channels that keep everyone connected.",
      image: "/st-images/chat.jpeg"
    },
    {
      icon: Video,
      title: "Video Conferencing",
      description: "High-quality video calls with screen sharing, recording, and advanced collaboration tools for remote teams.",
      image: "/st-images/hd-call.jpeg"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with shared workspaces, project boards, and real-time document collaboration.",
      image: "/st-images/team.png"
    },
    {
      icon: FileText,
      title: "Global Access",
      description: "Access your workspace from anywhere in the world with seamless connectivity and synchronized data across all devices.",
      image: "/st-images/global-access.png"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, SSO integration, and comprehensive compliance features.",
      image: "/st-images/global-access.png"
    },
    {
      icon: Zap,
      title: "AI-Powered Tools",
      description: "Smart automation, intelligent insights, and AI-assisted workflows to boost your team's productivity.",
      image: "/st-images/ai-powered.png"
    }
  ]

  

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx>{`
        @keyframes slideInFromLeft { 0% { transform: translateX(-30px); opacity:0 } 100% { transform: translateX(0); opacity:1 } }
        .animate-slide-in { animation: slideInFromLeft .8s ease-out forwards }
        .slide-in-delay-1 { animation-delay: .2s }
      `}</style>
      
      
      <Navbar />
      
      {/* Hero Section */}
      <div className='relative min-h-[400px] bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-slate-950 transition-colors duration-300'>
        <Container>
          <div className='flex items-center justify-center min-h-[400px] py-16'>
            <div className='max-w-3xl text-center'>
              <h1 
                ref={heroRef}
                className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4 sm:mb-6 opacity-0'
              >
                Our Features
              </h1>
              <p 
                className='text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed slide-in-delay-1'
              >
                Discover the powerful tools that make Replyway the ultimate collaboration platform for modern teams.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Everything you need to collaborate
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              Powerful features designed to enhance your team's productivity and communication.
            </p>
          </div>

          {/* Alternating Rows */}
          <div className="max-w-6xl mx-auto space-y-16 md:space-y-20">
            {features.map((feature, index) => {
              const isReversed = index % 2 === 1
              return (
                <div
                  key={index}
                  className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center lg:items-stretch bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 hover:shadow-lg transition-all duration-300 ease-out`}
                >
                  {/* Image side */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    {/* Title */}
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-slate-950 transition-colors duration-300">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 dark:text-white">
              Ready to Experience These Features?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed dark:text-gray-300">
              Start using Replyway today and transform how your team collaborates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/signup">
                <button className="bg-primary hover:bg-[#7c3aed] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  )
}

