import React from 'react'
import Container from '../../common/Container'
import { TrendingUp, Globe, Users, Clock, DollarSign, Target, ArrowRight, Star, Zap } from 'lucide-react'

export default function DynamicBenefits({ 
  title,
  subtitle,
  benefits,
  statsTitle = "Impact",
  statsSubtitle = "Real numbers from businesses using our technology",
  stats = [
    { value: "40%", label: "Productivity Increase" },
    { value: "60%", label: "Time Saved" },
    { value: "85%", label: "Cost Reduction" },
    { value: "95%", label: "User Satisfaction" }
  ],
  useCasesTitle = "Popular Use Cases",
  useCases = [
    { title: "Remote Training", description: "Conduct interactive training sessions with real-time collaboration." },
    { title: "Sales Presentations", description: "Share product demos and presentations with prospects in real-time." },
    { title: "Technical Support", description: "Provide remote technical support by viewing and controlling users' screens." },
    { title: "Design Reviews", description: "Collaborate on design projects with real-time feedback and annotations." },
    { title: "Code Reviews", description: "Conduct thorough code reviews with team members by sharing your development environment." },
    { title: "Virtual Meetings", description: "Enhance virtual meetings with visual content sharing for better engagement." }
  ]
}) {
  return (
    <div className="py-24 bg-white">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full text-sm font-medium text-green-700 mb-6">
            <Zap className="w-4 h-4" />
            <span>Business Benefits</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            {title}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
              {" "}Your Success
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
            >
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Star className="w-3 h-3 text-white fill-current" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {benefit.description}
              </p>
              
              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ArrowRight className="w-5 h-5 text-green-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="relative mb-24">
          <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 lg:p-16 text-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6">
                  <TrendingUp className="w-4 h-4" />
                  <span>Proven Results</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black mb-6">
                  {statsTitle}
                </h3>
                
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  {statsSubtitle}
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 font-medium group-hover:text-white transition-colors">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-black text-gray-900 mb-6">
            {useCasesTitle}
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how teams around the world are using our platform to achieve remarkable results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {useCase.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
} 