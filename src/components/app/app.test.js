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

  // честно, хз как было более правильно сделать 2 задание, вот как-то так
  describe("when click on Open menu button then click again and close it", function() {
    it("should close opened restaurant", function() {
      const wrapper = mount(<App restaurants={restaurants} />);
      const id = restaurants[0].id;
      wrapper
        .find(`button[data-autoid="OPEN_MENU_ITEM_${id}"]`)
        .simulate("click");
      expect(
        wrapper.find(`div[data-autoid="MENU_ITEMS_${id}"]`).length
      ).toEqual(1);
      wrapper
        .find(`button[data-autoid="OPEN_MENU_ITEM_${id}"]`)
        .simulate("click");
      expect(
        wrapper.find(`div[data-autoid="MENU_ITEMS_${id}"]`).length
      ).toEqual(0);
    });
  });

  describe("click 3 times on button increase dish count", function() {
    it("shoulde count dish is 3", function() {
      const wrapper = mount(<App restaurants={restaurants} />);
      const idOpenBtnRestaraunt = restaurants[3].id;
      const dishId = restaurants[3].menu[0].id;

      wrapper
        .find(`button[data-autoid="OPEN_MENU_ITEM_${idOpenBtnRestaraunt}"]`)
        .simulate("click")
        .find(`button[data-autoid="increase_${dishId}"]`);
      // (1)
      // .simulate('click')
      // .simulate('click')
      // .simulate('click')
      console.log(wrapper.debug());
      // (2)
      expect(
        wrapper
          .find(`button[data-autoid="increase_${dishId}"]`)
          .simulate("click")
          .simulate("click")
          .simulate("click")
          .parents(".ant-card-actions")
          .children()
          .last()
          .text()
      ).toEqual("3");
    });
  });
});
