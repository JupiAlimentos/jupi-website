import React from 'react'

import contactinfos from './data'

const ContactInfo = () => (
  <div className='row innerContainer row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
    {contactinfos.map((contactinfo, i) => (
      <div className='col' key={i}>
        <div className='generalBox'>
          <h4>{contactinfo.title}</h4>
          <p>
            Entre em contato com nosso {contactinfo.title} das 8h às 18h de
            segunda a sexta.
          </p>
          <br />
          <p>Ramal: {contactinfo.ramal}</p>
          <p>
            <a href='mailto:{contactinfo.email}'>{contactinfo.email}</a>
          </p>
        </div>
      </div>
    ))}
  </div>
)

export default ContactInfo
