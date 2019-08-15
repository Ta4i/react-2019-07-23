import React from 'react'
import {List, Spin} from 'antd'
import Review from '../review'
import {connect} from 'react-redux'
import {
  selectFullRestaurantReviews,
  selectReviewsLoading,
} from '../../store/selectors'
import AddReview from '../add-review'

class RestaurantReviews extends React.PureComponent {
  render() {
    const {reviews, id, loading} = this.props

    if (loading && !reviews.length) {
      return <Spin />
    }

    return (
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
}

const mapStateToProps = (state, ownProps) => ({
  loading: selectReviewsLoading(state),
  reviews: selectFullRestaurantReviews(state, ownProps),
})

export default connect(mapStateToProps)(RestaurantReviews)
