import React from "react";
import { OverviewContainer,HorizontalSplitter,VerticalSplitter } from "./styles";
import SomeStats from './SomeStats';
import WeeklyStats from './WeeklyStats';
import MonthlyStats from './MonthlyStats';

function Overview() {
  return <OverviewContainer>
    <HorizontalSplitter>
      <SomeStats/>
      <VerticalSplitter>
        <WeeklyStats/>
        <MonthlyStats/>
      </VerticalSplitter>
    </HorizontalSplitter>
  </OverviewContainer>;
}
export default Overview;