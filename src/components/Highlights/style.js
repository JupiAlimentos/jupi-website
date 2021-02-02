import styled from 'styled-components'

export const HighlightsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap !important;
  overflow-x: scroll;
  overflow-y: hidden;

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

  & > div {
    background-color: greenyellow;
  }

  & > div div.inner {
    background-color: skyblue;
  }
`
