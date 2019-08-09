import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'

class AverageRating extends PureComponent {
  render() {
    const {rating} = this.props
    return <Rate defaultValue={rating} disabled allowHalf />
  }
}

AverageRating.propTypes = {
  rating: PropTypes.number.isRequired,
}

export default AverageRating
