import React, {useEffect} from 'react'
import Dish from '../dish'
import {Row, Col} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {loadDishes} from './../../store/ac'
import {selectDishesLoaded, selectDishesLoading} from './../../store/selectors'

function RestaurantMenu(props) {
  const {loadingDishes, loadedDishes} = useSelector(state => ({
    loadingDishes: selectDishesLoading(state),
    loadedDishes: selectDishesLoaded(state),
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    if (!loadedDishes && !loadingDishes) {
      dispatch(loadDishes())
    }
  })

  if (!loadedDishes) {
    return <div>Loading...</div>
  } else {
    return (
      <div
        style={{padding: '16px'}}
        data-autoid={`MENU_ITEMS_${props.restaurantId}`}
      >
        <Row gutter={16}>
          {props.menu.map(dishId => (
            <Col key={dishId} span={8}>
              <Dish id={dishId} />
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

export default RestaurantMenu
