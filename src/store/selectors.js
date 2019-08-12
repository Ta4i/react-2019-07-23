import {createSelector} from 'reselect'

export const selectId = (_, ownProps) => {
  return ownProps.id
}

export const selectCart = state => state.cart

export const selectDishes = state => state.dishes

export const selectReviews = state => state.reviews

export const selectUsers = state => state.users

export const selectRestaurants = state => state.restaurants

export const selectUserByReviewId = createSelector(
  selectReviews,
  selectId,
  selectUsers,
  (reviews, reviewId, users) => {
    return users[reviews[reviewId].userId]
  }
)

export const selectUser = createSelector(
  selectUsers,
  selectId,
  (users, id) => users[id]
)

export const selectReview = createSelector(
  selectReviews,
  selectId,
  (reviews, id) => reviews[id]
)

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
