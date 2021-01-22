import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background-color: transparent;
  z-index: 1;
`

export const MenuBrand = styled(Link)`
  position: absolute;
  display: block;
  top: 10px;
  left: 50%;
  margin-left: -47.815px;
  z-index: 2;

  img {
    display: block;
    width: 95.63px;
    height: 70px;
  }
`

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  border-radius: 0 0 10px 10px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-top: none;
  background-color: #fff;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.72);

  ul {
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

    &:first-child {
      margin-left: 20px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`

export const MenuRight = styled.nav`
  li {
    margin-left: 32px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 20px;
    }
  }
`

export const MenuLink = styled(Link)`
  font-family: Raleway, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.231px;
  opacity: 0.8;

  &:hover,
  &.active {
    color: var(--highlight);
  }
`
