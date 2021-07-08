import styled from 'styled-components'

export const ProductItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 40px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  transition: opacity 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
  }
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
