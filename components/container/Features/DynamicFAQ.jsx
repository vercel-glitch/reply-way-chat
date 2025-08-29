import React, { useState } from 'react'
import Container from '../../common/Container'
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, BookOpen, ArrowRight, Sparkles } from 'lucide-react'

export default function DynamicFAQ({ 
  title = "Frequently Asked Questions",
  subtitle = "Get answers to common questions about our technology and how it can benefit your team.",
  faqs,
  helpTitle = "Still Have Questions?",
  helpSubtitle = "Our support team is here to help you get the most out of our technology",
  primaryCtaText = "Contact Support",
  secondaryCtaText = "View Documentation"
}) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-sm font-medium text-orange-700 mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            {title}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-orange-200 overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full px-8 py-8 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 pr-4 group-hover:text-orange-600 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                        <ChevronUp className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                        <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-orange-600" />
                      </div>
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-8 animate-fadeIn">
                    <div className="border-t border-gray-100 pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-2 h-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="relative">
          <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 lg:p-16 text-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/20 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Need More Help?</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black mb-6">
                {helpTitle}
              </h3>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                {helpSubtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <MessageCircle className="w-5 h-5" />
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </button>
                
                <button className="group inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                  <BookOpen className="w-5 h-5" />
                  <span>{secondaryCtaText}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
} 