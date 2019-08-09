import {createSelector} from 'reselect'

export const selectId = (_, ownProps) => ownProps.id

export const selectCart = state => state.cart

export const selectDishes = state => state.dishes

export const selectRestaurants = state => state.restaurants

export const selectReviews = state => state.reviews

export const selectReview = createSelector(
  selectReviews,
  selectId,
  (dishes, id) => dishes[id]
)

export const selectDish = createSelector(
  selectDishes,
  selectId,
  (reviews, id) => reviews[id]
)

export const selectDishAmount = createSelector(
  selectCart,
  selectId,
  (cart, id) => cart[id] || 0
)

export const selectOrderedDishes = createSelector(
  selectCart,
  selectDishes,
  (cart, dishes) => {
    return Object.keys(dishes).reduce(
      (result, item) => {
        const value = dishes[item]
        const amount = cart[item]

        if (amount) {
          const totalDishPrice = amount * value.price
          result.totalPrice += totalDishPrice
          result.orderDishes.push({
            ...value,
            amount,
            totalDishPrice,
          })
        }

        return result
      },
      {
        orderDishes: [],
        totalPrice: 0,
      }
    )
  }
)
