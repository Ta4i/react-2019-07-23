import React, {Component} from 'react'
import {Card, Button} from 'antd'
import {connect} from 'react-redux'
import {addDishToCart, subtractDishFromCart} from '../../store/ac'
import Price from '../price'
import {selectDish, selectDishAmount} from '../../store/selectors'

class Dish extends Component {
  render() {
    const {id, dish, amount} = this.props
    const dispatch = this.props.dispatch

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
        <Card.Meta
          title={dish.name}
          description={dish.ingredients.join(', ')}
        />
      </Card>
    )
  }
}

export default connect((state, ownProps) => ({
  dish: selectDish(state, ownProps),
  amount: selectDishAmount(state, ownProps),
}))(Dish)
