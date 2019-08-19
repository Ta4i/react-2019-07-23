import React, {Component} from 'react'
import RestaurantsMap from '../restaurants-map'

class RestaurantsMapPage extends Component {
  render() {
    const {match} = this.props
    const id = match ? match.params.id : null

    return (
      <div>
        <RestaurantsMap restaurantId={id} />
      </div>
    )
  }
}

export default RestaurantsMapPage
