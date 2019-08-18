import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class Order extends Component {
  state = {
    userName: '',
    redirect: false,
  }

  render() {
    return (
      <form style={{padding: '24px'}} onSubmit={this.handleSubmit}>
        <input
          ref={this.setInput}
          placeholder={'User name'}
          value={this.state.userName}
          onChange={this.handleUserNameInputChange}
        />
        <button onClick={this.handleSubmit}>Send order</button>
        {this.state.redirect && <Redirect to={'/order-complete'} />}
      </form>
    )
  }

  handleUserNameInputChange = event => {
    this.setState({
      userName: event.target.value.length > 5 ? '' : event.target.value,
    })
  }

  setInput = ref => {
    this.userNameInput = ref
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setRedirect()
  }
}

export default Order
