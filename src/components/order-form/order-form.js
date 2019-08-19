import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectCartImmutable} from '../../store/selectors'

class Order extends Component {
  state = {
    userName: '',
    redirect: false,
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/order-success" />
    }
    return (
      <form style={{padding: '24px'}} onSubmit={this.handleSubmit}>
        <input
          ref={this.setInput}
          placeholder={'User name'}
          value={this.state.userName}
          onChange={this.handleUserNameInputChange}
        />
        <button type={'submit'}>Send order</button>
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

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.props)
    console.log()
    console.log(this.state)
    if (this.props.cart.size) {
      this.setState({
        redirect: true,
      })
    }
    return null
  }
}

export default connect(state => ({
  cart: selectCartImmutable(state),
}))(Order)
