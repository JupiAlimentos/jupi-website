import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/seo'
import Cover from '../components/Cover'

const About = () => (
  <Layout>
    <Seo title='Sobre Nós' />
    <section className='container mt-main'>
      <Cover>
        <StaticImage
          src='../images/cover-contact-jupi.jpg'
          alt='Visite a Jupi Alimentos'
          placeholder='blurred'
          layout='fullWidth'
        />
      </Cover>
    </section>
    <div className='container verticalSpacer txt-center'>
      <div className='row'>
        <div className='col-12 col-lg-10 offset-lg-1'>
          <h1 className='mainTitle'>Conheça a nossa história</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default About
