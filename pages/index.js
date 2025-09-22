import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/container/Home/Hero'
import Features from '../components/container/Home/Features'
import Footer from '../components/common/Footer'
import CTA from '../components/container/Home/CTA'
import Container from '../components/common/Container'

export default function index() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Screenshot banner below hero and above features */}
      <section className="bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 transition-colors duration-300">
        <Container>
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <img src="/st-images/sc.png" alt="Product screenshot" className="w-full h-auto object-cover" />
            </div>
          </div>
        </Container>
      </section>
      <Features />
      <CTA />
      <Footer />
    </>
  )
}
