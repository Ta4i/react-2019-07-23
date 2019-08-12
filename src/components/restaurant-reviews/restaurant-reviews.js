import React from 'react'
import {List} from 'antd'
import Review from '../review'
import ReviewForm from '../review-form'

function RestaurantReviews(props) {
  const {restaurant} = props

  return (
    <>
      <List
        itemLayout={'horizontal'}
        dataSource={restaurant.reviews}
        renderItem={reviewId => <Review key={reviewId} id={reviewId} />}
      />
      <ReviewForm />
    </>
  )
}

export default RestaurantReviews
