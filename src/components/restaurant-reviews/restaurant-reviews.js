import React, {useEffect} from 'react'
import {List} from 'antd'
import Review from '../review'
import {connect} from 'react-redux'
import {
  selectFullRestaurantReviews,
  selectReviewsLoaded,
  selectReviewsLoading,
  selectUsersLoaded,
  selectUsersLoading,
} from '../../store/selectors'
import AddReview from '../add-review'
import Loader from '../loader'
import {loadReviews, loadUsers} from '../../store/ac'

function RestaurantReviews(props) {
  const {
    reviews,
    id,
    loadingReviews,
    loadingUsers,
    loadedReviews,
    loadedUsers,
    loadReviews,
    loadUsers,
  } = props

  useEffect(() => {
    if (!loadingUsers && !loadedUsers) {
      loadUsers()
    }
    if (!loadingReviews && !loadedReviews) {
      loadReviews()
    }
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
    loadingReviews: selectReviewsLoading(state),
    loadingUsers: selectUsersLoading(state),
    loadedReviews: selectReviewsLoaded(state),
    loadedUsers: selectUsersLoaded(state),
  }),
  {
    loadReviews,
    loadUsers,
  }
)(RestaurantReviews)
