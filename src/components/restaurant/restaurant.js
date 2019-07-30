import React, {PureComponent} from 'react'
import {Button, List} from 'antd'
import RestaurantReviews from '../restaurant-reviews'
import {toggleVisibility} from '../../decorators/toggle-visibility';
import AverageRating from '../average-rating'
import RestaurantMenu from '../restaurant-menu'


class Restaurant extends PureComponent {
  state = {
    error: null
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error
    })
  }

  render() {
    const {isOpen, toggleOpen,isMenuOpen, toggleOpenMenu, restaurant} = this.props
    const {id, image, name, menu, reviews} = restaurant;

    if (this.state.error) {
      return <h2>Something went wrong</h2>
    }

    return (
      <>
        <List.Item
          actions={[
            <AverageRating reviews={reviews} />,
            <Button
              type={'primary'}
              onClick={toggleOpen}
            >{
              isOpen ? 'Hide reviews' : 'Show reviews'
            }</Button>,
            <Button
              type='primary'
              onClick={() => toggleOpenMenu(id)}
            >
              {isMenuOpen ? 'Close menu' : 'Open menu'}
            </Button>
          ]}
        >
          <List.Item.Meta
            avatar={<img src={image} width={64} height={64} alt={name}/>}
            title={name}
            description={`Menu positions: ${menu.length}`}
          />
        </List.Item>
        {isOpen ? <RestaurantReviews restaurant={restaurant}/> : null}
        {isMenuOpen ? <RestaurantMenu menu={restaurant.menu}/> : null}
      </>
    )
  }
}

export default toggleVisibility(Restaurant)
