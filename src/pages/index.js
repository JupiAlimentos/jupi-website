import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Hero from '../components/HeroContainer'

import bgImage from '../images/hero-background.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Hero
      srcMedia={bgImage}
      heroTag={'Família Jupi'}
      heroTitle='Produtos de alta qualidade para os consumidores mais exigentes'
    />
    <div className='container'>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quod
        sint natus? Enim officia iure consequatur iste tempore ipsam neque
        perspiciatis vero illum, repellat voluptas nobis vitae magni explicabo
        laudantium?
      </h1>
    </div>
  </Layout>
)

export default IndexPage
