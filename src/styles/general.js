import { css } from 'styled-components'

export const general = css`
  // Headings
  .sidePdTxt {
    padding-right: 2.5rem;
    padding-left: 2.5rem;
  }

  .sectionHeadings,
  .topSectionHeadings {
    font-weight: bold;
    letter-spacing: -0.02em;
  }

  .topSectionHeadings {
    padding-top: 5.625rem;

    @media (max-width: 767.98px) {
      padding-top: 3.75rem;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
  }

  .infoCover {
    margin-top: 1.875rem;
    font-size: 1.5rem;
    line-height: 1.688rem;
  }

  .gradientDarkRed {
    border-radius: var(--bdr-20) var(--bdr-20) 0 0;
    background: linear-gradient(90deg, #420d0d 0%, #6b1515 100%);
  }

  // Base Box
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

  // Link text
  .linkText {
    display: flex;
    margin-right: auto;
    position: relative;
    padding-right: 13px;
    font-weight: 600;
    font-size: 0.938rem;
    color: var(--highlight);

    .dark & {
      display: inline-block;
      color: var(--yellow);
      font-weight: 500;

      & span.arrow {
        opacity: 0.75;
      }

      & span.arrow:before,
      & span.arrow:after {
        border-color: var(--yellow);
      }
    }

    span.arrow {
      position: absolute;
      right: 0;
      top: 7px;
      width: 8px;
      height: 8px;
      box-sizing: border-box;
      opacity: 1;
      transform: rotate(45deg);

      &:before {
        content: '';
        width: 100%;
        height: 100%;
        border-width: 2px 2px 0 0;
        border-style: solid;
        transition: 0.2s ease;
        display: block;
        transform-origin: 100% 0;
      }

      &:after {
        content: '';
        float: left;
        position: relative;
        top: -100%;
        width: 100%;
        height: 50%;
        border-width: 0 2px 0 0;
        border-style: solid;
        opacity: 0;
        transform: translate(-1%, 30%) rotate(45deg);
        transform-origin: 100% 0;
        transition: 0.3s ease;
      }
    }
    &:hover {
      padding-right: 20px;

      span.arrow:after {
        height: 140%;
        transform-origin: 107% -15%;
        opacity: 1;
      }
    }
  }
`

export default general
