import Stats from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Stats", () => {
  it("should render correctly", () => {
    let StatsSnapshot = shallow(<Stats/>);
    expect(StatsSnapshot).toMatchSnapshot();
  });
});