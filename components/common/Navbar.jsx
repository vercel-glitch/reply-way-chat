import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from '../common/Container'

export default function Navbar() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup submitted');
    setIsSignupOpen(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted');
    setIsLoginOpen(false);
  };

  const openLoginForm = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
    setIsLoginMode(true);
  };

  const openSignupForm = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
    setIsLoginMode(false);
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 border py-3 relative">
        <Container className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            {/* ChatwayApp Logo */}
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Image 
                src="/st-images/logo.png" 
                alt="ChatwayApp Logo" 
                width={120} 
                height={40} 
                className="h-8 w-auto"
              />
            </Link>
          </div>

           
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home */}
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>

            {/* Features */}
            <Link href="/features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>

            {/* About Us */}
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About Us
            </Link>

            {/* Contact Us */}
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact Us
            </Link>

            {/* Download App */}
            <Link href="/download" className="text-gray-600 hover:text-gray-900 transition-colors">
              Download App
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={openSignupForm}
              className="px-4 py-2 bg-primary hover:bg-primary text-white font-semibold rounded-md transition-colors"
            >
              Sign Up
            </button>
            <button 
              onClick={openLoginForm}
              className="px-4 py-2 border border-primary rounded-md text-gray-700  font-semibold hover:bg-gray-50 transition-colors"
            >
              Sign in
            </button>
          </div>
        </Container>
      </nav>

      {/* Signup Modal */}
      {isSignupOpen && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto">
          {/* Soft Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-200/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsSignupOpen(false)}
          />
          
          {/* Modal Container */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative w-full max-w-sm transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ease-out animate-in fade-in-0 zoom-in-95">
              {/* Close Button */}
              <button
                onClick={() => setIsSignupOpen(false)}
                className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="p-6 pb-8">
                {/* Modal Header */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h2>
                  <p className="text-gray-600 text-sm">Join Replyway and transform your team collaboration</p>
                </div>

                {/* Signup Form */}
                <form onSubmit={handleSignupSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Create a strong password"
                    />
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Confirm your password"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Sign Up
                  </button>

                  {/* Login Link */}
                  <div className="text-center pt-2">
                    <p className="text-gray-600 text-sm">
                      Already have an account?{' '}
                      <button
                        type="button"
                        onClick={openLoginForm}
                        className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 hover:underline"
                      >
                        Login
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto">
          {/* Soft Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-200/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsLoginOpen(false)}
          />
          
          {/* Modal Container */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative w-full max-w-sm transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ease-out animate-in fade-in-0 zoom-in-95">
              {/* Close Button */}
              <button
                onClick={() => setIsLoginOpen(false)}
                className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="p-6 pb-8">
                {/* Modal Header */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                  <p className="text-gray-600 text-sm">Sign in to your Replyway account</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  {/* Email */}
                  <div>
                    <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="loginEmail"
                      name="loginEmail"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="loginPassword"
                      name="loginPassword"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your password"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Sign In
                  </button>

                  {/* Signup Link */}
                  <div className="text-center pt-2">
                    <p className="text-gray-600 text-sm">
                      Don't have an account?{' '}
                      <button
                        type="button"
                        onClick={openSignupForm}
                        className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 hover:underline"
                      >
                        Sign Up
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}