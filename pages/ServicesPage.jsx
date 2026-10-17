import { Link } from 'react-router'
import { services } from '../data/siteData'
import { useLanguage } from '../i18n'

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <section className="page-shell section-wrap">
      <div className="section-heading">
        <p className="kicker">{t('SERVICES')}</p>
        <h3>{t('Purpose-built event experiences.')}</h3>
      </div>

      <div className="three-panel-grid">
        {services.map((service) => (
          <Link
            key={service.slug}
            className="page-card page-card--service service-link-card"
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
  )
}
