import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {connect} from 'react-redux'
import {selectAverageRating} from '../../store/selectors'

class AverageRating extends PureComponent {
  render() {
    const {normalizedRating} = this.props
    return <Rate defaultValue={normalizedRating} disabled allowHalf />
  }
}

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default connect((state, ownProps) => ({
  normalizedRating: selectAverageRating(state, ownProps),
}))(AverageRating)
