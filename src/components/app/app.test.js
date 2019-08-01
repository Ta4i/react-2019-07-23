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

  describe("when click on Close menu button", function() {
    it("should hide menu a restaurant", function() {
      const wrapper = mount(<App restaurants={restaurants} />);
      const id = restaurants[0].id;
      wrapper
        .find(`button[data-autoid="OPEN_MENU_ITEM_${id}"]`)
        .simulate("click")
        .simulate("click");
      expect(
        wrapper.find(`div[data-autoid="MENU_ITEMS_${id}"]`).length
      ).toEqual(0);
    });
  });

  describe("when App get fetchData prop", function() {
    it("should call fetchData callback", function(done) {
      mount(<App restaurants={restaurants} fetchData={() => done()} />);
    });
  });
});
