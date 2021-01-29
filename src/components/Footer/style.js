import styled from 'styled-components'
import { Link } from 'gatsby'

export const FooterWrapper = styled.footer`
  text-align: center;
  color: #fff;
  background: linear-gradient(90deg, #420d0d 0%, #6b1515 50.74%, #420d0d 100%);

  padding-top: 4.375rem;
  padding-bottom: 6.875rem;

  div.container > div.row > div:nth-child(1) {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 73px;
    z-index: 0;
  }

  small {
    margin-top: 34px;
    font-size: 0.8625rem;
    opacity: 0.75;
  }

  @media (min-width: 576px) {
    padding-top: 5rem;
    padding-bottom: 7.5rem;
  }

  @media (min-width: 768px) {
    padding-top: 5.25rem;
    padding-bottom: 7.75rem;
  }

  @media (min-width: 992px) {
    padding-top: 6.25rem;
    padding-bottom: 6.25rem;
  }
`

export const MenuBrand = styled(Link)`
  position: absolute;
  display: block;
  top: 0;
  left: 50%;
  margin-left: -65.57px;
  z-index: 1;

  img {
    display: block;
    width: 131.15px;
    height: 96px;
  }
`

export const MenuList = styled.ul`
  @media (max-width: 991.98px) {
    li {
      margin-bottom: 1.4rem;
    }
  }
  @media (min-width: 992px) {
    display: flex;
    height: 100%;

    li {
      display: flex;
      align-items: center;
    }
  }
`

export const MenuLeft = styled.nav`
  li {
    margin-right: 32px;

    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: 991.98px) {
    display: none;
    visibility: hidden;
  }
`

export const MenuRight = styled.nav`
  li {
    margin-left: 32px;

    &:first-child {
      margin-left: 0;
    }
  }

  @media (max-width: 991.98px) {
    display: none;
    visibility: hidden;
  }
`

export const MenuLink = styled(Link)`
  font-family: Raleway, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.231px;
  opacity: 0.88;

  &:hover,
  &.active {
    color: var(--yellow);
  }

  @media (min-width: 992px) {
    font-size: 0.875rem;
    opacity: 1;
  }
`
