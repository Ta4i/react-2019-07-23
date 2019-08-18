import React, {Component} from 'react'
import {List} from 'antd'
import Restaurant from '../restaurant'
import {accordion} from '../../decorators/accordion'
import connect from 'react-redux/es/connect/connect'
import {
  selectRestaurants,
  selectRestaurantsLoading,
} from '../../store/selectors'
import Loader from '../loader'
import {loadRestaurants, loadReviews} from '../../store/ac'

class RestaurantList extends Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    const {
      restaurants,
      loading,

      // from decorator
      openItemId,
      toggleOpen,
    } = this.props
    return loading ? (
      <Loader />
    ) : (
      <List
        itemLayout={'horizontal'}
        dataSource={restaurants}
        renderItem={restaurant => (
          <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            isMenuOpen={openItemId === restaurant.id}
            toggleOpenMenu={toggleOpen}
          />
        )}
      />
    )
  }
}

export default connect(
  state => ({
    loading: selectRestaurantsLoading(state),
    restaurants: selectRestaurants(state),
  }),
  dispatch => ({
    fetchData: () => {
      dispatch(loadRestaurants())
      dispatch(loadReviews())
    },
  })
)(accordion(RestaurantList))
