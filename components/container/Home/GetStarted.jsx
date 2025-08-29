import React, { useEffect, useRef } from 'react'
import Header from '../../Ui/Header'

export default function GetStarted() {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const footerRef = useRef(null);

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
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.animationDelay = `${0.2 + index * 0.1}s`;
        observer.observe(card);
      }
    });
    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes slideInFromBottom {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in {
          animation: slideInFromBottom 0.8s ease-out forwards;
        }
      `}</style>
      
      <div id="get-started" className="relative min-h-screen bg-white overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-400 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-40 -right-20 w-80 h-80 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-blue-400 rounded-full opacity-15 blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div ref={headerRef} className="opacity-0">
            <Header title="Get Started" description="Take the next step with Teams" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Business Card */}
            <div ref={el => cardsRef.current[0] = el} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-500 opacity-0 hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 hover:scale-110">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">For business</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Grow your customer base with communications software designed for up to 300 employees.
              </p>
              <button className="w-full bg-blue-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center hover:translate-x-1 text-sm sm:text-base">
                See plans and pricing
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Personal Use Card */}
            <div ref={el => cardsRef.current[1] = el} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-500 opacity-0 hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 hover:scale-110">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">For personal use</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Plan events, share photos, and connect with your friends, family, and community.
              </p>
              <button className="w-full bg-blue-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center hover:translate-x-1 text-sm sm:text-base">
                Try Teams for free
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Enterprise Card */}
            <div ref={el => cardsRef.current[2] = el} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-500 opacity-0 hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 hover:scale-110">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">For enterprise</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Achieve more with Teams accounts for more than 300 people.
              </p>
              <button className="w-full bg-blue-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center hover:translate-x-1 text-sm sm:text-base">
                Get started
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Education Card */}
            <div ref={el => cardsRef.current[3] = el} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-500 opacity-0 hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 hover:scale-110">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">For education</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Make learning collaborative—for both students and educators.
              </p>
              <button className="w-full bg-blue-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center hover:translate-x-1 text-sm sm:text-base">
                Learn more
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div ref={footerRef} className="text-center text-xs sm:text-sm text-gray-600 opacity-0">
            <p className="mb-3 sm:mb-4">
              <span className="text-xs">[1]</span> AI-generated meeting notes are currently available in{' '}
              <a href="#" className="underline hover:text-blue-600 transition-colors duration-300">Microsoft Teams Premium</a> only.
            </p>
            
            <div className="mb-4 sm:mb-6">
              <p className="mb-2 sm:mb-3 text-sm sm:text-base">Follow Microsoft Teams</p>
              <div className="flex justify-center space-x-3 sm:space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </a>
              </div>
            </div>

            <p className="text-xs text-gray-500">
              The Microsoft Teams logo is a registered trademark of Microsoft Corp. The single letter "T" is used under the licence of Deutsche Telekom AG.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
