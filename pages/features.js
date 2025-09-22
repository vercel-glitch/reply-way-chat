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
      <div className='relative min-h-[400px] bg-gradient-to-b from-slate-50 to-white'>
        {/* Subtle background elements */}
        <div aria-hidden className='pointer-events-none absolute inset-0 overflow-hidden'>
          <div className='hidden sm:block absolute -top-20 -left-20 h-56 w-56 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 opacity-30 blur-3xl'></div>
          <div className='absolute bottom-[-60px] right-[-60px] h-48 w-48 sm:h-56 sm:w-56 rounded-full bg-gradient-to-tr from-cyan-200 to-blue-100 opacity-25 blur-2xl'></div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 sm:h-80 sm:w-80 rounded-full bg-gradient-to-b from-white to-transparent opacity-60 blur-2xl'></div>
          {/* Conic gradient ring */}
          <div className='hidden sm:block absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[320px] w-[320px] rounded-full opacity-[0.15]'
            style={{
              background: 'conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.6), rgba(99,102,241,0.6), rgba(16,185,129,0.5), rgba(59,130,246,0.6))',
              filter: 'blur(32px)'
            }}
          />
          {/* Soft grid pattern that fades at edges */}
          <div className='absolute inset-0 opacity-[0.18]'
            style={{
              backgroundImage: `
                linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)
              `,
              backgroundSize: '28px 28px, 28px 28px',
              backgroundPosition: '0 0, 0 0',
              WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8), transparent 65%)',
              maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8), transparent 65%)'
            }}
          />
        </div>
        
        <Container>
          <div className='flex items-center justify-center min-h-[400px] py-16'>
            <div className='max-w-3xl text-center'>
              <h1 
                ref={heroRef}
                className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 opacity-0'
              >
                Our Features
              </h1>
              <p 
                className='text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed slide-in-delay-1'
              >
                Discover the powerful tools that make Replyway the ultimate collaboration platform for modern teams.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Everything you need to collaborate
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                  className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center lg:items-stretch bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 ease-out`}
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
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
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
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
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

