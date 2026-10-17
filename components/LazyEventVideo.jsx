import { useEffect, useRef, useState } from 'react'

export default function LazyEventVideo({ video, isActive }) {
  const videoRef = useRef(null)
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false)

  useEffect(() => {
    const element = videoRef.current
    if (!element) return

    if (!('IntersectionObserver' in window)) {
      setHasEnteredViewport(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasEnteredViewport(true)
        observer.disconnect()
      }
    }, { rootMargin: '200px 0px' })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={videoRef}
      src={hasEnteredViewport && isActive ? video.src : undefined}
      poster={hasEnteredViewport ? video.poster : undefined}
      controls
      playsInline
      preload={hasEnteredViewport && isActive ? 'metadata' : 'none'}
      aria-label={video.alt}
    >
      Your browser does not support the video tag.
    </video>
  )
}
