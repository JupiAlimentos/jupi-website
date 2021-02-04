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
    width: 100%;
  }

  @media (min-width: 576px) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  @media (min-width: 768px) {
    padding-top: 5.25rem;
    padding-bottom: 5.25rem;

    & > [class^='col-'],
    & > [class*=' col-'] {
      width: 70%;
    }
  }

  @media (min-width: 992px) {
    padding-top: 6.25rem;
    padding-bottom: 6.25rem;

    & > [class^='col-'],
    & > [class*=' col-'] {
      width: 47.5555555555%;
    }
  }

  @media (min-width: 1200px) {
    margin-bottom: 2rem;
    padding-top: 8.25rem;
    padding-bottom: 6.25rem;
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
  padding: 2.75rem 1.5rem;
  text-align: center;
  border-radius: 1.25rem;
  background-color: #fff;

  & > [class^='ButtonWrapper'],
  & > [class*='_ButtonWrapper'] {
    margin-top: 2.375rem;
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
`

export const HighlightInfo = styled.p``
