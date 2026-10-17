import founderImage from '../assets/osama/osama-elmawy.jpeg'
import ayaImage from '../assets/Aya/aya-nassar.jpeg'
import forensicNursingCover from '../assets/aas/WhatsApp Image 2026-10-07 at 11.34.35 AM.jpeg'
import jowanaImage from '../assets/jowana/jowana-almalky.jpeg'
import hayaImage from '../assets/haya/haya-tamer.jpeg'
import meiraImage from '../assets/meira/meira-tamer.jpeg'

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about.html' },
  { label: 'Services', to: '/services.html' },
  { label: 'Our Events', to: '/work.html' },
  { label: 'Case Studies', to: '/case-studies.html' },
  { label: 'Experience', to: '/experience.html' },
  { label: 'Our Team', to: '/team.html' },
  { label: 'Contact Us', to: '/contact.html' },
]

export const aboutPillars = [
  {
    slug: 'who-we-are',
    label: 'WHO WE ARE',
    title: 'Who We Are',
    teaser: 'SCIENCE Event Management is a full-service event management company specializing in medical conferences, scientific days, corporate events, and exhibitions',
    detail: 'From concept development and event branding to production, logistics, registration, and on-site management, we deliver integrated solutions with creativity, precision, and attention to every detail',
  },
  {
    slug: 'vision',
    label: 'VISION',
    title: 'Vision',
    teaser: 'To become a trusted name in conference and event management, recognized for precision, professionalism, and memorable experiences',
  },
  {
    slug: 'mission',
    label: 'MISSION',
    title: 'Mission',
    teaser: 'To deliver exceptional event experiences through creative planning and seamless execution, while building lasting client relationships based on quality, integrity, and trust',
  },
]

export const services = [
  {
    slug: 'event-management',
    title: 'CONFERENCE & EVENT MANAGEMENT',
    description:
      'Complete planning and coordination for medical conferences, scientific days, corporate events, and exhibitions.',
    focus: ['Planning, timelines, and budgets', 'Supplier and stakeholder coordination', 'Registration and guest flow'],
    outcome: 'One coordinated plan from the first brief through final delivery.',
  },
  {
    slug: 'event-production',
    title: 'EVENT PRODUCTION',
    description:
      'Stage setup, screens, sound, lighting, and technical coordination for a seamless event experience.',
    focus: ['Stage, audio, lighting, and screens', 'Technical schedules and rehearsals', 'Show calling and live operations'],
    outcome: 'A reliable technical experience that keeps every event moment running smoothly.',
  },
  {
    slug: 'creative-experiences',
    title: 'EVENT BRANDING & DESIGN',
    description:
      'Creative concepts, visual identities, stage and venue layouts, signage, and branded event materials',
    focus: ['Creative concepts and visual identities', 'Stage and venue layouts', 'Signage and branded event materials'],
    outcome: 'A consistent visual direction across the venue, signage, and event materials',
  },
  {
    slug: 'event-design',
    title: 'REGISTRATION & ON-SITE MANAGEMENT',
    description:
      'Guest registration, QR check-in, reception teams, and attendee flow management',
    focus: ['Guest registration and attendee lists', 'QR check-in and reception teams', 'Attendee flow management'],
    outcome: 'A smooth arrival and check-in experience with clear attendee flow',
  },
  {
    slug: 'digital-event-solutions',
    title: 'DIGITAL EVENT SOLUTIONS',
    description:
      'Event websites, mobile apps, online registration, and digital tools that keep attendees informed and connected',
    focus: ['Event websites and mobile apps', 'Online registration', 'Digital attendee communication tools'],
    outcome: 'A connected digital experience that keeps attendees informed before and during the event',
  },
  {
    slug: 'professional-execution',
    title: 'MARKETING & COMMUNICATION',
    description:
      'Social media campaigns, event promotion, media coverage, and sponsor and exhibitor coordination',
    focus: ['Social media campaigns and event promotion', 'Media coverage and communications', 'Sponsor and exhibitor coordination'],
    outcome: 'Clear event communication and coordinated engagement for attendees, sponsors, and exhibitors',
  },
]

