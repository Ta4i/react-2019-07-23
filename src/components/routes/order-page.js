import React, {Component} from 'react'
import OrderList from '../order-list'
import OrderForm from '../order-form'

class OrderPage extends Component {
  render() {
    return (
      <>
        <OrderList />
        <OrderForm />
      </>
    )
  }
}

export default OrderPage
