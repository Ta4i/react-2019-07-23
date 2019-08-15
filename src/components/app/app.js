import React, {Component} from 'react'
import {Layout} from 'antd'
import './app.css'
import Header from '../header'
import RestaurantList from '../restaurant-list'
import OrderForm from '../order-form'
import Counter from '../counter'
// import RestaurantsMap from '../restaurants-map'
import {connect} from 'react-redux'
import OrderList from '../order-list'
import {selectRestaurants} from '../../store/selectors'
import {
  loadRestaurants,
  loadDishes,
  loadReviews,
  loadUsers,
} from '../../store/ac'

class App extends Component {
  componentDidMount() {
    if (this.props.fetchRestaurants) {
      this.props.fetchRestaurants()
    }
    if (this.props.fetchDishes) {
      this.props.fetchDishes()
    }
    if (this.props.fetchReviews) {
      this.props.fetchReviews()
    }
    if (this.props.fetchUsers) {
      this.props.fetchUsers()
    }
  }

  render() {
    return (
      <Layout>
        <Header />
        <main role="main">
          <RestaurantList restaurants={this.props.restaurants} />
          {/*<RestaurantsMap restaurants={this.props.restaurants} />*/}
          <OrderList />
          <OrderForm />
        </main>
        <Counter />
      </Layout>
    )
  }
}

export default connect(
  state => ({restaurants: selectRestaurants(state)}),
  dispatch => ({
    fetchRestaurants: () => dispatch(loadRestaurants()),
    fetchDishes: () => dispatch(loadDishes()),
    fetchReviews: () => dispatch(loadReviews()),
    fetchUsers: () => dispatch(loadUsers()),
  })
)(App)
