import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app";
import { restaurants } from "../../fixtures";

Enzyme.configure({ adapter: new Adapter() });

describe("At starts", function() {
  it("should show all restaurants", function() {
    const wrapper = mount(<App restaurants={restaurants} />);
    expect(wrapper.find('li[data-autoid="RESTAURANT_ITEM"]').length).toEqual(4);
  });

  describe("when click on Open menu button", function() {
    it("should show menu only for one restaurant", function() {
      const wrapper = mount(<App restaurants={restaurants} />);
      const id = restaurants[0].id;
      wrapper
        .find(`button[data-autoid="OPEN_MENU_ITEM_${id}"]`)
        .simulate("click");
      expect(
        wrapper.find(`div[data-autoid="MENU_ITEMS_${id}"]`).length
      ).toEqual(1);
    });
  });

  describe("when App get fetchData prop", function() {
    it("should call fetchData callback", function(done) {
      mount(<App restaurants={restaurants} fetchData={() => done()} />);
    });
  });

  //Close menu

  describe("when click on Close menu button", function() {
    it("should close menu only for one restaurant", function() {
      const wrapper = mount(<App restaurants={restaurants} />);
      const id = restaurants[0].id;
      wrapper
        .find(`button[data-autoid="OPEN_MENU_ITEM_${id}"]`)
        .simulate("click");
      expect(wrapper.find(`div[data-autoid="MENU_ITEMS_${id}"]`).hidden);
    });
  });

  //Review

  describe("when click on Show review button", function() {
    it("should show review only for one restaurant", function() {
      const wrapper = mount(<App restaurants={restaurants} />);
      const id = restaurants[0].id;
      wrapper
        .find(`button[data-autoid="BUTTON_REVIEW_ITEM_${id}"]`)
        .simulate("click");
      expect(
        wrapper.find(`div[data-autoid="REVIEW_ITEMS_${id}"]`).length
      ).toEqual(1);
    });
  });

  describe("when review item contains rating", function() {
    it("is each review contains rating", function() {
      const wrapper = mount(<App restaurants={restaurants} />);
      const itemReview = wrapper.find('[data-autoid="REVIEW_ITEM"]');
      expect(itemReview.contains('[data-autoid="RATING_ITEM"]')).toEqual(true);
    });
  });

  //Button decrease count

  describe("when click on Minus menu button", function() {
    it("should minus button decrease count", function() {
      const wrapper = mount(<App restaurants={restaurants} />);
      const id = restaurants[0].id;
      wrapper
        .find(`button[data-autoid="BUTTON_MINUS_${id}"]`)
        .simulate("click");
      expect(
        wrapper.find(`span[data-autoid="DISH_COUNT_${id}"]`).text()
      ).toEqual(0);
    });
  });
});
