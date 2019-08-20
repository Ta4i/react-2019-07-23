import React, {Component} from 'react'
import OrderForm from '../order-form/order-form'
import OrderList from '../order-list/order-list'

class OrderPage extends Component {
  render() {
    return (
      <div>
        <OrderForm />
        <OrderList />
      </div>
    )
  }
}

export default OrderPage
