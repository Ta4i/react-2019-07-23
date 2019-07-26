import React, {Component} from 'react'
import Restaurant from './restaurant';

class RestaurantsList extends Component {
  render() {
    return (
      <ul>
        {this.props.restaurants.map(
          (restaurant) => (
            <Restaurant
              key={restaurant.id}
              restaurant={restaurant}
            />
          )
        )}
      </ul>
    )
  }
}

export default RestaurantsList
