import React, {Component} from 'react'
import {List} from 'antd'
import Restaurant from '../restaurant'
import {accordion} from '../../decorators/accordion'

class RestaurantList extends Component {
  render() {
    const {
      restaurants,

      // from decorator
      openItemId,
      toggleOpen
    } = this.props
    return (
      <List
        itemLayout={'horizontal'}
        dataSource={restaurants}
        renderItem={restaurant => <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          isMenuOpen={
            openItemId === restaurant.id
          }
          toggleOpenMenu={toggleOpen}
        />}
      />
    )
  }

}

export default accordion(RestaurantList)
