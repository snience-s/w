import { Link } from 'react-router'
import { ayaProfile, founderProfile, hayaProfile, jowanaProfile, meiraProfile, teamProfiles } from '../data/siteData'
import { useLanguage } from '../i18n'

export default function TeamPage() {
  const { t } = useLanguage()

  return (
    <section className="page-shell section-wrap">
      <div className="section-heading">
        <p className="kicker">{t('OUR TEAM')}</p>
        <h3>{t('Meet the Architect Behind SCIENCE')}</h3>
      </div>

      <div className="team-grid">
        {[founderProfile, ayaProfile, jowanaProfile, hayaProfile, meiraProfile].map((profile) => (
          <Link
            key={profile.slug}
            className="team-card team-page-card person-card"
            to={`/team/${profile.slug}`}
            aria-label={`${t('View profile:')} ${t(profile.name)}`}
          >
            <div
              className="team-avatar"
              role="img"
              aria-label={t(profile.name)}
              style={{ backgroundImage: `linear-gradient(180deg, rgba(10, 15, 22, 0.12), rgba(7, 11, 18, 0.28)), url(${profile.image})` }}
            />
            <div className="team-card-copy">
              <h4>{t(profile.name)}</h4>
              <p className="person-position">{t(profile.position)}</p>
              <p className="person-statement">{t(profile.statement)}</p>
              <p>{t('View profile')}</p>
            </div>
          </Link>
        ))}

        {teamProfiles.map((profile) => (
          <Link key={profile.slug} className="team-card team-page-card" to={`/team/${profile.slug}`}>
            <div
              className="team-avatar"
              aria-hidden="true"
              style={{ backgroundImage: `linear-gradient(180deg, rgba(10, 15, 22, 0.2), rgba(7, 11, 18, 0.5)), url(${profile.image})` }}
            />
            <div className="team-card-copy">
              <h4>{t(profile.label)}</h4>
              <p>{t(profile.description)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
