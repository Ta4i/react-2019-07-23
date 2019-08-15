import React, {Component} from 'react'
import Dish from '../dish'
import {Row, Col} from 'antd'
import {selectDishList} from '../../store/selectors'
import {loadDishes} from '../../store/ac'
import {connect} from 'react-redux'

class RestaurantMenu extends Component {
  componentDidMount() {
    if (this.props.fetchData) {
      this.props.fetchData()
    }
  }

  render() {
    const {dishes, menu, restaurantId} = this.props

    return (
      <div style={{padding: '16px'}} data-autoid={`MENU_ITEMS_${restaurantId}`}>
        <Row gutter={16}>
          {dishes.map(dish => {
            return menu.includes(dish.id) ? (
              <Col key={dish.id} span={8}>
                <Dish {...dish} />
              </Col>
            ) : null
          })}
        </Row>
      </div>
    )
  }
}

export default connect(
  state => ({
    dishes: selectDishList(state),
  }),
  (dispatch, state) => ({
    fetchData: () => dispatch(loadDishes(state.restaurantId)),
  })
)(RestaurantMenu)
