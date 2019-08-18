import React, {Component} from 'react'
import OrderList from '../order-list/order-list'
import OrderForm from '../order-form'

class OrderPage extends Component {
  render() {
    return (
      <div>
        <OrderList />
        <OrderForm />
      </div>
    )
  }
}

export default OrderPage
