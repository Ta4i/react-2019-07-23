import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {connect} from 'react-redux'
import {selectRestaurantAverageRating} from '../../store/selectors'

class AverageRating extends PureComponent {
  render() {
    const {rating} = this.props

    return <Rate value={rating} disabled allowHalf />
  }
}

AverageRating.propTypes = {
  rating: PropTypes.number.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  rating: selectRestaurantAverageRating(state, ownProps),
})

export default connect(mapStateToProps)(AverageRating)
