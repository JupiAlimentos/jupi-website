import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/seo'
import Hero from '../components/HeroContainer'
import Highlights from '../components/Highlights'
import Meet from '../components/Meet'
import SocialActions from '../components/SocialActions'

import bgImage from '../images/hero-background.jpg'

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <Hero
      srcMedia={bgImage}
      heroTag='Família Jupi'
      heroTitle='Produtos de alta qualidade para os consumidores mais exigentes'
    />
    <Highlights />
    <Meet />
    <SocialActions />
  </Layout>
)

export default IndexPage
