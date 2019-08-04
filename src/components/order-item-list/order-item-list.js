import React from "react";
import { Table, Button } from "antd";
import RestaurantsService from "../../services/RestaurantsService.js";

export default class OrderItemList extends React.Component {
  render() {
    const { items, onDelete } = this.props;

    const { Column } = Table;

    return (
      Object.keys(items).length && (
        <Table
          dataSource={this.getRowsData()}
          title={() => "Order Items"}
          footer={() => `Total cost of order: ${this.getTotalCost()}`}
        >
          <Column title="Name" dataIndex="name" key="name" />
          <Column title="Quantity" dataIndex="quantity" key="quantity" />
          <Column title="Price" dataIndex="price" key="price" />
          <Column title="Cost" dataIndex="cost" key="cost" />
          <Column
            key="action"
            render={(text, record) => (
              <Button
                onClick={() => {
                  onDelete(record.key);
                }}
                type="danger"
              >
                Remove
              </Button>
            )}
          />
        </Table>
      )
    );
  }

  getRowsData() {
    const { items } = this.props;

    const service = new RestaurantsService();
    const menu = service.getTotalAssortment();

    return Object.keys(items).map(id => {
      return {
        key: id,
        name: menu[id].name,
        price: menu[id].price,
        quantity: items[id],
        cost: menu[id].price * items[id]
      };
    });
  }

  getTotalCost() {
    const { items } = this.props;
    const service = new RestaurantsService();
    const menu = service.getTotalAssortment();
    return Object.keys(items).reduce((cost, current) => {
      return cost + menu[current].price * items[current];
    }, 0);
  }
}
