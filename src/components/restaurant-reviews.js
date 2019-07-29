import React from 'react'
import {useToggle} from '../custom-hooks/use-toggle'
import RestaurantReview from './restaurant-review'

function RestaurantReviews(props) {
  const [isOpen, toggleOpen] = useToggle()
  const {restaurant} = props

  return (
    <div>
      <button
        onClick={toggleOpen}
      >{
        isOpen ? 'Hide reviews' : 'Show reviews'
      }</button>
      {
        isOpen ?
          (<>
            Reviews:
            {restaurant.reviews.map(review => (
              <RestaurantReview
                key={review.id}
                user={review.user}
                text={review.text}
                rating={review.rating}
              />
            ))}
          </>) :
          null
      }
    </div>
  )
}

export default RestaurantReviews
