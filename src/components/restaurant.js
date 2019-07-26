import React, {PureComponent} from 'react'

class Restaurant extends PureComponent {
  render() {
    const {isOpen, toggleOpen, restaurant} = this.props
    const {
      id,
      image,
      name,
      menu
    } = restaurant;

    return (
      <li>
        <img
          src={image}
          width={64}
          height={64}
          alt={name}
        />
        <button
          onClick={() => toggleOpen(id)}
        >
          {isOpen ? 'Close' : 'Open'}
        </button>
        {
          isOpen ?
            (
              <>
                <h2>{name}</h2>
                <div>Menu items: {menu.length}</div>
              </>
            ) :
            null
        }
      </li>
    )
  }
}

export default Restaurant
