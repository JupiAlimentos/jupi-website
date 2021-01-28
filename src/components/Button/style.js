import styled from 'styled-components'
import { Link } from 'gatsby'

export const ButtonWrapper = styled(Link)`
  display: inline-block;
  padding: 1.063rem 1.75rem;
  font-size: 0.813rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 1.563rem;

  &.yellowButton {
    color: hsla(220, 5%, 10%, 0.84);
    background-color: var(--yellow);

    &:hover {
      color: #fff;
      background-color: var(--highlight);
    }
  }

  @media (min-width: 768px) {
    font-size: 0.938rem;
  }
`
