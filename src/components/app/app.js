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
import {loadRestaurants} from '../../store/ac'

class App extends Component {
  componentDidMount() {
    if (this.props.fetchData) {
      this.props.fetchData()
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
    fetchData: () => dispatch(loadRestaurants()),
  })
)(App)
