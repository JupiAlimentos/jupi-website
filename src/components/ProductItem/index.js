import React from 'react'
import Button from '../Button'

import {
  ProductItemWrapper,
  ProductItemTitle,
  ProductItemImage,
  ProductItemDescription
} from './style'

const ProductItem = ({ children, title, description, slug }) => (
  <div className='col-lg-6 d-flex'>
    <ProductItemWrapper>
      <ProductItemTitle>{title}</ProductItemTitle>
      <ProductItemImage>{children}</ProductItemImage>
      <ProductItemDescription>{description}</ProductItemDescription>
      <Button
        slug={slug}
        buttonClass='primaryButton mt-auto'
        buttonTitle='Conheça o flocão de milho e arroz'
      >
        SAIBA MAIS
      </Button>
    </ProductItemWrapper>
  </div>
)

export default ProductItem
