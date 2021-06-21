import styled from 'styled-components'

export const ProductItemWideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 40px;
  padding: 3rem 2rem;
  padding-bottom: 0 !important;
  text-align: center;
  border-radius: var(--bdr-12);

  @media (min-width: 576px) {
    padding: 3rem;
    border-radius: var(--bdr-16);
  }

  @media (max-width: 991.98px) {
    a {
      margin-bottom: 2.5rem;
    }
  }

  @media (min-width: 992px) {
    text-align: left;
    border-radius: var(--bdr-20);
  }

  @media (min-width: 1200px) {
    padding: 3.75rem;
  }

  @media (min-width: 1400px) {
    padding: 5rem;
  }
`

export const ProductItemWideImage = styled.div`
  max-height: 180px;
  overflow: hidden;

  .gatsby-image-wrapper {
    margin: 0 auto;
    width: 100%;
    background-color: transparent;
  }

  @media (min-width: 768px) {
    max-height: 360px;
  }
`

export const ProductItemWideTitle = styled.h2`
  font-weight: 600;
  font-size: calc(1.425rem + 0.3vw);
  margin-bottom: 1.5rem;
`

export const ProductItemWideDescription = styled.p`
  margin-bottom: 2.5rem;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.688rem;

  @media (max-width: 991.98px) {
    display: none;
  }
`
