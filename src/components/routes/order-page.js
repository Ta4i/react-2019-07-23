import React, {Component} from 'react'
import OrderList from '../order-list'
import OrderForm from '../order-form'

class OrderPage extends Component {
  render() {
    return (
      <>
        <h2>Order</h2>
        <div>
          <OrderList />
          <OrderForm />
        </div>
      </>
    )
  }
}

export default OrderPage
