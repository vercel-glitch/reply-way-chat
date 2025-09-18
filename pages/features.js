import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Navbar from '../components/common/Navbar'
import Container from '../components/common/Container'
import Footer from '../components/common/Footer'
import { Users, Phone, Users2, MessageCircle, FolderKanban, CheckSquare } from 'lucide-react'

export default function Features() {
  const heroRef = useRef(null)

  const features = [
    {
      id: 'meet',
      title: 'Meet',
      description: 'Make meetings more impactful with features like PowerPoint Live, Microsoft Whiteboard, and AI-generated meeting notes.',
      image: '/st-images/meet.avif',
      icon: Users
    },
    {
      id: 'call',
      title: 'Call',
      description: 'Stay connected with crystal-clear audio and video calls, screen sharing, and advanced calling features.',
      image: '/st-images/call.avif',
      icon: Phone
    },
    {
      id: 'collaborate',
      title: 'Collaborate',
      description: 'Work together seamlessly with real-time document editing, file sharing, and team collaboration tools.',
      image: '/st-images/collaborate.avif',
      icon: Users2
    },
    {
      id: 'chat',
      title: 'Chat',
      description: 'Communicate instantly with team chat, channels, and integrated messaging across all your devices.',
      image: '/st-images/chat.avif',
      icon: MessageCircle
    },
    {
      id: 'project-management',
      title: 'Project Management',
      description: 'Organize projects, set goals, and track progress seamlessly.',
      image: '/st-images/meet.avif',
      icon: FolderKanban
    },
    {
      id: 'task-management',
      title: 'Task Management',
      description: 'Manage tasks efficiently with deadlines, priorities, and collaboration tools.',
      image: '/st-images/call.avif',
      icon: CheckSquare
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
      <section className="pt-2 pb-20 bg-white">
        <Container>
          {/* Features Sections */}
          <div className="space-y-20">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.id} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 min-h-[400px] lg:min-h-[500px]">
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
                      {feature.description}
                    </p>
                    
                    {/* Learn more button removed as requested */}
                  </div>
                  
                  {/* Image */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              );
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
