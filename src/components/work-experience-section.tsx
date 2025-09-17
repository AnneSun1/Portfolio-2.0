"use client"

export default function WorkExperienceSection() {
  const experiences = [
    {
        title: "Software Developer",
        company: "Geesehacks",
        period: "Aug 2025 - Present",
        description:
          "Led development of scalable web applications using React and Node.js. Mentored junior developers and implemented best practices for code quality.",
        technologies: ["React Native", "FastAPI", "PostgreSQL", "SQLAlchemy", "React", "TypeScript", "Vue.js", "AWS"],
      },
      {
        title: "Software Developer",
        company: "UW Blueprint",
        period: "Aug 2025 - Present",
        description:
          "Built and maintained multiple client projects from conception to deployment. Collaborated with design teams to create user-friendly interfaces.",
        technologies: ["Node.js", "Express.js", "SQL"],
      },
    {
      title: "Software/Fullstack Developer",
      company: "Nova Vacation Homes",
      period: "Apr 2025 - Aug 2025",
      description:
        "Led development of scalable web applications using React and Node.js. Mentored junior developers and implemented best practices for code quality.",
      technologies: ["React Native", "FastAPI", "PostgreSQL", "SQLAlchemy", "React", "TypeScript", "Vue.js", "AWS"],
    },
    {
      title: "Software Developer",
      company: "University of Toronto - EASI",
      period: "Sep 2024 - Dec 2024",
      description:
        "Built and maintained multiple client projects from conception to deployment. Collaborated with design teams to create user-friendly interfaces.",
      technologies: ["Node.js", "Express.js", "SQL"],
    },

  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 md:mb-16 text-center">Work Experience</h2>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/20 via-white/40 to-white/20"></div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex items-start">
                <div className="absolute left-2.5 md:left-6 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full border-2 md:border-4 border-black z-10"></div>

                <div className="ml-8 md:ml-20 bg-black/60 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6 hover:bg-black/70 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-0">{experience.title}</h3>
                    <span className="text-white/80 text-sm font-light">{experience.period}</span>
                  </div>

                  <h4 className="text-white/90 font-medium mb-3">{experience.company}</h4>

                  <p className="text-sm md:text-base text-white/85 mb-4 leading-relaxed">{experience.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 md:px-3 py-1 bg-gray-800 text-white text-xs rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
