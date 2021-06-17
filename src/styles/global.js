import { createGlobalStyle } from 'styled-components'
import reset from './reset'
import grid from './grid'
import helpers from './helpers'
import general from './general'

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${grid}
  ${helpers}
  ${general}

  :root {
    font-size: 16px;
    --header-font: Poppins;
    --body-font: Raleway;
    --body-color: #6e7078;
    --header-color: #1c1d1f;
    --highlight: #e02d2d;
    --yellow: #FFEE00;
    --bdr-40: 2.5rem;
    --bdr-20: 1.25rem;
    --bdr-8: 0.5rem;
  }

  body {
    margin-top: 5.625rem;
    color: var(--body-color);
    min-height: 100vh;
    scroll-behavior: smooth;
    font-family: var(--body-font), -apple-system, BlinkMacSystemFont, sans-serif, "Apple Color Emoji";
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -.022em;
    text-rendering: optimizeLegibility;
    background-color: #F1F1F1;

    @media (max-width: 991.98px) {
      margin-top: 4.688rem;
    }
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

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1.425rem;
    font-family: var(--header-font), sans-serif;
    font-weight: 900;
    line-height: 1.2;
    color: var(--header-color);
  }

  h1 {
    font-size: calc(1.375rem + 1.5vw);
  }
  h2 {
    font-size: calc(1.425rem + .7709vw);
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
`

export default GlobalStyles
