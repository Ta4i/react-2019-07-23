import React, {Component} from 'react'

class Restaurant extends Component {
  render() {
    const {image, name, menu} = this.props.restaurant;
    return (
      <li>
        <img
          src={image}
          width={64}
          height={64}
          alt={name}
        />
        <h2>{name}</h2>
        <div>Menu items: {menu.length}</div>
      </li>
    )
  }
}

export default Restaurant
