import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {connect} from 'react-redux'
import {selectRatings} from '../../store/selectors'

class AverageRating extends PureComponent {
  render() {
    const {rating} = this.props
    return <Rate value={rating} disabled allowHalf />
  }
}

AverageRating.propTypes = {
  rating: PropTypes.number.isRequired,
}

export default connect((state, ownProps) => ({
  rating: selectRatings(state, ownProps),
}))(AverageRating)
