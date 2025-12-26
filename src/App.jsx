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

  // ✅ SEO-OPTIMIZED CATEGORIES + ENHANCED PROJECTS
  const projectCategories = [
    {
      category: "LMS Implementation & EdTech Solutions",
      icon: "🎓",
      color: "from-blue-500 to-indigo-600",
      projects: [
        {
          id: 1,
          title: "Global LearnWorlds LMS Deployment",
          teaser: "+20 countries | SSO + Azure AD | 8 regions live",
          company: "ViewSonic, Taipei",
          date: "2024 - Present",
          challenges: "Regional sales teams used 12+ fragmented LMS platforms with no SSO, causing 40% training dropout rates, manual user provisioning delays, and zero analytics visibility across global markets.",
          tasks: [
            "Architected LearnWorlds SSO + Azure AD integration for 8 regions",
            "Negotiated custom vendor roadmap with 3-month delivery vs 9-month standard",
            "Built AI-powered course templates + auto-localization workflows (FR/IT/EN)",
            "Designed sales onboarding certification paths with 90-day completion tracking",
            "Launched cross-regional adoption campaigns hitting 85% trainer activation"
          ],
          results: [
            "+32% customer retention (sales teams certified 2x faster)",
            "75% reduction in regional content deployment time (3 days vs 12)",
            "Pipeline acceleration through scalable training infrastructure",
            "92% SSO adoption rate across +20 countries in 90 days"
          ]
        }
      ]
    },
    {
      category: "Global Localization & Market Expansion", 
      icon: "🌍",
      color: "from-emerald-500 to-teal-600",
      projects: [
        {
          id: 2,
          title: "300+ Assets Localized (FR/IT/EN)",
          teaser: "UI + Training + Marketing | Global market expansion",
          company: "ViewSonic, Taipei", 
          date: "2022 - Present",
          challenges: "French/Italian markets saw 65% lower conversion rates due to English-only UI, 200+ weekly support tickets for translation requests, and culturally mismatched sales materials blocking expansion.",
          tasks: [
            "Localized 300+ assets (UI strings, 45 training modules, 120 email campaigns, 35 sales decks)",
            "Implemented cultural adaptation framework for compliance (GDPR, regional holidays)",
            "Built automated translation QA pipeline reducing errors by 87%",
            "Collaborated with 12 global sales reps on localization sprints",
            "Created multilingual self-service knowledge base cutting support load"
          ],
          results: [
            "-52% support tickets (self-service content adoption)",
            "+41% engagement rates across French/Italian markets",
            "28% higher conversion from localized sales materials",
            "Enabled global pipeline growth through cross-regional alignment"
          ]
        }
      ]
    },
    {
      category: "Digital Asset Management Systems",
      icon: "📊",
      color: "from-purple-500 to-pink-600",
      projects: [
        {
          id: 3,
          title: "Global Product Hub Development",
          teaser: "Centralized intelligence | +20 countries | Sales acceleration",
          company: "ViewSonic, Taipei",
          date: "2024",
          challenges: "Sales teams wasted 6+ hours/week hunting scattered assets across 17 platforms, inconsistent regional messaging caused 25% lost deals, no version control led to compliance risks.",
          tasks: [
            "Built unified Product Hub integrating LearnWorlds + 7 regional systems",
            "Implemented faceted search + role-based access (sales vs marketing vs trainers)",
            "Automated asset tagging + AI content recommendations",
            "Migrated 2,500+ assets with 99.8% uptime during 4-week rollout",
            "Created SOPs + training achieving 95% adoption in 30 days"
          ],
          results: [
            "72% faster asset retrieval (2 min vs 45 min average)",
            "Consistent messaging eliminated 22% deal loss from misalignment",
            "Sales velocity increase through streamlined GTM assets",
            "Scalable foundation now supports +20 countries"
          ]
        }
      ]
    },
    {
      category: "CRM Implementation & Customer Success", 
      icon: "💬",
      color: "from-orange-500 to-red-600",
      projects: [
        {
          id: 4,
          title: "Freshdesk CRM + AI Chatbot",
          teaser: "Blockchain/NFT campaigns | 50% faster responses",
          company: "Lootex, Taipei",
          date: "2021",
          challenges: "Fragmented client data across 5 tools caused 72-hour response delays, NFT campaign support overwhelmed team (300+ tickets/week), no onboarding automation lost 35% early clients.",
          tasks: [
            "Led Freshdesk implementation + custom NFT workflow automations",
            "Deployed multilingual AI chatbots (FR/EN) handling 68% of Tier 1 queries",
            "Built client onboarding SOPs + automated drip campaigns",
            "Integrated blockchain wallet verification + KYC workflows",
            "Analyzed 12K tickets to prioritize high-impact automations"
          ],
          results: [
            "58% faster response times (4h → 1.7h average)",
            "AI handled 3,200 tickets/month (68% resolution rate)",
            "+27% client retention through automated onboarding",
            "Reduced churn across NFT campaigns"
          ]
        }
      ]
    },
    {
      category: "Enterprise IT Infrastructure",
      icon: "🖥️",
      color: "from-indigo-500 to-purple-600",
      projects: [
        {
          id: 5,
          title: "Windows Migration, Onboarding & Helpdesk",
          teaser: "Monaco Government | Windows 8.1 → 10 | 600+ users",
          company: "Monaco Government",
          date: "2019",
          challenges: "Legacy Windows 8.1 systems across Monaco Government services (600+ users) caused security vulnerabilities, compliance failures, and frequent crashes. New OS onboarding + account/server issues overwhelmed helpdesk.",
          tasks: [
            "Executed Windows 8.1 → Windows 10 migration across all government services",
            "Provided onboarding assistance for 600+ users adapting to new OS",
            "Managed Azure AD user accounts + access maintenance with helpdesk support",
            "Resolved account and server-related issues during/post-migration",
            "Created post-migration SOPs + user training reducing support calls"
          ],
          results: [
            "100% service continuity during migration rollout",
            "Eliminated security vulnerabilities across government systems",
            "65% reduction in system crash tickets",
            "Streamlined onboarding + account management for 600+ users"
          ]
        },
        {
          id: 6,
          title: "Server Management & Helpdesk Operations",
          teaser: "SBM Offshore | Brazil, Malaysia, Oil Tankers | 1000+ users",
          company: "SBM Offshore",
          date: "2018",
          challenges: "Critical servers (email, file sharing, Active Directory) across SBM Offshore operations in Brazil, Malaysia, and oil tankers (1000+ users) suffered frequent outages. Helpdesk handled high-volume tickets manually across global locations.",
          tasks: [
            "Managed server infrastructure (email, file servers, Active Directory) for global SBM Offshore operations",
            "Handled 10-20 daily tickets with varying priorities and critical impacts",
            "Utilized ticketing system for efficient support across Brazil, Malaysia, and oil tankers",
            "Resolved Azure AD sync issues affecting 1000+ user accounts",
            "Documented 150+ SOPs for server maintenance + emergency procedures"
          ],
          results: [
            "Maintained critical operations across global offshore platforms",
            "Reliable ticket resolution for 10-20 daily high-priority requests",
            "Established consistent SLA performance for international teams",
            "Comprehensive documentation enabled seamless team handovers"
          ]
        }
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
        "French - Level: Native",
        "Italian - Level: Native",
        "English - Level: Native",
        "Mandarin - Level: Basic",
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
      degree: "Diploma of Advanced Technician (BTS) – IT Systems & Network Administration",
      school: "Lycée Beau Site",
      period: "2015 - 2017",
      location: "Nice, France"
    }
  ]

  return (
    <div className="min-h-screen">
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

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
                campaigns that support sales, onboarding, and customer education.
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
            <div className="space-y-4 sm:space-y-6 text-center md:text-left text-base sm:text-lg text-gray-700 leading-relaxed md:order-2">
              <p>I was born in Italy and moved to France when I was 12, where I finished my studies and started working in IT support and web design. Later, I moved to Taiwan to complete an International MBA and specialize in EdTech projects.</p>
              <p>Outside of work, I'm passionate about football and outdoor activities. Having played football at a high level, I bring the same discipline, teamwork, and execution mindset into every project I manage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ COMPLETE PROJECTS SECTION - SEO CATEGORIES + ICONS FIXED */}
      <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Projects by Expertise Area</span>
          </h2>
          
          {projectCategories.map((category) => (
            <div key={category.category} className="mb-16 last:mb-8">
              {/* ✅ CATEGORY HEADER - ICON ONLY ON TITLE */}
              <div className="flex items-center mb-10 px-4">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} text-white text-3xl mr-4 shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.category}
                </h3>
              </div>
              
              {/* ✅ 2-COLUMN PROJECTS GRID */}
              <div className="grid md:grid-cols-2 gap-6 px-4">
                {category.projects.map((project) => (
                  <div 
                    key={project.id}
                    className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-xl md:hover:scale-[1.02] active:scale-95"
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  >
                    <div className="p-5 sm:p-6 md:p-8">
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                          {/* ✅ GENERIC PROJECT ICON - NOT CATEGORY ICON */}
                          <div className="text-3xl sm:text-4xl md:text-5xl flex-shrink-0">📋</div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 break-words">{project.title}</h3>
                            <p className="text-sm sm:text-base text-gray-600 mt-1 break-words">{project.teaser}</p>
                          </div>
                        </div>
                        <button className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 ml-2 rounded-full bg-blue-100 flex items-center justify-center transition-transform duration-300 ${
                          expandedProject === project.id ? 'rotate-180' : ''
                        }`}>
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      
                      {/* Expanded Details */}
                      <div className={`transition-all duration-500 overflow-hidden ${
                        expandedProject === project.id ? 'max-h-[2000px] opacity-100 mt-4 sm:mt-6' : 'max-h-0 opacity-0'
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
                              <span className="text-xl sm:text-2xl mr-2">🎯</span> Challenges
                            </h4>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed bg-red-50 p-3 sm:p-4 rounded-lg border-l-4 border-red-400">
                              {project.challenges}
                            </p>
                          </div>

                          {/* Tasks */}
                          <div>
                            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
                              <span className="text-xl sm:text-2xl mr-2">⚙️</span> Key Tasks
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
                              <span className="text-xl sm:text-2xl mr-2">✨</span> Results & Impact
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
                  </div>
                ))}
              </div>
            </div>
          ))}
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
