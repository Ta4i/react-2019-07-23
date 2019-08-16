import React, {useEffect} from 'react'
import {List} from 'antd'
import Review from '../review'
import {connect} from 'react-redux'
import {
  selectFullRestaurantReviews,
  selectReviewsLoaded,
  selectUsersLoaded,
} from '../../store/selectors'
import AddReview from '../add-review'
import Loader from '../loader'
import {loadFullReviewsData} from '../../store/ac'

function RestaurantReviews(props) {
  const {reviews, id, loadedReviews, loadedUsers, loadFullReviewsData} = props

  useEffect(() => {
    loadFullReviewsData()
  })

  return !loadedReviews || !loadedUsers ? (
    <Loader />
  ) : (
    <>
      <List
        itemLayout={'horizontal'}
        dataSource={reviews}
        renderItem={review => <Review key={review.id} review={review} />}
      />
      <AddReview restaurantId={id} />
    </>
  )
}

export default connect(
  (state, ownProps) => ({
    reviews: selectFullRestaurantReviews(state, ownProps),
    loadedReviews: selectReviewsLoaded(state),
    loadedUsers: selectUsersLoaded(state),
  }),
  {
    loadFullReviewsData,
  }
)(RestaurantReviews)
