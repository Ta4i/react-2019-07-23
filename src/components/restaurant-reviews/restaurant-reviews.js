import React from 'react'
import {List} from 'antd'
import Review from '../review'

function RestaurantReviews(props) {
  const {restaurant} = props

  return (
    <List
      itemLayout={'horizontal'}
      dataSource={restaurant.reviews}
      renderItem={reviewId => <Review key={reviewId} id={reviewId} />}
    />
  )
}

export default RestaurantReviews
