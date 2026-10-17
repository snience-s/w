import { Link } from 'react-router'
import { founderProfile } from '../data/siteData'
import { useLanguage } from '../i18n'

export default function FounderPage({ profile = founderProfile }) {
  const { t } = useLanguage()
  const details = [
    { label: 'Name', value: profile.name },
    { label: 'Position', value: profile.position },
    ...(profile.account ? [{ label: 'Official account', value: profile.account, href: profile.accountUrl }] : []),
    ...(profile.brand ? [{ label: 'Brand', value: profile.brand }] : []),
  ]

  return (
    <section className="page-shell section-wrap">
      <Link className="detail-back" to="/team">
        {t('Back to the team')}
      </Link>

      <div className="section-heading">
        <p className="kicker">{t('OUR TEAM')}</p>
        <h3>{t(profile.postHeadline ?? profile.name)}</h3>
      </div>

      <div className="team-detail-grid">
        <div
          className="team-detail-image founder-detail-image"
          role="img"
          aria-label={t(profile.name)}
          style={{ backgroundImage: `linear-gradient(180deg, rgba(10, 15, 22, 0.08), rgba(7, 11, 18, 0.24)), url(${profile.image})` }}
        />
        <article className="page-panel page-panel--feature team-detail-copy">
          <p className="mini-label">{t(profile.position)}</p>
          <p className="founder-statement">{t(profile.statement)}</p>
          {profile.tagline && <p className="person-tagline">{t(profile.tagline)}</p>}
          {profile.vision && <p>{t(profile.vision)}</p>}
          <dl className="founder-details">
            {details.map(({ label, value, href }) => (
              <div key={label}>
                <dt>{t(label)}</dt>
                <dd>
                  {href ? <a href={href} target="_blank" rel="noreferrer">{t(value)}</a> : t(value)}
                </dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
    </section>
  )
}