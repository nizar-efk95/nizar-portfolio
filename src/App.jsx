import { useState, useEffect } from 'react'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [expandedProject, setExpandedProject] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      id: 1,
      title: "LMS Integration",
      teaser: "Global LearnWorlds deployment across 8+ regions",
      icon: "🎓",
      company: "ViewSonic, Taipei, Taiwan",
      date: "2022 - Ongoing",
      challenges: "Fragmented training platforms across regions, low customer retention, manual course creation processes",
      tasks: [
        "Integrated LearnWorlds LMS with SSO/Azure AD across 8+ regions",
        "Built unified Product Hub for sales/marketing/training assets",
        "Implemented AI tools for automated course creation and data analytics"
      ],
      results: [
        "Boosted customer retention through streamlined sales training",
        "Enabled data-driven decisions for regional teams",
        "Accelerated business opportunities via centralized learning platform"
      ]
    },
    {
      id: 2,
      title: "Asset Localization FR + IT",
      teaser: "300+ UI/content assets translated for global sales",
      icon: "🌍",
      company: "ViewSonic, Taipei, Taiwan",
      date: "2022 - Ongoing",
      challenges: "Language barriers blocking FR/IT market penetration, high support volume from untranslated materials",
      tasks: [
        "Localized 300+ assets (UI elements, articles, email campaigns) in French/Italian",
        "Adapted training materials and marketing content for regional compliance",
        "Collaborated with sales teams for culturally relevant translations"
      ],
      results: [
        "Reduced support requests by enabling self-service in native languages",
        "Increased engagement across European markets",
        "Supported cross-regional go-to-market initiatives"
      ]
    },
    {
      id: 3,
      title: "Product Hub Development",
      teaser: "Global sales/marketing asset centralization",
      icon: "📊",
      company: "ViewSonic, Taipei, Taiwan",
      date: "2022 - Ongoing",
      challenges: "Scattered product intelligence across regions, manual asset retrieval slowing sales cycles",
      tasks: [
        "Built unified Product Hub for global sales/marketing/training resources",
        "Integrated with LearnWorlds LMS and regional systems",
        "Implemented access controls and search functionality"
      ],
      results: [
        "Accelerated sales enablement across 8+ regions",
        "Reduced asset search time by 70%",
        "Enabled consistent go-to-market messaging globally"
      ]
    },
    {
      id: 4,
      title: "Freshdesk CRM Integration",
      teaser: "Chatbot setup + workflow optimization",
      icon: "💬",
      company: "Lootex, Taipei, Taiwan",
      date: "2021",
      challenges: "Inefficient support workflows, fragmented client data, poor chatbot response times",
      tasks: [
        "Led Freshdesk CRM integration with existing systems",
        "Configured AI chatbots for automated client onboarding",
        "Created SOPs for support team workflow optimization"
      ],
      results: [
        "Streamlined client engagement and reduced response times",
        "Improved support efficiency across marketing teams",
        "Enhanced data tracking for blockchain/NFT campaigns"
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
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
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

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Click on any project card to explore details
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer ${
                  expandedProject === project.id 
                    ? 'md:col-span-2 scale-[1.02]' 
                    : 'hover:shadow-xl hover:scale-[1.02]'
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                {/* Teaser Card */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-5xl">{project.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                        <p className="text-gray-600 mt-1">{project.teaser}</p>
                      </div>
                    </div>
                    <button 
                      className={`flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center transition-transform duration-300 ${
                        expandedProject === project.id ? 'rotate-180' : ''
                      }`}
                    >
                      <svg 
                        className="w-6 h-6 text-blue-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Expanded Details */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    expandedProject === project.id 
                      ? 'max-h-[2000px] opacity-100 mt-6' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t pt-6 space-y-6">
                      {/* Company & Date */}
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                        <div className="flex flex-wrap justify-between items-center">
                          <div>
                            <p className="text-sm text-gray-600 font-medium">Company</p>
                            <p className="text-lg font-bold text-gray-900">{project.company}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600 font-medium">Timeline</p>
                            <p className="text-lg font-bold text-blue-600">{project.date}</p>
                          </div>
                        </div>
                      </div>

                      {/* Challenges */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                          <span className="text-2xl mr-2">🎯</span>
                          Challenges
                        </h4>
                        <p className="text-gray-700 leading-relaxed bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          {project.challenges}
                        </p>
                      </div>

                      {/* Tasks */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                          <span className="text-2xl mr-2">⚙️</span>
                          Key Tasks
                        </h4>
                        <ul className="space-y-3">
                          {project.tasks.map((task, idx) => (
                            <li key={idx} className="flex items-start bg-blue-50 p-4 rounded-lg">
                              <span className="text-blue-600 font-bold mr-3 flex-shrink-0">•</span>
                              <span className="text-gray-700">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                          <span className="text-2xl mr-2">✨</span>
                          Results & Impact
                        </h4>
                        <ul className="space-y-3">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="flex items-start bg-green-50 p-4 rounded-lg">
                              <span className="text-green-600 font-bold mr-3 flex-shrink-0">✓</span>
                              <span className="text-gray-700 font-medium">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 ${
                  expandedProject === project.id 
                    ? 'opacity-100' 
                    : 'opacity-0'
                }`} style={{
                  background: 'linear-gradient(to right, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
                  padding: '2px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }}></div>
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

