import { createSelector } from "reselect";

export const selectId = (_, ownProps) => ownProps.id;

export const selectCart = state => state.cart;

export const selectDishes = state => state.dishes;

export const selectRestaurants = state => state.restaurants;

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
  selectRestaurants,
  (cart, restaurants) => {
    return restaurants.reduce(
      (result, restaurant) => {
        restaurant.menu.forEach(dish => {
          const amount = cart[dish.id];
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
        return result;
      },
      {
        dishes: [],
        totalPrice: 0
      }
    );
  }
);
