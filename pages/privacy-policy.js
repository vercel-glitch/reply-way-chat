import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Container from '../components/common/Container'

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-16">
        <Container>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().getFullYear()}</p>

            <section className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                This Privacy Policy explains how we collect, use, store, and protect your personal data when you use Replyway. We are committed to safeguarding your privacy and ensuring your data is handled responsibly.
              </p>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as your name, email address, workspace details, and messages. We may also collect usage data, device information, and diagnostic logs to improve our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">How We Use Your Data</h2>
                <p>
                  We use your data to provide and maintain Replyway, personalize your experience, enable collaboration features, and improve performance and reliability. We may also use aggregated, anonymized data for analytics.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Data Storage & Security</h2>
                <p>
                  Your data is stored on secure servers with access controls, encryption in transit, and industry-standard safeguards. We regularly review our security practices to protect your information from unauthorized access or disclosure.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Your Rights</h2>
                <p>
                  You may request access, correction, or deletion of your personal data, subject to applicable laws. Contact us if you have questions about your data or this policy.
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


