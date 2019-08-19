import React, {Component} from 'react'
import {makeOrder} from '../../store/ac'
import {useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

class Order extends Component {
  state = {
    userName: '',
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

        <button type={'submit'}>Send order</button>
      </form>
    )
  }

  handleUserNameInputChange = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  setInput = ref => {
    this.userNameInput = ref
  }

  handleSubmit = event => {
    debugger
    this.props.makeOrder()
    // event.preventDefault()
    // console.log(this.state)
  }
}

export default connect(
  null,
  {
    makeOrder,
  }
)(Order)
