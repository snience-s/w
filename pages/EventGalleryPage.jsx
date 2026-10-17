import { Link, Navigate, useParams } from 'react-router'
import { eventGalleryPhotos } from '../data/eventMedia'
import { projectPillars } from '../data/siteData'

export default function EventGalleryPage() {
  const { projectSlug } = useParams()
  const project = projectPillars.find((item) => item.slug === projectSlug)
  const photos = eventGalleryPhotos[projectSlug]

  if (!project || !photos) {
    return <Navigate to="/our-work" replace />
  }

  return (
    <section className="page-shell section-wrap">
      <Link className="detail-back" to={`/our-work/${projectSlug}`}>
        Back to event
      </Link>

      <div className="section-heading">
        <p className="kicker">EVENT PHOTO GALLERY</p>
        <h3>{project.eventTitle ?? project.name}</h3>
      </div>

      <div className="event-photo-grid">
        {photos.map((photo, index) => (
          <figure className="event-photo-item" key={`${photo.src}-${index}`}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  )
}