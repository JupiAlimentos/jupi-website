import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Cover = () => (
  <>
    <section className='container'>
      <h2 className='sectionHeadings'>Ações Sociais</h2>
    </section>
    <StaticImage
      src='../../images/cover-contact-jupi.jpg'
      alt='Jupi'
      placeholder='blurred'
      layout='fixed'
    />
  </>
)

export default Cover
