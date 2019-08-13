import React, {Component} from 'react'
import {Button} from 'antd'
import {connect} from 'react-redux'
import {addReview} from '../../store/ac'

class ReviewForm extends Component {
  state = {
    text: '',
  }

  handleChange = event => {
    let name = event.target.name
    let val = event.target.value
    this.setState({
      [name]: val,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const user = {
      text: this.state.text,
      restId: this.props.id,
    }

    this.props.addReview(user)
  }

  render() {
    return (
      <form className="form-comment" onSubmit={this.handleSubmit}>
        <div className="form-field">
          <label>Enter your message</label>
          <textarea
            name="text"
            cols="30"
            rows="10"
            className="form-control"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </div>
        <Button type="primary" htmlType="submit">
          Send comment
        </Button>
        ,
      </form>
    )
  }
}

export default connect(
  null,
  {
    addReview,
  }
)(ReviewForm)
