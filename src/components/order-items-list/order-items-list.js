import React, {Component} from 'react'
import {Table, Button} from 'antd';
import {connect} from 'react-redux';

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

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price for item',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Count',
            dataIndex: 'count',
            key: 'count',
        },
        {
            title: 'Price',
            dataIndex: 'fullPrice',
            key: 'fullPrice',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Button type={'danger'} >Delete item</Button>
            ),
        },
    ]

    return (
      <>
        <Table columns={columns} dataSource={order} />
        FullPrice: {fullPrice}
      </>  
    )
  }
}

const mapStateToProps = state => ({
    restaurants: state.restaurants,
    cart: state.cart
})

export default connect(
    mapStateToProps,
)(OrderItemsList)
