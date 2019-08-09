import {normalizedDishes} from '../../fixtures'

const initialState = normalizedDishes.reduce((dishesMap, dish) => {
  //так менее затратно перевести из массива в объект
  return {
    ...dishesMap,
    [dish.id]: dish,
  }
}, {})

export default (dishesState = initialState, action) => {
  return dishesState
}
