import {createSelector} from 'reselect'

export const selectId = (_, ownProps) => ownProps.id

export const selectCart = state => state.cart

export const selectDishes = state => state.dishes

export const selectRestaurants = state => state.restaurants

export const selectUsers = state => state.users

export const selectReviews = state => state.reviews

export const selectReview = createSelector(
  selectReviews,
  selectId,
  (reviews, id) => reviews[id]
)

export const selectUser = createSelector(
  selectUsers,
  selectReview,
  (users, review) => users[review.userId]
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
  (cart, restaurants) => {
    return restaurants.reduce(
      (result, restaurant) => {
        restaurant.menu.forEach(dish => {
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

export const selectRestaurantReviewsRating = (_, ownProps) => ownProps.reviews

export const selectAverageRating = createSelector(
  selectReviews,
  selectRestaurantReviewsRating,
  (reviews, restaurantRating) => {
    const ratings = []
    let sumRatings = 0

    for (const review of restaurantRating) {
      if (reviews.hasOwnProperty(review)) {
        ratings.push(reviews[review].rating)
      }
    }

    for (const rating of ratings) {
      sumRatings += rating
    }

    const rating = sumRatings / ratings.length

    return Math.floor(rating * 2) / 2
  }
)
