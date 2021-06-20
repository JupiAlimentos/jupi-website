import styled from 'styled-components'

export const ProductItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 40px;
`

export const ProductItemImage = styled.div`
  .gatsby-image-wrapper {
    margin: 0 auto;
    max-width: 100%;
    background-color: transparent;
  }

  @media (max-width: 991.98px) {
    margin-bottom: 2.5rem;
  }
`

export const ProductItemTitle = styled.h2`
  font-weight: 600;
  font-size: calc(1.425rem + 0.3vw);
  margin-bottom: 2.5rem;
`

export const ProductItemDescription = styled.p`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.688rem;

  @media (max-width: 991.98px) {
    display: none;
  }
`
