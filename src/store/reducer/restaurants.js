import {normalizedRestaurants} from '../../fixtures'

export default (restaurantsState = normalizedRestaurants, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      const {id, restaurant} = action.comment
      let [newrestaurantsState] = restaurantsState.filter(
        (elem, i) => elem.id === restaurant
      )
      let restRestaurantsState = restaurantsState.filter(
        (elem, i) => elem.id !== restaurant
      )
      newrestaurantsState.reviews.push(id)
      return [...restRestaurantsState, newrestaurantsState]
    default:
      return restaurantsState
  }
}
