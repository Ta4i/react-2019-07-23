import React, {Component} from 'react'
import {Button} from 'antd'
// import { Form, Select, Input, Button } from 'antd';
// import {connect} from "react-redux";

class ReviewForm extends Component {
  render() {
    const {id, review} = this.props

    // handleSubmit = e => {
    //   e.preventDefault();
    // };
    //
    // handleSelectChange = value => {
    //   console.log(value);
    // };

    return (
      <form className="form-comment" onSubmit={this.handleSubmit}>
        <div className="form-field">
          <label>Enter your name</label>
          <input type="text" placeholder="Your name" className="form-control" />
        </div>
        <div className="form-field">
          <label>Enter your message</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="form-control"
          />
        </div>
        <Button type="primary">Send comment</Button>,
      </form>
    )
  }
}

export default ReviewForm
