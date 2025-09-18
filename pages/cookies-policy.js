import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Container from '../components/common/Container'

export default function CookiesPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-16">
        <Container>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Cookies Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().getFullYear()}</p>

            <section className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                This Cookies Policy explains how Replyway uses cookies and similar technologies to provide, analyze, and improve our services.
              </p>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">What Are Cookies?</h2>
                <p>
                  Cookies are small text files stored on your device. They help us remember your preferences, keep you signed in, and understand how you interact with Replyway.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">How We Use Cookies</h2>
                <p>
                  We use cookies for analytics, to remember preferences (like language and theme), and to enhance user experience. Some cookies are essential for core features.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Managing Cookies</h2>
                <p>
                  You can control cookies through your browser settings. Disabling certain cookies may impact your experience and functionality within Replyway.
                </p>
              </div>
            </section>

            <div className="mt-10">
              <a href="/" className="inline-block bg-primary hover:bg-[#7c3aed] text-white font-semibold py-3 px-6 rounded-lg transition-colors">Back to Home</a>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}


