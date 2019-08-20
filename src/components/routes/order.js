import React, {Component} from 'react'
import OrderForm from '../order-form'
import OrderList from '../order-list'

class Order extends Component {
  render() {
    return (
      <div>
        <OrderList />
        <OrderForm setUserName={this.props.setUserName} />
      </div>
    )
  }
}

export default Order
