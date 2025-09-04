import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/container/Home/Hero'
import ScrollNavbar from '../components/common/scrollNavbar'

import Solutions from '../components/container/Home/Solutions'

import CustomerStories from '../components/container/Home/CustomerStories'
import GetStarted from '../components/container/Home/GetStarted'
import Footer from '../components/common/Footer'
import CTA from '../components/container/Home/CTA'

export default function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <Solutions />
      <CustomerStories />
      <CTA />
      <Footer />
    </>
  )
}
