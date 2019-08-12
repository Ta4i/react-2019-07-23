import React, { Component } from 'react';
import { Form, Icon, Input, Button, Rate } from 'antd';
import './review-form.css'
import {addReview} from '../../store/ac'
import { connect } from 'react-redux';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class ReviewForm extends Component {
	componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    const {restaurantId, addReview} = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        addReview(restaurantId, values);

        return values;
      }
    });
  };

  render() {
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const {TextArea} = Input;

    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const textError = isFieldTouched('text') && getFieldError('text');
    return (
      <Form className="review-form" onSubmit={this.handleSubmit}>
				<Form.Item>
					{getFieldDecorator('rating', {
						initialValue: 3.5,
					})(<Rate />)}
				</Form.Item>

        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item validateStatus={textError ? 'error' : ''} help={textError || ''}>
          {getFieldDecorator('text', {
            rules: [{ required: true, message: 'Please input your message!' }],
          })(
            <TextArea
							placeholder="Write your comment here"
							autosize={{ minRows: 2, maxRows: 6 }}
						/>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Send Comment
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
const mapStateToProps = state => ({
	// reviews: state.reviews,
})

const mapDispatchToProps = {
  addReview
}

const WrappedReviewForm = Form.create({ name: 'review_form' })(ReviewForm);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedReviewForm);