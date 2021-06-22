import React from 'react'
import { Link } from 'gatsby'

import {
  CardBoxWrapper,
  CardBoxWrapperInfo,
  CardBoxTitle,
  CardBoxInfo
} from './style'

const CardBox = ({ children, titleCard, infoCard, slug }) => (
  <CardBoxWrapper>
    {children}
    <CardBoxWrapperInfo>
      <CardBoxTitle>{titleCard}</CardBoxTitle>
    </CardBoxWrapperInfo>
    <CardBoxWrapperInfo>
      <CardBoxInfo>{infoCard}</CardBoxInfo>
    </CardBoxWrapperInfo>
    <Link className='linkText' to={slug} title={titleCard}>
      Veja mais <span className='arrow' />
    </Link>
  </CardBoxWrapper>
)

export default CardBox
