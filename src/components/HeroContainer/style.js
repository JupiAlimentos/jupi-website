import styled from 'styled-components'

export const HeroWrapper = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  text-align: center;
  padding: calc(5vh + 96px) 0;
  margin: -90px auto 0;
  background-color: transparent;
  z-index: -1;

  @media (min-width: 576px) {
    padding: calc(7vh + 6px) 0;
  }

  @media (min-width: 768px) {
    padding: calc(10vh + 6px) 0;
  }

  @media (min-width: 992px) {
    padding: calc(13vh + 6px) 0;
  }

  @media (min-width: 1200px) {
    padding: calc(13vh + 96px) 0 calc(13vh + 6px);
  }
`

export const HeroSource = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -1;
`

export const HeroTag = styled.span`
  margin-bottom: 0.625rem;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
  text-align: center;
`

export const HeroTitle = styled.h1`
  font-family: Lato;
  font-weight: bold;
  font-size: 67px;
  letter-spacing: -0.02em;
  line-height: 73px;
  text-align: center;
  color: hsla(220, 5, 12, 0.5);
`
