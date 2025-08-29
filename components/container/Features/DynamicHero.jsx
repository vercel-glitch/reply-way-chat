import React from 'react'
import Container from '../../common/Container'
import { ArrowRight, Play, Star, Users, Zap } from 'lucide-react'

export default function DynamicHero({ 
  bannerText,
  title,
  subtitle,
  primaryCtaText = "Get Started",
  secondaryCtaText = "Watch Demo",
  backgroundImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  stats = [
    { value: "15M+", label: "Users" },
    { value: "4K", label: "Quality" },
    { value: "99.9%", label: "Reliability" },
    { value: "24/7", label: "Support" }
  ]
}) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Content */}
      <Container className="relative z-10 text-center text-white py-20">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Banner Badge */}
          {bannerText && (
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>{bannerText}</span>
            </div>
          )}
          
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
              <span className="block text-white">{title}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Revolution
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              {subtitle}
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
              <span className="flex items-center space-x-2">
                <span>{primaryCtaText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </button>
            
            <button className="group flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-xl font-semibold text-lg transition-all duration-300">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 ml-1" />
              </div>
              <span>{secondaryCtaText}</span>
            </button>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium mt-2 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-pulse delay-1000" />
      
      {/* User Avatars */}
      <div className="absolute top-1/4 right-10 flex -space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white shadow-lg"></div>
        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full border-2 border-white shadow-lg"></div>
        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full border-2 border-white shadow-lg"></div>
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white shadow-lg"></div>
        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border-2 border-white/50 flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-sm">+2.5k</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
} 