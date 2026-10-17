import { Link } from 'react-router'
import { experienceSteps, digitalFocus } from '../data/siteData'
import { useLanguage } from '../i18n'

export default function ExperiencePage() {
  const { t } = useLanguage()

  return (
    <section className="page-shell section-wrap">
      <div className="section-heading">
        <p className="kicker">{t('SCIENCE EXPERIENCE')}</p>
        <h3>{t('Every touchpoint is designed to create memory.')}</h3>
      </div>

      <div className="journey-grid">
        {experienceSteps.map(({ label, step, slug }) => (
          <Link
            key={slug}
            className="journey-step"
            to={`/science-experience/${slug}`}
            aria-label={`${t(step)}: ${t(label)}`}
          >
            <span className="journey-step-label">{t(step)}</span>
            <p>{t(label)}</p>
          </Link>
        ))}
      </div>

      <div className="page-grid page-grid--two">
        <article className="page-panel page-panel--feature">
          <p className="mini-label">{t('EXPERIENCE DESIGN')}</p>
          <h4>{t('We shape every movement inside the event.')}</h4>
        </article>

        <article className="page-panel">
          <p className="mini-label">{t('DIGITAL FOCUS')}</p>
          <ul className="list-inline">
            {digitalFocus.map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
