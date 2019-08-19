import React, {Component} from 'react'
import Leaflet from 'leaflet'
import './restaurant-map.css'
import {connect} from 'react-redux'
import {
  selectRestaurantsLoading,
  selectRestaurantsLoaded,
  selectRestaurants,
  selectRestaurant,
} from '../../store/selectors'
import {loadRestaurants} from '../../store/ac'

class RestaurantsMap extends Component {
  render() {
    console.log('prop', this.props)
    console.log('state', this.state)
    return <div ref={this.setEl} className="map" />
  }
  setEl = ref => {
    this.div = ref
  }
  componentDidMount() {
    if (!this.props.isRestaurantLoading && !this.props.isRestaurantLoaded) {
      this.props.loadRestaurants()
    }
    this.map = Leaflet.map(this.div, {
      center: [51.51847684708113, -0.13999606534701844],
      zoom: 12,
    })
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map)
    this.renderTiles()
  }
  componentDidUpdate() {
    this.renderTiles()
  }
  renderTiles = () => {
    console.log('fn renderTiles', this.props)
    const restaurantArray = this.props.restaurant
      ? [this.props.restaurant]
      : this.props.restaurants
    console.log('resmap', restaurantArray)
    restaurantArray.forEach(({location: {lat, lng}}) => {
      Leaflet.marker([lat, lng]).addTo(this.map)
    })
  }
}

export default connect(
  (state, ownProps) => ({
    restaurants: selectRestaurants(state),
    restaurant: selectRestaurant(state, {id: ownProps.restaurantId}),
    isRestaurantLoading: selectRestaurantsLoading(state),
    isRestaurantLoaded: selectRestaurantsLoaded(state),
  }),
  {
    loadRestaurants,
  }
)(RestaurantsMap)
