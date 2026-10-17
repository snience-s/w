import { Link, useParams } from 'react-router'
import { aboutPillars } from '../data/siteData'
import NotFoundPage from './NotFoundPage'
import { useLanguage } from '../i18n'

export default function AboutPillarPage() {
  const { aboutSlug } = useParams()
  const { t } = useLanguage()
  const pillar = aboutPillars.find((item) => item.slug === aboutSlug)

  if (!pillar) {
    return <NotFoundPage />
  }

  return (
    <section className="page-shell section-wrap">
      <Link className="detail-back" to="/">
        {t('Back to home')}
      </Link>

      <div className="section-heading">
        <p className="kicker">{t('ABOUT US')} / {t(pillar.label)}</p>
        <h3>{t(pillar.title)}</h3>
      </div>

      <article className="page-panel page-panel--feature about-pillar-detail">
        <p className="detail-copy">{t(pillar.teaser)}</p>
        {pillar.detail && <p className="detail-copy">{t(pillar.detail)}</p>}
      </article>
    </section>
  )
}