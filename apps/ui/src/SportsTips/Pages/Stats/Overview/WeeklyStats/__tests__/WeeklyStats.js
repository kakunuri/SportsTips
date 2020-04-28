import WeeklyStats from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("WeeklyStats", () => {
  it("should render correctly", () => {
    let WeeklyStatsSnapshot = shallow(<WeeklyStats/>);
    expect(WeeklyStatsSnapshot).toMatchSnapshot();
  });
});