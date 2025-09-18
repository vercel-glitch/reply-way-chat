import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Container from '../components/common/Container'

export default function CookiesPolicy() {
  return (
    <>
      <Navbar />
      {/* Simple Hero Section (no background/animation) */}
      <div className="py-12">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">Cookies Policy</h1>
            <p className="text-base sm:text-lg text-gray-700">Learn how and why we use cookies to improve your experience.</p>
          </div>
        </Container>
      </div>
      <main className="min-h-screen bg-gray-50 py-16">
        <Container>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Last updated</h2>
            <p className="text-gray-600 mb-8">{new Date().getFullYear()}</p>

            <section className="grid gap-6 text-gray-700 leading-relaxed">
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Introduction</h3>
                <p>
                  This Cookies Policy explains what cookies are, the types we use on Replyway, and how you can control cookies through your browser or device settings.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What Are Cookies?</h3>
                <p>
                  Cookies are small text files stored on your device by websites you visit. They allow websites to remember your actions and preferences over time for a better, more consistent experience.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Types of Cookies We Use</h3>
                <p>
                  We may use essential cookies (required for core features), performance cookies (analytics and usage), and preference cookies (remembering settings like language and theme). Third-party analytics cookies may also be used.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How We Use Cookies</h3>
                <p>
                  Cookies help us keep you signed in, remember preferences, measure performance, and enhance overall usability. We use aggregated data to understand trends and improve Replyway.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Managing Cookies Preferences</h3>
                <p>
                  Most browsers let you control cookies through settings. You can accept, reject, or delete cookies. Note that disabling certain cookies may affect functionality and your experience on Replyway.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Third-Party Cookies</h3>
                <p>
                  Some features may rely on third-party cookies (for example, analytics providers) to help us understand usage patterns and improve the product. These third parties have their own privacy and cookies policies.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Updates to This Policy</h3>
                <p>
                  We may update this policy from time to time to reflect changes in technology, legislation, or our practices. Material changes will be communicated through the service.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
                <p>
                  If you have questions about this Cookies Policy, please contact our support team.
                </p>
              </div>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}


