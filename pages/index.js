import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/container/Home/Hero'
import Features from '../components/container/Home/Features'
import Footer from '../components/common/Footer'
import CTA from '../components/container/Home/CTA'

export default function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
     
      <CTA />
      <Footer />
    </>
  )
}
