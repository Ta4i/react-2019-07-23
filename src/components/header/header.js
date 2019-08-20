import React from 'react'

import Logo from '../logo'
import CartBadge from '../cart-badge'
import './header.css'
import {NavLink, Link} from 'react-router-dom'
import {Menu} from 'antd'

const Header = () => (
  <header className="header">
    <Menu
      className="menu"
      theme="dark"
      mode="horizontal"
      style={{float: 'left', backgroundColor: 'transparent'}}
    >
      <Menu.Item>
        <NavLink to={'/restaurants'} activeStyle={{color: 'white'}}>
          List
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to={'/restaurants-map'} activeStyle={{color: 'white'}}>
          Map
        </NavLink>
      </Menu.Item>
    </Menu>
    <Logo />
    <Link to={'/order'}>
      <CartBadge />
    </Link>
  </header>
)

export default Header
