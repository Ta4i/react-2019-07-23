import React from 'react'
import Dish from '../dish'
import {Row, Col} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {
  selectDishesError,
  selectDishesLoaded,
  selectDishesLoading,
  selectRestaurant,
  selectRestaurantsLoaded,
  selectRestaurantsLoading,
} from '../../store/selectors'
import {loadDishes, loadRestaurants} from '../../store/ac'
import Loader from '../loader'
import {Redirect} from 'react-router-dom'

function RestaurantMenu(props) {
  const {
    loadingDishes,
    loadedDishes,
    loadingRestaurants,
    loadedRestaurants,
    restaurant,
    errorDishes,
  } = useSelector(state => ({
    errorDishes: selectDishesError(state),
    loadingDishes: selectDishesLoading(state),
    loadedDishes: selectDishesLoaded(state),
    loadingRestaurants: selectRestaurantsLoading(state),
    loadedRestaurants: selectRestaurantsLoaded(state),
    restaurant: selectRestaurant(state, {id: props.restaurantId}),
  }))
  const dispatch = useDispatch()

  if (errorDishes) {
    return <Redirect to={'/error'} />
  }

  if (!loadedDishes && !loadingDishes && !errorDishes) {
    dispatch(loadDishes(props.restaurantId))
  }

  if (!loadingRestaurants && !loadedRestaurants) {
    dispatch(loadRestaurants())
  }

  if (!loadedDishes || !loadedRestaurants) {
    return <Loader />
  }

  return (
    <div
      style={{padding: '16px'}}
      data-autoid={`MENU_ITEMS_${props.restaurantId}`}
    >
      <Row gutter={16}>
        {restaurant.menu.map(dishId => (
          <Col key={dishId} span={8}>
            <Dish id={dishId} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default RestaurantMenu
