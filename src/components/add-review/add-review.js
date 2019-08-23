import React, {Component} from 'react'
import {Button, Form, Input, Rate} from 'antd'
import {toggleVisibility} from '../../decorators/toggle-visibility'
import './add-review.css'
import {connect} from 'react-redux'
import {addReview} from '../../store/ac'
import i18n from '../../decorators/i18n'

class AddReview extends Component {
  state = {
    userName: '',
    rating: 0,
    text: '',
  }
  render() {
    const {userName, rating, text} = this.state
    const {isOpen, toggleOpen, t} = this.props

    return (
      <>
        {isOpen && (
          <Form>
            <Form.Item
              label={t('name')}
              labelCol={{span: 4}}
              wrapperCol={{span: 14}}
            >
              <Input value={userName} onChange={this.handleNameChange} />
            </Form.Item>
            <Form.Item
              label={t('rating')}
              labelCol={{span: 4}}
              wrapperCol={{span: 14}}
            >
              <Rate
                allowHalf
                defaultValue={rating}
                className="review-rating"
                onChange={this.handleRatingChange}
              />
            </Form.Item>
            <Form.Item
              label={t('text')}
              labelCol={{span: 4}}
              wrapperCol={{span: 14}}
            >
              <Input.TextArea value={text} onChange={this.handleTextChange} />
            </Form.Item>
            <Form.Item className="user-form-submit-section">
              <Button type="primary" htmlType="submit" onClick={this.submit}>
                {t('post review')}
              </Button>{' '}
              <Button type="primary" onClick={this.handleCancel}>
                {t('cancel')}
              </Button>
            </Form.Item>
          </Form>
        )}
        {!isOpen && (
          <Button
            className="add-review-button"
            type="primary"
            onClick={toggleOpen}
          >
            {t('add review')}
          </Button>
        )}
      </>
    )
  }

  handleNameChange = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  handleRatingChange = value => {
    this.setState({
      rating: value,
    })
  }

  handleTextChange = event => {
    this.setState({
      text: event.target.value,
    })
  }

  handleCancel = () => {
    this.resetState()
    this.props.toggleOpen()
  }

  resetState = () => {
    this.setState({
      userName: '',
      rating: 0,
      text: '',
    })
  }

  submit = event => {
    event.preventDefault()
    const {userName, rating, text} = this.state
    const {restaurantId} = this.props
    this.props.addReview(userName, rating, text, restaurantId)
    this.resetState()
    this.props.toggleOpen()
  }
}

export default connect(
  null,
  {
    addReview,
  }
)(i18n(toggleVisibility(AddReview)))
