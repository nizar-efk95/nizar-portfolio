import { useState, useEffect } from 'react'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const experiences = [
    {
      title: "EdTech Project Manager (AI & Localization)",
      company: "ViewSonic",
      period: "Sep 2022 - Present",
      location: "Taipei, Taiwan",
      highlights: [
        "Deployed LearnWorlds LMS across 8+ regions",
        "Built centralized Product Intelligence Hub",
        "Implemented AI tools for course creation",
        "Localized 300+ assets reducing support requests by 40%"
      ]
    },
    {
      title: "Blockchain Marketing Strategist",
      company: "Lootex",
      period: "Oct 2021 - Aug 2022",
      location: "Taipei, Taiwan",
      highlights: [
        "Market research across France, Italy, and Spain",
        "Integrated Freshdesk CRM and chatbot",
        "Delivered localized onboarding materials"
      ]
    },
    {
      title: "Digital Marketing Intern",
      company: "BenQ",
      period: "Jan 2021 - Sep 2021",
      location: "Taipei, Taiwan",
      highlights: [
        "Managed French social media accounts",
        "Led KOL partnerships for European markets",
        "Localized marketing content"
      ]
    },
    {
      title: "IT Systems & Networks Executive",
      company: "Monaco Digital",
      period: "Jun 2018 - Aug 2019",
      location: "Monaco",
      highlights: [
        "Supported enterprise clients (SBM Offshore, Monaco Govt)",
        "System support (Azure AD, Exchange, Lotus Notes)",
        "OS/software integrations and training"
      ]
    }
  ]

  const skills = [
    {
      category: "Project Management",
      items: ["SOP Design", "Stakeholder Coordination", "Go-to-Market Delivery", "Cross-functional Leadership"]
    },
    {
      category: "Localization & Languages",
      items: ["French (Native)", "Italian (Native)", "English (Fluent)", "Mandarin (Basic)", "UI/UX Localization"]
    },
    {
      category: "AI & Digital Tools",
      items: ["AI-assisted Course Creation", "Data-driven Content", "Automation Workflows"]
    },
    {
      category: "Platforms & Tools",
      items: ["LearnWorlds LMS", "Freshdesk", "HubSpot", "Azure AD", "WordPress", "HTML/CSS"]
    }
  ]

  const education = [
    {
      degree: "IMBA – International Master of Business Administration",
      school: "Ming Chuan University",
      period: "2020 - 2022",
      location: "Taipei, Taiwan"
    },
    {
      degree: "Bachelor – Web Design",
      school: "ActivMedia Digital School",
      period: "2019 - 2020",
      location: "Nice, France"
    },
    {
      degree: "BTEC HND – IT Systems & Network Administration",
      school: "Nice, France",
      period: "2015 - 2017",
      location: "Nice, France"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gradient">Nizar El Fyek</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition">Experience</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition">Skills</a>
              <a href="#education" className="text-gray-700 hover:text-blue-600 transition">Education</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="text-gradient">Nizar El Fyek</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 font-medium">
                EdTech Project Manager
              </h2>
              <p className="text-xl text-gray-600">
                AI & Localization Specialist
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Multilingual Project Manager with experience leading cross-functional initiatives across EdTech, 
                localization, and AI-driven solutions. Specialized in driving user adoption, building scalable 
                documentation systems, and delivering measurable results in international environments.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.linkedin.com/in/nizar-el-fyek-a51318144/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
                >
                  Connect on LinkedIn
                </a>
                <a 
                  href="mailto:nizarelfyek95pro@gmail.com"
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
                <img 
                  src="/nizar-portfolio/nizar.jpg" 
                  alt="Nizar El Fyek" 
                  className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              I help companies deploy LMS platforms, localize content in French and Italian, and run digital 
              campaigns that support sales, onboarding, and customer education.
            </p>
            <p>
              With a strong background in EdTech, localization, and digital transformation, I've successfully 
              led projects across 8+ regions, implemented AI-driven solutions, and delivered measurable improvements 
              in user adoption and customer satisfaction.
            </p>
            <p className="font-medium text-gray-900">
              Based in Taipei, Taiwan | Available for opportunities in EdTech, AI enablement, localization, 
              and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-xl text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right text-gray-600">
                    <p className="font-medium">{exp.period}</p>
                    <p className="text-sm">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">▹</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 shadow-md hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm hover:shadow-md transition text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
                <div className="flex flex-wrap justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-lg text-blue-600 font-medium">{edu.school}</p>
                  </div>
                  <div className="text-right text-gray-600">
                    <p className="font-medium">{edu.period}</p>
                    <p className="text-sm">{edu.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <p className="text-xl text-gray-700">
              I'm based in Taipei and open to opportunities in EdTech, AI enablement, localization, 
              and digital transformation. Feel free to reach out for collaborations, consulting, 
              or speaking opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:nizarelfyek95pro@gmail.com"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl text-lg font-medium"
              >
                📧 nizarelfyek95pro@gmail.com
              </a>
              <a 
                href="tel:+886965252126"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition text-lg font-medium"
              >
                📱 +886-965-252-126
              </a>
            </div>
            <div className="pt-8">
              <a 
                href="https://www.linkedin.com/in/nizar-el-fyek-a51318144/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition shadow-lg hover:shadow-xl text-lg font-medium"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <p className="text-gray-400">
          © 2024 Nizar El Fyek. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App

