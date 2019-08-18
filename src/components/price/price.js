import React from 'react'
import PropTypes from 'prop-types'

function Price(props) {
  return <span>£{props.value}</span>
}

Price.propTypes = {
  value: PropTypes.number.isRequired,
}

export default Price
