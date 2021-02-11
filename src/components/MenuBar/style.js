import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuInput = styled.input`
  display: none;

  @media (max-width: 991.98px) {
    &:checked ~ a {
      top: 40px;
    }
    &:checked ~ label .menuBox {
      position: fixed;
      background-color: var(--header-color);
      box-shadow: 0 0 0 140vw #fff, 0 0 0 140vh #fff;
    }

    &:checked ~ label .menuBtn {
      transform: rotate(45deg);
    }

    &:checked ~ label .menuBtn:after {
      transform: rotate(90deg);
      bottom: 0;
    }

    &:checked ~ label .menuBtn:before {
      transform: rotate(90deg);
      top: 0;
    }

    &:checked ~ label .menuBtn,
    &:checked ~ label .menuBtn:after,
    &:checked ~ label .menuBtn:before {
      background-color: #fff;
    }

    &:checked ~ div.wrapperMenu {
      opacity: 1;
      z-index: 5;
      transform: translate(-50%, -50%);
    }
  }
`

export const MenuLabel = styled.label`
  @media (max-width: 991.98px) {
    .menuBox {
      cursor: pointer;
      position: fixed;
      left: 50%;
      bottom: 24px;
      width: 50px;
      height: 50px;
      margin-left: -25px;
      backdrop-filter: saturate(180%) blur(20px);
      background-color: rgba(255, 255, 255, 0.7);
      border-radius: 50%;
      box-shadow: 0 0 0 0 #fff, 0 0 0 0 #fff;
      transition: box-shadow 1.1s cubic-bezier(0.19, 1, 0.22, 1);
      z-index: 4;

      &:hover {
        box-shadow: 0 0 0 4px #fff, 0 0 0 4px #fff;
      }

      .menuBtn {
        position: relative;
        top: 24px;
        left: 13px;
        width: 24px;
        height: 2px;
        background-color: var(--header-color);
        display: block;
        transform-origin: center;
        transition: 0.5s ease-in-out;

        &:after,
        &:before {
          content: '';
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: var(--header-color);
          transition: 0.5s ease-in-out;
        }

        &:before {
          top: -8px;
        }

        &:after {
          bottom: -8px;
        }
      }
    }
  }
`

export const MenuHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px;
  background-color: transparent;
  z-index: 1;

  @media (max-width: 991.98px) {
    display: flex;
    justify-content: center;
    height: 75px;
  }
`

export const MenuBrand = styled(Link)`
  position: absolute;
  display: block;
  top: 10px;
  left: 50%;
  margin-left: calc(-95.63px / 2);
  z-index: 4;

  img {
    display: block;
    width: 95.63px;
    height: 70px;
  }

  @media (max-width: 991.98px) {
    position: fixed;
    top: 7.5px;
    margin-left: calc(-81.97px / 2);

    img {
      width: 81.97px;
      height: 60px;
    }
  }
`

export const MenuBackground = styled.div`
  @media (max-width: 991.98px) {
    position: fixed;
    border-radius: 0 0 10px 10px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-top: none;
    backdrop-filter: saturate(180%) blur(20px);
    background-color: rgba(255, 255, 255, 0.62);
    width: 100%;
    height: 75px;
    z-index: 0;
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 575.98px) {
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }

  @media (min-width: 992px) {
    opacity: 0;
    visibility: hidden;
  }
`

export const InnerBg = styled.div`
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border-radius: 0 0 10px 10px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-top: none;
    backdrop-filter: saturate(180%) blur(20px);
    background-color: rgba(255, 255, 255, 0.62);
  }
`

export const MenuWrapper = styled.div`
  display: flex;

  @media (min-width: 992px) {
    display: flex;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 991.98px) {
    color: var(--header-color);
    position: fixed;
    top: 53%;
    left: 50%;
    width: 100%;
    flex-direction: column;
    font-size: 2.8125rem;
    font-size: calc(24px + (32 - 24) * (100vw - 375px) / (1386 - 375));
    text-align: center;
    line-height: 1.2;
    opacity: 0;
    transform: translate(-50%, 200%);
    transition-property: transform;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    transition-delay: 0.2s;
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
  @media (min-width: 992px) {
    li {
      margin-right: 32px;

      &:first-child {
        margin-left: 40px;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
`

export const MenuRight = styled.nav`
  @media (min-width: 992px) {
    li {
      margin-left: 32px;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 40px;
      }
    }
  }
`

export const MenuLink = styled(Link)`
  font-family: var(--body-font), sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.231px;
  opacity: 0.88;

  &:hover,
  &.active {
    color: var(--highlight);
  }

  @media (min-width: 992px) {
    font-weight: 600;
    font-size: 0.875rem;
    opacity: 1;
  }
`
