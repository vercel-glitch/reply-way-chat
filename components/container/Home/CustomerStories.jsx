import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Header from '../../Ui/Header'

export default function CustomerStories() {
  const headerRef = useRef(null);
  const storyCardRef = useRef(null);
  const logosRef = useRef(null);

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
    if (storyCardRef.current) observer.observe(storyCardRef.current);
    if (logosRef.current) observer.observe(logosRef.current);

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
      
      <div id='customer-stories' className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div ref={headerRef} className="opacity-0">
            <Header title="Customer Stories" description="See how customers are innovating with Teams" />
          </div>

          {/* Main Customer Story Card */}
          <div ref={storyCardRef} className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 sm:mb-12 opacity-0 hover:shadow-xl transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8">
              {/* Left Section - Text Content */}
              <div className="space-y-4 sm:space-y-6">
                {/* Company Logo */}
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <span className="text-white font-bold text-xs sm:text-sm">GN</span>
                  </div>
                  <span className="text-lg sm:text-xl font-semibold text-gray-900">GoNarrative</span>
                </div>

                {/* Quote */}
                <blockquote className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                  "Without a doubt, the fluid collaboration that Teams enables has a positive impact on our ability to be responsive and focus on the work to be done"
                </blockquote>

                {/* Attribution */}
                <p className="text-sm sm:text-base text-gray-600">
                  Matthew Woodget, CEO of Go Narrative
                </p>

                {/* Products */}
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Products</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-600 rounded flex items-center justify-center transition-transform duration-300 hover:scale-110">
                      <span className="text-white font-bold text-xs">T</span>
                    </div>
                    <span className="text-sm sm:text-base text-gray-900">Teams</span>
                  </div>
                </div>

                {/* Read Story Button */}
                <button className="bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 hover:translate-x-1 flex items-center text-sm sm:text-base">
                  Read the story
                  <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Right Section - Image */}
              <div className="relative h-80 md:h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg transition-transform duration-500 hover:scale-105">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                        <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm">Collaboration Meeting Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Logos Section */}
          <div ref={logosRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 opacity-0">
            {/* GoNarrative */}
            <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <span className="text-white font-bold text-xs">GN</span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-900">GoNarrative</span>
              </div>
            </div>

            {/* ABN AMRO */}
            <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded mx-auto mb-1 transition-transform duration-300 hover:scale-110"></div>
                <span className="text-xs sm:text-sm font-semibold text-gray-900">ABN AMRO</span>
              </div>
            </div>

            {/* Berryessa Gap Vineyards */}
            <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <span className="text-xs sm:text-sm font-semibold text-gray-900 text-center">BERRYESSA GAP VINEYARDS</span>
            </div>

            {/* L'ORÉAL */}
            <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <span className="text-xs sm:text-sm font-semibold text-gray-900">L'ORÉAL</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
