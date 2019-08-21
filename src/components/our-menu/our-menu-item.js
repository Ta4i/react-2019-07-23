import React from 'react'
import {Menu} from 'antd'
import {NavLink} from 'react-router-dom'

function OurMenuItem(props) {
  return (
    <li>
      <NavLink activeStyle={{color: 'white'}} {...props}>
        {props.children}
      </NavLink>
    </li>
  )
}

export default OurMenuItem
