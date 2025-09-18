import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Container from '../components/common/Container'

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      {/* Simple Hero Section (no background/animation) */}
      <div className="py-12">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">Privacy Policy</h1>
            <p className="text-base sm:text-lg text-gray-700">How we collect, use, and protect your data at Replyway.</p>
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
                  This Privacy Policy explains how Replyway collects, uses, stores, and protects your personal information when you use our services.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Information We Collect</h3>
                <p>
                  We collect information that you provide directly to us (such as name, email, workspace details) when creating an account or using collaboration features. We may also collect usage data, device information, IP addresses, and diagnostic logs to improve reliability and performance.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How We Use Information</h3>
                <p>
                  We use your data to deliver and maintain Replyway, personalize your experience, enable messaging and collaboration features, ensure security, and perform analytics to improve our services. Aggregated or anonymized data may be used for reporting and research.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Sharing & Third Parties</h3>
                <p>
                  We do not sell your personal data. We may share information with trusted service providers who assist in operating Replyway (e.g., hosting, analytics) under strict confidentiality obligations, or when required by law.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Retention</h3>
                <p>
                  We retain personal data only as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce agreements. Retention periods may vary depending on the nature of the data and applicable laws.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Security</h3>
                <p>
                  We implement industry-standard safeguards including encryption in transit, access controls, and regular security reviews to protect your information from unauthorized access, alteration, or disclosure.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">User Rights</h3>
                <p>
                  Depending on your location, you may have rights to access, correct, or delete your personal data, and to object to or restrict certain processing. Contact us to exercise your rights or if you have questions about this policy.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">International Transfers</h3>
                <p>
                  Your data may be processed and stored in countries other than your own. Where applicable, we implement safeguards to ensure an adequate level of data protection for international transfers.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Children’s Privacy</h3>
                <p>
                  Replyway is not directed to children under the age of 13 (or the age required by local law). We do not knowingly collect personal information from children. If you believe a child has provided us data, please contact us.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Changes to This Policy</h3>
                <p>
                  We may update this Privacy Policy periodically. We will notify users of significant changes through the service or via email. Continued use of Replyway after updates indicates acceptance of the revised policy.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
                <p>
                  If you have questions about this Privacy Policy or your data, please contact our support team.
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


