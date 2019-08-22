import React from 'react'

import Logo from '../logo'
import CartBadge from '../cart-badge'
import './header.css'
import {NavLink, Link} from 'react-router-dom'
import {Menu, Switch} from 'antd'
import {Consumer as ConsumerLocal} from '../../contexts/translate'

const Header = props => (
  <ConsumerLocal>
    {value => (
      <header className="header">
        <Menu
          className="menu"
          theme="dark"
          mode="horizontal"
          style={{marginRight: 'auto', backgroundColor: 'transparent'}}
        >
          <Menu.Item>
            <NavLink to={'/restaurants'} activeStyle={{color: 'white'}}>
              {value.t.nav.list}
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to={'/restaurants-map'} activeStyle={{color: 'white'}}>
              {value.t.nav.map}
            </NavLink>
          </Menu.Item>
        </Menu>
        <Logo />
        <Switch
          checkedChildren="EN"
          unCheckedChildren="RU"
          defaultChecked
          onClick={() => props.setLocal()}
        />
        <Link to={'/order'}>
          <CartBadge />
        </Link>
      </header>
    )}
  </ConsumerLocal>
)

export default Header
