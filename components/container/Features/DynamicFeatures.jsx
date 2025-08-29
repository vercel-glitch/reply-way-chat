import React from 'react'
import Container from '../../common/Container'
import { Monitor, Users, Shield, Zap, Eye, Share2, Settings, BarChart3, ArrowRight, Play, Sparkles } from 'lucide-react'

export default function DynamicFeatures({ 
  title,
  subtitle,
  features,
  demoTitle = "See it in Action",
  demoDescription = "Experience the power of our technology with this interactive demo.",
  demoFeatures = [
    "Real-time collaboration",
    "High quality support", 
    "Cross-platform compatibility"
  ],
  demoCtaText = "Try Demo Now"
}) {
  return (
    <div className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Powerful Features</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            {title}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              {" "}That Matter
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Demo Section */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content Side */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full text-sm font-medium text-green-700 mb-6">
                  <Play className="w-4 h-4" />
                  <span>Live Demo</span>
                </div>
                
                <h3 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
                  {demoTitle}
                </h3>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {demoDescription}
                </p>
                
                {/* Feature List */}
                <div className="space-y-4 mb-8">
                  {demoFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        index === 0 ? 'bg-green-500' : 
                        index === 1 ? 'bg-blue-500' : 'bg-purple-500'
                      } shadow-lg`}></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <button className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <span>{demoCtaText}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </button>
              </div>
              
              {/* Visual Side */}
              <div className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 p-8 lg:p-12 flex items-center justify-center overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
                </div>
                
                {/* Demo Interface */}
                <div className="relative w-full max-w-md">
                  {/* Browser Window */}
                  <div className="bg-gray-800 rounded-lg p-4 mb-6 shadow-2xl">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    
                    <div className="bg-gray-700 rounded-lg p-6">
                      <div className="h-40 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                        <div className="text-center text-white">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Play className="w-8 h-8 ml-1" />
                          </div>
                          <div className="text-sm font-semibold">Interactive Demo</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-600 rounded-full"></div>
                        <div className="h-3 bg-gray-600 rounded-full w-3/4"></div>
                        <div className="h-3 bg-gray-600 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* User Indicators */}
                  <div className="flex justify-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full shadow-lg"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full shadow-lg"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full shadow-lg"></div>
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xs">+99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
} 