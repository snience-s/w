import { Link, Navigate, useParams } from 'react-router'
import { services } from '../data/siteData'
import { useLanguage } from '../i18n'

export default function ServiceDetailPage() {
  const { language, t } = useLanguage()
  const { serviceSlug } = useParams()
  const currentIndex = services.findIndex((service) => service.slug === serviceSlug)

  if (currentIndex === -1) {
    return <Navigate to="/services" replace />
  }

  const currentService = services[currentIndex]
  const previousService = services[currentIndex - 1]
  const nextService = services[currentIndex + 1]
  const serviceNumber = new Intl.NumberFormat(language === 'ar' ? 'ar-EG' : 'en', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  }).format(currentIndex + 1)

  return (
    <section className="page-shell section-wrap service-detail">
      <Link className="detail-back" to="/services">
        {t('Back to all services')}
      </Link>

      <div className="section-heading">
        <p className="kicker">{t('SERVICE /')} {serviceNumber}</p>
        <h3>{t(currentService.title)}</h3>
      </div>

      <div className="detail-grid">
        <article className="page-panel page-panel--feature">
          <p className="mini-label">{t('OVERVIEW')}</p>
          <p className="detail-copy">{t(currentService.description)}</p>
        </article>

        <aside className="page-panel detail-focus">
          <p className="mini-label">{t("WHAT'S INCLUDED")}</p>
          <ul>
            {currentService.focus.map((item) => <li key={item}>{t(item)}</li>)}
          </ul>
          <div className="detail-outcome">
            <p className="mini-label">{t('EXPECTED OUTCOME')}</p>
            <p>{t(currentService.outcome)}</p>
          </div>
        </aside>
      </div>

      <nav className="detail-navigation" aria-label={t('Service navigation')}>
        <Link to={previousService ? `/services/${previousService.slug}` : '/services'}>
          <span>{t(previousService ? 'Previous service' : 'Service overview')}</span>
          <strong>{t(previousService ? previousService.title : 'All services')}</strong>
        </Link>
        <Link to={nextService ? `/services/${nextService.slug}` : '/services'}>
          <span>{t(nextService ? 'Next service' : 'Service overview')}</span>
          <strong>{t(nextService ? nextService.title : 'All services')}</strong>
        </Link>
      </nav>
    </section>
  )
}
