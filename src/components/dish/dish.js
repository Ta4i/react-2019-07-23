import React from 'react'
import {Card, Button} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {addDishToCart, subtractDishFromCart} from '../../store/ac'
import Price from '../price'
import {selectDish, selectDishAmount} from '../../store/selectors'

function Dish(props) {
  const {id} = props
  const dispatch = useDispatch()
  const dish = useSelector(state => selectDish(state, props))
  const amount = useSelector(state => selectDishAmount(state, props))

  console.log('Dish')

  return (
    <Card
      bordered
      actions={[
        <Price value={dish.price} />,
        <>
          <span style={{margin: '0 12px'}} data-autoid={`DISH_AMOUNT_${id}`}>
            {amount}
          </span>
          <Button.Group>
            <Button
              onClick={() => dispatch(subtractDishFromCart(id))}
              type="primary"
              shape="circle"
              icon="minus"
              data-autoid={`REMOVE_DISH_${id}`}
            />
            <Button
              onClick={() => dispatch(addDishToCart(id))}
              type="primary"
              shape="circle"
              icon="plus"
              data-autoid={`ADD_DISH_${id}`}
            />
          </Button.Group>
        </>,
      ]}
    >
      <Card.Meta title={dish.name} description={dish.ingredients.join(', ')} />
    </Card>
  )
}

export default Dish
