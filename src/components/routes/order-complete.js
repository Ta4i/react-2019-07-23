import React, {Component} from 'react'

class OrderComplete extends Component {
  render() {
    const {user} = this.props.match.params

    return (
      <h2
        style={{
          textAlign: 'center',
          marginTop: '2rem',
        }}
      >
        Thx, {user}, your order Complete!
      </h2>
    )
  }
}

export default OrderComplete
