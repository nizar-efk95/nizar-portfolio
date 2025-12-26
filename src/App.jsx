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

  // ✅ ENHANCED PROJECTS - RECRUITER LANGUAGE + TAGS
  const projectCategories = [
    {
      category: "LMS Implementation & EdTech Solutions",
      icon: "🎓",
      color: "from-blue-500 to-indigo-600",
      tag: "Enterprise SaaS",
      projects: [
        {
          id: 1,
          title: "Global LearnWorlds LMS Deployment",
          teaser: "+20 countries | SSO + Azure AD | 8 regions live",
          company: "ViewSonic, Taipei",
          date: "2024 - Present",
          tag: "B2B EdTech",
          quickWins: [
            "+32% customer retention",
            "75% faster content deployment", 
            "92% SSO adoption"
          ],
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
    // ... [keeping other categories same structure for brevity - add quickWins + tag to all]
    {
      category: "Enterprise IT Infrastructure",
      icon: "🖥️",
      color: "from-indigo-500 to-purple-600",
      tag: "Government + Enterprise",
      projects: [
        {
          id: 5,
          title: "Windows Migration, Onboarding & Helpdesk",
          teaser: "Monaco Government | Windows 8.1 → 10 | 600+ users",
          company: "Monaco Government",
          date: "2019",
          tag: "Government IT",
          quickWins: [
            "100% service continuity", 
            "65% fewer crash tickets",
            "600+ users onboarded"
          ],
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
          teaser: "SBM Offshore | Monaco, Brazil, Malaysia, Oil Tankers | 1000+ users",
          company: "SBM Offshore, Monaco",
          date: "2018",
          tag: "Global Enterprise",
          quickWins: [
            "1000+ users supported", 
            "150+ SOPs created",
            "Global SLA compliance"
          ],
          challenges: "Critical servers (email, file sharing, Active Directory) across SBM Offshore operations in Monaco, Brazil, Malaysia, and oil tankers (1000+ users) suffered frequent outages. Helpdesk handled high-volume tickets manually across global locations.",
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
    // Apply same pattern to other 3 categories...
  ]

  const skills = [
    {
      category: "Key Certifications",
      items: [
        "Inbound Sales - HubSpot Academy", 
        "Key Account Management - LinkedIn Learning",
        "Agile Foundations - LinkedIn Learning",
        "Google Analytics - Google"
      ]
    },
    // ... rest unchanged
  ]

  // ... education unchanged

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

      {/* Navigation - UNCHANGED */}
      {/* Hero - CTA UPGRADED */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 text-center md:text-left">
              {/* ... hero content unchanged ... */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/nizar-el-fyek-a51318144/" 
                   target="_blank" rel="noopener noreferrer"
                   className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl text-center">
                  Connect on LinkedIn
                </a>
                <a href="mailto:nizarelfyek95pro@gmail.com"
                   className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition text-center font-medium">
                  👋 Discuss LMS/CRM Projects
                </a>
              </div>
            </div>
            {/* ... image unchanged */}
          </div>
        </div>
      </section>

      {/* About - UNCHANGED */}
      
      {/* ✅ FIXED PROJECTS SECTION - UX PERFECTED */}
      <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
              Projects by Expertise Area
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key strengths across LMS implementation, CRM rollout, localization, and global GTM execution.
            </p>
          </div>
          
          {projectCategories.map((category) => (
            <div key={category.category} className="mb-20 last:mb-12 border-t border-gray-100 pt-12">
              {/* Category Header */}
              <div className="flex items-center mb-10 px-4">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} text-white text-3xl mr-4 shadow-lg`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.category}
                  </h3>
                  <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-xs font-semibold rounded-full text-gray-700">
                    {category.tag}
                  </span>
                </div>
              </div>
              
              {/* ✅ FIXED: CONDITIONAL 1-COLUMN vs 2-COLUMN */}
              <div className={`grid gap-6 px-4 ${
                category.projects.length === 1 
                  ? 'md:grid-cols-1 max-w-2xl mx-auto' 
                  : 'md:grid-cols-2'
              }`}>
                {category.projects.map((project) => (
                  <div 
                    key={project.id}
                    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                  >
                    {/* Card Header */}
                    <div className="p-6 sm:p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4 flex-1 min-w-0">
                          <div className="text-4xl sm:text-5xl flex-shrink-0 mt-1">📋</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-gray-800 line-clamp-2">
                                {project.title}
                              </h3>
                              <span className="px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-xs font-semibold rounded-full text-gray-700">
                                {project.tag}
                              </span>
                            </div>
                            <p className
