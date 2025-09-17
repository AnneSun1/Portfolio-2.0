"use client"

import Image from "next/image"

export default function AboutSection() {
  return (
    <div className="container mx-auto px-8 py-20 max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
          <span className="font-medium italic instrument">About</span> Me
        </h2>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-white/80 leading-relaxed">
            I'm a software developer and student from the University of Waterloo, currently on exchange at the National University of Singapore. 
          </p>
          <p className="text-white/80 leading-relaxed">
            I love building functional, user friendly applications and taking ownership of projects from concept to deployment. I'm skilled at writing clean, efficient, and maintainable code, leveraging AI to speed up the process if necessary. Im interested in creating AI-powered solutions that streamline processes, improve efficiency, and enhance user experience.
          </p>
          {/* <p className="text-white/80 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or
            sharing knowledge with the developer community. I believe in the power of collaboration and continuous
            learning.
          </p> */}
          <div className="flex flex-wrap gap-3 pt-4">
            <span className="px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full">React</span>
            <span className="px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full">Redux</span>
            <span className="px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full">TypeScript</span>
            <span className="px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full">FastAPI</span>
            <span className="px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full">Python</span>
          </div>
        </div>

        <div className="relative">
        <div className="w-80 h-80 mx-auto bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
        <div className="w-60 h-60 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center overflow-hidden">
            <Image
            src="/66-yawn.jpg"  // place your image in /public/me.jpg
            alt="Profile picture"
            width={240}     // same size as container
            height={240}
            className="object-cover rounded-full"
            />
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}
