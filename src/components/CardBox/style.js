import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

export const CardBoxWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  border-radius: var(--bdr-12);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  transition: opacity 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
  }

  img {
    border-radius: 12px 12px 0 0;
  }

  .linkText {
    margin-top: auto;
    padding-bottom: 1.875rem;
    padding-left: 1.875rem;
  }

  @media (min-width: 576px) {
    border-radius: var(--bdr-16);

    img {
      border-radius: 16px 16px 0 0;
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
  margin-bottom: 0;
`
