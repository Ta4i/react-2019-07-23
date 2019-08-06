import React, { Component } from 'react';
import {Table, Button} from 'antd'
import {connect} from 'react-redux';
import {deleteOrderItem} from '../../store/ac';

class OrderList extends Component {
	render() {
		const {cart, restaurants} = this.props
		const columns = [
			{
				title: 'Name',
				dataIndex: 'name',
				key: 'name',
			},
			{
				title: 'Quantity',
				dataIndex: 'qty',
				key: 'qty',
			},
			{
				title: 'Total Price',
				dataIndex: 'totalPrice',
				key: 'totalPrice',
			},
			{
				title: 'Action',
				key: 'id',
				render: (text, record) => (
					<Button onClick={() => {this.deleteOrderItem(record.id)}} type="danger" shape="round" icon="delete">
						Remove
					</Button>
				),
			}
		];
		

		return (
			<Table
				rowKey="id"
				dataSource={Object.values(this.getOrderList(restaurants, cart))}
				columns={columns}
				pagination={{ pageSize: 5 }}
			/>
		);
	}

	getOrderList = (restaurants, cart) => {
		const orderList = [];

		for (const orderId in cart) {
			restaurants.forEach(restaurant => {
				const menu = restaurant.menu.find(menu => menu.id === orderId);

				if (menu) {
					orderList.push({
						"id": menu.id,
						"name": menu.name,
						"qty": cart[orderId],
						"totalPrice": menu.price * cart[orderId]
					})
				}
			});
		}

		return orderList
	}

  deleteOrderItem = (id) => {
    this.props.dispatchDeleteOrderItem(id)
  };
}

const mapStateToProps = state => ({
	cart: state.cart,
	restaurants: state.restaurants,
})

const mapDispatchToProps = {
  dispatchDeleteOrderItem: deleteOrderItem
}

export default connect(
	mapStateToProps,
  mapDispatchToProps
)(OrderList);