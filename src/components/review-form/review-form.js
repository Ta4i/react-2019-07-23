import React, { Component } from 'react';
import { Form, Icon, Input, Button, Rate } from 'antd';
import './review-form.css'

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
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
		const {TextArea} = Input;

    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const messageError = isFieldTouched('message') && getFieldError('message');
    return (
      <Form className="review-form" onSubmit={this.handleSubmit}>
				<Form.Item>
					{getFieldDecorator('rate', {
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
        <Form.Item validateStatus={messageError ? 'error' : ''} help={messageError || ''}>
          {getFieldDecorator('message', {
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

const WrappedReviewForm = Form.create({ name: 'review_form' })(ReviewForm);

export default WrappedReviewForm;