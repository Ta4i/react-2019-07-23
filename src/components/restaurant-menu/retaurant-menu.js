import React from 'react'
import Dish from '../dish'
import {Row, Col, Spin} from 'antd'
import {
  selectDishesLoading,
  selectRestaurantDishes,
} from '../../store/selectors'
import {connect} from 'react-redux'

class RestaurantMenu extends React.PureComponent {
  render() {
    const {loading, menu, restaurantId, dishes} = this.props

    if (loading && !dishes.length) {
      return <Spin />
    }

    return (
      <div style={{padding: '16px'}} data-autoid={`MENU_ITEMS_${restaurantId}`}>
        <Row gutter={16}>
          {menu.map(dishId => (
            <Col key={dishId} span={8}>
              <Dish id={dishId} />
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  loading: selectDishesLoading(state),
  dishes: selectRestaurantDishes(state, ownProps),
})

export default connect(mapStateToProps)(RestaurantMenu)
