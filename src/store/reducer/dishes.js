import {normalizedDishes} from '../../fixtures'

const initialState = normalizedDishes.reduce((dishesMap, dish) => {
  return {
    ...dishesMap,
    [dish.id]: dish,
  }
}, {})

export default (dishesState = initialState, action) => {
  return dishesState
}