export const projectPillars = [
  {
    slug: 'forensic-nursing-scientific-day',
    status: 'COMPLETED',
    name: 'Nursing Law & Forensic Science Day',
    label: 'Scientific Day',
    image: forensicNursingCover,
    eventTitle: 'Nursing Law & Forensic Science Day',
    eventSubtitle: 'Scientific Day for Nursing Officers',
    theme: 'Bridging Care, Law & Science for a Stronger Nursing Practice',
    date: '2 September 2026',
    venue: 'Conference Halls, Police Hospital – Nasr City',
    presentedBy: 'Medical Services Sector – Ministry of Interior',
    overview: 'A scientific day dedicated to Nursing Officers, bringing together nursing practice, law, and forensic science within a professional scientific environment.',
    about: [
      'The event focused on strengthening awareness and professional knowledge around the legal and forensic aspects of nursing practice.',
      'The event was managed by SCIENCE Event Management.',
    ],
    program: [
      { time: '09:30 – 10:00', title: 'Welcome & Day Introduction', speaker: 'Dr. Meira Tamer', description: 'Welcome remarks and introduction to the scientific day.' },
      { time: '10:00 – 12:00', title: 'Medical Management of Suspected Criminal Cases', speaker: 'Prof. Dr. Adel Al-Bary', description: 'Head of the Forensic Medicine Authority in Suez' },
      { time: '12:00 – 12:30', title: 'Coffee Break', speaker: '-', description: '' },
      { time: '12:30 – 02:00', title: 'Law Regulating Medical Liability', speaker: 'Dr. Kawthar Mahmoud', description: 'President of the Egyptian Nursing Syndicate' },
      { time: '02:00 – 03:00', title: 'Certificates Distribution & Closing', speaker: '-', description: '' },
    ],
    execution: [
      'Event coordination',
      'Scientific program coordination',
      'Speaker coordination',
      'Registration & guest reception',
      'On-ground event management',
      'Event branding and visual execution',
      'Conference materials',
      'Catering & coffee break',
      'Certificates',
      'Conference giveaways and branded materials',
      'Photography & videography',
      'Event documentation',
    ],
    materials: [
      'Branded notebooks',
      'Branded pens',
      'Certificates',
      'Printed event materials',
      'QR / information cards',
    ],
    branding: 'The event environment was supported by branded visual elements designed around the identity of Nursing Law & Forensic Science Day, including the on-ground conference branding and roll-ups. The official identities of the Ministry of Interior and the Medical Services Sector are presented clearly throughout the project documentation.',
    photography: 'The event was fully documented through professional photography and videography, capturing the scientific sessions, speakers, audience, event environment, and key moments throughout the day.',
    gallery: [
      'Event setup',
      'Branding',
      'Registration',
      'Scientific sessions',
      'Speakers',
      'Audience',
      'Conference materials',
      'Certificates',
      'Catering',
      'Giveaways',
      'Event highlights',
      'Photography & video content',
    ],
  },
  {
    slug: 'patient-safety-health-economics-scientific-day',
    status: 'COMPLETED',
    name: 'Patient Safety & Health Economics Scientific Day',
    label: 'Scientific Day',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'egypt-womens-health-summit',
    status: 'UPCOMING',
    name: 'Egypt Women\'s Health Summit',
    label: 'Lifeline concept',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'world-diabetes-day-event',
    status: 'UPCOMING',
    name: 'World Diabetes Day Event',
    label: 'Event planning concept',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'glaucoma-scientific-session',
    status: 'UPCOMING',
    name: 'Glaucoma Scientific Session',
    label: 'Session experience',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'neurology-scientific-session',
    status: 'UPCOMING',
    name: 'Neurology Scientific Session',
    label: 'Scientific session',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80',
  },
]

export const experienceSteps = [
  {
    slug: 'arrival',
    label: 'ARRIVAL',
    step: 'STEP ONE',
    description: 'A confident journey begins before the program starts. We make arrival clear, welcoming, and easy to navigate from the entrance through check-in.',
    focus: ['Arrival flow and access', 'Registration and guest welcome', 'Clear wayfinding'],
    outcome: 'Guests feel expected, oriented, and ready to take part.',
  },
  {
    slug: 'first-impression',
    label: 'FIRST IMPRESSION',
    step: 'STEP TWO',
    description: 'The first moments set expectations for the entire event. We align the welcome, arrival flow, and opening message to establish purpose and build confidence.',
    focus: ['Host and welcome moments', 'Clear arrival and wayfinding', 'A clear opening message'],
    outcome: 'A strong, memorable introduction that sets the right tone.',
  },
  {
    slug: 'environment',
    label: 'ENVIRONMENT',
    step: 'STEP THREE',
    description: 'The space shapes how people move, see, and connect. We plan the environment around the audience, balancing atmosphere with comfort and practical flow.',
    focus: ['Audience flow and sightlines', 'Stage, lighting, and seating layout', 'Comfort and accessibility'],
    outcome: 'A coherent setting that supports both the content and the people in the room.',
  },
  {
    slug: 'interaction',
    label: 'INTERACTION',
    step: 'STEP FOUR',
    description: 'Participation turns an audience into part of the event. We create relevant moments for people to engage with speakers, ideas, and one another.',
    focus: ['Audience participation', 'Facilitated discussion', 'Digital and in-person touchpoints'],
    outcome: 'More active participation and stronger connections between attendees.',
  },
  {
    slug: 'content',
    label: 'CONTENT',
    step: 'STEP FIVE',
    description: 'Important ideas deserve a clear path through the program. We shape the agenda, session transitions, and technical delivery so each message reaches its audience.',
    focus: ['Program structure and timing', 'Speaker and session coordination', 'Clear audio-visual delivery'],
    outcome: 'A focused program that makes complex information easier to follow.',
  },
  {
    slug: 'experience',
    label: 'EXPERIENCE',
    step: 'STEP SIX',
    description: 'A memorable event feels joined up from one moment to the next. We connect service, production, content, and transitions into one consistent journey.',
    focus: ['Smooth transitions between moments', 'Hospitality and service quality', 'Consistent delivery across the event'],
    outcome: 'An event that feels considered, seamless, and human.',
  },
  {
    slug: 'memory',
    label: 'MEMORY',
    step: 'STEP SEVEN',
    description: 'The event continues in what people remember and share afterward. We close with intention and create useful follow-up that keeps the ideas moving.',
    focus: ['A meaningful closing moment', 'Highlights and post-event content', 'Follow-up and continued engagement'],
    outcome: 'Clear takeaways and a lasting connection beyond the venue.',
  },
]

