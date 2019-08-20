import React, {Component} from 'react'
import RestaurantMenu from '../restaurant-menu'
import OrderList from '../order-list/order-list'

class RestaurantMenuPage extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <RestaurantMenu restaurantId={this.props.match.params.id} />
        <OrderList />
      </div>
    )
  }
}

export default RestaurantMenuPage
