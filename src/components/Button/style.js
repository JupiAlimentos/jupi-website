import styled from 'styled-components'
import { Link } from 'gatsby'

export const ButtonWrapper = styled(Link)`
  display: inline-block;
  padding: 1rem 1.75rem;
  font-size: 0.813rem;
  line-height: 16px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  border-radius: 5.625rem;
  align-self: center;

  &.primaryButton {
    color: hsla(220, 5%, 10%, 0.84);
    background-color: var(--yellow);

    &:hover {
      color: #fff;
      background-color: var(--highlight);
    }
  }

  &.secondaryButton {
    color: #fff;
    background-color: var(--header-color);

    &:hover {
      color: hsla(220, 5%, 10%, 0.84);
      background-color: #fff;
    }
  }

  &.endButton {
    @media (max-width: 767.98px) {
      align-self: auto;
    }

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  @media (min-width: 992px) {
    font-size: 0.875rem;
  }
`
