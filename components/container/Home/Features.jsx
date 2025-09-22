import React from 'react'
import Container from '../../common/Container'
import { MessageCircle, Video, Users, FileText, Shield, Zap } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: MessageCircle,
      title: "Real-time Messaging",
      description: "Instant communication with your team through secure, fast messaging channels that keep everyone connected.",
      image: "/st-images/chat.jpeg"
    },
    {
      icon: Video,
      title: "Video Conferencing",
      description: "High-quality video calls with screen sharing, recording, and advanced collaboration tools for remote teams.",
      image: "/st-images/hd-call.jpeg"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with shared workspaces, project boards, and real-time document collaboration.",
      image: "/st-images/team.png"
    },
    {
      icon: FileText,
      title: "Global Access",
      description: "Access your workspace from anywhere in the world with seamless connectivity and synchronized data across all devices.",
      image: "/st-images/global-access.png"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, SSO integration, and comprehensive compliance features.",
      image: "/st-images/global-access.png"
    },
    {
      icon: Zap,
      title: "AI-Powered Tools",
      description: "Smart automation, intelligent insights, and AI-assisted workflows to boost your team's productivity.",
      image: "/st-images/ai-powered.png"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to collaborate
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to enhance your team's productivity and communication.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                  {/* Icon */}
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Image */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
