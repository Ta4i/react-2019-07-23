import {createSelector} from 'reselect'

export const selectId = (_, ownProps) => ownProps.id

export const selectCart = state => state.cart

export const selectDishes = state => state.dishes

export const selectRestaurantsImmutable = state => state.restaurants

export const selectReviews = state => state.reviews

export const selectUsers = state => state.users

export const selectRestaurants = createSelector(
  selectRestaurantsImmutable,
  restaurantsList => {
    return restaurantsList.toJS()
  }
)

export const selectRestaurant = createSelector(
  selectRestaurants,
  selectId,
  (restaurants, id) => restaurants.find(restaurant => restaurant.id === id)
)

export const selectDishList = createSelector(
  selectDishes,
  dishes => Object.values(dishes)
)

export const selectUserList = createSelector(
  selectUsers,
  users => Object.values(users)
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
  selectDishList,
  (cart, dishes) => {
    return dishes.reduce(
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

export const selectRestaurantReviews = createSelector(
  selectRestaurant,
  selectReviews,
  (restaurant, reviews) => {
    return restaurant.reviews.map(reviewId => reviews[reviewId])
  }
)

export const selectFullRestaurantReviews = createSelector(
  selectRestaurantReviews,
  selectUsers,
  (restaurantReviews, users) => {
    return restaurantReviews.map(review => ({
      ...review,
      user: users[review.userId],
    }))
  }
)

export const selectRatings = createSelector(
  selectRestaurantReviews,
  restaurantReviews => {
    const rawRating =
      restaurantReviews.reduce((acc, {rating}) => {
        return acc + rating
      }, 0) / restaurantReviews.length
    return Math.floor(rawRating * 2) / 2
  }
)
