import React from 'react'
import {Badge, Button} from 'antd'
import './cart-badge.css'
import {useSelector} from 'react-redux'
import {selectCart} from '../../store/selectors'
import {Consumer as AuthConsumer} from '../../contexts/auth'

function CartBadge() {
  const cart = useSelector(selectCart)

  const amount = Object.values(cart).reduce(
    (acc, dishAmount) => acc + dishAmount,
    0
  )

  return (
    <Badge count={amount} className={'cart-button-container'}>
      <Button
        icon="shopping-cart"
        size="large"
        type="primary"
        className="cart-button"
      />
      <AuthConsumer>
        {value => {
          console.log('AuthConsumer value:', value)
        }}
      </AuthConsumer>
    </Badge>
  )
}

export default CartBadge
