import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Hero from '../components/HeroContainer'
import Highlights from '../components/Highlights'
import Meet from '../components/Meet'

import bgImage from '../images/hero-background.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Hero
      srcMedia={bgImage}
      heroTag={'Família Jupi'}
      heroTitle='Produtos de alta qualidade para os consumidores mais exigentes'
    />
    <Highlights />
    {/* <Meet /> */}
  </Layout>
)

export default IndexPage
