import MatchDetails from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("MatchDetails", () => {
  it("should render correctly", () => {
    let MatchDetailsSnapshot = shallow(<MatchDetails/>);
    expect(MatchDetailsSnapshot).toMatchSnapshot();
  });
});