import React, {Component} from 'react'
import RestaurantsMap from '../restaurants-map'

class RestaurantsMapPage extends Component {
  render() {
    const {id} = this.props.match.params

    return (
      <div>
        <RestaurantsMap restaurantId={id || null} />
      </div>
    )
  }
}

export default RestaurantsMapPage
