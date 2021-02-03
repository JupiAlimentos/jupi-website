import styled from 'styled-components'

export const HighlightsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap !important;
  overflow-x: scroll;
  overflow-y: hidden;

  padding-top: 4.375rem;
  padding-bottom: 4.375rem;

  & > [class^='col-'],
  & > [class*=' col-'] {
    width: 90%;
  }

  @media (min-width: 576px) {
    padding-top: 5rem;
    padding-bottom: 5rem;

    & > [class^='col-'],
    & > [class*=' col-'] {
      width: 45%;
    }
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
    margin-bottom: 2rem;
    padding-top: 8.25rem;
    padding-bottom: 6.25rem;
  }

  @media (min-width: 1400px) {
    & > [class^='col-'],
    & > [class*=' col-'] {
      width: 31.3333333333%;
    }
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    visibility: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    transition: all 1s ease-in-out;
  }

  &:hover::-webkit-scrollbar-thumb {
    visibility: visible;
  }
`

export const Highlight = styled.div`
  padding: 1rem;
  text-align: center;
  border-radius: 1.25rem;
  background-color: #fff;

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    padding: 1.5rem;
  }

  @media (min-width: 1200px) {
    padding: 2rem;
  }

  @media (min-width: 1400px) {
    padding: 3.75rem 2.5rem;
  }

  .gatsby-image-wrapper {
    margin: 0 5%;
    display: block;
    margin-bottom: 10px;
  }
`

export const HighlightTitle = styled.h3`
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 30px;
`

export const HighlightInfo = styled.p`
  margin-bottom: 38px;
`
