import styled from 'styled-components'

export const AttendanceBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.8rem;
  background-color: #fff;
  border-radius: var(--bdr-12);

  img {
    width: 70px;
    height: 70px;
    border-radius: var(--bdr-8);
  }

  @media (min-width: 1200px) {
    padding: 2.2rem 2.5rem;
  }
`

export const AttendanceBoxContent = styled.div`
  width: 72%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    max-width: 68%;
  }
`

export const AttendanceBoxTitle = styled.h4`
  margin-bottom: 0.5rem;
  font-size: calc(1rem + 0.35vw);
  font-weight: 600;

  @media (min-width: 420px) {
    font-size: calc(1.275rem + 0.35vw);
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: calc(1rem + 0.2vw);
  }

  @media (min-width: 992px) and (max-width: 1439.98px) {
    font-size: 1.1rem;
    line-height: 1.1;
  }

  @media (min-width: 1440px) {
    font-size: calc(1rem + 0.3vw);
  }
`
