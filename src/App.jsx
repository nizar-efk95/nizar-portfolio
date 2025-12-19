import { useState, useEffect } from 'react'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [expandedProject, setExpandedProject] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  const projects = [
    {
      id: 1,
      title: "LMS Platform Integration",
      teaser: "Global LearnWorlds deployment across 15+ countries",
      icon: "🎓",
      company: "ViewSonic, Taipei, Taiwan",
      date: "2024 - Ongoing",
      challenges: "Fragmented training platforms across regions, low customer retention, manual course creation processes",
      tasks: [
  "Market research for Professional Programs and Alignements with Trainers and 8+ Region's stakeholders",
  "Negotiations with LearnWorlds vendor and design of the platform (Pages, content, UX/UI)",
  "Integration with SSO/Azure AD connexion from ViewSonic native account",
  "Internal and external promotion of the platform via marketing channels and internal communication",
  "Feedback collection and improvement of the User Experience"
],
      results: [
        "Boosted customer retention through streamlined sales training",
        "Enabled data-driven decisions for regional teams",
        "Accelerated business opportunities via centralized learning platform",
        "Enabled automations and scalability opportunities that were impossible with the previous platform"
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
    items: [
      "SOP Design",
      "Stakeholder Coordination",
      "Go-to-Market Delivery",
      "Cross-functional Leadership",
      "Market Research",
      "Vendor Negotiation"
    ]
  },
  {
    category: "Localization & Languages",
    items: [
      "🇫🇷 French - Level: Native",
      "🇮🇹 Italian - Level: Native",
      "🇬🇧 English - Level: Native",
      "中文 Mandarin - Level: Basic",
      "UI/UX Localization",
      "Technical Documentation Localization",
      "Sales & Marketing Material Localization"
    ]
  },
  {
    category: "AI & Digital Tools",
    items: [
      "AI-assisted Course Creation",
      "ChatGPT AI Agent Creation",
      "Perplexity AI Agent Creation",
      "Automation Workflows",
      "Data-driven Content"
    ]
  },
  {
    category: "Platforms & Tools",
    items: [
      "LearnWorlds LMS",
      "Freshdesk",
      "HubSpot",
      "Azure AD",
      "GitHub",
      "WordPress",
      "HTML/CSS"
    ]
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
      school: "Lycée Beau Site",
      period: "2015 - 2017",
      location: "Nice, France"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg sm:text-xl font-bold text-gradient">Nizar El Fyek</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition">Skills</a>
              <a href="#education" className="text-gray-700 hover:text-blue-600 transition">Education</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
          }`}>
            <div className="flex flex-col space-y-3 pt-4">
              <a href="#about" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition py-2 px-4 rounded-lg hover:bg-gray-50">About</a>
              <a href="#projects" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition py-2 px-4 rounded-lg hover:bg-gray-50">Projects</a>
              <a href="#skills" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition py-2 px-4 rounded-lg hover:bg-gray-50">Skills</a>
              <a href="#education" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition py-2 px-4 rounded-lg hover:bg-gray-50">Education</a>
              <a href="#contact" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition py-2 px-4 rounded-lg hover:bg-gray-50">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="text-gradient">Nizar El Fyek</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium">
                Multilingual EdTech & AI Solutions Manager
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Digital Learning, SaaS, and AI Adoption for Education and other industries
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                I help companies deploy LMS and CRM platforms, localize assets in French and Italian, and run digital 
                campaigns that support sales, onboarding, and customer education. With a strong background in EdTech, 
                localization, and digital transformation, I've successfully led international projects, 
                implemented AI-driven solutions, and delivered measurable improvements in user adoption and customer satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                <a 
                  href="https://www.linkedin.com/in/nizar-el-fyek-a51318144/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl text-center"
                >
                  Connect on LinkedIn
                </a>
                <a 
                  href="mailto:nizarelfyek95pro@gmail.com"
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition text-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="flex justify-center order-first md:order-last">
              <div className="relative w-full max-w-sm md:max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
                <img 
                  src="/nizar-portfolio/508842.jpg" 
                  alt="Nizar El Fyek" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* About Section */}
<section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
      <span className="text-gradient">About Me</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      
      {/* Image – LEFT on desktop */}
      <div className="flex justify-center md:order-1">
        <div className="relative w-full max-w-sm md:max-w-md">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
          <img
            src="/nizar-portfolio/nizar.jpg"
            alt="Nizar El Fyek"
            className="relative rounded-2xl shadow-2xl w-full object-cover"
          />
        </div>
      </div>

      {/* Text – RIGHT on desktop */}
      <div className="space-y-4 sm:space-y-6 text-center md:text-left text-base sm:text-lg text-gray-700 leading-relaxed md:order-2">
        <p>
          I was born in Italy and moved to France when I was 12, where I finished my studies
          and started working in IT support and web design. Later, I moved to Taiwan to complete
          an International MBA and specialize in EdTech projects.
        </p>
        <p>
          I focus on LMS integrations, multilingual localization, and digital transformation
          initiatives for global teams, bridging business, technology, and education.
        </p>
        <p>
          Outside of work, I’m passionate about football and outdoor activities. Having played
          at a high level, I bring the same discipline, teamwork, and execution mindset into
          every project I manage.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg px-4">
            Tap any card to explore details
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`relative bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer active:scale-95 ${
                  expandedProject === project.id 
                    ? 'md:col-span-2' 
                    : 'hover:shadow-xl md:hover:scale-[1.02]'
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                {/* Teaser Card */}
                <div className="p-5 sm:p-6 md:p-8">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                      <div className="text-3xl sm:text-4xl md:text-5xl flex-shrink-0">{project.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 break-words">{project.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600 mt-1 break-words">{project.teaser}</p>
                      </div>
                    </div>
                    <button 
                      className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 ml-2 rounded-full bg-blue-100 flex items-center justify-center transition-transform duration-300 ${
                        expandedProject === project.id ? 'rotate-180' : ''
                      }`}
                      aria-label={expandedProject === project.id ? 'Collapse' : 'Expand'}
                    >
                      <svg 
                        className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" 
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
                      ? 'max-h-[2000px] opacity-100 mt-4 sm:mt-6' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t pt-4 sm:pt-6 space-y-4 sm:space-y-6">
                      {/* Company & Date */}
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                          <div>
                            <p className="text-xs sm:text-sm text-gray-600 font-medium">Company</p>
                            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900 break-words">{project.company}</p>
                          </div>
                          <div className="sm:text-right">
                            <p className="text-xs sm:text-sm text-gray-600 font-medium">Timeline</p>
                            <p className="text-sm sm:text-base md:text-lg font-bold text-blue-600">{project.date}</p>
                          </div>
                        </div>
                      </div>

                      {/* Challenges */}
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
                          <span className="text-xl sm:text-2xl mr-2">🎯</span>
                          Challenges
                        </h4>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed bg-red-50 p-3 sm:p-4 rounded-lg border-l-4 border-red-400">
                          {project.challenges}
                        </p>
                      </div>

                      {/* Tasks */}
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
                          <span className="text-xl sm:text-2xl mr-2">⚙️</span>
                          Key Tasks
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {project.tasks.map((task, idx) => (
                            <li key={idx} className="flex items-start bg-blue-50 p-3 sm:p-4 rounded-lg">
                              <span className="text-blue-600 font-bold mr-2 sm:mr-3 flex-shrink-0 text-lg">•</span>
                              <span className="text-sm sm:text-base text-gray-700">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
                          <span className="text-xl sm:text-2xl mr-2">✨</span>
                          Results & Impact
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="flex items-start bg-green-50 p-3 sm:p-4 rounded-lg">
                              <span className="text-green-600 font-bold mr-2 sm:mr-3 flex-shrink-0 text-lg">✓</span>
                              <span className="text-sm sm:text-base text-gray-700 font-medium">{result}</span>
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
      <section id="skills" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-2 sm:px-4 bg-white text-gray-700 rounded-lg shadow-sm hover:shadow-md transition text-xs sm:text-sm font-medium"
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
      <section id="education" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-5 sm:p-6 md:p-8 hover:shadow-xl transition">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 break-words">{edu.degree}</h3>
                    <p className="text-sm sm:text-base md:text-lg text-blue-600 font-medium break-words">{edu.school}</p>
                  </div>
                  <div className="sm:text-right text-gray-600 flex-shrink-0">
                    <p className="font-medium text-sm sm:text-base">{edu.period}</p>
                    <p className="text-xs sm:text-sm">{edu.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <div className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 px-4">
              I'm based in Taipei and open to opportunities in EdTech, AI enablement, localization, 
              and digital transformation. Feel free to reach out for collaborations, consulting, 
              or speaking opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a 
                href="mailto:nizarelfyek95pro@gmail.com"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg font-medium break-all"
              >
                📧 nizarelfyek95pro@gmail.com
              </a>
              <a 
                href="tel:+886965252126"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 active:scale-95 transition text-sm sm:text-base md:text-lg font-medium"
              >
                📱 +886-965-252-126
              </a>
            </div>
            <div className="pt-4 sm:pt-8">
              <a 
                href="https://www.linkedin.com/in/nizar-el-fyek-a51318144/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 active:scale-95 transition shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg font-medium"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 bg-gray-900 text-white text-center">
        <p className="text-sm sm:text-base text-gray-400 px-4">
          © 2025 Nizar El Fyek. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App