export const gallery = [
  'Program Layout',
  'Stage Design',
  'Venue Layout',
  'Entrance Design',
  'Registration Areas',
  'Backdrops',
  'VIP Areas',
  'Guest Experience',
  'Digital Screens',
  'Event Materials',
]

export const digitalFocus = [
  'Event Platforms',
  'Registration Experiences',
  'Digital Engagement',
  'Interactive Experiences',
  'Digital Event Content',
]

export const teamProfiles = [
  {
    slug: 'creative-direction',
    label: 'Creative direction',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    description: 'Shapes event concepts, visual language, and content into a coherent creative direction.',
  },
  {
    slug: 'production-planning',
    label: 'Production planning',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    description: 'Coordinates timelines, technical requirements, and suppliers to prepare each event for delivery.',
  },
  {
    slug: 'event-space-design',
    label: 'Event space design',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    description: 'Plans practical, welcoming spaces across venues, stages, seating, and guest areas.',
  },
  {
    slug: 'experience-design',
    label: 'Experience design',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    description: 'Plans audience journeys and interactions so each moment feels clear and connected.',
  },
  {
    slug: 'digital-systems',
    label: 'Digital systems',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    description: 'Supports registration, digital content, and audience engagement through event technology.',
  },
  {
    slug: 'operational-delivery',
    label: 'Operational delivery',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80',
    description: 'Coordinates on-site teams and event logistics to keep delivery organized and responsive.',
  },
]

export const founderProfile = {
  slug: 'osama-elmawy',
  image: founderImage,
  name: 'Osama Elmawy',
  position: 'Founder & Chairman',
  statement: 'Building with purpose. Leading with passion. Turning bold ideas into lasting success.',
  vision: 'The vision behind SCIENCE is built on purpose, passion, and the belief that bold ideas can be transformed into lasting success.',
  account: 'science.eventseg',
  accountUrl: 'https://www.instagram.com/science.eventseg/',
  brand: 'SCIENCE Event Management',
}

export const ayaProfile = {
  slug: 'aya-nassar',
  image: ayaImage,
  name: 'Aya Nassar',
  position: 'Chairperson — Board of Directors',
  statement: 'Leading with a clear vision, inspiring the team, and turning ambition into meaningful achievements.',
  tagline: 'New Role. Same Passion. Greater Impact.',
}

export const jowanaProfile = {
  slug: 'jowana-almalky',
  image: jowanaImage,
  name: 'Jowana Almalky',
  position: 'General Manager & Creative Director',
  statement: 'Leading with creativity, strategy, and a passion for turning every idea into an exceptional experience.',
  tagline: 'New Role. Same Passion. Greater Impact.',
}

export const hayaProfile = {
  slug: 'haya-tamer',
  image: hayaImage,
  name: 'Haya Tamer',
  position: 'Event Management Supervisor',
  statement: 'Bringing structure, coordination, and exceptional attention to every detail—ensuring every event runs smoothly from start to finish.',
  postHeadline: 'Meet the force behind every seamless event',
}

export const meiraProfile = {
  slug: 'dr-meira-tamer',
  image: meiraImage,
  name: 'Dr. Meira Tamer',
  position: 'Medical Content Creator',
  statement: 'Transforming complex medical knowledge into clear, accurate, and engaging content that informs, inspires, and connects.',
  postHeadline: 'Meet the mind behind meaningful medical content',
  tagline: 'THE MEDICAL VOICE',
}

export const contactInfo = [
  { label: 'Email', value: 'science@elmawy.com', href: 'mailto:science@elmawy.com' },
  { label: 'Phone', value: '+20 109 582 8282 / +20 114 759 9444', href: 'tel:+201095828282' },
  { label: 'Facebook', value: 'facebook.com/science.events', href: 'https://www.facebook.com/profile.php?id=61593490812620' },
  { label: 'Instagram', value: '@science.eventseg', href: 'https://www.instagram.com/science.eventseg/' },
  { label: 'WhatsApp', value: '+20 109 582 8282', href: 'https://wa.me/201095828282' },
]
