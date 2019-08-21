import React, {Component} from 'react'

class OrderComplete extends Component {
  render() {
    return (
      <h1
        style={{
          textAlign: 'center',
          padding: '128px 0',
        }}
      >
        Thanks! Your order is preparing
        <span
          role={'img'}
          aria-label={'cook'}
          style={{
            padding: '0 12px',
          }}
        >
          👨‍🍳
        </span>
      </h1>
    )
  }
}

export default OrderComplete
