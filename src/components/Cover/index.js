import React from 'react'

import { CoverBoxImage } from './style'

const Cover = ({ children, className }) => (
  <CoverBoxImage className={className}>{children}</CoverBoxImage>
)

export default Cover
