import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Navbar from '../components/common/Navbar'
import Container from '../components/common/Container'
import Footer from '../components/common/Footer'
import { Download as DownloadIcon, Smartphone, Monitor, Globe, Shield, Zap, CheckCircle, Laptop } from 'lucide-react'

export default function Download() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const downloadRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
        }
      });
    }, observerOptions);

    if (heroRef.current) observer.observe(heroRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (downloadRef.current) observer.observe(downloadRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-30px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }
        
        .slide-in-delay-1 {
          animation-delay: 0.2s;
        }
        
        .slide-in-delay-2 {
          animation-delay: 0.4s;
        }
        
        .slide-in-delay-3 {
          animation-delay: 0.6s;
        }
      `}</style>
      
      <Navbar />
      
      {/* Hero Section */}
      <div className='relative min-h-[400px] bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-slate-950 transition-colors'>
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
                className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4 sm:mb-6 opacity-0'
              >
                Download Replyway
              </h1>
              <p 
                className='text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed slide-in-delay-1'
              >
                Get the Replyway app on all your devices and transform how you collaborate with your team.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Download Options Section */}
      <section className="pt-2 pb-20 bg-white dark:bg-gray-950 transition-colors">
        <Container>
          <div ref={downloadRef} className="max-w-6xl mx-auto opacity-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

              {/* Desktop App */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-indigo-900/40 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Monitor className="w-8 h-8 text-blue-600 dark:text-indigo-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Desktop App</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Get the full Replyway experience on Windows and Linux with our desktop application.
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                  <DownloadIcon className="w-5 h-5" />
                  <span>Download for Windows</span>
                </button>
              </div>

              {/* Mac App */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-indigo-900/40 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Laptop className="w-8 h-8 text-blue-600 dark:text-indigo-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Mac App</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Native macOS application with full integration and optimized performance for Mac users.
                </p>
                <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                  <DownloadIcon className="w-5 h-5" />
                  <span>Download for Mac</span>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-slate-950 transition-colors">
        <Container>
          <div ref={featuresRef} className="text-center mb-16 opacity-0">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-6">
              Why Download Replyway?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the full power of our collaboration platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Secure & Private",
                description: "Enterprise-grade security with end-to-end encryption for all your communications."
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance that keeps you connected without delays or lag."
              },
              {
                icon: CheckCircle,
                title: "Always Available",
                description: "Offline support and sync across all your devices seamlessly."
              },
              {
                icon: Smartphone,
                title: "Cross-Platform",
                description: "Work from anywhere with apps for all major platforms and devices."
              },
              {
                icon: Monitor,
                title: "Desktop Power",
                description: "Full-featured desktop experience with advanced collaboration tools."
              },
              {
                icon: Laptop,
                title: "Mac Optimized",
                description: "Native macOS experience with full system integration and performance optimization."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-blue-600 dark:text-indigo-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Download Replyway today and experience the future of team collaboration.
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
