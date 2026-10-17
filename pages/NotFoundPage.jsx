import { Link } from 'react-router'
import { useLanguage } from '../i18n'

export default function NotFoundPage() {
  const { t } = useLanguage()

  return (
    <section className="page-shell section-wrap">
      <div className="section-heading">
        <p className="kicker">{t('404 / PAGE NOT FOUND')}</p>
        <h3>{t('This page is unavailable.')}</h3>
      </div>

      <Link className="button button-primary" to="/">
        {t('Back to home')}
      </Link>
    </section>
  )
}