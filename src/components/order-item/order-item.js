import React, {PureComponent} from 'react'
import {Button, List} from 'antd'

class OrderItem extends PureComponent {
  state = {
    error: null
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error
    })
  }

  render() {
    const {item} = this.props
    const {name, price, count, fullPrice} = item;

    if (this.state.error) {
      return <h2>Something went wrong</h2>
    }

    return (
      <>
        <List.Item
          actions={[
            <Button
              type={'danger'}
              onClick={this.deleteAllDishesOfTheSameType}
            >Delete</Button>,
          ]}
        >
          <List.Item.Meta
            title="Name"
            description={name}
          />
          <List.Item.Meta
            title="Price for one"
            description={price}
          />
          <List.Item.Meta
            title="Count"
            description={count}
          />
          <List.Item.Meta
            title="Price"
            description={fullPrice}
          />
        </List.Item>
      </>
    )
  }
  deleteAllDishesOfTheSameType = () => {
    this.props.deleteAllDishesOfTheSameType(this.props.item.id)
  };
}

export default OrderItem
