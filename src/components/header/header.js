import React from 'react'

import Logo from '../logo'
import CartBadge from '../cart-badge'
import './header.css'
import {Link} from 'react-router-dom'
import OurMenu from '../our-menu'
import OurMenuItem from '../our-menu/our-menu-item'

const Header = () => (
  <header className="header">
    <OurMenu>
      <OurMenuItem to={'/restaurants'}>List</OurMenuItem>
      <OurMenuItem to={'/restaurants-map'}>Map</OurMenuItem>
    </OurMenu>
    <Logo />
    <Link to={'/order'}>
      <CartBadge />
    </Link>
  </header>
)

export default Header
