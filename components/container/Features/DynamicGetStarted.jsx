import React from 'react'
import Container from '../../common/Container'
import { Download, Play, Monitor, Smartphone, Tablet, ArrowRight, Star, Zap, CheckCircle, Sparkles } from 'lucide-react'

export default function DynamicGetStarted({ 
  title = "Get Started Today",
  subtitle = "Join millions of users who are already transforming their collaboration with our powerful technology.",
  mainCtaTitle = "Ready to Start?",
  mainCtaSubtitle = "Download our app and begin your first session in minutes",
  primaryCtaText = "Download App",
  secondaryCtaText = "Watch Demo",
  tertiaryCtaText = "Sign Up Free",
  platformsTitle = "Available on All Your Devices",
  platforms = [
    {
      icon: Monitor,
      name: "Desktop",
      description: "Windows, macOS, Linux",
      features: ["Full functionality", "Advanced features", "Remote control"]
    },
    {
      icon: Smartphone,
      name: "Mobile",
      description: "iOS, Android",
      features: ["Mobile optimized", "Camera sharing", "Touch controls"]
    },
    {
      icon: Tablet,
      name: "Tablet",
      description: "iPad, Android tablets",
      features: ["Large screen support", "Pen support", "Multi-touch gestures"]
    }
  ],
  stats = [
    { value: "4K", label: "Quality Support" },
    { value: "1000+", label: "Participants" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" }
  ],
  finalCtaTitle = "Transform Your Experience Today",
  finalCtaSubtitle = "Experience the power of seamless technology and take your team's productivity to the next level",
  finalCtaText = "Start Free Trial"
}) {
  return (
    <div className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <Container className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Get Started</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            {title}
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Main CTA Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 lg:p-16 mb-24 border border-white/20">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-black mb-6">
              {mainCtaTitle}
            </h3>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              {mainCtaSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
                <Download className="w-6 h-6" />
                <span>{primaryCtaText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </button>
              
              <button className="group inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-xl font-semibold text-lg transition-all duration-300">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 ml-1" />
                </div>
                <span>{secondaryCtaText}</span>
              </button>
              
              <button className="group inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-xl font-semibold text-lg transition-all duration-300">
                <Star className="w-5 h-5" />
                <span>{tertiaryCtaText}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Platform Support */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black mb-6">
              {platformsTitle}
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Access our platform seamlessly across all your devices with native apps and optimized experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                  {platform.name}
                </h4>
                
                <p className="text-gray-300 mb-6">
                  {platform.description}
                </p>
                
                <ul className="space-y-3">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 font-medium group-hover:text-white transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 lg:p-16 border border-white/20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Ready to Transform?</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black mb-6">
              {finalCtaTitle}
            </h3>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              {finalCtaSubtitle}
            </p>
            
            <button className="group relative inline-flex items-center space-x-3 px-12 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25">
              <span>{finalCtaText}</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
} 