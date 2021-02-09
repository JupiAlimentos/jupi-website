import styled from 'styled-components'
import { Link } from 'gatsby'

export const ButtonWrapper = styled(Link)`
  display: inline-block;
  padding: 1rem 1.75rem;
  font-size: 0.813rem;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5.625rem;

  &.primaryButton {
    color: hsla(220, 5%, 10%, 0.84);
    background-color: var(--yellow);

    &:hover {
      color: #fff;
      background-color: var(--highlight);
    }
  }

  &.secondaryButton {
    color: hsla(220, 5%, 10%, 0.84);
    background-color: #fff;

    &:hover {
      color: #fff;
      background-color: var(--header-color);
    }
  }

  @media (min-width: 768px) {
    font-size: 0.938rem;
  }
`
