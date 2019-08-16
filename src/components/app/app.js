import React, {Component} from 'react'
import {Layout} from 'antd'
import './app.css'
import Header from '../header'
import RestaurantList from '../restaurant-list'
import OrderForm from '../order-form'
import Counter from '../counter'
// import RestaurantsMap from '../restaurants-map'
import OrderList from '../order-list'

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
          <RestaurantList />
          {/*<RestaurantsMap />*/}
          <OrderList />
          <OrderForm />
        </main>
        <Counter />
      </Layout>
    )
  }
}

export default App
