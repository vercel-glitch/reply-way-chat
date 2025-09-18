import React from 'react'
import Image from 'next/image'
import Container from '../../common/Container'
import { Users, Phone, Users2, MessageCircle, FolderKanban, CheckSquare } from 'lucide-react'

export default function Solutions() {

  const solutions = [
    {
      id: 'meet',
      title: 'Meet',
      description: 'Make meetings more impactful with features like PowerPoint Live, Microsoft Whiteboard, and AI-generated meeting notes.',
      image: '/st-images/meet.avif',
      icon: Users
    },
    {
      id: 'call',
      title: 'Call',
      description: 'Stay connected with crystal-clear audio and video calls, screen sharing, and advanced calling features.',
      image: '/st-images/call.avif',
      icon: Phone
    },
    {
      id: 'collaborate',
      title: 'Collaborate',
      description: 'Work together seamlessly with real-time document editing, file sharing, and team collaboration tools.',
      image: '/st-images/collaborate.avif',
      icon: Users2
    },
    {
      id: 'chat',
      title: 'Chat',
      description: 'Communicate instantly with team chat, channels, and integrated messaging across all your devices.',
      image: '/st-images/chat.avif',
      icon: MessageCircle
    },
    {
      id: 'project-management',
      title: 'Project Management',
      description: 'Organize projects, set goals, and track progress seamlessly.',
      image: '/st-images/meet.avif',
      icon: FolderKanban
    },
    {
      id: 'task-management',
      title: 'Task Management',
      description: 'Manage tasks efficiently with deadlines, priorities, and collaboration tools.',
      image: '/st-images/call.avif',
      icon: CheckSquare
    }
  ]

  

  return (
    <>
      
      
      <section id='solutions' className="pt-12 pb-20 bg-white">
        <Container>
          {/* Solutions Sections */}
          <div className="space-y-20">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={solution.id} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-gray-50 rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 min-h-[400px] lg:min-h-[500px]">
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                        {solution.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
                      {solution.description}
                    </p>
                    
                    {/* Learn more button removed as requested */}
                  </div>
                  
                  {/* Image */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  )
}
