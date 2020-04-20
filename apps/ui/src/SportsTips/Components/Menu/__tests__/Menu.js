import Menu from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Menu", () => {
  it("should render correctly", () => {
    let MenuSnapshot = shallow(<Menu/>);
    expect(MenuSnapshot).toMatchSnapshot();
  });
});