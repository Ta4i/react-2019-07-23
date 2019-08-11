import {createSelector} from 'reselect'

export const selectId = (_, ownProps) => ownProps.id

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
      (result, dishId) => {
        const amount = cart[dishId]
        if (amount) {
          const totalDishPrice = amount * dishes[dishId].price
          result.totalPrice += totalDishPrice
          result.dishes.push({
            ...dishes[dishId],
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

export const getRestaurantRating = createSelector(
  selectRestaurants,
  selectReviews,
  selectId,
  (restaurants, reviews, id) => {
    const restaurant = restaurants[id]
    const rawRating =
      restaurant.reviews.reduce((result, reviewId) => {
        return result + reviews[reviewId].rating
      }, 0) / restaurant.reviews.length
    return {rating: Math.floor(rawRating * 2) / 2}
  }
)

export const selectReview = createSelector(
  selectReviews,
  selectUsers,
  selectId,
  (reviews, users, id) => {
    const review = reviews[id]
    const user = users[review.userId]

    return {
      review: {
        id: review.id,
        user: user.name,
        text: review.text,
        rating: review.rating,
      },
    }
  }
)
