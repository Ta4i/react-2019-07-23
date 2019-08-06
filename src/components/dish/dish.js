import React from 'react'
import {Card, Button} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {addDishToCart, subtractDishFromCart} from '../../store/ac'
import Price from '../price'

function Dish(props) {
  const {id, price} = props
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const amount = cart[id] || 0

  return (
    <Card
      bordered
      actions={[
        <Price value={price} />,
        <>
          <span
            style={{margin: '0 12px'}}
            data-autoid={`DISH_AMOUNT_${props.id}`}
          >
            {amount}
          </span>
          <Button.Group>
            <Button
              onClick={() => dispatch(subtractDishFromCart(id))}
              type="primary"
              shape="circle"
              icon="minus"
              data-autoid={`REMOVE_DISH_${props.id}`}
            />
            <Button
              onClick={() => dispatch(addDishToCart(id))}
              type="primary"
              shape="circle"
              icon="plus"
              data-autoid={`ADD_DISH_${props.id}`}
            />
          </Button.Group>
        </>,
      ]}
    >
      <Card.Meta
        title={props.name}
        description={props.ingredients.join(', ')}
      />
    </Card>
  )
}

export default Dish
