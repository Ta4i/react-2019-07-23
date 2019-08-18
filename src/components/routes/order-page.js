import React, {Component} from 'react'
import Order from '../order-form'
import OrderList from '../order-list'

class OrderPage extends Component {
  render() {
    return (
      <div>
        <OrderList />
        <Order />
      </div>
    )
  }
}

export default OrderPage
