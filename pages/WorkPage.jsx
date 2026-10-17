import { Link } from 'react-router'
import { projectPillars } from '../data/siteData'
import { useLanguage } from '../i18n'

export default function WorkPage() {
  const { t } = useLanguage()

  return (
    <section className="page-shell section-wrap">
      <div className="section-heading">
        <p className="kicker">{t('OUR EVENTS')}</p>
        <h3>{t('Selected project environments.')}</h3>
      </div>

      <div className="project-grid page-grid--three">
        {projectPillars.map((project) => (
          <Link
            key={project.slug}
            className="project-card project-card--page"
            to={`/our-work/${project.slug}`}
            aria-label={`${t('View event:')} ${t(project.name)}`}
          >
            <div className="project-media" aria-hidden="true">
              <div
                className={`project-visual ${project.slug === 'forensic-nursing-scientific-day' ? 'project-visual--poster' : ''}`}
                style={{ backgroundImage: `linear-gradient(180deg, rgba(10, 15, 22, 0.1), rgba(7,11,18,0.38)), url("${project.image}")` }}
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
  )
}
