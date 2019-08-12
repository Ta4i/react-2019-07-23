import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form, Input, Button, Rate} from 'antd'
import {addUser as addUserAction} from '../../store/ac'

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
    const {addUser} = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        addUser(values.username)
      }
    })
  }
}

const WrappedReviewForm = Form.create({name: 'review_form'})(ReviewForm)

const mapDispatchToProps = dispatch => ({
  addUser: username => dispatch(addUserAction(username)),
})

export default connect(
  null,
  mapDispatchToProps
)(WrappedReviewForm)
