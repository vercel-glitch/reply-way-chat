import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Container from '../components/common/Container'

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-16">
        <Container>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().getFullYear()}</p>

            <section className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                These Terms & Conditions govern your use of Replyway. By creating an account or using our services, you agree to these terms.
              </p>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Use of Service</h2>
                <p>
                  You agree to use Replyway in compliance with applicable laws and refrain from activities that disrupt or abuse the platform. You are responsible for the content you create and share.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Accounts & Responsibilities</h2>
                <p>
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately of any unauthorized use.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Limitation of Liability</h2>
                <p>
                  Replyway is provided "as is" without warranties of any kind. We are not liable for indirect or consequential damages arising from your use of the service.
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


