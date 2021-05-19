import styled from 'styled-components'

export const ProductItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: var(--bdr-20);
  text-align: center;
  padding: 5rem;
`

export const ProductItemImage = styled.div`
  .gatsby-image-wrapper {
    margin: 0 auto;
    max-width: 100%;
    background-color: transparent;
  }
`

export const ProductItemTitle = styled.h2`
  font-weight: 600;
  font-size: 1.875rem;
`

export const ProductItemDescription = styled.p`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.688rem;
`
