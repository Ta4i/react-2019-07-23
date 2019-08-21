import React, {Component} from 'react'
import {Input, Button, Form} from 'antd'
import {connect} from 'react-redux'
import {sendOrder} from '../../store/ac'

class Order extends Component {
  state = {
    userName: '',
  }

  render() {
    return (
      <Form
        layout={'inline'}
        style={{padding: '24px'}}
        onSubmit={this.handleSubmit}
      >
        <Form.Item>
          <Input
            ref={this.setInput}
            placeholder={'User name'}
            value={this.state.userName}
            onChange={this.handleUserNameInputChange}
            style={{width: '120px'}}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send order
          </Button>
        </Form.Item>
      </Form>
    )
  }

  handleUserNameInputChange = ({target: {value}}) => {
    this.setState({
      userName: value,
    })
    this.props.setUserName(value)
  }

  setInput = ref => {
    this.userNameInput = ref
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.sendOrder(this.state)
  }
}

export default connect(
  null,
  {sendOrder}
)(Order)
