import React from 'react'
import {List} from 'antd'
import Review from '../review'
import {connect} from 'react-redux'
import ReviewForm from '../review-form'
import {selectReview} from '../../store/selectors'

function RestaurantReviews(props) {
  const {reviews, id} = props
  return (
    <>
      <ReviewForm restaurantId={id} />
      <List
        itemLayout={'horizontal'}
        dataSource={reviews}
        renderItem={reviews => <Review key={reviews.id} review={reviews} />}
      />
    </>
  )
}

export default connect((state, ownProps) => ({
  reviews: selectReview(state, ownProps),
}))(RestaurantReviews)
