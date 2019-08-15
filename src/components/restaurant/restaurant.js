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
} from '../../store/selectors'
import {loadReviews} from '../../store/ac'

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
    const {isOpen, isMenuOpen, toggleOpenMenu, restaurant, id} = this.props
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
        {isOpen ? <RestaurantReviews id={restaurant.id} /> : null}
        {isMenuOpen ? (
          <RestaurantMenu menu={restaurant.menu} restaurantId={restaurant.id} />
        ) : null}
      </>
    )
  }

  handleToggle = () => {
    const {id, toggleOpen, reviews, fetchData, isOpen, loading} = this.props
    console.log(reviews)
    if (!reviews.length && !isOpen) {
      fetchData(id)
    }
    if (!loading) {
      toggleOpen()
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  loading: selectReviewsLoading(state),
  reviews: selectRestaurantReviews(state, ownProps),
})

const mapDispatchToProps = dispatch => ({
  fetchData: id => {
    dispatch(loadReviews(id))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toggleVisibility(Restaurant))
