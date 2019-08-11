import {createSelector} from 'reselect'

export const selectId = (_, ownProps) => ownProps.id

export const selectCart = state => state.cart

export const selectDishes = state => state.dishes

export const selectRestaurants = state => state.restaurants

export const selectDish = createSelector(
  selectDishes,
  selectId,
  (dishes, id) => dishes[id]
)

export const selectDishAmount = createSelector(
  selectCart,
  selectId,
  (cart, id) => cart[id] || 0
)

export const selectOrderedDishes = createSelector(
  selectCart,
  selectRestaurants,
  selectDishes,
  (cart, restaurants, dishes) => {
    return Object.entries(cart).reduce(
      (result, cartItem) => {
        const amount = cartItem[1]
        if (amount) {
          const dish = dishes[cartItem[0]]

          const totalDishPrice = amount * dish.price
          result.totalPrice += totalDishPrice
          result.dishes.push({
            ...dish,
            amount,
            totalDishPrice,
          })
        }
        return result
      },
      {
        dishes: [],
        totalPrice: 0,
      }
    )
  }
)
