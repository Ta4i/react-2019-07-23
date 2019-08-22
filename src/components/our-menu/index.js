import React, {Component} from 'react'

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
