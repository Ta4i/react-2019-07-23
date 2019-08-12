import React, {Component} from 'react'
import {List} from 'antd'
import Restaurant from '../restaurant'
import {accordion} from '../../decorators/accordion'

class RestaurantList extends Component {
  render() {
    const {
      //restaurants,

      // from decorator
      openItemId,
      toggleOpen,
    } = this.props
    const restaurants = Object.entries(this.props.restaurants).reduce(
      (r, item) => {
        return [...r, item[1]]
      },
      []
    )
    return (
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

export default accordion(RestaurantList)
