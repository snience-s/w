import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router'
import {
  aboutPillars,
  ayaProfile,
  contactInfo,
  experienceSteps,
  founderProfile,
  hayaProfile,
  jowanaProfile,
  meiraProfile,
  navItems,
  projectPillars,
  rashaProfile,
  services,
  teamProfiles,
} from './data/siteData'
import { useLanguage } from './i18n'
import ScienceWordmark from './components/ScienceWordmark'

const AboutPage = lazy(() => import('./pages/AboutPage'))
const AboutPillarPage = lazy(() => import('./pages/AboutPillarPage'))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'))
const ExperienceStepPage = lazy(() => import('./pages/ExperienceStepPage'))
const FounderPage = lazy(() => import('./pages/FounderPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'))
const EventGalleryPage = lazy(() => import('./pages/EventGalleryPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'))
const SocialLinksPage = lazy(() => import('./pages/SocialLinksPage'))
const TeamPage = lazy(() => import('./pages/TeamPage'))
const TeamRolePage = lazy(() => import('./pages/TeamRolePage'))
const WorkPage = lazy(() => import('./pages/WorkPage'))
const HomePage = lazy(() => import('./pages/HomePage'))

function getPageMetadata(pathname, t) {
  const staticPages = {
    '/': ['SCIENCE EVENT MANAGEMENT', 'SCIENCE Event Management plans and delivers medical conferences, scientific events, and exhibitions.'],
    '/about': ['About Us', 'Learn about SCIENCE Event Management, our mission, vision, and approach to medical conferences and events.'],
    '/about.html': ['About Us', 'Learn about SCIENCE Event Management, our mission, vision, and approach to medical conferences and events.'],
    '/services': ['Services', 'Explore medical conference planning, event production, registration, branding, and digital event services.'],
    '/services.html': ['Services', 'Explore medical conference planning, event production, registration, branding, and digital event services.'],
    '/work.html': ['Our Events', 'Browse completed medical conferences and upcoming scientific events delivered by SCIENCE.'],
    '/our-work': ['Our Events', 'Browse completed medical conferences and upcoming scientific events delivered by SCIENCE.'],
    '/case-studies': ['Case Studies', 'Read case studies from completed medical conferences and scientific events.'],
    '/case-studies.html': ['Case Studies', 'Read case studies from completed medical conferences and scientific events.'],
    '/experience': ['Experience', 'Explore the SCIENCE event experience, from arrival and registration through the final moments.'],
    '/experience.html': ['Experience', 'Explore the SCIENCE event experience, from arrival and registration through the final moments.'],
    '/science-experience': ['Experience', 'Explore the SCIENCE event experience, from arrival and registration through the final moments.'],
    '/team': ['Our Team', 'Meet the SCIENCE team and learn about the people behind our medical events.'],
    '/team.html': ['Our Team', 'Meet the SCIENCE team and learn about the people behind our medical events.'],
    '/contact': ['Contact Us', 'Contact SCIENCE Event Management to discuss your next medical conference or event.'],
    '/contact.html': ['Contact Us', 'Contact SCIENCE Event Management to discuss your next medical conference or event.'],
    '/social': ['Connect Online', 'Connect with SCIENCE Event Management across our social channels.'],
    '/social.html': ['Connect Online', 'Connect with SCIENCE Event Management across our social channels.'],
  }

  let [title, description] = staticPages[pathname] ?? ['Page not found', 'Contact SCIENCE Event Management.']
  const projectMatch = pathname.match(/^\/our-work\/([^/]+)(\/gallery)?$/)
  const aboutMatch = pathname.match(/^\/about\/([^/]+)$/)
  const serviceMatch = pathname.match(/^\/services\/([^/]+)$/)
  const experienceMatch = pathname.match(/^\/science-experience\/([^/]+)$/)
  const teamMatch = pathname.match(/^\/team\/([^/]+)$/)
  const project = projectMatch && projectPillars.find((item) => item.slug === projectMatch[1])
  const pillar = aboutMatch && aboutPillars.find((item) => item.slug === aboutMatch[1])
  const service = serviceMatch && services.find((item) => item.slug === serviceMatch[1])
  const step = experienceMatch && experienceSteps.find((item) => item.slug === experienceMatch[1])
  const profile = teamMatch && [
    founderProfile,
    ayaProfile,
    jowanaProfile,
    hayaProfile,
    meiraProfile,
    rashaProfile,
    ...teamProfiles,
  ].find((item) => item.slug === teamMatch[1])

  if (project) {
    const projectTitle = t(project.eventTitle ?? project.name)
    title = projectMatch[2] ? `${t('Event photo gallery')}: ${projectTitle}` : projectTitle
    description = `${t(projectMatch[2] ? 'Browse the photo gallery for' : 'Explore information and highlights for')} ${projectTitle}.`
  } else if (pillar) {
    title = t(pillar.title)
    description = t(pillar.teaser)
  } else if (service) {
    title = t(service.title)
    description = t(service.description)
  } else if (step) {
    title = t(step.label)
    description = t(step.description)
  } else if (profile) {
    title = t(profile.name ?? profile.label)
    description = t(profile.statement ?? profile.description ?? profile.position)
  }

  return {
    title: `${t(title)} | ${t('SCIENCE EVENT MANAGEMENT')}`,
    description: t(description),
  }
}

