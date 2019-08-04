import { restaurants } from "../fixtures.js";

export default class RestaurantsService {
  constructor() {
    this.restaurants = restaurants;
  }

  getTotalAssortment() {
    const menu = {};
    this.restaurants.forEach(currentRestaurant => {
      currentRestaurant.menu.forEach(item => {
        menu[item.id] = item;
      });
    });
    return menu;
  }
}
