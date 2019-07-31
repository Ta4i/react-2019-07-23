import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { restaurants } from "../../fixtures";
import Item from "antd/lib/list/Item";
import { exportAllDeclaration } from "@babel/types";

Enzyme.configure({ adapter: new Adapter() });

describe("At starts Restaurant-reviews test", function() {
  it("It should work", function() {
    expect(true).toEqual(false);
  });
});
