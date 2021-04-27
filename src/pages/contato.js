import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/seo'
import Cover from '../components/Cover'

const Contact = () => (
  <Layout>
    <Seo title='Contato' />
    <section className='container mt-40'>
      <section className='container'>
        <h2 className='sectionHeadings pt-90'>Visite a Jupi Alimentos</h2>
      </section>
      <Cover>
        <StaticImage
          src='../images/cover-contact-jupi.jpg'
          alt='Visite a Jupi Alimentos'
          placeholder='blurred'
          layout='fullWidth'
        />
      </Cover>
    </section>
  </Layout>
)

export default Contact
