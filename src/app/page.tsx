"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import PulsingCircle from "@/components/pulsing-circle"
import ShaderBackground from "@/components/shader-background"
import AboutSection from "@/components/about-section"
import WorkExperienceSection from "@/components/work-experience-section"
import ProjectsSection from "@/components/projects-section"
import LinksSection from "@/components/links-section"

export default function Portfolio() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section id="home" className="min-h-screen relative">
        <ShaderBackground>
          <Header />
          <HeroContent />
          <PulsingCircle />
        </ShaderBackground>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-black">
        <AboutSection />
      </section>

      <section id="experience" className="min-h-screen bg-black">
        <WorkExperienceSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-black">
        <ProjectsSection />
      </section>

      {/* Links Section */}
      <section id="links" className="min-h-screen bg-black">
        <LinksSection />
      </section>
    </div>
  )
}
