import { contactInfo } from '../data/siteData'
import { services } from '../data/siteData'
import { useLanguage } from '../i18n'

export default function ContactPage() {
  const { t } = useLanguage()

  const handleInquirySubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = [
      `${t('Name')}: ${name}`,
      `${t('Email')}: ${email}`,
      `${t('Phone / WhatsApp')}: ${formData.get('phone')}`,
      `${t('Event type')}: ${t(formData.get('eventType'))}`,
      `${t('Event date')}: ${formData.get('eventDate') || t('Not specified')}`,
      `${t('City / venue')}: ${formData.get('location') || t('Not specified')}`,
      `${t('Expected attendees')}: ${formData.get('attendees') || t('Not specified')}`,
      `${t('Estimated budget')}: ${formData.get('budget') || t('Not specified')}`,
      '',
      `${t('Event brief')}:`,
      formData.get('brief') || t('Not specified'),
    ].join('\n')
    const recipient = contactInfo.find((item) => item.label === 'Email').value
    const subject = encodeURIComponent(`${t('Event enquiry')} - ${name}`)
    const body = encodeURIComponent(message)

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
  }

  return (
    <section className="page-shell section-wrap">
      <div className="section-heading">
        <p className="kicker">{t('CONTACT US')}</p>
        <h3>{t('Start your next event conversation.')}</h3>
      </div>

      <div className="contact-grid">
        {contactInfo.map((item) => (
          <a
            key={item.label}
            className="page-card page-card--contact"
            href={item.href}
            target={item.href.startsWith('https://') ? '_blank' : undefined}
            rel={item.href.startsWith('https://') ? 'noreferrer' : undefined}
          >
            <span>{t(item.label)}</span>
            <p>{item.value}</p>
          </a>
        ))}
      </div>

      <form className="inquiry-form" onSubmit={handleInquirySubmit}>
        <label>
          <span>{t('Name')}</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          <span>{t('Email')}</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>{t('Phone / WhatsApp')}</span>
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label>
          <span>{t('Event type')}</span>
          <select name="eventType" defaultValue="" required>
            <option value="" disabled>{t('Select an event type')}</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>{t(service.title)}</option>
            ))}
          </select>
        </label>
        <label>
          <span>{t('Event date')}</span>
          <input name="eventDate" type="date" />
        </label>
        <label>
          <span>{t('City / venue')}</span>
          <input name="location" autoComplete="address-level2" />
        </label>
        <label>
          <span>{t('Expected attendees')}</span>
          <input name="attendees" type="number" min="1" inputMode="numeric" />
        </label>
        <label>
          <span>{t('Estimated budget')}</span>
          <input name="budget" type="text" />
        </label>
        <label className="form-field-full">
          <span>{t('Event brief')}</span>
          <textarea name="brief" rows="5" />
        </label>
        <div className="form-field-full">
          <button className="button button-primary" type="submit">{t('OPEN EMAIL DRAFT')}</button>
        </div>
      </form>
    </section>
  )
}
