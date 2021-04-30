import React from 'react'
import { Link } from 'gatsby'

import {
  CardBoxWrapper,
  CardBoxWrapperInfo,
  CardBoxTitle,
  CardBoxInfo
} from './style'

const CardBox = ({ children, titleCard, infoCard }) => (
  <CardBoxWrapper>
    {children}
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
