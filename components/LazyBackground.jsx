import { useEffect, useRef, useState } from 'react'

export default function LazyBackground({ image, overlay, ...props }) {
  const elementRef = useRef(null)
  const [isNearViewport, setIsNearViewport] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    if (!('IntersectionObserver' in window)) {
      setIsNearViewport(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsNearViewport(true)
        observer.disconnect()
      }
    }, { rootMargin: '300px 0px' })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      {...props}
      ref={elementRef}
      style={{ backgroundImage: isNearViewport ? `${overlay}, url("${image}")` : overlay }}
    />
  )
}
