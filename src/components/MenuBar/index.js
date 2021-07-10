import React, { useState, useEffect } from 'react'

import links from './data'

import Brand from '../../images/jupi-brand.svg'

import {
  MenuHeader,
  MenuWrapper,
  MenuLeft,
  MenuRight,
  MenuLink,
  MenuBrand,
  MenuInput,
  MenuLabel,
  MenuList,
  MenuBackground,
  InnerBg
} from './style'

const MenuBar = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const html = document.querySelector('html')
    scroll
      ? (html.style.overflow = 'hidden')
      : (html.style.overflow = 'visible')
  }, [scroll])

  return (
    <>
      <MenuHeader>
        <MenuInput
          id='navbar'
          onClick={() => setScroll(!scroll)}
          type='checkbox'
        />
        <MenuLabel for='navbar'>
          <div className='menuBox'>
            <span className='menuBtn' />
          </div>
        </MenuLabel>
        <MenuBrand to='/'>
          <img src={Brand} alt='Logo da Jupi Alimentos' />
        </MenuBrand>
        <MenuBackground className='container' />
        <MenuWrapper className='wrapperMenu container'>
          <InnerBg>
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
            <MenuRight>
              <MenuList>
                {links.right.map((link, i) => (
                  <li key={i}>
                    <MenuLink
                      to={link.url}
                      activeClassName='active'
                      partiallyActive
                      title={link.title}
                    >
                      {link.label}
                    </MenuLink>
                  </li>
                ))}
              </MenuList>
            </MenuRight>
          </InnerBg>
        </MenuWrapper>
      </MenuHeader>
    </>
  )
}

export default MenuBar
