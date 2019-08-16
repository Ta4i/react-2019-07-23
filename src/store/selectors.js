import {createSelector} from 'reselect'

export const selectId = (_, ownProps) => ownProps.id

export const selectCartImmutable = state => state.cart

export const selectDishesImmutable = state => state.dishes.get('entities')

export const selectRestaurantsImmutable = state =>
  state.restaurants.get('entities')

export const selectRestaurantsLoading = state =>
  state.restaurants.get('loading')

export const selectReviewsImmutable = state => state.reviews.get('entities')

export const selectReviewsLoading = state => {
  return state.reviews.get('loading')
}

export const selectDishesLoading = state => {
  return state.dishes.get('loading')
}

export const selectCart = createSelector(
  selectCartImmutable,
  cart => cart.toJS()
)

export const selectDishes = createSelector(
  selectDishesImmutable,
  dishes => dishes.toJS()
)

export const selectUsersImmutable = state => state.users.get('entities')

export const selectReviews = createSelector(
  selectReviewsImmutable,
  reviews => {
    return reviews.toJS()
  }
)

export const selectRestaurants = createSelector(
  selectRestaurantsImmutable,
  restaurantsList => {
    return restaurantsList.toJS()
  }
)

export const selectUsers = createSelector(
  selectUsersImmutable,
  usersList => {
    return usersList.toJS()
  }
)

export const selectRestaurant = createSelector(
  selectRestaurants,
  selectId,
  (restaurants, id) => {
    return restaurants.find(restaurant => restaurant.id === id)
  }
)
export const selectUserList = createSelector(
  selectUsers,
  users => Object.values(users)
)

export const selectRestaurantDishes = createSelector(
  selectRestaurant,
  selectDishes,
  (restaurant, dishes) => {
    return dishes.filter(dish => {
      return restaurant.menu.includes(dish.id)
    })
  }
)

export const selectDish = createSelector(
  selectDishes,
  selectId,
  (dishes, id) => dishes.find(dish => dish.id === id)
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
    if (!reviews.length) {
      return []
    }

    return reviews.filter(review => {
      return restaurant.reviews.includes(review.id)
    })
  }
)

export const selectFullRestaurantReviews = createSelector(
  selectRestaurantReviews,
  selectUsers,
  (restaurantReviews, users) => {
    return restaurantReviews.map(review => ({
      ...review,
      user: users.find(user => user.id === review.userId),
    }))
  }
)

export const selectRestaurantAverageRating = createSelector(
  selectRestaurant,
  restaurant => {
    return restaurant.rating
  }
)
