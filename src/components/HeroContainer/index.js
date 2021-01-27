import React from 'react'

import { HeroWrapper, HeroSource, HeroTag, HeroTitle } from './style'

const Hero = ({ srcMedia, heroTag, heroTitle }) => (
  <HeroWrapper>
    <HeroSource src={srcMedia} />
    <div className='container'>
      <div className='row'>
        <div className='col-8 pd-0'>
          <HeroTag>{heroTag}</HeroTag>
          <HeroTitle>{heroTitle}</HeroTitle>
        </div>
      </div>
    </div>
  </HeroWrapper>
)

export default Hero
