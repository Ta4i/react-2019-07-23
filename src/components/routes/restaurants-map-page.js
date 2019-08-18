import React, {Component} from 'react'
import RestaurantsMap from '../restaurants-map'

class RestaurantsMapPage extends Component {
  render() {
    let restaurantId = null
    if (
      this.props &&
      Object.keys(this.props).length &&
      this.props.match &&
      this.props.match.params
    ) {
      restaurantId = this.props.match.params.id
    }
    return (
      <div>
        <RestaurantsMap restaurantId={restaurantId} />
      </div>
    )
  }
}

export default RestaurantsMapPage
