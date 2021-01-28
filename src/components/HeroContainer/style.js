import styled from 'styled-components'

export const HeroWrapper = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 8.75rem 0 3.75rem;
  margin: -90px auto 0;
  background-color: transparent;
  z-index: 0;

  @media (min-width: 576px) {
    padding: 9.375rem 0 4.375rem;
  }

  @media (min-width: 768px) {
    padding: 10rem 0 5rem;
  }

  @media (min-width: 992px) {
    padding: 10.625rem 0 5.625rem;
  }

  @media (min-width: 1200px) {
    padding: 12.25rem 0 6.25rem;
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
  z-index: -5;
`

export const HeroTag = styled.span`
  display: block;
  margin-bottom: 0.625rem;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
  text-align: center;
  color: hsla(220, 5%, 12%, 0.88);
`

export const HeroTitle = styled.h1`
  font-family: Lato;
  font-weight: bold;
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--body);
  font-size: 1.568rem;

  @media (min-width: 376px) {
    font-size: calc(1.499rem + 1.5vw);
  }

  @media (min-width: 576px) {
    font-size: calc(1.7rem + 1.5vw);
  }

  @media (min-width: 768px) {
    font-size: calc(1.96rem + 1.5vw);
  }

  @media (min-width: 992px) {
    font-size: calc(2rem + 1.5vw);
  }

  @media (min-width: 1200px) {
    font-size: calc(2rem + 2.5vw);
  }
`

export const HeroProducts = styled.div``
