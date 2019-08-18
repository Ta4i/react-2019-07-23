import React, {Component} from 'react'
import RestaurantsMap from '../restaurants-map'

class RestaurantsMapPage extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <RestaurantsMap restaurantId={this.props.match.params.id || null} />
      </div>
    )
  }
}

export default RestaurantsMapPage
