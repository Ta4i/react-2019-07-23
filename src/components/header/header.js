import React from 'react'

import Logo from '../logo'
import CartBadge from '../cart-badge'
import './header.css'
import {NavLink, Link} from 'react-router-dom'
import {Menu} from 'antd'
import LangSelect from '../lang-select'
import i18n from '../../decorators/i18n'

const Header = ({lang, setLang, t}) => (
  <header className="header">
    <Menu
      className="menu"
      theme="dark"
      mode="horizontal"
      style={{float: 'left', backgroundColor: 'transparent'}}
    >
      <Menu.Item>
        <NavLink to={'/restaurants'} activeStyle={{color: 'white'}}>
          {t('list')}
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to={'/restaurants-map'} activeStyle={{color: 'white'}}>
          {t('map')}
        </NavLink>
      </Menu.Item>
      <LangSelect currentLang={lang} setLang={setLang} />
    </Menu>
    <Logo />
    <Link to={'/order'}>
      <CartBadge />
    </Link>
  </header>
)

export default i18n(Header)
