import React from 'react'
import { Link } from 'gatsby'

import {
  CardBoxWrapper,
  CardBoxImage,
  CardBoxWrapperInfo,
  CardBoxTitle,
  CardBoxInfo
} from './style'

const CardBox = ({ imageCard, titleCard, infoCard }) => (
  <CardBoxWrapper>
    <CardBoxImage fluid={imageCard} alt='Família Jupi' />
    <CardBoxWrapperInfo>
      <CardBoxTitle>{titleCard}</CardBoxTitle>
    </CardBoxWrapperInfo>
    <CardBoxWrapperInfo>
      <CardBoxInfo>{infoCard}</CardBoxInfo>
    </CardBoxWrapperInfo>
    <Link className='linkText' to='/acoes'>
      Veja mais <span className='arrow' />
    </Link>
  </CardBoxWrapper>
)

export default CardBox
