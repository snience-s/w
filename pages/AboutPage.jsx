import { Link } from 'react-router'
import { services } from '../data/siteData'
import { useLanguage } from '../i18n'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <section className="page-shell section-wrap">
      <div className="section-heading">
        <p className="kicker">{t('ABOUT US')}</p>
        <h3>{t('SCIENCE EVENT MANAGEMENT')}</h3>
      </div>

      <div className="page-grid page-grid--two">
        <article className="page-panel page-panel--feature">
          <p className="mini-label">{t('WHO WE ARE')}</p>
          <h4>{t('We create meaningful, high-impact experiences')}</h4>
        </article>

        <article className="page-panel">
          <p className="mini-label">{t('VISION')}</p>
          <p>{t('To shape elegant, memorable, and operationally precise experiences for science-led audiences')}</p>
        </article>

        <article className="page-panel">
          <p className="mini-label">{t('MISSION')}</p>
          <p>{t('To connect strategy, production, and design into a clear and compelling event journey')}</p>
        </article>

        <article className="page-panel">
          <p className="mini-label">{t('WHY SCIENCE')}</p>
          <p>{t('Because the most persuasive experiences are rooted in purpose, clarity, and careful execution')}</p>
        </article>
      </div>

      <div className="three-panel-grid panel-row">
        {services.map((service) => (
          <Link
            key={service.slug}
            className="page-card service-link-card"
            to={`/services/${service.slug}`}
            aria-label={`${t('View service:')} ${t(service.title)}`}
          >
            <span>{t(service.title)}</span>
            <p>{t(service.description)}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
