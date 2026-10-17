import { Link } from 'react-router'
import { contactInfo } from '../data/siteData'
import { useLanguage } from '../i18n'

const socialLinks = contactInfo.filter((item) => item.href.startsWith('https://'))

export default function SocialLinksPage() {
  const { t } = useLanguage()

  return (
    <section className="page-shell section-wrap">
      <Link className="detail-back" to="/contact">
        {t('Back to Contact Us')}
      </Link>

      <div className="section-heading">
        <p className="kicker">{t('CONNECT ONLINE')}</p>
        <h3>{t('Find Science Event Management across our social channels.')}</h3>
      </div>

      <div className="contact-grid">
        {socialLinks.map((item) => (
          <a
            key={item.label}
            className="page-card page-card--contact"
            href={item.href}
            target="_blank"
            rel="noreferrer"
          >
            <span>{t(item.label)}</span>
            <p>{item.value}</p>
          </a>
        ))}
      </div>

      <div className="cta-box">
        <h4>{t('Prefer email? Get in touch directly.')}</h4>
        <a href={contactInfo.find((item) => item.label === 'Email').href} className="button button-primary">
          {t('SEND AN EMAIL')}
        </a>
      </div>
    </section>
  )
}