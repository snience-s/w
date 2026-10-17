import { Link, Navigate, useParams } from 'react-router'
import { eventGalleryPhotos } from '../data/eventMedia'
import { projectPillars } from '../data/siteData'
import { useLanguage } from '../i18n'

export default function EventGalleryPage() {
  const { t } = useLanguage()
  const { projectSlug } = useParams()
  const project = projectPillars.find((item) => item.slug === projectSlug)
  const photos = eventGalleryPhotos[projectSlug]

  if (!project || !photos) {
    return <Navigate to="/our-work" replace />
  }

  return (
    <section className="page-shell section-wrap">
      <Link className="detail-back" to={`/our-work/${projectSlug}`}>
        {t('Back to event')}
      </Link>

      <div className="section-heading">
        <p className="kicker">{t('EVENT PHOTO GALLERY')}</p>
        <h3>{t(project.eventTitle ?? project.name)}</h3>
      </div>

      <div className="event-photo-grid">
        {photos.map((photo, index) => (
          <figure className="event-photo-item" key={`${photo.src}-${index}`}>
            <img src={photo.src} alt={`${t('Event photo')} ${index + 1}`} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  )
}