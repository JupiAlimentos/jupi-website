import styled from 'styled-components'

export const HighlightsSpacer = styled.section`
  padding-top: 4.375rem;

  @media (min-width: 576px) {
    padding-top: 5rem;
  }

  @media (min-width: 768px) {
    padding-top: 5.25rem;
  }

  @media (min-width: 992px) {
    padding-top: 6.25rem;
  }

  @media (min-width: 1200px) {
    padding-top: 8.25rem;
  }
`

export const HighlightsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap !important;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-bottom: 3.375rem;
  margin-bottom: 2rem;

  & > [class^='col-'],
  & > [class*=' col-'] {
    display: flex;
    width: 100%;
  }

  @media (min-width: 576px) {
    padding-bottom: 4rem;
  }

  @media (min-width: 768px) {
    padding-bottom: 4.25rem;

    & > [class^='col-'],
    & > [class*=' col-'] {
      width: 70%;
    }
  }

  @media (min-width: 992px) {
    padding-bottom: 6.25rem;

    & > [class^='col-'],
    & > [class*=' col-'] {
      width: 47.5555555555%;
    }
  }

  @media (min-width: 1200px) {
    padding-bottom: 6.25rem;

    & > [class^='col-'],
    & > [class*=' col-'] {
      width: 38.2222222222%;
    }
  }

  @media (min-width: 1400px) {
    & > [class^='col-'],
    & > [class*=' col-'] {
      width: 32.2222222222%;
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
    /* visibility: hidden; */
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    transition: all 1s ease-in-out;
  }

  &:hover::-webkit-scrollbar-thumb {
    visibility: visible;
  }
`

export const Highlight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.75rem 1.5rem;
  text-align: center;
  border-radius: 1.25rem;
  background-color: #fff;

  & > [class^='ButtonWrapper'],
  & > [class*='_ButtonWrapper'] {
    margin-top: auto;
    align-self: center;
  }

  @media (min-width: 992px) {
    padding: 2.75rem 1.5rem;
  }

  @media (min-width: 1200px) {
    padding: 3.25rem 2rem;
  }

  @media (min-width: 1400px) {
    padding: 3.75rem 2.5rem;
  }

  .gatsby-image-wrapper {
    margin: 0 5%;
    display: block;
    margin-bottom: 0.625rem;
  }
`

export const HighlightTitle = styled.h3`
  margin-bottom: 2.5rem;
  font-weight: 600;
  font-size: 1.875rem;
`

export const HighlightWrapperInfo = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 2.375rem;
`

export const HighlightInfo = styled.p``
