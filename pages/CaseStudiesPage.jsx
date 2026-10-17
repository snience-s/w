import { Link } from 'react-router'
import { projectPillars } from '../data/siteData'
import { useLanguage } from '../i18n'

export default function CaseStudiesPage() {
  const { t } = useLanguage()
  const completedProjects = projectPillars.filter((project) => project.status === 'COMPLETED')

  return (
    <section className="page-shell section-wrap">
      <div className="section-heading">
        <p className="kicker">{t('SELECTED COMPLETED EVENTS')}</p>
        <h3>{t('Scientific events delivered by Science.')}</h3>
      </div>

      <div className="case-study-list">
        {completedProjects.map((project) => (
          <Link
            key={project.slug}
            className="case-study-link"
            to={`/our-work/${project.slug}`}
            aria-label={`${t('View event:')} ${t(project.name)}`}
          >
            <div className="case-study-copy">
              <p className="mini-label">{t(project.label)} / {t(project.status)}</p>
              <h4>{t(project.name)}</h4>
            </div>
            <span className="case-study-action">{t('VIEW EVENT')}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
