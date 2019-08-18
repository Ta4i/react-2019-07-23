import React from 'react'
import PropTypes from 'prop-types'
import {Badge, Button} from 'antd'
import './cart-badge.css'
import {useSelector} from 'react-redux'
import {selectCart} from '../../store/selectors'
import {NavLink, Link, Router} from 'react-router-dom'

function CartBadge(props) {
  const cart = useSelector(selectCart)

  const amount = Object.values(cart).reduce(
    (acc, dishAmount) => acc + dishAmount,
    0
  )

  return (
    <Badge count={amount} className={'cart-button-container'}>
      <Link to={'/order'}>
        <Button
          icon="shopping-cart"
          size="large"
          type="primary"
          className="cart-button"
        />
      </Link>
    </Badge>
  )
}

CartBadge.propTypes = {
  amount: PropTypes.number.isRequired,
}

export default CartBadge
