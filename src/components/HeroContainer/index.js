import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Button from '../Button'

import {
  HeroWrapper,
  HeroSource,
  HeroTag,
  HeroTitle,
  HeroProducts
} from './style'

const Hero = ({ srcMedia, heroTag, heroTitle }) => {
  return (
    <HeroWrapper>
      <HeroSource src={srcMedia} />
      <div className='container'>
        <div className='row'>
          <div className='col-11 col-lg-10 pd-0'>
            <HeroTag>{heroTag}</HeroTag>
            <HeroTitle>{heroTitle}</HeroTitle>
          </div>
          <HeroProducts className='col-12'>
            <StaticImage
              src='../../images/hero-products.png'
              alt='Família Jupi'
              placeholder='blurred'
              layout='fullWidth'
            />
          </HeroProducts>
        </div>
        <Button
          slug='/produtos'
          buttonClass='primaryButton'
          buttonTitle='Veja todos os produtos'
        >
          Veja todos os produtos
        </Button>
      </div>
    </HeroWrapper>
  )
}

export default Hero
