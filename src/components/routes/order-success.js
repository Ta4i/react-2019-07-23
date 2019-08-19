import React, {Component} from 'react'
import OrderList from '../order-list'
import OrderForm from '../order-form'
import {Result, Button} from 'antd'
import {Redirect} from 'react-router-dom'

class OrderSuccessMenuPage extends Component {
  state = {
    goHome: false,
  }

  render() {
    if (this.state.goHome) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <Result
          status="success"
          title="Successfully Order Sent"
          subTitle="Thanks for using our restaurant! (:"
          extra={[
            <Button type="primary" key="console" onClick={this.goToHome}>
              Go Home
            </Button>,
            <Button key="buy">Buy Again</Button>,
          ]}
        />
      </div>
    )
  }

  goToHome = () => {
    this.setState({goHome: true})
    console.log(this.state)
  }
}

export default OrderSuccessMenuPage
