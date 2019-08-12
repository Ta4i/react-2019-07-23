import {createSelector} from 'reselect'

export const selectId = (_, ownProps) => ownProps.id

export const selectCart = state => state.cart

export const selectDishes = state => state.dishes

export const selectRestaurants = state => state.restaurants

export const selectRestaurantReviews = createSelector(
  selectRestaurants,
  selectId,
  (restaurants, restaurantId) => {
    const [selectedRestaurant = {}] = restaurants.filter(
      elem => elem.id === restaurantId
    )
    return selectedRestaurant.reviews
  }
)

export const selectUsers = state => state.users

export const selectReviewes = state => state.reviews

export const selectReview = createSelector(
  selectReviewes,
  selectRestaurantReviews,
  (reviews, restaurant) => {
    let _reviews = restaurant.map(elem => {
      let [arr = {}] = reviews.filter(oReview => oReview.id === elem)
      return arr
    })
    return _reviews
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
  selectRestaurants,
  selectDishes,
  (cart, restaurants, dishes) => {
    return restaurants.reduce(
      (result, restaurant) => {
        restaurant.menu.forEach(dishId => {
          const amount = cart[dishId]
          const dish = dishes[dishId]
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
