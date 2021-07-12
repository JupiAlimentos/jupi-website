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
    --bdr-20: 1.25rem;
    --bdr-16: 1rem;
    --bdr-12: 0.75rem;
    --bdr-8: 0.5rem;
  }

  body {
    margin-top: 5.625rem;
    color: rgba(110, 112, 120, 0.7);
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

  p {
    margin-bottom: 1.5rem;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  code {
    word-wrap: break-word;
  }

  dl, ol, ul {
    margin-top: 0;
    margin-bottom: 1rem;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 1.875rem;
  }

  ol {
    list-style-type: decimal;
  }
  
  ul {
    list-style-type: disc;
    
    ul {
      list-style-type: circle;
    }
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

  blockquote {
    background: #f9f9f9;
    border-left: 10px solid var(--highlight);
    margin: 0 0 1.5rem;
    padding: 1.5rem 0.625rem 0.1rem 1rem;
    border-radius: var(--bdr-8);
  }

  a {
    color: var(--highlight);
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
    font-family: var(--header-font), sans-serif;
    font-weight: 900;
    line-height: 1.2;
    color: var(--header-color);
    margin-bottom: 1.3rem;
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
