import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/seo'
import Cover from '../components/Cover'
import ContactInfo from '../components/ContactInfo'

const Contact = () => (
  <Layout>
    <Seo title='Contato' />
    <section className='container mt-40'>
      <section className='container'>
        <h2 className='sidePdTxt topSectionHeadings'>
          Visite a Jupi Alimentos
        </h2>
      </section>
      <Cover>
        <StaticImage
          src='../images/cover-contact-jupi.jpg'
          alt='Visite a Jupi Alimentos'
          placeholder='blurred'
          layout='fullWidth'
        />
      </Cover>
      <p className='sidePdTxt infoCover'>
        Av. Prefeito Wall Ferraz, 13619 - Parque Jacinta, Teresina - PI,
        64035-180
      </p>
    </section>
    <section className='container'>
      <h2 className='sidePdTxt topSectionHeadings mb-0'>
        Fale com a Jupi Alimentos <br />
        <a href='tel:+558621061710' data-telegram='telegram'>
          (86) 2106-1710
        </a>
      </h2>
      <ContactInfo />
    </section>
  </Layout>
)

export default Contact
