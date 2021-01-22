import React from 'react'

import { HeroWrapper, HeroSource } from './style'

const Hero = ({ srcMedia }) => (
  <HeroWrapper>
    <HeroSource src={srcMedia} />
  </HeroWrapper>
)

export default Hero
