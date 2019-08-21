import React, {Component} from 'react'
import {Menu} from 'antd'

class OurMenu extends Component {
  render() {
    return (
      <ul
        className="menu"
        style={{float: 'left', backgroundColor: 'transparent'}}
      >
        {this.props.children}
      </ul>
    )
  }
}

export default OurMenu
