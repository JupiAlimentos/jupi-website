import React from 'react'

import links from './data'

import Brand from '../../images/jupi-brand.svg'

import {
  MenuHeader,
  MenuWrapper,
  MenuLeft,
  MenuRight,
  MenuLink,
  MenuBrand
} from './style'

const MenuBar = () => (
  <MenuHeader>
    <MenuBrand to='/'>
      <img src={Brand} alt='Logo da Jupi Alimentos' />
    </MenuBrand>
    <MenuWrapper className='container'>
      <MenuLeft>
        <ul>
          {links.left.map((link, i) => (
            <li key={i}>
              <MenuLink
                to={link.url}
                activeClassName='active'
                title={link.title}
              >
                {link.label}
              </MenuLink>
            </li>
          ))}
        </ul>
      </MenuLeft>
      <MenuRight>
        <ul>
          {links.right.map((link, i) => (
            <li key={i}>
              <MenuLink
                to={link.url}
                activeClassName='active'
                title={link.title}
              >
                {link.label}
              </MenuLink>
            </li>
          ))}
        </ul>
      </MenuRight>
    </MenuWrapper>
  </MenuHeader>
)

export default MenuBar
