import React, {Component} from 'react'
import RestaurantsMap from '../restaurants-map'

class RestaurantsMapPage extends Component {
  render() {
    const {match} = this.props
    return (
      <div>
        <RestaurantsMap id={match && match.params && match.params.id} />
      </div>
    )
  }
}

export default RestaurantsMapPage
