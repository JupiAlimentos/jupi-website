import styled from 'styled-components'

export const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 188px;
  margin: 60px auto 0;
`

export const SocialLink = styled.a`
  display: block;
`

export const SocialLinkIcon = styled.div`
  svg {
    color: #fff;
    width: 36px;
    height: 36px;
    transition: color 0.3s;

    &:hover {
      color: var(--yellow);
    }
  }
`
