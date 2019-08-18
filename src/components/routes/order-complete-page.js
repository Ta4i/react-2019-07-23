import React, {Component} from 'react'
import OrderComplete from '../order-complete'

class OrderCompletePage extends Component {
  render() {
    console.log(this.params)
    return <OrderComplete />
  }
}

export default OrderCompletePage
