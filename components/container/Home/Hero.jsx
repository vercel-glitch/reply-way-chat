import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Container from '../../common/Container'
import FullContainer from '../../common/FullContainer'

export default function Hero() {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonRef = useRef(null);

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

        if (titleRef.current) observer.observe(titleRef.current);
        if (descriptionRef.current) observer.observe(descriptionRef.current);
        if (buttonRef.current) observer.observe(buttonRef.current);

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
            
            <div className='relative h-[700px]' >
                <Image src="/st-images/banner.avif" width={2000} height={1500} className='absolute top-0 left-0 w-full h-[700px] object-cover' />
                <FullContainer className='z-50 absolute top-0 left-0 '>
                    <Container>
                        <div className='flex items-center h-[700px]'>
                            <div className='max-w-2xl'>
                                <h1 
                                    ref={titleRef}
                                    className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight mb-4 sm:mb-6 opacity-0'
                                >
                                    Get ready for the future<br />
                                    of work with Microsoft<br />
                                    Teams
                                </h1>
                                <p 
                                    ref={descriptionRef}
                                    className='text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed opacity-0 slide-in-delay-1'
                                >
                                    Transform the way you work with next-generation AI capabilities and bring together your physical and digital worlds.
                                </p>
                                <button 
                                    ref={buttonRef}
                                    className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-200 opacity-0 slide-in-delay-2 text-sm sm:text-base'
                                >
                                    Download now
                                </button>
                            </div>
                        </div>
                    </Container>
                </FullContainer>
            </div>
        </>
    )
}
