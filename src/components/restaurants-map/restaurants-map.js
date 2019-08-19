import React, {Component} from 'react'
import Leaflet from 'leaflet'
import './restaurant-map.css'
import {connect} from 'react-redux'
import {
  selectRestaurantsLoading,
  selectRestaurantsLoaded,
  selectRestaurants,
} from '../../store/selectors'
import {loadRestaurants} from '../../store/ac'

class RestaurantsMap extends Component {
  render() {
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
    //    console.log(this.props.restaurants)
    //    this.props.restaurants.forEach(({location: {lat, lng}}) => {
    //      Leaflet.marker([lat, lng]).addTo(this.map)
    //    })
    const {restaurantId} = this.props
    if (restaurantId) {
      const restaurant = this.props.restaurants.find(
        restaurant => restaurant.id === restaurantId
      )
      if (restaurant) {
        Leaflet.marker([
          restaurant.location.lat,
          restaurant.location.lng,
        ]).addTo(this.map)
      }
    } else {
      this.props.restaurants.forEach(({location: {lat, lng}}) => {
        Leaflet.marker([lat, lng]).addTo(this.map)
      })
    }
  }
}

export default connect(
  state => ({
    restaurants: selectRestaurants(state),
    isRestaurantLoading: selectRestaurantsLoading(state),
    isRestaurantLoaded: selectRestaurantsLoaded(state),
  }),
  {
    loadRestaurants,
  }
)(RestaurantsMap)
