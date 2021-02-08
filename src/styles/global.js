import { createGlobalStyle } from 'styled-components'
import reset from './reset'
import grid from './grid'

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${grid}
  :root {
    font-size: 16px;
    --header-font: Poppins;
    --body-font: Raleway;
    --body-color: #6e7078;
    --header-color: #1c1d1f;
    --highlight: #e02d2d;
    --yellow: #FFEE00;
  }

  body {
    color: var(--body-color);
    min-height: 100vh;
    scroll-behavior: smooth;
    font-family: var(--body-font), -apple-system, BlinkMacSystemFont, sans-serif, "Apple Color Emoji";
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -.022em;
    text-rendering: optimizeLegibility;
    background-color: #F1F1F1;
  }

  a {
    transition: all 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
    
    &:not([class]) {
      text-decoration-skip-ink: auto;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1em;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1.875rem;
    font-family: var(--header-font), sans-serif;
    font-weight: 900;
    line-height: 1.2;
    color: var(--header-color);
  }

  h1 {
    font-size: calc(1.375rem + 1.5vw);
  }
  h2 {
    font-size: calc(1.325rem + .7709vw);
  }
  h3 {
    font-size: calc(1.3rem + .6vw);
  }
  h4 {
    font-size: calc(1.275rem + .3vw);
  }
  h5 {
    font-size: 1.25rem;
  }
  h6 {
    font-size: 1rem;
  }
  
  ::selection {
    color: #FFF;
    background: var(--highlight);
  }

  // Helpers
  .d-flex {
    display: flex;
  }

  .pd-0 {
    padding: 0;
  }

  .mb-sm-40 {
    @media (max-width: 767.98px) {
      margin-bottom: 2.5rem;
    }
  }

  .verticalSpacer {
    padding-top: 4.375rem;
    padding-bottom: 4.375rem;

    @media (min-width: 576px) {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }

    @media (min-width: 768px) {
      padding-top: 5.25rem;
      padding-bottom: 5.25rem;
    }

    @media (min-width: 992px) {
      padding-top: 6.25rem;
      padding-bottom: 6.25rem;
    }
    
    @media (min-width: 1200px) {
      padding-top: 8.25rem;
      padding-bottom: 8.25rem;
    }
  }
  
  .bottomSpacer {
    padding-bottom: 4.375rem;

    @media (min-width: 576px) {
      padding-bottom: 5rem;
    }

    @media (min-width: 768px) {
      padding-bottom: 5.25rem;
    }

    @media (min-width: 992px) {
      padding-bottom: 6.25rem;
    }
    
    @media (min-width: 1200px) {
      padding-bottom: 8.25rem;
    }
  }

  // General
  .sectionHeadings {
    padding: 0 2.5rem;
    font-weight: bold;
    letter-spacing: -0.02em;
  }

  .baseBox {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #FFF;
    border-radius: 20px;

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

export default GlobalStyles
