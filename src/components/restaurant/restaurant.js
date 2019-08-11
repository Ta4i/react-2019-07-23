import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Button, List, Rate} from 'antd'
import RestaurantReviews from '../restaurant-reviews'
import {toggleVisibility} from '../../decorators/toggle-visibility'
import RestaurantMenu from '../restaurant-menu'
import {getRestaurantRating} from '../../store/selectors'

class Restaurant extends PureComponent {
  state = {
    error: null,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
    })
  }

  render() {
    const {
      isOpen,
      toggleOpen,
      isMenuOpen,
      toggleOpenMenu,
      restaurant,
      id,
      rating,
    } = this.props
    const {image, name, menu} = restaurant

    if (this.state.error) {
      return <h2>Something went wrong</h2>
    }

    return (
      <>
        <List.Item
          actions={[
            <Rate defaultValue={rating} disabled allowHalf />,
            <Button type={'primary'} onClick={toggleOpen}>
              {isOpen ? 'Hide reviews' : 'Show reviews'}
            </Button>,
            <Button
              type="primary"
              onClick={() => toggleOpenMenu(id)}
              data-autoid={`OPEN_MENU_ITEM_${id}`}
            >
              {isMenuOpen ? 'Close menu' : 'Open menu'}
            </Button>,
          ]}
          data-autoid="RESTAURANT_ITEM"
        >
          <List.Item.Meta
            avatar={<img src={image} width={64} height={64} alt={name} />}
            title={name}
            description={`Menu positions: ${menu.length}`}
          />
        </List.Item>
        {isOpen ? <RestaurantReviews restaurant={restaurant} /> : null}
        {isMenuOpen ? (
          <RestaurantMenu menu={restaurant.menu} restaurantId={restaurant.id} />
        ) : null}
      </>
    )
  }
}

export default connect((state, ownProps) => ({
  ...getRestaurantRating(state, ownProps),
}))(toggleVisibility(Restaurant))
