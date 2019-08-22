import React from 'react'

import Logo from '../logo'
import CartBadge from '../cart-badge'
import './header.css'
import {NavLink, Link} from 'react-router-dom'
import {Menu, Switch} from 'antd'
import {Consumer as LocalizationConsumer} from '../../contexts/localization'

const Header = props => (
  <LocalizationConsumer>
    {value => (
      <header className="header">
        <Menu
          className="menu"
          theme="dark"
          mode="horizontal"
          style={{float: 'left', backgroundColor: 'transparent'}}
        >
          <Menu.Item>
            <NavLink to={'/restaurants'} activeStyle={{color: 'white'}}>
              {value.localization.menu.list}
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to={'/restaurants-map'} activeStyle={{color: 'white'}}>
              {value.localization.menu.map}
            </NavLink>
          </Menu.Item>
        </Menu>
        <Logo />
        <Switch
          checkedChildren="RUS"
          unCheckedChildren="ENG"
          defaultChecked
          onClick={() => props.toggleLocalization()}
        />
        <Link to={'/order'}>
          <CartBadge />
        </Link>
      </header>
    )}
  </LocalizationConsumer>
)

export default Header
