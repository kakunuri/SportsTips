import LiveMatches from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("LiveMatches", () => {
  it("should render correctly", () => {
    let LiveMatchesSnapshot = shallow(<LiveMatches/>);
    expect(LiveMatchesSnapshot).toMatchSnapshot();
  });
});