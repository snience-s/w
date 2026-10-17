import { Link, Navigate, useParams } from 'react-router'
import { useEffect, useMemo, useRef, useState } from 'react'
import ministryLogo from '../assets/logo.m/s.png'
import medicalServicesLogo from '../assets/logo.m/n.jpeg'
import { eventGalleryPhotos, eventHighlights, eventVideos } from '../data/eventMedia'
import { projectPillars } from '../data/siteData'
import { useLanguage } from '../i18n'
import LazyEventVideo from '../components/LazyEventVideo'

export default function ProjectDetailPage() {
  const { t } = useLanguage()
  const { projectSlug } = useParams()
  const currentIndex = projectPillars.findIndex((project) => project.slug === projectSlug)
  const touchStartX = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [galleryPreviewIndex, setGalleryPreviewIndex] = useState(0)
  const [activeVideo, setActiveVideo] = useState(0)

  const project = currentIndex === -1 ? null : projectPillars[currentIndex]
  const previousProject = currentIndex <= 0 ? null : projectPillars[currentIndex - 1]
  const nextProject = currentIndex === -1 || currentIndex >= projectPillars.length - 1 ? null : projectPillars[currentIndex + 1]
  const highlights = project ? eventHighlights[projectSlug] ?? eventHighlights.default : eventHighlights.default
  const videos = project ? eventVideos[projectSlug] ?? [] : []
  const hasExtendedEventInfo = Boolean(project?.eventTitle)
  const galleryPhotos = project ? eventGalleryPhotos[projectSlug] ?? [] : []

  const slides = useMemo(() => {
    const nextSlides = [...highlights]
    for (let i = nextSlides.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[nextSlides[i], nextSlides[j]] = [nextSlides[j], nextSlides[i]]
    }
    return nextSlides
  }, [highlights])

  const currentSlide = activeSlide % slides.length
  const currentGalleryPreview = galleryPhotos.length ? galleryPreviewIndex % galleryPhotos.length : 0
  const currentVideo = videos.length ? activeVideo % videos.length : 0

  useEffect(() => {
    setActiveSlide(0)
    setGalleryPreviewIndex(0)
    setActiveVideo(0)
    touchStartX.current = null
  }, [projectSlug])

  useEffect(() => {
    if (slides.length <= 1) return

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
      if (galleryPhotos.length > 1) {
        setGalleryPreviewIndex((current) => (current + 1) % galleryPhotos.length)
      }
    }, 4000)

    return () => window.clearInterval(timer)
  }, [slides.length, galleryPhotos.length])

  if (currentIndex === -1) {
    return <Navigate to="/our-work" replace />
  }

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length)
  }

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length)
  }

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return

    const deltaX = event.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(deltaX) < 40) {
      touchStartX.current = null
      return
    }

    if (deltaX < 0) {
      showNextSlide()
    } else {
      showPreviousSlide()
    }

    touchStartX.current = null
  }

  return (
    <section className="page-shell section-wrap">
      <Link className="detail-back" to="/our-work">
        {t('Back to all projects')}
      </Link>

      <div className="project-title-layout">
        <div className="section-heading">
          <p className="kicker">{t('PROJECT /')} {t(project.status)}</p>
          <h3>{t(project.name)}</h3>
        </div>
        {['forensic-nursing-scientific-day', 'world-diabetes-day-event'].includes(projectSlug) && (
          <div className="project-authority-logos" aria-label={t('Event authorities')}>
            <img src={ministryLogo} alt={t('Ministry of Interior emblem')} loading="lazy" decoding="async" />
            <img src={medicalServicesLogo} alt={t('Medical Services Sector emblem')} loading="lazy" decoding="async" />
          </div>
        )}
      </div>

      {hasExtendedEventInfo && (
        <div className="event-info-card event-info-card--feature event-overview-before-highlights">
          <p className="mini-label">{t('EVENT OVERVIEW')}</p>
          <h4>{t(project.eventTitle)}</h4>
          {project.eventSubtitle && <p className="event-subtitle">{t(project.eventSubtitle)}</p>}
          {project.eventIntro && <p className="event-paragraph">{t(project.eventIntro)}</p>}
          {project.theme && <p className="event-theme">{t('Theme:')} {t(project.theme)}</p>}
          <div className="event-meta-grid">
            {project.date && <div><span>{t('Date')}</span><strong>{t(project.date)}</strong></div>}
            {project.venue && <div><span>{t('Venue')}</span><strong>{t(project.venue)}</strong></div>}
            {project.city && <div><span>{t('City')}</span><strong>{t(project.city)}</strong></div>}
            {(project.organizer || project.presentedBy) && (
              <div>
                <span>{t(project.organizer ? 'Organizer' : 'Presented by')}</span>
                <strong>{t(project.organizer ?? project.presentedBy)}</strong>
              </div>
            )}
            {project.eventOverview?.map(({ label, value }) => (
              <div key={label}><span>{t(label)}</span><strong>{t(value)}</strong></div>
            ))}
          </div>
        </div>
      )}

      <div className="event-highlights" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div className="event-highlights-header">
          <p className="kicker">{t('Event Highlights')}</p>
          <div className="event-highlights-controls">
            <button type="button" className="highlight-arrow" onClick={showPreviousSlide} aria-label={t('Previous slide')}>
              ‹
            </button>
            <button type="button" className="highlight-arrow" onClick={showNextSlide} aria-label={t('Next slide')}>
              ›
            </button>
            <span className="swipe-hint">{t('Swipe')}</span>
          </div>
        </div>

        <div className="highlight-viewport" aria-live="polite">
          <div
            className="highlight-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((highlight, index) => (
              <figure className="highlight-slide" key={`${highlight.src}-${highlight.caption}-${index}`}>
                <img src={highlight.src} alt={t('Event image')} loading="lazy" decoding="async" />
                <figcaption>{t(highlight.caption)}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="highlight-dots" aria-label={t('Event Highlights')}>
          {slides.map((highlight, index) => (
            <button
              key={`${highlight.src}-dot-${index}`}
              type="button"
              className={index === currentSlide ? 'is-active' : ''}
              aria-label={`${t('Go to slide')} ${index + 1}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>

      {(galleryPhotos.length > 0 || videos.length > 0) && (
        <section className="event-media-overview">
          <div className="section-heading">
            <p className="kicker">{t('MEDIA')}</p>
            <h3>{t('Event Photos & Videos')}</h3>
            <p>{t(project.mediaDescription ?? 'Explore highlights and moments from the event through the photo and video collection.')}</p>
          </div>
        </section>
      )}

      {galleryPhotos.length > 0 && (
        <div className="event-gallery-shortcuts" aria-label={t('Open event photo gallery')}>
          <button
            type="button"
            className="event-gallery-control"
            aria-label={t('Previous gallery previews')}
            onClick={() => setGalleryPreviewIndex((current) => (current - 1 + galleryPhotos.length) % galleryPhotos.length)}
          >
            ‹
          </button>
          <div className="event-gallery-shortcuts-window" aria-live="polite">
            <div className="event-gallery-shortcuts-track" key={galleryPreviewIndex}>
              {[0, 1].map((offset) => {
                const photo = galleryPhotos[(currentGalleryPreview + offset) % galleryPhotos.length]

                return (
                  <Link
                    key={`${photo.src}-${currentGalleryPreview}`}
                    className="event-gallery-shortcut"
                    to={`/our-work/${projectSlug}/gallery`}
                    aria-label={`${t('Open event photo gallery, image')} ${currentGalleryPreview + offset + 1}`}
                  >
                    <img src={photo.src} alt="" loading="lazy" decoding="async" />
                  </Link>
                )
              })}
            </div>
          </div>
          <button
            type="button"
            className="event-gallery-control"
            aria-label={t('Next gallery previews')}
            onClick={() => setGalleryPreviewIndex((current) => (current + 1) % galleryPhotos.length)}
          >
            ›
          </button>
        </div>
      )}

      {videos.length > 0 && (
        <section className="event-videos" aria-labelledby="event-videos-title">
          <div className="event-highlights-header">
            <p className="kicker" id="event-videos-title">{t('Event Videos')}</p>
            {videos.length > 1 && (
              <div className="event-highlights-controls">
                <button
                  type="button"
                  className="highlight-arrow"
                  onClick={() => setActiveVideo((current) => (current - 1 + videos.length) % videos.length)}
                  aria-label={t('Previous video')}
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="highlight-arrow"
                  onClick={() => setActiveVideo((current) => (current + 1) % videos.length)}
                  aria-label={t('Next video')}
                >
                  ›
                </button>
              </div>
            )}
          </div>

          <div className="event-video-viewport">
            <div
              className="event-video-track"
              style={{ transform: `translateX(-${currentVideo * 100}%)` }}
            >
              {videos.map((video, index) => (
                <div className="event-video-slide" key={video.src}>
                  <LazyEventVideo
                    video={{ ...video, alt: `${t('Event video')} ${index + 1}` }}
                    isActive={index === currentVideo}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {hasExtendedEventInfo && (
        <div className="event-info-layout">
          {project.about?.length > 0 && (
            <div className="event-info-card">
              <p className="mini-label">{t('ABOUT THE EVENT')}</p>
              {project.about.map((paragraph) => (
                <p key={paragraph} className="event-paragraph">{t(paragraph)}</p>
              ))}
            </div>
          )}

          {project.mission && (
            <div className="event-info-card">
              <p className="mini-label">{t('OUR MISSION')}</p>
              <p className="event-paragraph">{t(project.mission)}</p>
            </div>
          )}

          {project.story?.length > 0 && (
            <div className="event-info-card event-info-card--full">
              <p className="mini-label">{t('THE HEARTPRINT STORY')}</p>
              <ul className="event-list">
                {project.story.map(({ label, description }) => (
                  <li key={label}><strong>{t(label)}:</strong> {t(description)}</li>
                ))}
              </ul>
            </div>
          )}

          {project.closingMessage && (
            <div className="event-info-card event-info-card--full">
              <p className="mini-label">{t(project.eventSubtitle)}</p>
              <p className="event-paragraph">{t(project.closingMessage)}</p>
            </div>
          )}

          {project.program?.length > 0 && (
            <div className="event-info-card event-info-card--full">
              <p className="mini-label">{t('SCIENTIFIC PROGRAM')}</p>
              <div className="event-program-list">
                {project.program.map((item) => (
                  <div key={`${item.time}-${item.title}`} className="event-program-item">
                    <div className="event-program-time">{item.time}</div>
                    <div className="event-program-copy">
                      <h5>{t(item.title)}</h5>
                      {item.speaker && item.speaker !== '-' && <p className="event-speaker">{item.speaker}</p>}
                      {item.description && <p>{t(item.description)}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.highlights?.length > 0 && (
            <div className="event-info-card">
              <p className="mini-label">{t('EVENT HIGHLIGHTS')}</p>
              <ul className="event-list">
                {project.highlights.map((point) => <li key={point}>{t(point)}</li>)}
              </ul>
            </div>
          )}

          {project.scientificThemes?.length > 0 && (
            <div className="event-info-card event-info-card--full">
              <p className="mini-label">{t('SCIENTIFIC THEMES')}</p>
              <ul className="event-list">
                {project.scientificThemes.map((theme) => <li key={theme}>{t(theme)}</li>)}
              </ul>
              {project.programmeNote && <p className="event-paragraph">{t(project.programmeNote)}</p>}
            </div>
          )}

          {project.registration && (
            <div className="event-info-card">
              <p className="mini-label">{t('REGISTRATION')}</p>
              <p className="event-paragraph">{t(project.registration.title)}</p>
              <a href={`mailto:${project.registration.email}`}>{project.registration.email}</a>
            </div>
          )}

          {project.execution?.length > 0 && (
            <div className="event-info-card">
              <p className="mini-label">{t('EVENT MANAGEMENT & EXECUTION')}</p>
              <ul className="event-list">
                {project.execution.map((point) => <li key={point}>{t(point)}</li>)}
              </ul>
            </div>
          )}

          {project.materials?.length > 0 && (
            <div className="event-info-card">
              <p className="mini-label">{t('CONFERENCE MATERIALS & GIVEAWAYS')}</p>
              <ul className="event-list">
                {project.materials.map((point) => <li key={point}>{t(point)}</li>)}
              </ul>
            </div>
          )}

          {project.branding && (
            <div className="event-info-card">
              <p className="mini-label">{t('EVENT BRANDING')}</p>
              <p className="event-paragraph">{t(project.branding)}</p>
            </div>
          )}

          {project.photography && (
            <div className="event-info-card">
              <p className="mini-label">{t('PHOTOGRAPHY & VIDEOGRAPHY')}</p>
              <p className="event-paragraph">{t(project.photography)}</p>
            </div>
          )}

          {project.gallery?.length > 0 && (
            <div className="event-info-card event-info-card--full">
              <p className="mini-label">{t('EVENT GALLERY')}</p>
              <ul className="event-gallery-list">
                {project.gallery.map((item) => <li key={item}>{t(item)}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="detail-grid project-detail-info">
        <article className="page-panel page-panel--feature">
          <p className="mini-label">{t('PROJECT TYPE')}</p>
          <h4>{t(project.label)}</h4>
        </article>
        <aside className="page-panel">
          <p className="mini-label">{t('STATUS')}</p>
          <p className="detail-copy">{t(project.status)}</p>
        </aside>
      </div>

      <nav className="detail-navigation" aria-label={t('Project navigation')}>
        <Link to={previousProject ? `/our-work/${previousProject.slug}` : '/our-work'}>
          <span>{t(previousProject ? 'Previous project' : 'Project overview')}</span>
          <strong>{t(previousProject ? previousProject.name : 'All projects')}</strong>
        </Link>
        <Link to={nextProject ? `/our-work/${nextProject.slug}` : '/our-work'}>
          <span>{t(nextProject ? 'Next project' : 'Project overview')}</span>
          <strong>{t(nextProject ? nextProject.name : 'All projects')}</strong>
        </Link>
      </nav>
    </section>
  )
}