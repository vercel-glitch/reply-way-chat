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
      <section className="bg-white dark:bg-gray-950 transition-colors duration-300">
        <Container>
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
              <img src="/st-images/screenshot (2).png" alt="Product screenshot" className="w-full h-auto object-cover rounded-2xl" />
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
