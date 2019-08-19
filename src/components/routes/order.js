import React, {Component} from 'react'
import OrderList from '../order-list'
import OrderForm from '../order-form'

class OrderMenuPage extends Component {
  render() {
    console.log('props', this.props)
    return (
      <div>
        <OrderList />
        <OrderForm />
      </div>
    )
  }
}

export default OrderMenuPage
