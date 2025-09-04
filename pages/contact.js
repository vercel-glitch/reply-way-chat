import React, { useEffect, useRef } from 'react'
import Navbar from '../components/common/Navbar'
import Container from '../components/common/Container'
import Footer from '../components/common/Footer'
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react'

export default function Contact() {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

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

    if (heroRef.current) observer.observe(heroRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

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
      
      <Navbar />
      
      {/* Hero Section */}
      <div className='relative min-h-[400px] bg-gradient-to-b from-slate-50 to-white'>
        {/* Subtle background elements */}
        <div aria-hidden className='pointer-events-none absolute inset-0 overflow-hidden'>
          <div className='hidden sm:block absolute -top-20 -left-20 h-56 w-56 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 opacity-30 blur-3xl'></div>
          <div className='absolute bottom-[-60px] right-[-60px] h-48 w-48 sm:h-56 sm:w-56 rounded-full bg-gradient-to-tr from-cyan-200 to-blue-100 opacity-25 blur-2xl'></div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 sm:h-80 sm:w-80 rounded-full bg-gradient-to-b from-white to-transparent opacity-60 blur-2xl'></div>
          {/* Conic gradient ring */}
          <div className='hidden sm:block absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[320px] w-[320px] rounded-full opacity-[0.15]'
            style={{
              background: 'conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.6), rgba(99,102,241,0.6), rgba(16,185,129,0.5), rgba(59,130,246,0.6))',
              filter: 'blur(32px)'
            }}
          />
          {/* Soft grid pattern that fades at edges */}
          <div className='absolute inset-0 opacity-[0.18]'
            style={{
              backgroundImage: `
                linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)
              `,
              backgroundSize: '28px 28px, 28px 28px',
              backgroundPosition: '0 0, 0 0',
              WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8), transparent 65%)',
              maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8), transparent 65%)'
            }}
          />
        </div>
        
        <Container>
          <div className='flex items-center justify-center min-h-[400px] py-16'>
            <div className='max-w-3xl text-center'>
              <h1 
                ref={heroRef}
                className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 opacity-0'
              >
                Get in Touch
              </h1>
              <p 
                className='text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed slide-in-delay-1'
              >
                Have questions about Replyway? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div ref={formRef} className="opacity-0">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div ref={infoRef} className="opacity-0">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600 mb-2">We usually respond within 24 hours</p>
                    <a href="mailto:hello@replyway.com" className="text-blue-600 hover:text-blue-700 font-medium">
                      hello@replyway.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600 mb-2">Mon-Fri from 8am to 6pm PST</p>
                    <a href="tel:+1-555-123-4567" className="text-blue-600 hover:text-blue-700 font-medium">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600 mb-2">Our office in San Francisco</p>
                    <p className="text-gray-600">
                      123 Innovation Drive<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM PST<br />
                      Saturday: 9:00 AM - 2:00 PM PST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How quickly do you respond to contact form submissions?",
                answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly."
              },
              {
                question: "Can I schedule a demo or consultation?",
                answer: "Absolutely! We'd be happy to schedule a personalized demo. Just mention this in your message or call us directly to set up a time."
              },
              {
                question: "Do you offer technical support?",
                answer: "Yes, we provide comprehensive technical support for all our customers. Our support team is available during business hours and can help with any technical questions."
              },
              {
                question: "What information should I include in my message?",
                answer: "Please include your name, company (if applicable), specific questions or requirements, and any relevant context. This helps us provide you with the most accurate and helpful response."
              },
              {
                question: "Are you available for partnerships or collaborations?",
                answer: "We're always interested in exploring partnerships and collaborations. Please reach out with details about your proposal and we'll get back to you promptly."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Join thousands of teams already using Replyway to transform their collaboration experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-primary hover:bg-[#7c3aed] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  )
}
