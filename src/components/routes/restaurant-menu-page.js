import React, {Component} from 'react'
import RestaurantMenu from '../restaurant-menu'

class RestaurantMenuPage extends Component {
  render() {
    return (
      <div>
        <RestaurantMenu restaurantId={this.props.match.params.id} />
      </div>
    )
  }
}

export default RestaurantMenuPage
