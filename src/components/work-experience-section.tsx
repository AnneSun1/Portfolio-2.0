"use client";

import Image from "next/image";

type Experience = {
    logo: string;
  title: string;
  company: string;
  period: string;
  bullets: string[];
  technologies: string[];
};

export default function WorkExperienceSection() {
  const experiences: Experience[] = [
    {
        logo: "/geesehacks-logo.jpeg",
        title: "Organizer: Software Developer",
        company: "GeeseHacks",
        period: "Aug 2025 - Present",
        bullets: [
            "Developing and designing cross-platform applications for hosting Geesehacks 2026, including hacker applications, judging platform and internal tooling"
        ],
        technologies: [
            "Next.js",
            "TailwindCSS",
            "TypeScript",
            "FastAPI",
            "SQL",
          ],
    },
    {
        logo: "/blueprint.png",
        title: "Software Developer",
        company: "UW Blueprint - Marillac Place",
        period: "Aug 2025 - Present",
        bullets: [
            "Building a platform to support Marillac Place by streamlining task management, appointment scheduling, and progress tracking for both administrators and residents"
        ],
        technologies: [
            "React",
            "Material UI",
            "Node.js",
            "GraphQL",
            "Firebase",
            "PostgreSQL"
          ],
    },
    {
        logo: "/nova-vacations.jpeg",
      title: "Software Engineer",
      company: "Nova Vacation Homes",
      period: "May 2025 – Aug 2025",
      bullets: [
        "Led the development of a React Native mobile property operations platform, collaborating with stakeholders and product managers to design and implement core features from scratch",
        "Designed and prototyped UI/UX flows, integrating Redux for state management and leveraging React Native UI libraries (e.g., Nativewind, Gluestack) to build responsive, intuitive interfaces and streamline user workflows",
        "Optimized property management Python + FastAPI services by 800+ ms across 7+ endpoints through refactoring SQLAlchemy ORM queries, enhancing model relationship loading, and implementing PostgreSQL query indexing",
        "Reduced frontend data fetching by 48% through a server-side data filtering and sorting system that supports pagination, dynamic table joins and column selection, optimizing data retrieval and frontend performance",
        "Enabled photo attachments as completion proof for maintenance tasks via presigned S3 uploads with KMS encryption",
        "Managed iOS CI/CD with Expo EAS and Apple Developer, automating code signing, provisioning, and TestFlight releases with over-the-air (OTA) updates",
      ],
      technologies: [
        "React Native",
        "Redux",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "TypeScript",
        "AWS",
        "Expo EAS",
      ],
    },
    {
        logo: "/uoft.png",
      title: "Software Engineer",
      company: "University of Toronto – EASI",
      period: "Sep 2024 – Dec 2024",
      bullets: [
        "Developed 6 backend microservices to replace an on-premises data service that manages 60,000+ student records, optimizing query performance and reducing codebase size using Express.js, SQL, and TypeScript",
        "Enhanced data retrieval performance by 15% for downstream applications by optimizing application logic and translating TypeScript into SQL queries, enabling efficient database-side calculations",
        "Eliminated 65% of manual labour by automating YAML creation workflows in API documentation and infrastructure management, ensuring consistency, reducing errors, and streamlining deployment processes across environments",
      ],
      technologies: ["TypeScript", "Express.js", "Node.js", "SQL", "SQL Server", "Azure"],
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            <span className="font-medium italic instrument">Work</span> Experience
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/20 via-white/40 to-white/20" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex items-start">
                <div className="absolute left-2.5 md:left-6 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full border-2 md:border-4 border-black z-10" />

                <div className="ml-8 md:ml-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {/* Circle logo */}
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        {/* If you want an initial or icon inside the circle */}
                        <span className="text-black text-xs font-bold">
                        <Image
                            src={experience.logo}  // e.g. "/logos/nova.png"
                            alt={`${experience.company} logo`}
                            width={24}
                            height={24}
                            className="object-contain"
                            />
                        </span>
                        </div>

                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-0">
                      {experience.title}
                    </h3>
                    </div>
                    <span className="text-white/80 text-sm font-light">{experience.period}</span>
                  </div>

                  <h4 className="text-white/90 font-medium mb-3">{experience.company}</h4>

                  <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-white/85 mb-4">
                    {experience.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>

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
  );
}
