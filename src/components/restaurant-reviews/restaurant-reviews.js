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
        renderItem={review => <Review key={review} id={review} />}
      />
      <ReviewForm restaurant={restaurant} />
    </>
  )
}

export default RestaurantReviews
