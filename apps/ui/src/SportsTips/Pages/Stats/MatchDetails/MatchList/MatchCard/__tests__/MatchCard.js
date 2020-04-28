import MatchCard from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("MatchCard", () => {
  it("should render correctly", () => {
    let MatchCardSnapshot = shallow(<MatchCard/>);
    expect(MatchCardSnapshot).toMatchSnapshot();
  });
});