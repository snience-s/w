import { Fragment } from 'react'

export default function PhoneLinks({ phones }) {
  return (
    <>
      {phones.map((phone, index) => (
        <Fragment key={phone.href}>
          {index > 0 && ' / '}
          <a href={phone.href}><bdi dir="ltr">{phone.value}</bdi></a>
        </Fragment>
      ))}
    </>
  )
}
