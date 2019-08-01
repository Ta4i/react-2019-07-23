import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RestaurantReviews from "../restaurant-reviews";
import { restaurants } from "../../fixtures";

Enzyme.configure({ adapter: new Adapter() });

describe("Testing RestaurantReviews", function() {
  it("should component review render", function() {
    const wrapper = mount(<RestaurantReviews restaurant={restaurants[0]} />);
    //wrapper.find('[data-autoid="list_item"]');
    expect(wrapper.find('[data-autoid="list_item"]').length).toEqual(4);
  });

  describe("when click on Open show review button", function() {
    const wrapper = mount(<RestaurantReviews restaurant={restaurants[1]} />);
    expect(wrapper.find(`[data-autoid="review"]`).length).toEqual(3);
  });
});
