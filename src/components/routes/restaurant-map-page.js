import React, {Component} from 'react'
import RestaurantsMap from '../restaurants-map'

class RestaurantMapPage extends Component {
  render() {
    return (
      <div>
        <RestaurantsMap restaurantId={this.props.match.params.id} />
      </div>
    )
  }
}

export default RestaurantMapPage
