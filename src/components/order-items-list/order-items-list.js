import React, {Component} from 'react'
import {List} from 'antd';
import {connect} from 'react-redux';
import {deleteAllDishesOfTheSameType} from '../../store/ac';
import OrderItem from '../order-item/order-item';

class OrderItemsList extends Component {

render() {
    const {restaurants, cart} = this.props

    let fullMenu = restaurants
        .reduce((acc, curr) => [...acc, ...curr.menu], [])
        .reduce((acc, curr) => {
            acc[curr.id] = {
                name: curr.name,
                price: curr.price
            }
            return acc
        }, {});

    let order = Object.keys(cart).map(id => {
        return {
            id: id,
            name: fullMenu[id].name,
            price: fullMenu[id].price,
            count: cart[id],
            fullPrice: fullMenu[id].price * cart[id]
        }
    })

    let fullPrice = order.reduce(
        (acc, curr) => acc + curr.price * curr.count,
         0
    )

    return (
      <>
        <List
            itemLayout={'horizontal'}
            dataSource={order}
            renderItem={item => <OrderItem
                key={item.id}
                item={item}
                deleteAllDishesOfTheSameType={this.props.dispatchDeleteAllDishesOfTheSameType}
            />}
        />
        FullPrice: {fullPrice}
      </>  
    )
  }
}

const mapStateToProps = state => ({
    restaurants: state.restaurants,
    cart: state.cart
})

const mapDispatchToProps = {
    dispatchDeleteAllDishesOfTheSameType: deleteAllDishesOfTheSameType,
}
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderItemsList)
