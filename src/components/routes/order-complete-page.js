import React, {Component} from 'react'
import OrderComplete from '../order-complete'

class OrderPage extends Component {
  render() {
    return (
      <>
        <h2>Order completed</h2>
        <h3>Details:</h3>
        <OrderComplete />
      </>
    )
  }
}

export default OrderPage
