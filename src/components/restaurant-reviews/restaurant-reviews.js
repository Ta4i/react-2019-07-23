import React from 'react'
import {List} from 'antd'
import Review from '../review'
import ModalAddReview from '../modal-form-review'

function RestaurantReviews(props) {
  const {restaurant} = props
  console.log('props', props)

  return (
    <>
      <List
        itemLayout={'horizontal'}
        dataSource={restaurant.reviews}
        renderItem={review => <Review key={review} id={review} />}
      />
      <ModalAddReview restaurantId={restaurant.id} />
    </>
  )
}

export default RestaurantReviews
