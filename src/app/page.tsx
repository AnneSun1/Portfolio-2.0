"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import PulsingCircle from "@/components/pulsing-circle"
import ShaderBackground from "@/components/shader-background"
import AboutSection from "@/components/about-section"
import WorkExperienceSection from "@/components/work-experience-section"
import ProjectsSection from "@/components/projects-section"
import LinksSection from "@/components/links-section"
import StaticBackground from "@/components/static-background"

export default function Portfolio() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section id="home" className="min-h-screen relative snap-start">
        <ShaderBackground>
          <Header />
          <HeroContent />
          <PulsingCircle />
        </ShaderBackground>
      </section>
<StaticBackground>
      {/* About Section */}
      <section id="about" className="min-h-screen snap-start">
        
        <AboutSection />
      
      </section>

      <section id="experience" className="min-h-screen snap-start">

        <WorkExperienceSection />
      
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen snap-start">
   
        <ProjectsSection />
      </section>

      {/* Links Section */}
      <section id="links" className="min-h-screen snap-start">
      
        <LinksSection />
        
      </section>
      </StaticBackground>
    </div>
  )
}
