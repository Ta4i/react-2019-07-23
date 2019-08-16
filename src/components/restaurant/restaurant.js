import React, {PureComponent} from 'react'
import {Button, List} from 'antd'
import RestaurantReviews from '../restaurant-reviews'
import {toggleVisibility} from '../../decorators/toggle-visibility'
import AverageRating from '../average-rating'
import RestaurantMenu from '../restaurant-menu'

import {connect} from 'react-redux'
import {
  selectReviewsLoading,
  selectRestaurantReviews,
  selectDishesLoading,
  selectRestaurantDishes,
} from '../../store/selectors'
import {loadReviews, loadDishes} from '../../store/ac'

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
    const {isOpen, isMenuOpen, restaurant, id} = this.props
    const {image, name, menu} = restaurant

    if (this.state.error) {
      return <h2>Something went wrong</h2>
    }

    return (
      <>
        <List.Item
          actions={[
            <AverageRating id={restaurant.id} />,
            <Button type={'primary'} onClick={this.handleToggle}>
              {isOpen ? 'Hide reviews' : 'Show reviews'}
            </Button>,
            <Button
              type="primary"
              onClick={this.handleToggleMenu}
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
        {isOpen ? <RestaurantReviews id={restaurant.id} /> : null}
        {isMenuOpen ? (
          <RestaurantMenu
            menu={restaurant.menu}
            restaurantId={restaurant.id}
            id={restaurant.id}
          />
        ) : null}
      </>
    )
  }

  handleToggle = () => {
    const {
      id,
      toggleOpen,
      reviews,
      fetchReviews,
      isOpen,
      loadingReviews,
    } = this.props
    if (!reviews.length && !isOpen) {
      fetchReviews(id)
    }
    if (!loadingReviews) {
      toggleOpen()
    }
  }

  handleToggleMenu = () => {
    const {
      id,
      fetchDishes,
      loadingDishes,
      toggleOpenMenu,
      dishes,
      isMenuOpen,
    } = this.props

    if (!dishes.length && !isMenuOpen) {
      fetchDishes(id)
    }

    if (!loadingDishes) {
      toggleOpenMenu(id)
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  loadingReviews: selectReviewsLoading(state),
  loadingDishes: selectDishesLoading(state),
  reviews: selectRestaurantReviews(state, ownProps),
  dishes: selectRestaurantDishes(state, ownProps),
})

const mapDispatchToProps = dispatch => ({
  fetchReviews: id => {
    dispatch(loadReviews(id))
  },
  fetchDishes: id => {
    dispatch(loadDishes(id))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toggleVisibility(Restaurant))
