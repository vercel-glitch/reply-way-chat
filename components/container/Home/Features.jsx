import React, { useEffect, useRef } from 'react'
import Container from '../../common/Container'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Header from '../../Ui/Header'
    
const featuresData = [
    {
        id: 1,
        image: '/st-images/feature1.avif',
        alt: 'Microsoft Teams Phone',
        title: 'Microsoft Teams Phone',
        description: 'Experience smart communication and seamless collaboration with the only calling solution native to Teams.',
        buttonText: 'Learn more'
    },
    {
        id: 2,
        image: '/st-images/feature2.avif',
        alt: 'Microsoft 365 Copilot in Teams',
        title: 'Prompt like a pro with Microsoft 365 Copilot in Teams',
        description: 'Realize the full potential of your team\'s decision-making with prompts for Copilot in Teams. Streamline and transform your meetings so that every idea is visualized, evaluated, and brought to life.',
        buttonText: 'Learn more'
    }
]

export default function Features() {
    const headerRef = useRef(null);
    const cardsRef = useRef([]);

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
                card.style.animationDelay = `${0.2 + index * 0.2}s`;
                observer.observe(card);
            }
        });

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
                @keyframes fadeInUp {
                    0% {
                        transform: translateY(40px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
            `}</style>
            
            <section id='features' className="py-16 relative">
                <div className='absolute top-0 left-0 w-[50px] md:w-[300px] rounded-full h-[50px] md:h-[300px] bg-purple-100 blur-3xl z-0' />
                <div className='absolute top-32 left-64 w-[50px] md:w-[300px] rounded-full h-[50px] md:h-[300px] bg-pink-100 blur-3xl z-0' />
                <div className='absolute top-64 left-0 w-[50px] md:w-[300px] rounded-full h-[50px] md:h-[300px] bg-yellow-50 blur-3xl z-0' />
                <Container className="relative z-10">
                    <div ref={headerRef} className="opacity-0">
                        <Header title="Featured News" description="Discover what's happening with Teams" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {featuresData.map((feature, index) => (
                            <div 
                                key={feature.id} 
                                ref={el => cardsRef.current[index] = el}
                                className="bg-white border-6 border-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 opacity-0 hover:shadow-2xl hover:scale-105"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={feature.image}
                                        alt={feature.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-110"
                                    />
                                </div>
                                <div className="p-4 sm:p-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                                        {feature.description}
                                    </p>
                                    <button className="inline-flex items-center px-3 sm:px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 hover:translate-x-1 text-sm sm:text-base">
                                        {feature.buttonText}
                                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    )
}
