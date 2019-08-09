import React, {Component} from 'react'
import {Layout} from 'antd'
import './app.css'
import Header from '../header'
import RestaurantList from '../restaurant-list'
import AddReviewModal from '../add-review/add-review-modal'
import OrderForm from '../order-form'
import Counter from '../counter'
// import RestaurantsMap from '../restaurants-map'
import {connect} from 'react-redux'
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
          <RestaurantList restaurants={this.props.restaurants} />
          {/*<RestaurantsMap restaurants={this.props.restaurants} />*/}
          <AddReviewModal />
          <OrderList />
          <OrderForm />
        </main>
        <Counter />
      </Layout>
    )
  }
}

export default connect(state => ({
  restaurants: state.restaurants,
}))(App)
