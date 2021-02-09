import styled from 'styled-components'

export const AttendanceList = styled.ul`
  margin-bottom: 0.375rem;
`

export const AttendanceItem = styled.li`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 0.938rem;
  padding-bottom: 0.875rem;

  @media (min-width: 768px) and (max-width: 991.98px) {
    &:nth-child(4) {
      display: none;
    }
  }

  &:last-of-type > div:after {
    height: 0;
    background-color: transparent;
  }

  img {
    width: 70px;
    height: 70px;
    border-radius: var(--bdr-8);

    @media (min-width: 768px) and (max-width: 991.98px) {
      width: 60px;
      height: 60px;
    }
  }
`

export const AttendanceContent = styled.div`
  position: relative;
  width: 72%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e7eb;
  }

  @media (min-width: 768px) {
    max-width: 68%;
  }
`

export const AttendanceTitle = styled.h4`
  margin-bottom: 0.313rem;
  font-family: var(--body-font);
  font-weight: 700;
  font-size: 1rem;
`
