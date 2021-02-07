import styled from 'styled-components'
import { Link } from 'gatsby'

export const AttendanceList = styled.ul`
  margin-bottom: 0.3rem;
`

export const AttendanceItem = styled.li`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 0.938rem;
  padding-bottom: 0.875rem;

  &:last-of-type > div:after {
    height: 0;
    background-color: transparent;
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
`

export const AttendanceTitle = styled.h4`
  margin-bottom: 0.563rem;
  font-family: var(--body-font);
  font-weight: 700;
  font-size: 1rem;
`

export const AttendanceLink = styled(Link)`
  font-weight: 500;
  font-size: 0.938rem;
  color: var(--highlight);
`
