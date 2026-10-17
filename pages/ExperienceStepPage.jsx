import { Link, Navigate, useParams } from 'react-router'
import { experienceSteps } from '../data/siteData'
import { useLanguage } from '../i18n'

export default function ExperienceStepPage() {
  const { t } = useLanguage()
  const { stepSlug } = useParams()
  const currentIndex = experienceSteps.findIndex((step) => step.slug === stepSlug)

  if (currentIndex === -1) {
    return <Navigate to="/science-experience" replace />
  }

  const currentStep = experienceSteps[currentIndex]
  const previousStep = experienceSteps[currentIndex - 1]
  const nextStep = experienceSteps[currentIndex + 1]

  return (
    <section className="page-shell section-wrap">
      <Link className="detail-back" to="/science-experience">
        {t('Back to all experience steps')}
      </Link>

      <div className="section-heading">
        <p className="kicker">{t('SCIENCE EXPERIENCE')} / {t(currentStep.step)}</p>
        <h3>{t(currentStep.label)}</h3>
      </div>

      <div className="detail-grid">
        <article className="page-panel page-panel--feature">
          <p className="mini-label">{t('THE MOMENT')}</p>
          <p className="detail-copy">{t(currentStep.description)}</p>
        </article>

        <aside className="page-panel detail-focus">
          <p className="mini-label">{t('FOCUS AREAS')}</p>
          <ul>
            {currentStep.focus.map((item) => <li key={item}>{t(item)}</li>)}
          </ul>
          <div className="detail-outcome">
            <p className="mini-label">{t('DESIRED OUTCOME')}</p>
            <p>{t(currentStep.outcome)}</p>
          </div>
        </aside>
      </div>

      <nav className="detail-navigation" aria-label={t('Experience step navigation')}>
        <Link to={previousStep ? `/science-experience/${previousStep.slug}` : '/science-experience'}>
          <span>{t(previousStep ? 'Previous step' : 'Journey overview')}</span>
          <strong>{t(previousStep ? previousStep.label : 'All steps')}</strong>
        </Link>
        <Link to={nextStep ? `/science-experience/${nextStep.slug}` : '/science-experience'}>
          <span>{t(nextStep ? 'Next step' : 'Journey overview')}</span>
          <strong>{t(nextStep ? nextStep.label : 'All steps')}</strong>
        </Link>
      </nav>
    </section>
  )
}
