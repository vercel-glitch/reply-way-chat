import React from 'react'
import Navbar from '../../components/common/Navbar'
import Hero from '../../components/container/Home/Hero'
import ScrollNavbar from '../../components/common/scrollNavbar'
import Features from '../../components/container/Home/Features'
import Solutions from '../../components/container/Home/Solutions'
import ProductAndServices from '../../components/container/Home/ProductAndServices'
import CustomerStories from '../../components/container/Home/CustomerStories'
import GetStarted from '../../components/container/Home/GetStarted'
import Footer from '../../components/common/Footer'

export default function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='relative'>
        <div className='sticky top-0 left-0 w-full z-50'>
          <ScrollNavbar  />
        </div>
        <Features />
        <Solutions />
        <ProductAndServices />
        <CustomerStories />
      </div>
      <GetStarted />
      <Footer />
    </>
  )
}
