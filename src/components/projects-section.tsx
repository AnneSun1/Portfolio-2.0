"use client"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Shape AI",
      description: "In the works... AI-powered study guide generator using RAG retrieval to customize your study guide based on user input.",
      tech: [ "Langchain", "Ollama", "FastAPI", "Next.js", "TailwindCSS", "Supabase"],
      link: "https://github.com/AnneSun1/shape",
    },
    {
        title: "Trapezoid",
        description: "Android application used to track user goals through photo posts and user interactions (following, post viewing, search for friends, etc)",
        tech: ["Kotlin", "Android", "Jetpack Compose", "Koin", "Ktor"],
        link: "https://git.uwaterloo.ca/a64sun/trapezoid/-/tree/8d9a3d5765c047e8bb45d7e655cf71e604b5fd93/",
      },
    {
      title: "Estia",
      description: "Fullstack React platform with 100+ coding projects, AI-powered project generation, RAG retrieval and user profiles (auth, comments, etc)",
      tech: ["Groq", "React", "TypeScript", "Supabase", "Express.js", "CSS"],
      link: "https://github.com/estiaofficial/estia",
    },
    
    {
        title: "SqWiTs Game (3rd @ SheHacks and Best Use of Databricks)",
        description: "\"I've played these games before!\" Deter users from phone use during a study session by these three Squid Game based games: Roast Rap, 4 in one, Embarrasing Email Scare",
        tech: ["OpenCV", "Socket.io", "TailwindCSS", "scikit-learn", "Flask", "React", "Typescript"],
        link: "https://github.com/AnneSun1/geesemon-go",
      },
    {
      title: "Geesemon Go (GeeseHacks)",
      description: "Raise your pet goose by taking photos of geese from your phone app. Utilizes a custom trained Pytorch ML Model to identify geese vs non geese images.",
      tech: ["Pytorch", "Flask", "React Native", "Socket.io", "TailwindCSS", "React", "Typescript"],
      link: "https://github.com/AnneSun1/geesemon-go",
    },
  ]

  return (
    <div className="container mx-auto px-8 py-20 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
          <span className="font-medium italic instrument">My</span> Projects
        </h2>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 h-full transition-all duration-300 hover:bg-white/10 hover:border-white/20">
              <h3 className="text-xl font-medium text-white mb-3">{project.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center text-white/80 hover:text-white text-sm transition-colors duration-200"
              >
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
