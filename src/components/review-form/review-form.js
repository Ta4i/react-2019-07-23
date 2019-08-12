import React, {Component} from 'react'
import {Form, Input, Button, Rate} from 'antd'

const {TextArea} = Input

class ReviewForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{required: true, message: 'Please input your username!'}],
          })(<Input placeholder="Username" style={{width: 400}} />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('review', {
            rules: [{required: true, message: 'Please input your Review!'}],
          })(<TextArea placeholder="Review" autosize style={{width: 400}} />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('rate', {
            initialValue: 0,
          })(<Rate allowHalf={true} />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{width: 400}}>
            Save
          </Button>
        </Form.Item>
      </Form>
    )
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
}

export default Form.create()(ReviewForm)
