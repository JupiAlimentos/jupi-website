import React from 'react'

// Nothing to comment
import Icons from './Icons'
import links from './data'

import { SocialLink, SocialLinkIcon, SocialLinksWrapper } from './style'

const SocialLinks = () => (
  <SocialLinksWrapper>
    {links.map((link, i) => {
      const Icon = Icons[link.label]

      return (
        <SocialLink
          key={i}
          href={link.url}
          title={link.label}
          target='_blank'
          rel='noopener noreferrer'
        >
          <SocialLinkIcon>
            <Icon />
          </SocialLinkIcon>
        </SocialLink>
      )
    })}
  </SocialLinksWrapper>
)

export default SocialLinks
