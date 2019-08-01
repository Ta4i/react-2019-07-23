import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../app";
import { restaurants } from "../../fixtures";
import Dish from "./dish";
import { times } from "lodash";

Enzyme.configure({ adapter: new Adapter() });
const menu = restaurants[0].menu[0];

describe("On load", () => {
  it("should have no items", () => {
    const wrapper = mount(<Dish {...menu} />);
    expect(wrapper.state.amount).toEqual(undefined);
  });

  describe("On click increase button", () => {
    it("amount should increase by 1", () => {
      const menu = restaurants[0].menu[0];
      const wrapper = mount(<Dish {...menu} />);

      const iterations = 10;

      times(iterations, i => {
        expect(
          parseInt(
            wrapper.find('span[data-autoid="CURRENT_AMOUNT_VALUE"]').text()
          )
        ).toEqual(i);

        wrapper
          .find(`button[data-autoid="BUTTON_INCREASE_${menu.id}"]`)
          .simulate("click");

        expect(
          parseInt(
            wrapper.find('span[data-autoid="CURRENT_AMOUNT_VALUE"]').text()
          )
        ).toEqual(i + 1);
      });
    });

    it("amount should decrease by 1", () => {
      const menu = restaurants[0].menu[0];
      const wrapper = mount(<Dish {...menu} />);
      const increaseButton = wrapper.find(
        `button[data-autoid="BUTTON_INCREASE_${menu.id}"]`
      );
      const decreaseButton = wrapper.find(
        `button[data-autoid="BUTTON_DECREASE_${menu.id}"]`
      );
      const iterations = 10;

      times(iterations, () => increaseButton.simulate("click"));

      for (let i = iterations; i > 0; --i) {
        expect(
          parseInt(
            wrapper.find('span[data-autoid="CURRENT_AMOUNT_VALUE"]').text()
          )
        ).toEqual(i);
        decreaseButton.simulate("click");
        expect(
          parseInt(
            wrapper.find('span[data-autoid="CURRENT_AMOUNT_VALUE"]').text()
          )
        ).toEqual(i - 1);
      }
    });

    it("amount shouldnt decrease if it is 0", () => {
      const menu = restaurants[0].menu[0];
      const wrapper = mount(<Dish {...menu} />);

      expect(
        parseInt(
          wrapper.find('span[data-autoid="CURRENT_AMOUNT_VALUE"]').text()
        )
      ).toEqual(0);

      wrapper
        .find(`button[data-autoid="BUTTON_DECREASE_${menu.id}"]`)
        .simulate("click");

      expect(
        parseInt(
          wrapper.find('span[data-autoid="CURRENT_AMOUNT_VALUE"]').text()
        )
      ).toEqual(0);
    });
  });
});
