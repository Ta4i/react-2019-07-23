import React from 'react'
import {List} from 'antd'
import Review from '../review'
import { connect } from 'react-redux';
import { selectRestaurantReviews } from '../../store/selectors';

function RestaurantReviews(props) {
  const {reviews} = props

  return (
    <List
      itemLayout={'horizontal'}
      dataSource={reviews}
      renderItem={review => <Review key={review.id} review={review} />}
    />
  )
}

export default connect((state, ownProps) => ({
  reviews: selectRestaurantReviews(state, ownProps),
}))(RestaurantReviews)
