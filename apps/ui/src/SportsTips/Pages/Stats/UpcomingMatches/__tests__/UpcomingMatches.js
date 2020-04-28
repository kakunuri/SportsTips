import UpcomingMatches from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("UpcomingMatches", () => {
  it("should render correctly", () => {
    let UpcomingMatchesSnapshot = shallow(<UpcomingMatches/>);
    expect(UpcomingMatchesSnapshot).toMatchSnapshot();
  });
});