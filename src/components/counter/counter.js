import React, {Component} from 'react'
import {Button} from 'antd'
import {connect} from 'react-redux'
import {increase, decrease} from '../../store/ac'

class Counter extends Component {
  render() {
    const {countFromStore} = this.props

    return (
      <div style={{textAlign: 'center', padding: '16px'}}>
        <span>{countFromStore}</span>
        <Button.Group>
          <Button onClick={this.decrease} type="primary" icon="minus" />
          <Button onClick={this.increase} type="primary" icon="plus" />
        </Button.Group>
      </div>
    )
  }
  decrease = () => {
    this.props.dispatchDecrease()
  }
  increase = () => {
    this.props.dispatchIncrease()
  }
}

const mapStateToProps = state => ({
  countFromStore: state.count,
})

const mapDispatchToProps = {
  dispatchIncrease: increase,
  dispatchDecrease: decrease,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
