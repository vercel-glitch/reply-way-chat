import React, { useEffect, useRef } from 'react'
import Navbar from '../components/common/Navbar'
import Container from '../components/common/Container'
import Footer from '../components/common/Footer'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const contactItems = [
  { Icon: Mail,   title: 'Email Us',   note: 'We usually respond within 24 hours', link: 'mailto:hello@replyway.com', text: 'hello@replyway.com' },
  { Icon: Phone,  title: 'Call Us',    note: 'Mon-Fri from 8am to 6pm PST',        link: 'tel:+1-555-123-4567',      text: '+1 (555) 123-4567' },
  { Icon: MapPin, title: 'Visit Us',   note: 'Our office in San Francisco',        addr: ['123 Innovation Drive','San Francisco, CA 94105','United States'] },
  { Icon: Clock,  title: 'Business Hours', note: '', hours: ['Mon-Fri: 8:00 AM - 6:00 PM PST','Saturday: 9:00 AM - 2:00 PM PST','Sunday: Closed'] }
]

const faqs = [
  { q: 'How quickly do you respond to contact form submissions?',
    a: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.' },
  { q: 'Can I schedule a demo or consultation?',
    a: "Absolutely! We'd be happy to schedule a personalized demo. Just mention this in your message or call us directly to set up a time." },
  { q: 'Do you offer technical support?',
    a: 'Yes, we provide comprehensive technical support for all our customers during business hours.' },
  { q: 'What information should I include in my message?',
    a: 'Your name, company (if applicable), specific questions or requirements, and relevant context.' },
  { q: 'Are you available for partnerships or collaborations?',
    a: "We're always interested. Please reach out with details about your proposal and we'll get back to you promptly." }
]

export default function Contact() {
  const heroRef = useRef(null), formRef = useRef(null), infoRef = useRef(null)
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('animate-slide-in')),{ threshold:.1, rootMargin:'0px 0px -50px 0px' })
    ;[heroRef, formRef, infoRef].forEach(r => r.current && io.observe(r.current))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <style jsx>{`
        @keyframes slideInFromLeft { 0%{transform:translateX(-30px);opacity:0} 100%{transform:translateX(0);opacity:1} }
        .animate-slide-in{ animation:slideInFromLeft .8s ease-out forwards }
        .slide-in-delay-1{ animation-delay:.2s }
      `}</style>

      <Navbar />

      {/* Hero Section (unchanged design) */}
      <div className='relative min-h-[400px] bg-gradient-to-b from-slate-50 to-white'>
        <div aria-hidden className='pointer-events-none absolute inset-0 overflow-hidden'>
          <div className='hidden sm:block absolute -top-20 -left-20 h-56 w-56 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 opacity-30 blur-3xl'></div>
          <div className='absolute bottom-[-60px] right-[-60px] h-48 w-48 sm:h-56 sm:w-56 rounded-full bg-gradient-to-tr from-cyan-200 to-blue-100 opacity-25 blur-2xl'></div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 sm:h-80 sm:w-80 rounded-full bg-gradient-to-b from-white to-transparent opacity-60 blur-2xl'></div>
          <div className='hidden sm:block absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[320px] w-[320px] rounded-full opacity-[0.15]'
            style={{ background:'conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.6), rgba(99,102,241,0.6), rgba(16,185,129,0.5), rgba(59,130,246,0.6))', filter:'blur(32px)' }} />
          <div className='absolute inset-0 opacity-[0.18]'
            style={{ backgroundImage:`
              linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)
            `, backgroundSize:'28px 28px', WebkitMaskImage:'radial-gradient(ellipse at center, rgba(0,0,0,0.8), transparent 65%)', maskImage:'radial-gradient(ellipse at center, rgba(0,0,0,0.8), transparent 65%)' }} />
        </div>

        <Container>
          <div className='flex items-center justify-center min-h-[400px] py-16'>
            <div className='max-w-3xl text-center'>
              <h1 ref={heroRef} className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 opacity-0'>Get in Touch</h1>
              <p className='text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed slide-in-delay-1'>
                Have questions about Replyway? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Contact Form & Info (unchanged design) */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div ref={formRef} className="opacity-0">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input id="firstName" label="First Name" placeholder="Your first name" />
                  <Input id="lastName" label="Last Name" placeholder="Your last name" />
                </div>
                <Input id="email" type="email" label="Email Address" placeholder="your.email@example.com" />
                <Input id="company" label="Company (Optional)" placeholder="Your company name" />
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select id="subject" name="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200">
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea id="message" name="message" rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none" placeholder="Tell us how we can help you..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Send className="w-5 h-5" /><span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Info */}
            <div ref={infoRef} className="opacity-0">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">We're here to help and answer any questions you might have. We look forward to hearing from you.</p>

              <div className="space-y-6">
                {contactItems.map(({ Icon, title, note, link, text, addr, hours }, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                      {note && <p className="text-gray-600 mb-2">{note}</p>}
                      {link && <a href={link} className="text-blue-600 hover:text-blue-700 font-medium">{text}</a>}
                      {addr && <p className="text-gray-600">{addr.map((l, k) => (<span key={k}>{l}<br/></span>))}</p>}
                      {hours && <p className="text-gray-600">{hours.map((l, k) => (<span key={k}>{l}<br/></span>))}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Quick answers to common questions</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{f.q}</h3>
                <p className="text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">Join thousands of teams already using Replyway to transform their collaboration experience.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-primary hover:bg-[#7c3aed] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">Get Started</button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  )
}

/* Small input helper to keep markup identical but code shorter */
function Input({ id, label, type='text', placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input id={id} name={id} type={type} placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200" />
    </div>
  )
}