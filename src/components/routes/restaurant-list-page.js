import React, {Component} from 'react'
import RestaurantList from '../restaurant-list/restaurants-list'
import OrderList from '../order-list/order-list'

class RestaurantListPage extends Component {
  render() {
    return (
      <div>
        <RestaurantList />
        <OrderList />
      </div>
    )
  }
}

export default RestaurantListPage
