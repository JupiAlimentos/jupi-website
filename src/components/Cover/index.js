import React from 'react'

import { CoverBoxImage } from './style'

const Cover = ({ children }) => (
  <CoverBoxImage className='mt-90 bigRoundedCorner'>{children}</CoverBoxImage>
)

export default Cover
