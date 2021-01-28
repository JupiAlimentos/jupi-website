import React from 'react'

import { ButtonWrapper } from './style'

const Button = ({ children, slug, buttonClass, buttonTitle }) => (
  <ButtonWrapper to={slug} className={buttonClass} title={buttonTitle}>
    {children}
  </ButtonWrapper>
)

export default Button
