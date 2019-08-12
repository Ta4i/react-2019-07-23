import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form, Select, Input, Button, Rate} from 'antd'
import {addReview} from '../../store/ac'

const {Option} = Select
const {TextArea} = Input

class App extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const {name, comment, rate} = values
        const newReview = {
          text: comment,
          rating: rate,
          name: name,
          restaurant: this.props.restaurantId,
        }
        this.addreview(newReview)
      }
    })
  }
  render() {
    const {getFieldDecorator} = this.props.form
    const dispatch = this.props.dispatch
    return (
      <Form
        labelCol={{span: 5}}
        wrapperCol={{span: 12}}
        onSubmit={this.handleSubmit}
      >
        <Form.Item label="Name">
          {getFieldDecorator('name', {
            rules: [{required: true, message: 'Please input your name!'}],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Comment">
          {getFieldDecorator('comment', {
            rules: [{required: true, message: 'Please input your comment!'}],
          })(<TextArea rows={4} />)}
        </Form.Item>
        <Form.Item label="Rate">
          {getFieldDecorator('rate', {
            rules: [{required: true, message: 'Please input your rate!'}],
            initialValue: 0,
          })(<Rate allowHalf />)}
        </Form.Item>
        <Form.Item wrapperCol={{span: 12, offset: 5}}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
  addreview = obj => {
    this.props.dispatchAddReview(obj)
  }
}

const mapStateToProps = state => ({
  stateStore: state,
})

const mapDispatchToProps = {
  dispatchAddReview: addReview,
}

const ReviewForm = Form.create({name: 'coordinated'})(App)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm)
