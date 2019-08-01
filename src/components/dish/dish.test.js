import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Dish from "./dish";
import { restaurants } from "../../fixtures";

Enzyme.configure({ adapter: new Adapter() });

describe("Simulate Increase", function() {
  it("should count equal 2", function() {
    const wrapper = mount(<Dish {...restaurants[0].menu[0]} />);
    const id = restaurants[0].menu[0].id;

    wrapper
      .find(`button[data-autoid="DISH_INCREASE_${id}"]`)
      .simulate("click")
      .simulate("click");
    var countSpan = shallow(
      wrapper.find(`span[data-autoid="DISH_COUNT_${id}"]`).get(0)
    );
    expect(countSpan.text()).toEqual("2");
  });
});

describe("Simulate Decrease 0", function() {
  it("should count equal 0", function() {
    const wrapper = mount(<Dish {...restaurants[0].menu[0]} />);
    const id = restaurants[0].menu[0].id;

    wrapper
      .find(`button[data-autoid="DISH_DECREASE_${id}"]`)
      .simulate("click")
      .simulate("click");
    var countSpan = shallow(
      wrapper.find(`span[data-autoid="DISH_COUNT_${id}"]`).get(0)
    );
    expect(countSpan.text()).toEqual("0");
  });
});

describe("Simulate Increase than Decrease", function() {
  it("should count equal 2", function() {
    const wrapper = mount(<Dish {...restaurants[0].menu[0]} />);
    const id = restaurants[0].menu[0].id;

    wrapper
      .find(`button[data-autoid="DISH_INCREASE_${id}"]`)
      .simulate("click")
      .simulate("click")
      .simulate("click")
      .simulate("click");
    wrapper
      .find(`button[data-autoid="DISH_DECREASE_${id}"]`)
      .simulate("click")
      .simulate("click");
    var countSpan = shallow(
      wrapper.find(`span[data-autoid="DISH_COUNT_${id}"]`).get(0)
    );
    expect(countSpan.text()).toEqual("2");
  });
});
