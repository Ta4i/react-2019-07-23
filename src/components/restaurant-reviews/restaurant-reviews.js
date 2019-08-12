import React from 'react'
import {List} from 'antd'
import Review from '../review'

function RestaurantReviews(props) {
  const {reviews} = props.restaurant
  if (!reviews.length) {
    return null
  }

  return (
    <List
      itemLayout={'horizontal'}
      dataSource={reviews}
      renderItem={review => <Review key={review.id} id={review} />}
    />
  )
}

export default RestaurantReviews
