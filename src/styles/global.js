import { createGlobalStyle } from 'styled-components'
import reset from './reset'
import grid from './grid'

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${grid}
  :root {
    font-size: 16px;
    --body: #1C1D1F;
    --highlight: #e02d2d;
    --yellow: #FFEE00;
  }

  body {
    color: var(--body);
    min-height: 100vh;
    scroll-behavior: smooth;
    font-family: Lato, -apple-system, BlinkMacSystemFont, sans-serif, "Apple Color Emoji";
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -.022em;
    text-rendering: optimizeLegibility;
    background-color: #F1F1F1;
  }

  a {
    transition: color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
    
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
    font-family: Lato, sans-serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.875rem;
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
  .pd-0 {
    padding: 0;
  }

  .verticalSpacer {
    padding-top: calc(13vw + 6px);
    padding-bottom: calc(13vw + 6px);

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
    
    @media (min-width: 1386px) {
      padding-top: 10rem;
      padding-bottom: 10rem;
    }
  }
`
export default GlobalStyles
