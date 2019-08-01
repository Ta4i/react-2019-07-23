import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { restaurants } from "../../fixtures";
import App from "../app";
import Review from "../review";

Enzyme.configure({ adapter: new Adapter() });

describe("At init", () => {
  it("restaurant should show no reviews", () => {
    const wrapper = mount(<App restaurants={restaurants} />);
    expect(wrapper.find(Review).length).toEqual(0);
  });

  describe("On click Show Reviews", () => {
    it("restaurant should show its reviews", () => {
      const wrapper = mount(<App restaurants={restaurants} />);
      restaurants.forEach(restaurant => {
        wrapper
          .find(`button[data-autoid="SHOW_REVIEWS_${restaurant.id}"]`)
          .simulate("click");

        expect(
          wrapper
            .find(`button[data-autoid="SHOW_REVIEWS_${restaurant.id}"]`)
            .text()
        ).toEqual("Hide reviews");

        expect(wrapper.find(Review).length).toEqual(restaurant.reviews.length);
        restaurant.reviews.forEach(review => {
          expect(
            wrapper.find(`li[data-autoid="REVIEW_ITEM_${review.id}"]`).length
          ).toEqual(1);
        });

        wrapper
          .find(`button[data-autoid="SHOW_REVIEWS_${restaurant.id}"]`)
          .simulate("click");

        expect(
          wrapper
            .find(`button[data-autoid="SHOW_REVIEWS_${restaurant.id}"]`)
            .text()
        ).toEqual("Show reviews");

        expect(wrapper.find(Review).length).toEqual(0);
        restaurant.reviews.forEach(review => {
          expect(
            wrapper.find(`li[data-autoid="REVIEW_ITEM_${review.id}"]`).length
          ).toEqual(0);
        });
      });
    });
  });

  describe("On click on Show Reviews in all restaurants", () => {
    it("all reviews should be shown", () => {
      const wrapper = mount(<App restaurants={restaurants} />);
      restaurants.forEach(restaurant => {
        wrapper
          .find(`button[data-autoid="SHOW_REVIEWS_${restaurant.id}"]`)
          .simulate("click");
      });
      const reviewsCount = restaurants.reduce((a, b) => {
        return a + b.reviews.length;
      }, 0);
      expect(wrapper.find(Review).length).toEqual(reviewsCount);
    });
  });
});
