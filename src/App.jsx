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

  // ✅ CV-ALIGNED EXPERIENCE CATEGORIES
  const projectCategories = [
    {
      category: "Business Development & Enterprise Operations",
      icon: "🚀",
      color: "from-amber-500 to-orange-600",
      projects: [
        {
          id: 1,
          title: "Business Development & Operations Management",
          teaser: "$260K+ Sales Pipeline | Carbon Fiber & Luxury Segment | VIP Accounts",
          company: "MON CARBONE, Taipei",
          date: "03/2026 - Present",
          challenges: "Driving market expansion in the carbon fiber industry across OEM, ODM, and luxury goods while managing end-to-end commercial operations and vendor quality disputes.",
          tasks: [
            "Prospected and onboarded new partners and customers in the carbon fiber industry across OEM, ODM, and luxury goods segments",
            "Built and advanced enterprise sales pipelines exceeding $260K; developed and presented co-branded product proposals for global luxury brands",
            "Integrated AI-powered systems to streamline business operations and improve team alignment and execution",
            "Served as primary commercial and operational owner for VIP global accounts, managing execution from deal handoff to delivery",
            "Led manufacturing capacity reviews and quality control processes to ensure on-time production under strict certification standards",
            "Resolved supplier and client disputes (quality claims, factory credits, material replacements, order cancellations) while protecting margins"
          ],
          results: [
            "$260K+ enterprise sales pipeline built and advanced",
            "Seamless end-to-end execution for VIP global luxury account handoffs",
            "Integrated AI workflows boosting team operational efficiency",
            "Preserved profit margins and long-term client relationships through proactive dispute resolution"
          ]
        }
      ]
    },
    {
      category: "LMS Deployment & EdTech Solutions",
      icon: "🎓",
      color: "from-blue-500 to-indigo-600",
      projects: [
        {
          id: 2,
          title: "Global LearnWorlds LMS & Product Intelligence Hub",
          teaser: "8+ Regions | 2000+ Active Users | 300+ Localized Assets",
          company: "ViewSonic, Taipei",
          date: "09/2022 - 03/2026",
          challenges: "Regional sales and customer training teams faced fragmented onboarding content, missing localization, and inefficient access to marketing assets across global regions.",
          tasks: [
            "Designed and deployed LearnWorlds LMS platform across 8+ regions and 2000+ users with localized onboarding journeys",
            "Built a centralized Product Intelligence Hub to streamline global sales and marketing asset access",
            "Implemented AI tools to automate course creation and data-driven content delivery",
            "Localized 300+ digital assets (UI, articles, emails) into French and Italian",
            "Led go-to-market projects using SOP-based execution frameworks"
          ],
          results: [
            "40% reduction in support requests through localized self-service assets",
            "Successfully trained and retained 2000+ active users across 8+ global regions",
            "Accelerated course deployment cycles with AI automation",
            "Streamlined cross-regional GTM alignment via Product Intelligence Hub"
          ]
        }
      ]
    },
    {
      category: "Marketing Strategy, CRM & Expansion",
      icon: "🌍",
      color: "from-purple-500 to-pink-600",
      projects: [
        {
          id: 3,
          title: "Blockchain Marketing & CRM Automation",
          teaser: "Freshdesk CRM & Chatbot | European Market Research (FR, IT, ES)",
          company: "Lootex, Taipei",
          date: "10/2021 - 08/2022",
          challenges: "Navigating expansion into European markets (France, Italy, Spain) for NFT strategies while maintaining fast client response times.",
          tasks: [
            "Conducted market research across France, Italy, and Spain for NFT strategies",
            "Integrated Freshdesk CRM and chatbot to streamline client engagement",
            "Provided localized onboarding materials and optimized support workflow"
          ],
          results: [
            "Automated client inquiries via Freshdesk chatbot integration",
            "Enhanced user onboarding experience with tailored localized content",
            "Accelerated market entry across France, Italy, and Spain"
          ]
        },
        {
          id: 4,
          title: "European Market Expansion & KOL Management",
          teaser: "French Social Media | KOL Partnerships | Campaign Execution",
          company: "BenQ, Taipei",
          date: "01/2021 - 09/2021",
          challenges: "Increasing product visibility and driving partner engagement across European consumer tech markets.",
          tasks: [
            "Managed French social media accounts and content scheduling",
            "Led Key Opinion Leader (KOL) partnerships to boost product visibility in European markets",
            "Supported European market expansion through partner coordination and campaign execution"
          ],
          results: [
            "Boosted European brand visibility through strategic KOL collaborations",
            "Maintained consistent French community engagement and content delivery",
            "Ensured smooth cross-regional campaign coordination"
          ]
        }
      ]
    },
    {
      category: "IT System & Network Infrastructure",
      icon: "🖥️",
      color: "from-emerald-500 to-teal-600",
      projects: [
        {
          id: 5,
          title: "Enterprise Systems & Networks Executive",
          teaser: "Monaco Government | SBM Offshore | Monaco Telecom",
          company: "Monaco Digital, Monaco",
          date: "06/2018 - 08/2019",
          challenges: "Supporting mission-critical IT infrastructure and server operations for high-security government and offshore enterprise clients.",
          tasks: [
            "Provided network and system support (Azure AD, IBM Lotus Notes, Microsoft Exchange)",
            "Worked with enterprise and government clients including Government of Monaco, SBM Offshore, and Monaco Telecom",
            "Handled OS and software integrations, upgrades, and user training across enterprise environments"
          ],
          results: [
            "Maintained 100% operational continuity for government and telecom client networks",
            "Executed enterprise software upgrades and user training smoothly",
            "Streamlined identity management via Azure AD"
          ]
        }
      ]
    }
  ]

  const skills = [
    {
      category: "Business Development & Sales Enablement",
      items: [
        "Enterprise Sales Pipelines ($260K+)",
        "Partnerships & Lead Generation",
        "Customer Acquisition",
        "Co-branded Proposals",
        "VIP Account Management"
      ]
    },
    {
      category: "Project & Operations Management",
      items: [
        "Cross-functional Coordination",
        "Stakeholder Management",
        "Process Improvement",
        "GTM Framework Design",
        "SOP Execution"
      ]
    },
    {
      category: "Account & Supply Chain",
      items: [
        "Account Management",
        "Vendor Coordination",
        "Quality Control & Certifications",
        "Shipment Follow-up",
        "Dispute Resolution & Factory Credits"
      ]
    },
    {
      category: "Market Expansion & Localization",
      items: [
        "300+ Digital Assets Localized",
        "French & Italian Market Adaptation",
        "Support Request Reduction (-40%)",
        "KOL Campaign Execution",
        "Regional GTM Alignment"
      ]
    },
    {
      category: "Digital Operations & AI",
      items: [
        "Global LMS Deployment (2000+ users)",
        "Product Intelligence Hub Design",
        "AI Course Creation Automation",
        "AI Workflow Systems Integration",
        "CRM & Chatbot Automations"
      ]
    },
    {
      category: "Digital & IT Tools",
      items: [
        "HubSpot & Freshdesk CRM",
        "LearnWorlds LMS",
        "AI Automation Tools",
        "WordPress, HTML/CSS, SEO",
        "Microsoft Azure AD & Exchange"
      ]
    }
  ]

  const languages = [
    { name: "French", level: "Native", flag: "🇫🇷" },
    { name: "Italian", level: "Native", flag: "🇮🇹" },
    { name: "English", level: "Fluent (TOEIC 880)", flag: "🇬🇧" },
    { name: "Mandarin", level: "Basic", flag: "🇹🇼" }
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
      degree: "BTEC Higher National Diploma (BTS) – IT Systems & Network Administration",
      school: "ActivMedia / Lycée Beau Site",
      period: "2015 - 2017",
      location: "Nice, France"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800 selection:bg-blue-500 selection:text-white">
      {/* Dynamic Header Style */}
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #0d9488 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white/80 backdrop-blur-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-gradient">Nizar EL FYEK</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 font-medium text-sm">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition">Experience</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition">Skills</a>
              <a href="#languages" className="text-gray-600 hover:text-blue-600 transition">Languages</a>
              <a href="#education" className="text-gray-600 hover:text-blue-600 transition">Education</a>
              <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm">Contact</a>
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
            mobileMenuOpen ? 'max-h-80 pt-4 pb-2' : 'max-h-0'
          }`}>
            <div className="flex flex-col space-y-2 pt-2 border-t mt-2">
              <a href="#about" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition py-2 px-3 rounded-lg hover:bg-gray-50">About</a>
              <a href="#experience" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition py-2 px-3 rounded-lg hover:bg-gray-50">Experience</a>
              <a href="#skills" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition py-2 px-3 rounded-lg hover:bg-gray-50">Skills</a>
              <a href="#languages" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition py-2 px-3 rounded-lg hover:bg-gray-50">Languages</a>
              <a href="#education" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition py-2 px-3 rounded-lg hover:bg-gray-50">Education</a>
              <a href="#contact" onClick={handleNavClick} className="text-blue-600 font-semibold py-2 px-3 rounded-lg hover:bg-blue-50">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-700 font-semibold text-xs sm:text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Based in Taipei, Taiwan • Trilingual Professional
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                <span className="text-gradient">Nizar EL FYEK</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium">
                Business Development & Tech Project Manager
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                5+ years of experience driving operational efficiency, cross-regional GTM execution, enterprise sales pipeline growth ($260K+), and AI-enabled SaaS deployments.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-3.5 justify-center md:justify-start">
                <a
                  href="https://www.linkedin.com/in/nizar-el-fyek-a51318144/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition shadow-lg hover:shadow-xl text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
                <a
                  href="mailto:nizarelfyek95pro@gmail.com"
                  className="px-6 py-3.5 bg-white border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:border-blue-600 hover:text-blue-600 transition text-center shadow-sm"
                >
                  ✉️ nizarelfyek95pro@gmail.com
                </a>
              </div>
            </div>
            <div className="md:col-span-5 flex justify-center order-first md:order-last">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-25"></div>
                <img
                  src="/nizar-portfolio/nizar.jpg"
                  alt="Nizar EL FYEK"
                  className="relative rounded-3xl shadow-2xl w-full object-cover border-4 border-white"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/nizar-portfolio/508842.jpg';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              <span className="text-gradient">Professional Summary</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Multilingual Tech Project Manager and Sales Enablement Specialist with 5+ years of experience driving operational efficiency and cross-regional execution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-2xl border border-blue-100 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">GTM & Sales Enablement</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Specialized in building enterprise sales pipelines ($260K+), creating co-branded proposals for global luxury brands, and managing VIP account lifecycles.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 sm:p-8 rounded-2xl border border-purple-100 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center text-2xl font-bold mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Systems & Digital Ops</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Integrating AI automation workflows, building Product Intelligence Hubs, and deploying global LMS (2000+ users) & CRM systems (Freshdesk/HubSpot).
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-6 sm:p-8 rounded-2xl border border-teal-100 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center text-2xl font-bold mb-4">🌐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trilingual Localization</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trilingual in English, French, and Italian. Successfully localized 300+ digital assets for European GTM execution, cutting support requests by 40%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Projects Section */}
      <section id="experience" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              <span className="text-gradient">Experience & Key Achievements</span>
            </h2>
            <p className="text-lg text-gray-600">
              A comprehensive breakdown of commercial execution, project management, and technology adoption roles.
            </p>
          </div>

          {projectCategories.map((category) => (
            <div key={category.category} className="mb-16 last:mb-8">
              <div className="flex items-center mb-8 px-2">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} text-white text-2xl mr-4 shadow-md flex-shrink-0`}>
                  {category.icon}
                </div>
                <h3 className={`text-2xl sm:text-3xl font-extrabold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.category}
                </h3>
              </div>

              <div className="grid md:grid-cols-1 gap-6">
                {category.projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
                  >
                    <div
                      className="p-6 sm:p-8 cursor-pointer select-none"
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 font-bold text-xs rounded-full">
                              {project.company}
                            </span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 font-medium text-xs rounded-full">
                              📅 {project.date}
                            </span>
                          </div>
                          <h4 className="text-xl sm:text-2xl font-bold text-gray-900">{project.title}</h4>
                          <p className="text-sm sm:text-base text-gray-600 mt-1 font-medium">{project.teaser}</p>
                        </div>
                        <button
                          className={`w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                            expandedProject === project.id ? 'rotate-180 bg-blue-600 text-white' : 'text-blue-600 hover:bg-blue-100'
                          }`}
                          aria-label="Expand details"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>

                      {/* Expandable Details */}
                      <div className={`transition-all duration-500 overflow-hidden ${
                        expandedProject === project.id ? 'max-h-[2500px] opacity-100 mt-6 pt-6 border-t border-gray-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="space-y-6">
                          {/* Challenges */}
                          <div>
                            <h5 className="text-sm uppercase tracking-wider font-bold text-gray-500 mb-2 flex items-center gap-2">
                              🎯 Context & Challenge
                            </h5>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed bg-amber-50/60 p-4 rounded-xl border-l-4 border-amber-400">
                              {project.challenges}
                            </p>
                          </div>

                          {/* Key Responsibilities */}
                          <div>
                            <h5 className="text-sm uppercase tracking-wider font-bold text-gray-500 mb-3 flex items-center gap-2">
                              ⚙️ Key Responsibilities & Execution
                            </h5>
                            <ul className="grid gap-2.5">
                              {project.tasks.map((task, idx) => (
                                <li key={idx} className="flex items-start bg-blue-50/50 p-3.5 rounded-xl text-sm sm:text-base text-gray-700">
                                  <span className="text-blue-600 font-bold mr-3 flex-shrink-0">•</span>
                                  <span>{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Quantified Impact */}
                          <div>
                            <h5 className="text-sm uppercase tracking-wider font-bold text-gray-500 mb-3 flex items-center gap-2">
                              ✨ Quantified Impact & Deliverables
                            </h5>
                            <ul className="grid sm:grid-cols-2 gap-3">
                              {project.results.map((result, idx) => (
                                <li key={idx} className="flex items-start bg-emerald-50/70 p-3.5 rounded-xl text-sm font-semibold text-emerald-900 border border-emerald-100">
                                  <span className="text-emerald-600 mr-2 flex-shrink-0">✓</span>
                                  <span>{result}</span>
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

      {/* Skills & Competencies Section */}
      <section id="skills" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              <span className="text-gradient">Skills & Key Achievements</span>
            </h2>
            <p className="text-lg text-gray-600">
              Core competencies categorized across business development, project management, and tech stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition">
                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-white text-gray-700 rounded-lg border border-gray-200 shadow-2xs text-xs sm:text-sm font-medium"
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

      {/* Languages Section */}
      <section id="languages" className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Language Proficiencies
            </h2>
            <p className="text-blue-200 text-lg">
              Trilingual communication enabling seamless cross-regional stakeholder management.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {languages.map((lang, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center border border-white/10 hover:bg-white/15 transition">
                <div className="text-4xl mb-3">{lang.flag}</div>
                <h3 className="text-xl font-bold text-white mb-1">{lang.name}</h3>
                <p className="text-blue-300 font-medium text-sm">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              <span className="text-gradient">Education</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 hover:shadow-md transition">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-blue-600 font-semibold mt-1">{edu.school}</p>
                  </div>
                  <div className="sm:text-right text-gray-500 flex-shrink-0 text-sm">
                    <p className="font-semibold text-gray-700">{edu.period}</p>
                    <p>{edu.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              <span className="text-gradient">Get in Touch</span>
            </h2>
            <p className="text-lg text-gray-600">
              Based in Taipei, Taiwan. Open to global opportunities in Business Development, EdTech & AI Solutions, Product Operations, and Localization.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-4">
              <a
                href="mailto:nizarelfyek95pro@gmail.com"
                className="p-4 bg-blue-50 border border-blue-100 text-blue-700 font-semibold rounded-2xl hover:bg-blue-100 transition flex items-center justify-center gap-2 text-sm sm:text-base break-all"
              >
                ✉️ nizarelfyek95pro@gmail.com
              </a>
              <a
                href="tel:+88696252126"
                className="p-4 bg-gray-50 border border-gray-200 text-gray-700 font-semibold rounded-2xl hover:bg-gray-100 transition flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                📱 +886 96 252 126
              </a>
            </div>

            <div>
              <a
                href="https://www.linkedin.com/in/nizar-el-fyek-a51318144/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition shadow-lg hover:shadow-xl"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center text-sm text-gray-400">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2026 Nizar EL FYEK. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
