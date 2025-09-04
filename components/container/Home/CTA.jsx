import React from 'react'
import Container from '../../common/Container'

export default function CTA() {
    return (
        <section className="relative py-16 sm:py-20">
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-16 -right-24 h-56 w-56 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 opacity-30 blur-3xl" />
                <div className="absolute -bottom-12 -left-20 h-48 w-48 rounded-full bg-gradient-to-tr from-cyan-200 to-blue-100 opacity-25 blur-2xl" />
            </div>
            <Container>
                <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/70 via-indigo-50/70 to-white/60" />
                    <div className="relative px-6 sm:px-10 py-10 sm:py-14 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
                            Ready to elevate your team’s collaboration?
                        </h2>
                        <p className="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base max-w-2xl mx-auto">
                            Join Replyway and streamline communication with modern tools that keep your work moving forward.
                        </p>
                        <div className="mt-6 sm:mt-8 flex justify-center">
                            <button className="inline-flex items-center justify-center rounded-lg bg-primary px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/50">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}


