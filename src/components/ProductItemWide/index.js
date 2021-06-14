import React from 'react'
import Button from '../Button'

import {
  ProductItemWideWrapper,
  ProductItemWideTitle,
  ProductItemWideImage,
  ProductItemWideDescription
} from './style'

const ProductItemWide = ({ children, title, description, slug }) => (
  <div className='col-12'>
    <ProductItemWideWrapper>
      <div className='row'>
        <div className='col-lg-6'>
          <ProductItemWideTitle>{title}</ProductItemWideTitle>
          <ProductItemWideDescription>{description}</ProductItemWideDescription>
          <Button
            slug={slug}
            buttonClass='primaryButton mt-auto'
            buttonTitle={title}
          >
            SAIBA MAIS
          </Button>
        </div>
        <div className='col-lg-6'>
          <ProductItemWideImage>{children}</ProductItemWideImage>
        </div>
      </div>
    </ProductItemWideWrapper>
  </div>
)

export default ProductItemWide
