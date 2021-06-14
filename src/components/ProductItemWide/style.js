import styled from 'styled-components'

export const ProductItemWideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: var(--bdr-20);
  margin-bottom: 40px;
  padding-bottom: 0 !important;
  text-align: center;

  @media (max-width: 575.98px) {
    padding: 3rem 2rem;
  }

  @media (min-width: 576px) {
    padding: 3rem;
  }

  @media (max-width: 991.98px) {
    a {
      margin-bottom: 2.5rem;
    }
  }

  @media (min-width: 992px) {
    text-align: left;
  }

  @media (min-width: 1200px) {
    padding: 3.75rem;
  }

  @media (min-width: 1400px) {
    padding: 5rem;
  }
`

export const ProductItemWideImage = styled.div`
  max-height: 360px;
  overflow: hidden;

  .gatsby-image-wrapper {
    margin: 0 auto;
    width: 100%;
    background-color: transparent;
  }
`

export const ProductItemWideTitle = styled.h2`
  font-weight: 600;
  font-size: 1.875rem;
  margin-bottom: 2.5rem;
`

export const ProductItemWideDescription = styled.p`
  margin-bottom: 2.5rem;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.688rem;
`
