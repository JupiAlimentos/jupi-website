import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

export const CardBoxWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  border-radius: var(--bdr-12);

  img {
    border-radius: 12px 12px 0 0;
  }

  .linkText {
    margin-top: auto;
    padding-bottom: 1.875rem;
    padding-left: 1.875rem;
  }

  @media (max-width: 767.98px) {
    margin-bottom: 2.5rem;

    [class^='col-']:last-child &,
    [class*=' col-']:last-child & {
      margin-bottom: 0;
    }
  }

  @media (min-width: 576px) {
    border-radius: var(--bdr-16);

    img {
      border-radius: 16px 16px 0 0;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    [class^='col-']:first-child &,
    [class*=' col-']:first-child & {
      margin-bottom: 2.5rem;
    }
  }

  @media (min-width: 992px) {
    border-radius: var(--bdr-20);

    img {
      border-radius: 20px 20px 0 0;
    }
  }
`

export const CardBoxImage = styled(GatsbyImage)`
  border-radius: 12px 12px 0 0;
  background-color: var(--header-color);
`

export const CardBoxWrapperInfo = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 1.063rem;
`

export const CardBoxTitle = styled.h4`
  font-weight: 600;
  font-size: 1.188rem;
  letter-spacing: 0.01em;
  padding: 1.875rem 1.875rem 0;
  margin-bottom: 0;
`

export const CardBoxInfo = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  padding: 0 1.875rem;
  margin-bottom: 1.063rem;
`
