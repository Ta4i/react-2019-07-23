import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {connect} from 'react-redux'
import {selectReviews} from '../../store/selectors'

class AverageRating extends PureComponent {
  render() {
    const {reviews, selectReviews} = this.props
    const rawRating =
      reviews.reduce((acc, Id) => {
        return acc + selectReviews[Id].rating
      }, 0) / reviews.length
    const normalizedRating = Math.floor(rawRating * 2) / 2
    return <Rate defaultValue={normalizedRating} disabled allowHalf />
  }
}

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default connect((state, ownProps) => {
  return {
    selectReviews: selectReviews(state, ownProps),
  }
})(AverageRating)
