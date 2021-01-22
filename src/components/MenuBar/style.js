import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuHeader = styled.header`
  position: relative;
  height: 90px;
  background-color: aquamarine;
`

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

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
  }
`

export const MenuLink = styled(Link)`
  font-size: 0.875rem;
`
