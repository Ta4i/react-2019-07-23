import React, {useState} from 'react'
import {useToggle} from '../custom-hooks/use-toggle'
import RestaurantReview from './restaurant-review'

function RestaurantReviews(props) {
  const [isOpen, toggleOpen] = useToggle()
  const {restaurant} = props
  const reviews = restaurant.reviews.map(
    (review) => (
      <RestaurantReview key={review.id} review={review} />
    ))

  return (
    <div>
      <button
        onClick={toggleOpen}
      >{
        isOpen ? 'Hide reviews' : 'Show reviews'
      }</button>
      {
        isOpen ? reviews : null
      }
    </div>
  )
}

export default RestaurantReviews
