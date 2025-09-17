"use client"

import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="relative z-20 flex items-center justify-between p-4 md:p-6">
      {/* Logo */}
      <div className="flex items-center">
        <svg
          fill="currentColor"
          viewBox="0 0 147 70"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="size-8 md:size-10 translate-x-[-0.5px] text-white"
        >
          <path d="M56 50.2031V14H70V60.1562C70 65.5928 65.5928 70 60.1562 70C57.5605 70 54.9982 68.9992 53.1562 67.1573L0 14H19.7969L56 50.2031Z"></path>
          <path d="M147 56H133V23.9531L100.953 56H133V70H96.6875C85.8144 70 77 61.1856 77 50.3125V14H91V46.1562L123.156 14H91V0H127.312C138.186 0 147 8.81439 147 19.6875V56Z"></path>
        </svg>
      </div>

      <nav className="hidden md:flex items-center space-x-2 border rounded-full py-2 px-4">
        <button
          onClick={() => scrollToSection("about")}
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          About Me
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Projects
        </button>
      </nav>

      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2" aria-label="Toggle menu">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div
        id="gooey-btn"
        className="relative hidden md:flex items-center group"
        style={{ filter: "url(#gooey-filter)" }}
      >
        <button
          onClick={() => scrollToSection("links")}
          className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-25 z-0"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </button>
        <button
          onClick={() => scrollToSection("links")}
          className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10"
        >
          Contact Me
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10 md:hidden">
          <nav className="flex flex-col p-4 space-y-2">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-white text-sm font-light px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 text-left"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-white/80 hover:text-white text-sm font-light px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 text-left"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white/80 hover:text-white text-sm font-light px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("links")}
              className="text-white/80 hover:text-white text-sm font-light px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 text-left"
            >
              Links
            </button>
            <button
              onClick={() => scrollToSection("links")}
              className="mt-2 px-4 py-3 rounded-lg bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90"
            >
              Contact Me
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
