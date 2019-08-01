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

  describe("when click on Open / Hide menu button", function() {
    const wrapper = mount(<App restaurants={restaurants} />);
    const id = restaurants[0].id;

    it("should show menu only for one restaurant", function() {
      wrapper
        .find(`button[data-autoid="OPEN_MENU_ITEM_${id}"]`)
        .simulate("click");
      expect(
        wrapper.find(`div[data-autoid="MENU_ITEMS_${id}"]`).length
      ).toEqual(1);
    });

    describe("when added dish", function() {
      it("should add dish", function() {
        const menu = wrapper
          .find(`div[data-autoid="MENU_ITEMS_${id}"]`)
          .find(`div[data-autoid="DISH_ITEM_0"]`);

        menu.find('button[data-autoid="DISH_ADD"]').simulate("click");
        expect(menu.find('span[data-autoid="DISH_AMOUNT"]').text()).toEqual(
          "1"
        );
      });
    });

    it("should hide menu only for one restaurant", function() {
      wrapper
        .find(`button[data-autoid="OPEN_MENU_ITEM_${id}"]`)
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

  describe("At click on Show / Hide reviews button", function() {
    const wrapper = mount(<App restaurants={restaurants} />);
    const id = restaurants[0].id;

    it("should show reviews only for one restaurant", function() {
      wrapper
        .find(`button[data-autoid="OPEN_REVIEWS_ITEM_${id}"]`)
        .simulate("click");

      expect(
        wrapper.find(`div[data-autoid="REVIEWS_ITEMS_${id}"]`).length
      ).toEqual(1);
    });

    it("should hide reviews only for one restaurant", function() {
      wrapper
        .find(`button[data-autoid="OPEN_REVIEWS_ITEM_${id}"]`)
        .simulate("click");

      expect(
        wrapper.find(`div[data-autoid="REVIEWS_ITEMS_${id}"]`).length
      ).toEqual(0);
    });
  });
});
