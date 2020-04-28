import MonthlyStats from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("MonthlyStats", () => {
  it("should render correctly", () => {
    let MonthlyStatsSnapshot = shallow(<MonthlyStats/>);
    expect(MonthlyStatsSnapshot).toMatchSnapshot();
  });
});