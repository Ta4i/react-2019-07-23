import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RestaurantReviews from "./restaurant-reviews";
import { restaurants } from "../../fixtures";
import { Comment, Rate, List } from "antd";

Enzyme.configure({ adapter: new Adapter() });

describe("At starts Restaurant-reviews test", function() {
  it("should show all reviews", function() {
    const wrapper = mount(<RestaurantReviews restaurant={restaurants[0]} />);
    expect(wrapper.find('div[data-autoid="REVIEW_ITEM"]').length).toEqual(2);
  });
});

describe("Show Rate", function() {
  it("should show all reviews", function() {
    const wrapper = mount(<RestaurantReviews restaurant={restaurants[0]} />);
    expect(wrapper.find(Rate).length).toEqual(2);
  });
});

describe("Count of full star", function() {
  it("should show 8 stars", function() {
    const wrapper = mount(<RestaurantReviews restaurant={restaurants[0]} />);
    expect(wrapper.find(".ant-rate-star-full").length).toEqual(8);
  });
});
