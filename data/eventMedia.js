import forensicNursingCover from '../assets/aas/WhatsApp Image 2026-10-07 at 11.34.35 AM.jpeg'
import patientSafetyCover from '../assets/pshe/b8a924f9-2922-44e0-ada6-8885a7fd1cf2.jpg'

const nursingLawImages = [
  ...Object.entries(
    import.meta.glob('../assets/Nursing Law/*.{jpeg,jpg,png,webp,avif}', { eager: true, import: 'default' }),
  ),
  ...Object.entries(
    import.meta.glob('../assets/ed/*.{jpeg,jpg,png,webp,avif}', { eager: true, import: 'default' }),
  ),
  ...Object.entries(
    import.meta.glob('../assets/sd/*.{jpeg,jpg,png,webp,avif}', { eager: true, import: 'default' }),
  ),
]
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([path, src]) => ({ path, src }))
const nursingLawTeasers = nursingLawImages.slice(-2)
const nursingLawSlides = nursingLawImages

const nursingLawSlideCaptions = [
  'Event setup',
  'Main stage',
  'Registration',
  'Branding',
  'Audience',
  'Scientific sessions',
  'Speakers',
  'Certificates',
  'Catering',
  'Event highlights',
]

const nursingLawVideos = Object.entries(
  import.meta.glob('../assets/vedio/*.{mp4,webm,mov,m4v}', { eager: true, import: 'default' }),
)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([path, src], index) => ({
    path,
    src,
    poster: nursingLawSlides[index % nursingLawSlides.length]?.src ?? forensicNursingCover,
  }))

const patientSafetyImages = Object.entries(
  import.meta.glob('../assets/pshe/*.{jpeg,jpg,png,webp,avif}', { eager: true, import: 'default' }),
)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([path, src]) => ({ path, src }))
const patientSafetyVideos = Object.entries(
  import.meta.glob('../assets/pshe/*.{mp4,webm,mov,m4v}', { eager: true, import: 'default' }),
)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([path, src]) => ({ path, src, poster: patientSafetyCover }))

export const eventHighlights = {
  'forensic-nursing-scientific-day': nursingLawSlides.map(({ src }, index) => ({
    src,
    alt: `Nursing Law & Forensic Science Day event image ${index + 1}`,
    caption: nursingLawSlideCaptions[index % nursingLawSlideCaptions.length],
  })),
  'patient-safety-health-economics-scientific-day': patientSafetyImages.map(({ src }, index) => ({
    src,
    alt: `Patient Safety & Health Economics Scientific Day image ${index + 1}`,
    caption: 'Event highlights',
  })),
  default: [
    {
      src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      alt: 'Scientific event highlight image',
      caption: 'Event experience',
    },
    {
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      alt: 'Event highlight image',
      caption: 'Guest engagement',
    },
    {
      src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
      alt: 'Event highlight image',
      caption: 'Venue atmosphere',
    },
  ],
}

export const eventVideos = {
  'forensic-nursing-scientific-day': nursingLawVideos.map(({ src, poster }, index) => ({
    src,
    poster,
    alt: `Nursing Law & Forensic Science Day video ${index + 1}`,
  })),
  'patient-safety-health-economics-scientific-day': patientSafetyVideos.map(({ src, poster }, index) => ({
    src,
    poster,
    alt: `Patient Safety & Health Economics Scientific Day video ${index + 1}`,
  })),
}

export const eventGalleryTeasers = {
  'forensic-nursing-scientific-day': nursingLawTeasers.map(({ src }, index) => ({
    src,
    alt: `Nursing Law & Forensic Science Day gallery preview ${index + 1}`,
  })),
  'patient-safety-health-economics-scientific-day': patientSafetyImages.slice(-2).map(({ src }, index) => ({
    src,
    alt: `Patient Safety & Health Economics Scientific Day gallery preview ${index + 1}`,
  })),
}

export const eventGalleryPhotos = {
  'forensic-nursing-scientific-day': nursingLawImages.map(({ src }, index) => ({
    src,
    alt: `Nursing Law & Forensic Science Day event image ${index + 1}`,
  })),
  'patient-safety-health-economics-scientific-day': patientSafetyImages.map(({ src }, index) => ({
    src,
    alt: `Patient Safety & Health Economics Scientific Day event image ${index + 1}`,
  })),
}
