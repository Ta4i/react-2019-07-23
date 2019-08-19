import React, {Component} from 'react'
import OrderList from '../order-list'

class OrderPage extends Component {
  render() {
    const {match} = this.props

    if (match.params.orderId) {
      return (
        <div>Order COmplete! Your order number is {match.params.orderId}</div>
      )
    }
    return (
      <div>
        <OrderList />
      </div>
    )
  }
}

export default OrderPage
