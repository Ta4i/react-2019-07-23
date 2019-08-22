import React from 'react'

import LogoImg from './logo.svg'

const Logo = () => (
  <a
    href="/"
    style={{
      margin: 'auto',
      flex: '0 1 100%',
    }}
  >
    <img src={LogoImg} alt="logo" />
  </a>
)

export default Logo
