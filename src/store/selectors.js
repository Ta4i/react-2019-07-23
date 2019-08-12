import {createSelector} from 'reselect'

export const selectId = (_, ownProps) => ownProps.id

export const selectOwnProps = (_, ownProps) => ownProps

export const selectCart = state => state.cart

export const selectDishes = state => state.dishes

export const selectRestaurants = state => state.restaurants

export const selectReviews = state => state.reviews

export const selectUsers = state => state.users

export const selectDish = createSelector(
  selectDishes,
  selectId,
  (dishes, id) => dishes[id]
)

export const selectReview = createSelector(
  selectReviews,
  selectId,
  (review, id) => review[id]
)

export const selectDishAmount = createSelector(
  selectCart,
  selectId,
  (cart, id) => cart[id] || 0
)

export const selectUserIdByName = createSelector(
  selectUsers,
  selectOwnProps,
  (user, name) => Object.keys(user).filter(index => user[index].name === name)
)

export const selectOrderedDishes = createSelector(
  selectCart,
  selectRestaurants,
  selectDishes,
  (cart, restaurants, dishes) => {
    return restaurants.reduce(
      (result, restaurant) => {
        restaurant.menu.forEach(dishId => {
          const dish = dishes[dishId]
          const amount = cart[dish.id]
          if (amount) {
            const totalDishPrice = amount * dish.price
            result.totalPrice += totalDishPrice
            result.dishes.push({
              ...dish,
              amount,
              totalDishPrice,
            })
          }
        })
        return result
      },
      {
        dishes: [],
        totalPrice: 0,
      }
    )
  }
)

export const selectRestaurantById = createSelector(
  selectRestaurants,
  selectOwnProps,
  (restaurants, ownProps) => {
    console.log('this selectors rest', restaurants, ownProps)
  }
)
