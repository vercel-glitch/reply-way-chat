import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Container from '../../common/Container'
import Header from '../../Ui/Header'  

export default function Solutions() {
  const [activeSection, setActiveSection] = useState('meet')
  const [previousSection, setPreviousSection] = useState('meet')
  const [slideDirection, setSlideDirection] = useState('right')
  const [isAnimating, setIsAnimating] = useState(false)
  
  const headerRef = useRef(null);
  const navigationRef = useRef(null);
  const imageRef = useRef(null);

  const solutions = [
    {
      id: 'meet',
      title: 'Meet',
      description: 'Make meetings more impactful with features like PowerPoint Live, Microsoft Whiteboard, and AI-generated meeting notes.¹',
      image: '/st-images/meet.avif'
    },
    {
      id: 'call',
      title: 'Call',
      description: 'Stay connected with crystal-clear audio and video calls, screen sharing, and advanced calling features.',
      image: '/st-images/call.avif'
    },
    {
      id: 'collaborate',
      title: 'Collaborate',
      description: 'Work together seamlessly with real-time document editing, file sharing, and team collaboration tools.',
      image: '/st-images/collaborate.avif'
    },
    {
      id: 'chat',
      title: 'Chat',
      description: 'Communicate instantly with team chat, channels, and integrated messaging across all your devices.',
      image: '/st-images/chat.avif'
    }
  ]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Remove animation class first to reset
          entry.target.classList.remove('animate-slide-in');
          // Force reflow
          void entry.target.offsetHeight;
          // Add animation class to trigger animation
          entry.target.classList.add('animate-slide-in');
        } else {
          // Remove animation class when element is out of view
          entry.target.classList.remove('animate-slide-in');
        }
      });
    }, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (navigationRef.current) observer.observe(navigationRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  const handleSectionChange = (newSection) => {
    if (newSection !== activeSection && !isAnimating) {
      setIsAnimating(true)
      setSlideDirection('right')
      setPreviousSection(activeSection)
      setActiveSection(newSection)
      
      // Reset animation state after transition completes
      setTimeout(() => {
        setIsAnimating(false)
      }, 700) // Match the transition duration
    }
  }

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
        
        @keyframes slideInFromRight {
          0% {
            transform: translateX(30px);
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
        
        .animate-slide-in-right {
          animation: slideInFromRight 0.8s ease-out forwards;
        }
      `}</style>
      
      <section id='solutions' className="py-20 bg-white">
        <Container className="">
           {/* Header */}
           <div ref={headerRef} className="opacity-0">
             <Header title="Solutions" description="Streamline communications—all in one place" />
           </div>
              
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Section - Text and Navigation */}
            <div ref={navigationRef} className="space-y-8 opacity-0">
             
              {/* Accordion/Navigation Menu */}
              <div className="space-y-1">
                {solutions.map((solution, index) => (
                  <div key={solution.id} className="border-b border-gray-200 last:border-b-0">
                    <button
                      onClick={() => handleSectionChange(solution.id)}
                      className={`w-full text-left py-4 px-4 relative transition-all duration-500 ease-in-out ${
                        activeSection === solution.id 
                          ? 'bg-purple-50 border-l-4 border-purple-500' 
                          : 'hover:bg-gray-50 border-l-4 border-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 transition-colors duration-300">
                          {solution.title}
                        </h3>
                        <span className={`text-gray-400 transition-transform duration-300 ${
                          activeSection === solution.id ? 'rotate-180' : 'rotate-0'
                        }`}>
                          v
                        </span>
                      </div>
                      
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        activeSection === solution.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {solution.description}
                          </p>
                          <a 
                            href="#" 
                            className="inline-flex items-center text-sm sm:text-base text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300"
                          >
                            Learn more
                            <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section - Image */}
            <div ref={imageRef} className="relative h-full opacity-0">
              <div className="relative w-full h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={solutions.find(s => s.id === activeSection)?.image || '/st-images/meet.avif'}
                  width={1500}
                  height={1500}
                  alt={`${solutions.find(s => s.id === activeSection)?.title} solution`}
                  className={`object-contain h-full w-auto transition-all duration-700 ease-in-out transform ${
                    isAnimating 
                      ? slideDirection === 'right' 
                        ? 'translate-x-full opacity-0' 
                        : 'translate-x-0 opacity-100'
                      : 'translate-x-0 opacity-100'
                  }`}
                  priority
                />
                {/* Previous image for smooth transition */}
                {isAnimating && (
                  <Image
                    src={solutions.find(s => s.id !== activeSection)?.image || '/st-images/meet.avif'}
                    alt="Previous solution"
                    width={1500}
                    height={1500}
                    className={`object-contain transition-all hidden duration-700 w-full h-full ease-in-out transform absolute inset-0 border-amber-500`}
                    
                  />
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
