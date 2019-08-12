import React, {Component} from 'react'
import {Button, Input, Rate} from 'antd'
import TextArea from 'antd/es/input/TextArea'
import {connect} from 'react-redux'
import {addReview} from '../../store/ac'

class ReviewForm extends Component {
  state = {
    username: '',
    text: '',
    rate: 0,
  }

  render() {
    return (
      <form style={{padding: '24px'}} onSubmit={this.add}>
        <Rate
          style={{
            marginBottom: '20px',
          }}
          defaultValue={this.state.rate}
          value={this.state.rate}
          onChange={this.handleInputRateChange}
        />
        <div>
          <Input
            style={{
              width: '300px',
              marginBottom: '20px',
            }}
            placeholder={'Username'}
            value={this.state.username}
            onChange={this.handleInputUsernameChange}
            required={true}
          />
        </div>
        <div>
          <TextArea
            style={{
              width: '300px',
              marginBottom: '20px',
            }}
            placeholder={'Review'}
            value={this.state.text}
            onChange={this.handleInputTextChange}
            required={true}
          />
        </div>
        <Button type={'primary'} htmlType={'submit'}>
          Submit review
        </Button>
      </form>
    )
  }

  handleInputUsernameChange = e => {
    const target = e.target

    if (target.value.length > 15) {
      e.preventDefault()
      return
    }

    this.setState({
      username: target.value,
    })
  }

  handleInputRateChange = rate => {
    this.setState({
      rate: rate,
    })
  }

  handleInputTextChange = e => {
    const target = e.target

    if (target.value.length > 150) {
      e.preventDefault()
      return
    }

    this.setState({
      text: target.value,
    })
  }

  add = e => {
    e.preventDefault()
    this.props.dispatchAdd(
      this.props.restaurant,
      this.state.username,
      this.state.text,
      this.state.rate
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  dispatchAdd: addReview,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm)
