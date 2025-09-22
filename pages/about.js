import React, { useEffect, useRef } from 'react'
import Navbar from '../components/common/Navbar'
import Container from '../components/common/Container'
import Footer from '../components/common/Footer'

const values = [
  { title: 'Innovation',     description: 'We constantly push boundaries to create solutions that anticipate future needs and challenges.', icon: '🚀' },
  { title: 'Collaboration',  description: 'We believe that the best solutions come from working together and sharing diverse perspectives.', icon: '🤝' },
  { title: 'Excellence',     description: "We're committed to delivering the highest quality products and experiences for our users.",      icon: '⭐' },
  { title: 'User-Centric',   description: "Every decision we make is driven by what's best for our users and their success.",               icon: '👥' },
  { title: 'Integrity',      description: 'We operate with transparency, honesty, and ethical practices in everything we do.',              icon: '🔒' },
  { title: 'Growth',         description: 'We embrace continuous learning and improvement, both as individuals and as a company.',         icon: '📈' }
]

const team = [
  { name: 'Sarah Johnson',   role: 'CEO & Founder',       description: 'Visionary leader with 15+ years in tech innovation and product development.',                         image: '👩‍💼' },
  { name: 'Michael Chen',    role: 'CTO',                 description: 'Expert in AI and machine learning with a passion for scalable architecture.',                         image: '👨‍💻' },
  { name: 'Emily Rodriguez', role: 'Head of Design',      description: 'Creative director focused on user experience and beautiful, intuitive interfaces.',                   image: '👩‍🎨' },
  { name: 'David Kim',       role: 'VP of Engineering',   description: 'Seasoned engineering leader building robust and scalable systems.',                                   image: '👨‍🔧' },
  { name: 'Lisa Thompson',   role: 'Head of Marketing',   description: 'Strategic marketer with expertise in growth and brand development.',                                 image: '👩‍💼' },
  { name: 'Alex Morgan',     role: 'Product Manager',     description: 'Product strategist focused on user needs and market opportunities.',                                  image: '👨‍💼' }
]

export default function About() {
  const heroRef = useRef(null)
  const missionRef = useRef(null)
  const valuesRef = useRef(null)
  const teamRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>
      entries.forEach(e => e.isIntersecting && e.target.classList.add('animate-slide-in')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    ;[heroRef, missionRef, valuesRef, teamRef].forEach(r => r.current && observer.observe(r.current))
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

      {/* Hero */}
      <div className='relative min-h-[400px] bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-slate-950 transition-colors'>
        {/* Decorative background removed intentionally */}
        <Container>
          <div className='flex items-center justify-center min-h-[400px] py-16'>
            <div className='max-w-3xl text-center'>
              <h1 ref={heroRef} className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4 sm:mb-6 opacity-0'>
                About Replyway
              </h1>
              <p className='text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed slide-in-delay-1'>
                We're on a mission to transform the future of work through innovative AI-powered collaboration tools that bridge the gap between physical and digital worlds.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Mission */}
      <section className="pt-12 pb-20 bg-white dark:bg-gray-950 transition-colors">
        <Container>
          <div ref={missionRef} className="max-w-4xl mx-auto text-center opacity-0">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              To empower teams and organizations with cutting-edge technology that enhances productivity,
              fosters meaningful collaboration, and creates seamless experiences across all devices and platforms.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We believe that the future of work is not just about being connected, but about being truly
              collaborative, efficient, and innovative. Our platform brings together the best of AI,
              communication, and productivity tools to help you achieve more.
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-slate-950 transition-colors">
        <Container>
          <div ref={valuesRef} className="text-center mb-16 opacity-0">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{v.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      

      {/* Story */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-slate-950 transition-colors">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-6">Our Story</h2>
            </div>
            <div className="prose prose-lg mx-auto text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed mb-6">Replyway was born from a simple observation: while technology has made us more connected than ever, true collaboration remains challenging. Teams struggle with fragmented tools, poor user experiences, and solutions that don't adapt to their unique workflows.</p>
              <p className="text-lg leading-relaxed mb-6">Founded in 2025, we set out to create a platform that would revolutionize how teams work together. Our journey began with a small team of passionate engineers, designers, and product experts who shared a common vision: to build tools that don't just connect people, but truly empower them.</p>
              <p className="text-lg leading-relaxed mb-6">Today, Replyway serves thousands of teams worldwide, helping them communicate more effectively, collaborate seamlessly, and achieve their goals faster. We continue to innovate and evolve, always guided by our core mission and the feedback of our amazing community.</p>
              <p className="text-lg leading-relaxed">As we look to the future, we're excited about the possibilities that AI and emerging technologies bring. We're committed to staying at the forefront of innovation while maintaining the human-centered approach that makes our platform special.</p>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  )
}