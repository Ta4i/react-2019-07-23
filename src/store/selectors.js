import {createSelector} from 'reselect'

export const selectId = (_, ownProps) => ownProps.id

export const selectCart = state => state.cart

export const selectDishes = state => state.dishes

export const selectRestaurants = state => state.restaurants

export const selectReviewsId = (_, ownProps) => ownProps.restaurant.reviews

export const selectReviews = state => state.reviews

export const selectRestaurantReviews = createSelector(
  selectReviewsId,
  selectReviews,
  (ids, reviews) => {
    return ids.map((id) => reviews[id])
  }
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
  selectDishes,
  (cart, dishes) => {
    return Object.values(dishes).reduce(
      (result, dish) => {
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

        return result
      },
      {
        dishes: [],
        totalPrice: 0,
      }
    )
  }
)
