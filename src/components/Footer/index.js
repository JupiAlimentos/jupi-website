import React from 'react'

import SocialLinks from '../SocialLinks'

import links from '../MenuBar/data'

import {
  FooterWrapper,
  MenuList,
  MenuRight,
  MenuLeft,
  MenuLink,
  MenuBrand
} from './style'

import Brand from '../../images/jupi-brand.svg'

const Footer = () => (
  <FooterWrapper>
    <div className='container'>
      <div className='row'>
        <div className='col-11 col-xxl-8'>
          <MenuLeft>
            <MenuList>
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
            </MenuList>
          </MenuLeft>
          <MenuBrand to='/'>
            <img src={Brand} alt='Logo da Jupi Alimentos' />
          </MenuBrand>
          <MenuRight>
            <MenuList>
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
            </MenuList>
          </MenuRight>
        </div>
        <div className='col-12'>
          <SocialLinks />
        </div>
        <small>Jupi Alimentos © 2021. Todos os direitos reservados</small>
      </div>
    </div>
  </FooterWrapper>
)

export default Footer
