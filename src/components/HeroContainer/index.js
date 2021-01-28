import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { HeroWrapper, HeroSource, HeroTag, HeroTitle } from './style'

const Hero = ({ srcMedia, heroTag, heroTitle }) => {
  const { heroImage } = useStaticQuery(
    graphql`
      query {
        heroImage: file(relativePath: { eq: "hero-products.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <HeroWrapper>
      <HeroSource src={srcMedia} />
      <div className='container'>
        <div className='row'>
          <div className='col-10 pd-0'>
            <HeroTag>{heroTag}</HeroTag>
            <HeroTitle>{heroTitle}</HeroTitle>
          </div>
          <div className='col-12 verticalSpacer'>
            <Img fluid={heroImage.childImageSharp.fluid} alt='Família Jupi' />
          </div>
        </div>
      </div>
    </HeroWrapper>
  )
}

export default Hero
