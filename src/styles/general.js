import { css } from 'styled-components'

export const general = css`
  .sectionHeadings {
    padding: 0 2.5rem;
    font-weight: bold;
    letter-spacing: -0.02em;
  }

  .gradientDarkRed {
    border-radius: var(--bdr-20) var(--bdr-20) 0 0;
    background: linear-gradient(90deg, #420d0d 0%, #6b1515 100%);
  }

  .baseBox {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    border-radius: var(--bdr-20);
    overflow: hidden;

    &.dark {
      .titleBox,
      .infoBox {
        color: #fff;

        @media (min-width: 1200px) {
          width: 63%;
        }
      }

      .infoBox {
        margin-bottom: 1rem;
        opacity: 0.73;
      }
    }

    @media (max-width: 1199.98px) {
      padding: 2rem;
    }

    @media (min-width: 1200px) {
      padding: 2.5rem;
    }
  }

  .baseBox > [class^='ButtonWrapper'],
  .baseBox > [class*='_ButtonWrapper'] {
    margin-top: auto;
    align-self: auto;
    text-align: center;
    font-size: 0.875rem;
  }

  .titleBox {
    margin-bottom: 0.625rem;
    font-weight: 600;
    font-size: 1.438rem;
  }

  .infoBox {
    margin-bottom: 2.5rem;
    font-size: 0.938rem;

    @media (min-width: 1400px) {
      font-size: 1.125rem;
    }
  }
`

export default general
