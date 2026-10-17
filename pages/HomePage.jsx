
import { Link } from 'react-router'
import ScienceWordmark from '../components/ScienceWordmark'
import LazyBackground from '../components/LazyBackground'
import heroVideo from '../assets/hero/hero.mp4'
import {
  aboutPillars,
  ayaProfile,
  contactInfo,
  experienceSteps,
  founderProfile,
  hayaProfile,
  jowanaProfile,
  meiraProfile,
  projectPillars,
  services,
} from '../data/siteData'
import { useLanguage } from '../i18n'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-copy">
          <h1>
            <ScienceWordmark />
            <span className="visually-hidden">{t('Science')}</span>
          </h1>
          <p className="eyebrow">{t('EVENT MANAGEMENT')}</p>
          <p className="hero-intro hero-intro--tagline">{t('We plan with purpose We deliver excellence')}</p>
          <p className="hero-intro hero-intro--detail">
            {t('From medical conferences and scientific days to corporate events and exhibitions, we bring every detail together — from planning to execution.')}
          </p>
          <p className="hero-categories">
            {t('CONFERENCES · EVENTS · EXHIBITIONS · PRODUCTION')}
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/about.html">
              {t('About Us')}
            </Link>
            <Link className="button button-secondary" to="/contact.html">
              {t('Contact Us')}
            </Link>
          </div>
        </div>

        <div className="hero-media-panel" aria-label={t('Featured event summary')}>
          <div className="hero-media-image" aria-hidden="true">
            <video className="hero-media-video" autoPlay muted loop playsInline preload="metadata">
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
          <div className="hero-media-copy">
            <span className="feature-tag">{t('THE SCIENCE APPROACH')}</span>
            <h2>{t('Your vision, expertly brought to life')}</h2>
            <div className="feature-meta">
              <span>{t('Planning')}</span>
              <span>{t('Design')}</span>
              <span>{t('Execution')}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap" id="about">
        <div className="section-heading">
          <p className="kicker">{t('About Us')}</p>
          <h3>{t('We plan with purpose')}<br />{t('We deliver excellence')}</h3>
        </div>

        <div className="about-grid">
          {aboutPillars.map((pillar) => (
            <Link
              key={pillar.slug}
              className={`about-panel about-panel-link ${pillar.slug === 'who-we-are' ? 'about-panel--featured' : ''}`}
              to={`/about/${pillar.slug}`}
              aria-label={`${t('Learn more:')} ${t(pillar.title)}`}
            >
              <p className="mini-label">{t(pillar.label)}</p>
              <p className={pillar.detail ? 'about-feature-copy' : 'about-card-copy'}>{t(pillar.teaser)}</p>
              {pillar.detail && <p className="about-feature-detail">{t(pillar.detail)}</p>}
            </Link>
          ))}
        </div>
      </section>

      <section className="section-wrap" id="services">
        <div className="section-heading section-heading--services">
          <p className="kicker">{t('Services')}</p>
          <h3>{t('Complete event solutions')}<br />{t('From planning to execution')}</h3>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <Link
              key={service.slug}
              className="service-card service-link-card"
              to={`/services/${service.slug}`}
              aria-label={`${t('View service:')} ${t(service.title)}`}
            >
              <h4>{t(service.title)}</h4>
              <p>{t(service.description)}</p>
              <span className="service-open-label">{t('VIEW SERVICE')}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-wrap" id="team">
        <div className="section-heading">
          <p className="kicker">{t('Our Team')}</p>
          <h3>{t('Creative minds, production specialists, and operational leaders working together.')}</h3>
        </div>

        <div className="team-grid">
          {[founderProfile, ayaProfile, jowanaProfile, hayaProfile, meiraProfile].map((profile) => (
            <Link
              key={profile.slug}
              className="team-card person-card"
              to={`/team/${profile.slug}`}
              aria-label={`${t('View profile:')} ${t(profile.name)}`}
            >
              <LazyBackground
                className="team-avatar"
                role="img"
                aria-label={t(profile.name)}
                image={profile.image}
                overlay="linear-gradient(180deg, rgba(10, 15, 22, 0.12), rgba(7, 11, 18, 0.28))"
              />
              <div className="team-card-copy">
                <h4>{t(profile.name)}</h4>
                <p className="person-position">{t(profile.position)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-wrap" id="work">
        <div className="section-heading section-heading--events">
          <p className="kicker">{t('Our events')}</p>
          <h3>{t('Explore our conferences')}<br />{t('and events')}</h3>
        </div>

        <div className="portfolio-grid">
          {projectPillars.map((project) => (
            <Link
              key={project.slug}
              className="project-card"
              to={`/our-work/${project.slug}`}
              aria-label={`${t('View event:')} ${t(project.name)}`}
            >
              <div className="project-media">
                <LazyBackground
                  className={`project-visual ${project.slug === 'forensic-nursing-scientific-day' ? 'project-visual--poster' : ''}`}
                  aria-hidden="true"
                  image={project.image}
                  overlay="linear-gradient(180deg, rgba(10, 15, 22, 0.1), rgba(7,11,18,0.38))"
                />
              </div>
              <div className="project-copy">
                <span className="status-tag">{t(project.status)}</span>
                <h4>{t(project.name)}</h4>
                <p>{t(project.label)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-wrap" id="experience">
        <div className="section-heading">
          <p className="kicker">{t('Experience')}</p>
          <h3>{t('Every event is built as a sequence of moments that guide the audience naturally.')}</h3>
        </div>

        <div className="journey-timeline">
          {experienceSteps.map(({ label, step, slug }) => (
            <Link
              className="journey-step"
              key={slug}
              to={`/science-experience/${slug}`}
              aria-label={`${t(step)}: ${t(label)}`}
            >
              <span className="journey-step-label">{t(step)}</span>
              <p>{t(label)}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-wrap" id="contact">
        <div className="section-heading">
          <p className="kicker">{t('Contact Us')}</p>
          <h3>{t('Let’s build the next experience with purpose, clarity, and precision.')}</h3>
        </div>

        <div className="contact-panel">
          {contactInfo.map((item) => (
            <div className="contact-row" key={item.label}>
              <span>{t(item.label)}</span>
              {item.href ? (
                <a
                  className="contact-link"
                  href={item.href}
                  target={item.href.startsWith('https://') ? '_blank' : undefined}
                  rel={item.href.startsWith('https://') ? 'noreferrer' : undefined}
                >
                  <strong>{item.value}</strong>
                </a>
              ) : (
                <strong>{item.value}</strong>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
