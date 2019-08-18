import React, {Component} from 'react'
import {List} from 'antd'
import {connect} from 'react-redux'
import Price from '../price'
import {selectOrderedDishes} from '../../store/selectors'

class OrderComplete extends Component {
  render() {
    const {dishes, totalPrice} = this.props

    if (dishes.length === 0) {
      return <h3>You didn't order anything</h3>
    }

    return (
      <div className="order">
        <h3>Your order</h3>
        <List>
          {dishes.map(dish => (
            <List.Item
              key={dish.id}
              className="order-item"
              actions={[
                <>
                  {`${dish.amount}x`}
                  <Price className="dish-amount" value={dish.price} />
                  .....
                  <Price
                    className="dish-amount"
                    value={dish.totalDishPrice}
                  />{' '}
                </>,
              ]}
            >
              {dish.name}
            </List.Item>
          ))}
        </List>
        <h3>
          Total: <Price className="dish-amount" value={totalPrice} />
        </h3>
      </div>
    )
  }
}

export default connect(state => ({
  ...selectOrderedDishes(state),
}))(OrderComplete)
