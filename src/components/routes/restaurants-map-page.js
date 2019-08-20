import React, {Component} from 'react'
import RestaurantsMap from '../restaurants-map'

class RestaurantsMapPage extends Component {
  render() {
    const id =
      this.props.match && this.props.match.params
        ? this.props.match.params.id
        : undefined
    return (
      <div>
        <RestaurantsMap id={id ? id : undefined} />
      </div>
    )
  }
}

export default RestaurantsMapPage
