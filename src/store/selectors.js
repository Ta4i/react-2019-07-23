import { createSelector } from "reselect";

export const selectId = (_, ownProps) => ownProps.id;

export const selectCart = state => state.cart;

export const selectUsers = state => state.users;

export const selectDishes = state => state.dishes;

export const selectRestaurants = state => state.restaurants;

export const selectReviews = state => state.reviews;

export const selectRestaurantReviews = (state, restoranId) => {
  const restaurants = selectRestaurants(state);
  const restaurant = restaurants.find(rest => rest.id === restoranId);
  return restaurant.reviews;
};

export const selectReviewById = (state, ownProps) => {
  const id = ownProps.id;
  var rev = selectReviews(state).find(review => review.id === id);
  const user = selectUsers(state).find(user => user.id === rev.userId);
  rev.user = user.name;
  return rev;
};

export const selectDish = createSelector(
  selectDishes,
  selectId,
  (dishes, id) => dishes[id]
);

export const selectDishAmount = createSelector(
  selectCart,
  selectId,
  (cart, id) => cart[id] || 0
);

export const selectOrderedDishes = createSelector(
  selectCart,
  selectDishes,
  (cart, dishes) => {
    var totalPrice = 0;
    var orderedDishes = [];
    for (var dishId in cart) {
      console.log("dish id=" + dishId);
      const dish = dishes[dishId];
      orderedDishes.push(dish);
      const amount = cart[dishId];
      dish.amount = amount;
      totalPrice += amount * dish.price;
    }
    return { dishes: orderedDishes, totalPrice: totalPrice };
    /*return dishes.reduce(
            (result, dish) => {
                restaurant.menu.forEach(dishId => {
                    const amount = cart[dishId];
                    const dish = selectDish(dishId)
                    if (amount) {
                        const totalDishPrice = amount * dish.price;
                        result.totalPrice += totalDishPrice;
                        result.dishes.push({
                            ...dish,
                            amount,
                            totalDishPrice
                        });
                    }
                });
                debugger
                return result;
            },
            {
                dishes: [],
                totalPrice: 0
            }
        );*/
  }
);
/*
export const selectOrderedDishes = createSelector(
  selectCart,
  selectRestaurants,
  (cart, restaurants) => {
    return restaurants.reduce(
      (result, restaurant) => {
        restaurant.menu.forEach(dishId => {
          const amount = cart[dishId];
            const dish = selectDish(dishId)
          if (amount) {
            const totalDishPrice = amount * dish.price;
            result.totalPrice += totalDishPrice;
            result.dishes.push({
              ...dish,
              amount,
              totalDishPrice
            });
          }
        });
          debugger
        return result;
      },
      {
        dishes: [],
        totalPrice: 0
      }
    );
  }
);

   */
