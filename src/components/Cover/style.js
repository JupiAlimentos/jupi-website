import styled from 'styled-components'

export const CoverBoxImage = styled.div`
  overflow: hidden;
  margin: 2rem 0;
  background-color: var(--header-color);
  border-radius: var(--bdr-12);

  img {
    border-radius: var(--bdr-12);
  }

  @media (min-width: 576px) {
    border-radius: var(--bdr-16);

    img {
      border-radius: var(--bdr-16);
    }
  }

  @media (min-width: 992px) {
    margin: 2.5rem 0;
    border-radius: var(--bdr-20);

    img {
      border-radius: var(--bdr-20);
    }
  }

  @media (min-width: 1200px) {
    margin: 3rem 0;
  }
`
