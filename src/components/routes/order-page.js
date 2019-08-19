import React, {Component} from 'react'
import OrderList from '../order-list'
import {selectCart} from '../../store/selectors'
import {connect} from 'react-redux'

class OrderPage extends Component {
  render() {
    return (
      <div>
        <OrderList />
      </div>
    )
  }
}

export default OrderPage
