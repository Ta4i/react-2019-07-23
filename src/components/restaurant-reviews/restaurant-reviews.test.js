import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RestaurantList from "../restaurant-list";
import { restaurants } from "../../fixtures";

Enzyme.configure({ adapter: new Adapter() });

describe("restaurant reviews", function() {
  const firstRestaurant = restaurants[0];

  it("should render all reviews for restaurant", function() {
    const wrapper = mount(<RestaurantList restaurants={restaurants} />);
    const reviewsFirstRestaurant = firstRestaurant.reviews;

    wrapper
      .find(`button[data-autoid="OPEN_REVIEW_${firstRestaurant.id}"]`)
      .simulate("click");

    expect(
      wrapper
        .find(`[data-autoid="RESTAURANT_REVIEWS_${firstRestaurant.id}"]`)
        .find('li[data-autoid="RESTAURANT_REVIEW"]').length
    ).toEqual(reviewsFirstRestaurant.length);
  });

  it("should close menu restaurant", function() {
    const wrapper = mount(<RestaurantList restaurants={restaurants} />);
    const buttonOpenMenu = wrapper.find(
      `button[data-autoid="OPEN_MENU_ITEM_${firstRestaurant.id}"]`
    );

    buttonOpenMenu.simulate("click");

    const menuItemsCountAfterOpen = wrapper.find(
      `[data-autoid="MENU_ITEMS_${firstRestaurant.id}"]`
    ).length;

    buttonOpenMenu.simulate("click");

    const menuItemsCountAfterClose = wrapper.find(
      `[data-autoid="MENU_ITEMS_${firstRestaurant.id}"]`
    ).length;

    expect([menuItemsCountAfterOpen, menuItemsCountAfterClose]).toEqual([1, 0]);
  });

  it("should add dish", function() {
    const firstDish = firstRestaurant.menu[0];
    const wrapper = mount(<RestaurantList restaurants={restaurants} />);

    wrapper
      .find(`button[data-autoid="OPEN_MENU_ITEM_${firstRestaurant.id}"]`)
      .simulate("click");

    const firstDishWrapper = wrapper.find(
      `[data-autoid="DISH_${firstDish.id}"]`
    );

    firstDishWrapper.find('button[data-autoid="DISH_ADD"]').simulate("click");

    const dishCountAfterAdd = +firstDishWrapper
      .find('[data-autoid="DISH_COUNT"]')
      .text();

    firstDishWrapper
      .find('button[data-autoid="DISH_REMOVE"]')
      .simulate("click");

    const dishCountAfterRemove = +firstDishWrapper
      .find('[data-autoid="DISH_COUNT"]')
      .text();

    expect([dishCountAfterAdd, dishCountAfterRemove]).toEqual([1, 0]);
  });
});
