import React from 'react'
import Dish from '../dish'
import {Row, Col} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {
  selectDishesError,
  selectDishesLoadedForRestaurant,
  selectDishesLoading,
  selectRestaurant,
  selectRestaurantsLoaded,
  selectRestaurantsLoading,
} from '../../store/selectors'
import {loadDishes, loadRestaurants} from '../../store/ac'
import Loader from '../loader'

function RestaurantMenu(props) {
  const {
    loadingDishes,
    loadingRestaurants,
    loadedRestaurants,
    loadedForRestaurant,
    restaurant,
    errorDishes,
  } = useSelector(state => ({
    errorDishes: selectDishesError(state),
    loadingDishes: selectDishesLoading(state),
    loadingRestaurants: selectRestaurantsLoading(state),
    loadedRestaurants: selectRestaurantsLoaded(state),
    loadedForRestaurant: selectDishesLoadedForRestaurant(state, {
      id: props.restaurantId,
    }),
    restaurant: selectRestaurant(state, {id: props.restaurantId}),
  }))
  const dispatch = useDispatch()

  if (!loadingDishes && !errorDishes && !loadedForRestaurant) {
    dispatch(loadDishes(props.restaurantId))
  }

  if (!loadingRestaurants && !loadedRestaurants) {
    dispatch(loadRestaurants())
  }

  if (!loadedForRestaurant || !loadedRestaurants) {
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
