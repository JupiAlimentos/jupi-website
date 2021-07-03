import styled from 'styled-components'
import { Link } from 'gatsby'

export const PaginationWrapper = styled.ul`
  margin-top: 2.5rem;
  display: flex;
  padding-left: 0;
  list-style: none;
`

export const PaginationItem = styled.li`
  margin: 0 5px;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  p {
    padding: 0.625rem 1rem;
    color: var(--header-color);
  }
`

export const PaginationLink = styled(Link)`
  position: relative;
  display: block;
  color: var(--header-color);
  padding: 0.625rem 2.125rem;
  text-decoration: none;
  background-color: #fff;
  border-radius: 5.625rem;

  &:hover,
  &.active {
    color: #fff;
    background-color: var(--header-color);
  }
`
