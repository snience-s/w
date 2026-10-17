import { Link, Navigate, useParams } from 'react-router'
import { teamProfiles } from '../data/siteData'
import { useLanguage } from '../i18n'

export default function TeamRolePage() {
  const { t } = useLanguage()
  const { teamSlug } = useParams()
  const currentIndex = teamProfiles.findIndex((profile) => profile.slug === teamSlug)

  if (currentIndex === -1) {
    return <Navigate to="/team" replace />
  }

  const profile = teamProfiles[currentIndex]
  const previousProfile = teamProfiles[currentIndex - 1]
  const nextProfile = teamProfiles[currentIndex + 1]

  return (
    <section className="page-shell section-wrap">
      <Link className="detail-back" to="/team">
        {t('Back to the team')}
      </Link>

      <div className="section-heading">
        <p className="kicker">{t('OUR TEAM / OUR EXPERTISE')}</p>
        <h3>{t(profile.label)}</h3>
      </div>

      <div className="team-detail-grid">
        <div
          className="team-detail-image"
          role="img"
          aria-label={`${t('Our expertise')}: ${t(profile.label)}`}
          style={{ backgroundImage: `linear-gradient(180deg, rgba(10, 15, 22, 0.1), rgba(7,11,18,0.38)), url(${profile.image})` }}
        />
        <article className="page-panel page-panel--feature team-detail-copy">
          <p className="mini-label">{t('OUR EXPERTISE')}</p>
          <p>{t(profile.description)}</p>
        </article>
      </div>

      <nav className="detail-navigation" aria-label={t('Team expertise navigation')}>
        <Link to={previousProfile ? `/team/${previousProfile.slug}` : '/team'}>
          <span>{t(previousProfile ? 'Previous expertise' : 'Team overview')}</span>
          <strong>{t(previousProfile ? previousProfile.label : 'All expertise')}</strong>
        </Link>
        <Link to={nextProfile ? `/team/${nextProfile.slug}` : '/team'}>
          <span>{t(nextProfile ? 'Next expertise' : 'Team overview')}</span>
          <strong>{t(nextProfile ? nextProfile.label : 'All expertise')}</strong>
        </Link>
      </nav>
    </section>
  )
}