function App() {
  const cursorRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const { title, description } = getPageMetadata(pathname, t)
    document.title = title

    let descriptionMeta = document.querySelector('meta[name="description"]')
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta')
      descriptionMeta.name = 'description'
      document.head.append(descriptionMeta)
    }
    descriptionMeta.content = description
  }, [language, pathname, t])

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor || !window.matchMedia('(pointer: fine)').matches) return

    const moveCursor = (event) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`
      cursor.classList.add('is-visible')

      const hoveredElement = document.elementFromPoint(event.clientX, event.clientY)
      cursor.classList.toggle(
        'is-interactive',
        Boolean(hoveredElement?.closest('a, button, input, textarea, select, [role="button"]')),
      )
    }

    const hideCursor = () => cursor.classList.remove('is-visible')

    window.addEventListener('pointermove', moveCursor)
    document.addEventListener('pointerleave', hideCursor)

    return () => {
      window.removeEventListener('pointermove', moveCursor)
      document.removeEventListener('pointerleave', hideCursor)
    }
  }, [])

  return (
    <div className="app-shell">
      <div className="ambient-logo" aria-hidden="true" />
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true">S</div>
      {pathname !== '/our-work/forensic-nursing-scientific-day' && (
        <aside className="social-float" aria-label={t('Social media links')}>
          {contactInfo.filter((item) => ['Facebook', 'Instagram', 'WhatsApp'].includes(item.label)).map((item) => (
            <a
              key={item.label}
              className="social-float-link"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={t(item.label)}
              title={t(item.label)}
            >
              {item.label === 'Facebook' ? (
                <svg className="social-facebook-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path fill="currentColor" d="M13.3 21v-7.7h2.6l.4-3h-3V8.4c0-.9.3-1.5 1.5-1.5h1.6V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.1H7.2v3h2.7V21h3.4Z" />
                </svg>
              ) : item.label === 'Instagram' ? (
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                  <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.1" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17.6" cy="6.6" r="1.1" fill="currentColor" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                  <path d="M20.1 11.5a8.1 8.1 0 0 1-11.9 7.1L4 20l1.4-4A8.1 8.1 0 1 1 20.1 11.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M9 8.4c.3-.4.5-.4.8-.4h.4c.2 0 .3.1.4.3l.8 1.7c.1.2.1.4-.1.6l-.6.6c-.2.2-.1.4 0 .6.4.7 1 1.3 1.7 1.7.2.1.4.2.6 0l.6-.6c.2-.2.4-.2.6-.1l1.7.8c.2.1.3.3.3.4v.4c0 .3 0 .5-.4.8-.4.4-1.1.6-1.7.4-1.1-.3-2.3-1-3.4-2.1-1.1-1.1-1.8-2.3-2.1-3.4-.2-.6 0-1.3.4-1.7Z" fill="currentColor" />
                </svg>
              )}
            </a>
          ))}
        </aside>
      )}
      <header className="site-header">
        <Link className="brand-lockup" to="/" aria-label={t('Science home')}>
          <span className="brand-symbol" aria-hidden="true" />
          <ScienceWordmark className="brand-mark" />
        </Link>

        <nav
          className={`main-nav${isMenuOpen ? ' is-open' : ''}`}
          id="main-navigation"
          aria-label={t('Main navigation')}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setIsMenuOpen(false)}
            >
              {t(item.label)}
            </NavLink>
          ))}
        </nav>
        <div className="header-controls">
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={t(isMenuOpen ? 'Close menu' : 'Open menu')}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
          >
            <span />
            <span />
            <span />
          </button>
          <button
            className="language-toggle"
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            aria-label={t(language === 'en' ? 'Switch to Arabic' : 'Switch to English')}
            title={t(language === 'en' ? 'Switch to Arabic' : 'Switch to English')}
          >
            {language === 'en' ? 'العربية' : 'English'}
          </button>
        </div>
      </header>

      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about.html" element={<AboutPage />} />
            <Route path="/about/:aboutSlug" element={<AboutPillarPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services.html" element={<ServicesPage />} />
            <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work.html" element={<WorkPage />} />
            <Route path="/our-work" element={<WorkPage />} />
            <Route path="/our-work/:projectSlug/gallery" element={<EventGalleryPage />} />
            <Route path="/our-work/:projectSlug" element={<ProjectDetailPage />} />
            <Route path="/case-studies.html" element={<CaseStudiesPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/experience.html" element={<ExperiencePage />} />
            <Route path="/science-experience/:stepSlug" element={<ExperienceStepPage />} />
            <Route path="/science-experience" element={<ExperiencePage />} />
            <Route path="/team.html" element={<TeamPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/team/osama-elmawy" element={<FounderPage />} />
            <Route path="/team/aya-nassar" element={<FounderPage profile={ayaProfile} />} />
            <Route path="/team/jowana-almalky" element={<FounderPage profile={jowanaProfile} />} />
            <Route path="/team/haya-tamer" element={<FounderPage profile={hayaProfile} />} />
            <Route path="/team/dr-meira-tamer" element={<FounderPage profile={meiraProfile} />} />
            <Route path="/team/dr-rasha-sayed-abd-elsalam" element={<FounderPage profile={rashaProfile} />} />
            <Route path="/team/:teamSlug" element={<TeamRolePage />} />
            <Route path="/social.html" element={<SocialLinksPage />} />
            <Route path="/social" element={<SocialLinksPage />} />
            <Route path="/contact.html" element={<ContactPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="site-footer">
        <div>
          <p className="footer-brand">{t('SCIENCE EVENT MANAGEMENT')}</p>
        </div>

        <div className="footer-links" aria-label={t('Footer navigation')}>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>
              {t(item.label)}
            </NavLink>
          ))}
        </div>

        <p className="copyright">{t('© 2026 SCIENCE EVENT MANAGEMENT')}</p>
      </footer>
    </div>
  )
}

export default App
