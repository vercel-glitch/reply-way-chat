import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from '../common/Container'
import { Sun, Moon } from 'lucide-react'
import { useRouter } from 'next/router';
import { useTheme } from '@/utils/ThemeContext';

export default function Navbar() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const router = useRouter();
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        setIsSignupOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscapeKey);
    return () => window.removeEventListener('keydown', handleEscapeKey);
  }, []);

  useEffect(() => {
    const openSignup = () => setIsSignupOpen(true);
    window.addEventListener('open-signup', openSignup);
    return () => window.removeEventListener('open-signup', openSignup);
  }, []);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup submitted');
    setIsSignupOpen(false);
  };

  const openSignupForm = () => {
    setIsSignupOpen(true);
  };

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-3 relative transition-colors duration-300">
        <Container className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Image 
                src="/st-images/logo.png" 
                alt="Replyway Logo" 
                width={120} 
                height={40} 
                className="h-8 w-auto dark:invert dark:brightness-0"
              />
            </Link>
          </div>

          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home */}
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 hover:dark:text-white transition-colors">
              Home
            </Link>

            {/* Features */}
            <Link href="/features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 hover:dark:text-white transition-colors">
              Features
            </Link>

            {/* About Us */}
            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 hover:dark:text-white transition-colors">
              About Us
            </Link>

            {/* Contact Us */}
            <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 hover:dark:text-white transition-colors">
              Contact Us
            </Link>

            {/* Download App */}
            <Link href="/download" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 hover:dark:text-white transition-colors">
              Download App
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Theme toggle (top-right) */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur flex items-center justify-center hover:bg-gray-50 hover:dark:bg-gray-700 transition-colors duration-300"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </button>
            <button 
              onClick={openSignupForm}
              className="px-4 py-2 bg-primary hover:bg-[#7c3aed] text-white font-semibold rounded-md transition-colors"
            >
              Sign Up
            </button>
            <a 
              href="https://app.replyway.com"
              className="px-4 py-2 border border-primary rounded-md text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-50 hover:dark:bg-gray-800 transition-colors"
            >
              Sign in
            </a>
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

                </form>
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <span
                      onClick={() => {
                        setIsSignupOpen(false);
                        router.push("/signin");
                      }}
                      className="text-primary cursor-pointer hover:underline"
                    >
                      Login
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  )
}