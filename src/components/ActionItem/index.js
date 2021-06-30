import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import {
  CardBoxWrapper,
  CardBoxWrapperInfo,
  CardBoxTitle,
  CardBoxInfo
} from './style'

const ActionItem = ({ slug, titleCard, infoCard, children }) => (
  <CardBoxWrapper>
    {children}
    <CardBoxWrapperInfo>
      <CardBoxTitle>{titleCard}</CardBoxTitle>
    </CardBoxWrapperInfo>
    <CardBoxWrapperInfo>
      <CardBoxInfo>{infoCard}</CardBoxInfo>
    </CardBoxWrapperInfo>
    <Link className='linkText' to={slug} title={titleCard}>
      Veja mais <span className='arrow' />
    </Link>
  </CardBoxWrapper>
)

ActionItem.PropTypes = {
  slug: PropTypes.string.isRequired,
  titleCard: PropTypes.string.isRequired,
  infoCard: PropTypes.string.isRequired
}

export default ActionItem
