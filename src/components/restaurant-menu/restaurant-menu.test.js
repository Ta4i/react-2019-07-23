import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { restaurants } from "../../fixtures";
import App from "../app";

Enzyme.configure({ adapter: new Adapter() });

describe("At click on restaurant show menu button", () => {
  it("should show its menu and hide others", () => {
    const wrapper = mount(<App restaurants={restaurants} />);

    restaurants.forEach(restaurant => {
      wrapper
        .find(`button[data-autoid="OPEN_MENU_ITEM_${restaurant.id}"]`)
        .simulate("click");

      const menuItems = wrapper.find('div[data-autoid="MENU_ITEM"]');
      expect(menuItems.length).toEqual(restaurant.menu.length);
    });
  });

  describe("At double click ", () => {
    it("restaurant should show no menu", () => {
      const wrapper = mount(<App restaurants={restaurants} />);

      restaurants.forEach(restaurant => {
        wrapper
          .find(`button[data-autoid="OPEN_MENU_ITEM_${restaurant.id}"]`)
          .simulate("click")
          .simulate("click");

        const menuItems = wrapper.find('div[data-autoid="MENU_ITEM"]');
        expect(menuItems.length).toEqual(0);
      });
    });
  });
});
