import {createSelector} from 'reselect'

export const selectId = (_, ownProps) => ownProps.id

export const selectCartImmutable = state => state.cart

export const selectCart = createSelector(
  selectCartImmutable,
  cart => {
    return cart.toJS()
  }
)

export const selectRestaurantsImmutable = state =>
  state.restaurants.get('entities')

export const selectRestaurantsLoading = state =>
  state.restaurants.get('loading')

export const selectRestaurantsLoaded = state => state.restaurants.get('loaded')

export const selectDishesImmutable = state => state.dishes.get('entities')

export const selectDishesLoading = state => state.dishes.get('loading')

export const selectDishesLoaded = state => state.dishes.get('loaded')

export const selectDishesError = state => state.dishes.get('error')

export const selectDishesLoadedRestaurants = state =>
  state.dishes.get('loadedRestaurants')

export const selectReviewsImmutable = state => state.reviews.get('entities')

export const selectReviewsLoading = state => state.reviews.get('loading')

export const selectReviewsLoaded = state => state.reviews.get('loaded')

export const selectUsersImmutable = state => state.users.get('entities')

export const selectUsersLoading = state => state.users.get('loading')

export const selectUsersLoaded = state => state.users.get('loaded')

export const selectRestaurants = createSelector(
  selectRestaurantsImmutable,
  restaurantsList => {
    return restaurantsList.toJS()
  }
)

export const selectDishesLoadedForRestaurant = createSelector(
  selectDishesLoadedRestaurants,
  selectId,
  (restaurantsLoaded, id) => {
    return restaurantsLoaded.get(id)
  }
)

export const selectDishes = createSelector(
  selectDishesImmutable,
  dishes => {
    return dishes.toJS()
  }
)

export const selectReviews = createSelector(
  selectReviewsImmutable,
  reviews => {
    return reviews.toJS()
  }
)

export const selectUsers = createSelector(
  selectUsersImmutable,
  users => {
    return users.toJS()
  }
)

export const selectRestaurant = createSelector(
  selectRestaurants,
  selectId,
  (restaurants, id) => {
    return restaurants.find(restaurant => restaurant.id === id)
  }
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
    return restaurant.reviews.map(reviewId => reviews[reviewId]).filter(Boolean)
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
