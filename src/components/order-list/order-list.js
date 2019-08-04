import React, { Component } from 'react';
import {Table, Button} from 'antd'
import {connect} from 'react-redux';
import {deleteOrderItem} from '../../store/ac';

class OrderList extends Component {
	render() {
		const {orderListFromStore} = this.props
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
				dataSource={Object.values(orderListFromStore)}
				columns={columns}
				pagination={{ pageSize: 5 }}
			/>
		);
	}

  deleteOrderItem = (id) => {
    this.props.dispatchDeleteOrderItem(id)
  };
}

const mapStateToProps = state => ({
	orderListFromStore: state.orderList
})

const mapDispatchToProps = {
  dispatchDeleteOrderItem: deleteOrderItem
}

export default connect(
	mapStateToProps,
  mapDispatchToProps
)(OrderList);