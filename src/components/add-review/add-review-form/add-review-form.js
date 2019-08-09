import React from 'react'
import {Form, Icon, Input, Button, Select, Rate} from 'antd'
import {connect} from 'react-redux'
import {selectRestaurants} from '../../../store/selectors'
import {submitReviewForm, showReviewForm} from '../../../store/ac'
import Status from '../../../types/status'

class ReviewForm extends React.PureComponent {
  render() {
    const {
      form,
      isDisabled,
      onRestaurantChange,
      restaurants,
      status,
      onRetryButton,
    } = this.props

    const {getFieldDecorator} = form
    const {Option} = Select
    const {TextArea} = Input

    if (status === Status.DONE) {
      return <div>You review was succesfully added</div>
    }

    if (status === Status.ERROR) {
      return (
        <>
          <div>Error occured while adding your review, please try again</div>
          <Button type="primary" onClick={onRetryButton}>
            Retry!
          </Button>
        </>
      )
    }

    return (
      <Form onSubmit={this.handleSubmit} className="review-form">
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{required: true, message: 'Please input your username!'}],
          })(
            <Input
              disabled={isDisabled}
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('restaurant', {
            rules: [{required: true, message: 'Please select restaurant!'}],
          })(
            <Select
              disabled={isDisabled}
              placeholder="Restaurant"
              onChange={onRestaurantChange}
            >
              {Object.values(restaurants).map(restaurant => (
                <Option key={restaurant.id} value={restaurant.id}>
                  {restaurant.name}
                </Option>
              ))}
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('rate', {
            initialValue: 0,
          })(<Rate allowHalf={true} disabled={isDisabled} />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('reviewText', {
            rules: [{required: true, message: 'Please enter your review!'}],
          })(<TextArea disabled={isDisabled} rows={10} />)}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="review-form-button"
            loading={status === Status.SENDING}
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    )
  }

  handleSubmit = e => {
    const {onSubmit} = this.props
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onSubmit(values)
        console.log('Received values of form: ', values)
      }
    })
  }
}

const WrappedReviewForm = Form.create({name: 'review_form'})(ReviewForm)

const mapStateToProps = state => ({
  restaurants: selectRestaurants(state),
  isDisabled: state.reviewForm.status === Status.SENDING,
  status: state.reviewForm.status,
})

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(submitReviewForm(values)),
  onRetryButton: () => dispatch(showReviewForm()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedReviewForm)
