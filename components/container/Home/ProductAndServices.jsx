import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Container from '../../common/Container'
import Header from '../../Ui/Header'

export default function ProductAndServices() {
  const [activeTab, setActiveTab] = useState('business')
  
  const headerRef = useRef(null);
  const tabsRef = useRef(null);
  const featuredCardRef = useRef(null);
  const gridCardsRef = useRef([]);

  const tabs = [
    { id: 'business', label: 'Business' },
    { id: 'home', label: 'Home' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'education', label: 'Education' }
  ]

  const businessSolutions = [
    {
      id: 'teams-essentials',
      title: 'Teams Essentials',
      description: 'Connect with customers by video, chat, and phone using an affordable, all-in-one solution for up to 300 people.',
      icon: '👥',
      featured: true,
      image: '/st-images/feature1.avif'
    },
    {
      id: 'teams-essentials-grid',
      title: 'Teams Essentials',
      description: 'Connect with customers by video, chat, and phone using an affordable, all-in-one solution for up to 300 people.',
      icon: '👥'
    },
    {
      id: 'm365-business-standard',
      title: 'Microsoft 365 Business Standard',
      description: 'Choose between plans with and without Microsoft Teams and get desktop versions of Microsoft 365 apps and Clipchamp.',
      icon: '📊'
    },
    {
      id: 'm365-business-premium',
      title: 'Microsoft 365 Business Premium',
      description: 'Get everything in Microsoft 365 Business Standard plus advanced security and device management.',
      icon: '🛡️'
    },
    {
      id: 'teams-phone',
      title: 'Teams Phone',
      description: 'Add cloud-based phone service to Teams to get all the features of a landline.',
      icon: '📞'
    },
    {
      id: 'teams-rooms',
      title: 'Teams Rooms',
      description: 'Strengthen hybrid work with enhanced meeting experiences for every space.',
      icon: '🏢'
    },
    {
      id: 'teams-premium',
      title: 'Teams Premium',
      description: 'Get extra features that help make meetings more personalized, intelligent, and protected.',
      icon: '⭐'
    }
  ]

  const homeSolutions = [
    {
      id: 'teams-personal',
      title: 'Teams Personal',
      description: 'Stay connected with friends and family through video calls, chat, and file sharing.',
      icon: '🏠',
      featured: true,
      image: '/st-images/feature2.avif'
    },
    {
      id: 'skype',
      title: 'Skype',
      description: 'Free video calls and messaging with friends and family around the world.',
      icon: '📱'
    },
    {
      id: 'outlook-personal',
      title: 'Outlook Personal',
      description: 'Manage your personal email, calendar, and contacts with ease.',
      icon: '📧'
    },
    {
      id: 'onedrive-personal',
      title: 'OneDrive Personal',
      description: 'Store and share your photos, documents, and files securely in the cloud.',
      icon: '☁️'
    },
    {
      id: 'office-personal',
      title: 'Microsoft 365 Personal',
      description: 'Get premium Office apps, 1TB cloud storage, and advanced security for your personal use.',
      icon: '💻'
    },
    {
      id: 'family-safety',
      title: 'Microsoft Family Safety',
      description: 'Help protect your family online and stay connected with location sharing and screen time limits.',
      icon: '👨‍👩‍👧‍👦'
    }
  ]

  const enterpriseSolutions = [
    {
      id: 'teams-enterprise',
      title: 'Teams Enterprise',
      description: 'Enterprise-grade collaboration platform with advanced security, compliance, and management features.',
      icon: '🏢',
      featured: true,
      image: '/st-images/feature1.avif'
    },
    {
      id: 'm365-enterprise',
      title: 'Microsoft 365 Enterprise',
      description: 'Complete productivity and security solution for large organizations with advanced compliance.',
      icon: '🏛️'
    },
    {
      id: 'azure-active-directory',
      title: 'Azure Active Directory',
      description: 'Cloud-based identity and access management service for enterprise applications.',
      icon: '🔐'
    },
    {
      id: 'microsoft-defender',
      title: 'Microsoft Defender',
      description: 'Advanced threat protection for enterprise endpoints, email, and cloud applications.',
      icon: '🛡️'
    },
    {
      id: 'power-platform',
      title: 'Power Platform',
      description: 'Low-code platform for building business applications, automation, and analytics.',
      icon: '⚡'
    },
    {
      id: 'dynamics-365',
      title: 'Dynamics 365',
      description: 'Intelligent business applications for sales, customer service, finance, and operations.',
      icon: '📈'
    },
    {
      id: 'azure-cloud',
      title: 'Azure Cloud Services',
      description: 'Comprehensive cloud computing platform for building, deploying, and managing applications.',
      icon: '☁️'
    }
  ]

  const educationSolutions = [
    {
      id: 'teams-education',
      title: 'Teams for Education',
      description: 'Digital hub that brings conversations, content, assignments, and apps together in one place.',
      icon: '🎓',
      featured: true,
      image: '/st-images/feature2.avif'
    },
    {
      id: 'm365-education',
      title: 'Microsoft 365 Education',
      description: 'Free productivity tools for students and educators with Word, Excel, PowerPoint, and more.',
      icon: '📚'
    },
    {
      id: 'minecraft-education',
      title: 'Minecraft: Education Edition',
      description: 'Game-based learning platform that promotes creativity, collaboration, and problem-solving.',
      icon: '⛏️'
    },
    {
      id: 'flipgrid',
      title: 'Flipgrid',
      description: 'Social learning platform that enables students to record and share short videos.',
      icon: '📹'
    },
    {
      id: 'onenote-class',
      title: 'OneNote Class Notebook',
      description: 'Digital notebook for teachers and students to organize, collaborate, and share content.',
      icon: '📝'
    },
    {
      id: 'forms-education',
      title: 'Microsoft Forms',
      description: 'Create surveys, quizzes, and polls to gather feedback and assess learning.',
      icon: '📊'
    },
    {
      id: 'sway-education',
      title: 'Sway',
      description: 'Create interactive presentations, reports, and newsletters for educational content.',
      icon: '📖'
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
    if (tabsRef.current) observer.observe(tabsRef.current);
    if (featuredCardRef.current) observer.observe(featuredCardRef.current);
    gridCardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.animationDelay = `${0.1 + index * 0.1}s`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, [activeTab]);

  // Get the appropriate solutions based on active tab
  const getActiveSolutions = () => {
    switch (activeTab) {
      case 'business':
        return businessSolutions
      case 'home':
        return homeSolutions
      case 'enterprise':
        return enterpriseSolutions
      case 'education':
        return educationSolutions
      default:
        return businessSolutions
    } 
  }

  const activeSolutions = getActiveSolutions()
  const featuredSolution = activeSolutions.find(s => s.featured)
  const gridSolutions = activeSolutions.filter(s => !s.featured)

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
      
      <section id='products-and-services' className="py-20 bg-white">
        <Container>
          {/* Header */}
          <div ref={headerRef} className="opacity-0">
            <Header title="Products and services" description="Find the right Teams plan and add-ons for your needs" />
          </div>
          
          <div className="text-start mb-12">
            {/* Navigation Tabs */}
            <div ref={tabsRef} className="flex flex-wrap justify-start gap-2 opacity-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base ${
                    activeTab === tab.id
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Featured Card - Left Panel */}
            <div ref={featuredCardRef} className="lg:col-span-1 opacity-0">
              <div className="relative h-full rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500">
                <Image
                  src={featuredSolution?.image || "/st-images/feature1.avif"}
                  alt={featuredSolution?.title || "Featured solution"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{featuredSolution?.title || "Featured Solution"}</h3>
                  <p className="text-gray-200 mb-3 sm:mb-4 text-xs sm:text-sm">
                    {featuredSolution?.description || "Discover our featured solution for your needs."}
                  </p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 flex items-center hover:translate-x-1 text-sm sm:text-base">
                    Learn more
                    <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Solution Cards Grid - Right Panel */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gridSolutions.map((solution, index) => (
                  <div
                    key={solution.id}
                    ref={el => gridCardsRef.current[index] = el}
                    className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100 opacity-0 hover:scale-105"
                  >
                    {/* Icon */}
                    <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110">{solution.icon}</div>
                    
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      {solution.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    {/* Button */}
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group hover:translate-x-1 text-sm sm:text-base">
                      Learn more
                      <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
