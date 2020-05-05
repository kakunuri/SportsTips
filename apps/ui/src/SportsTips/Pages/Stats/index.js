import React, { useState } from "react";
import { StatsContainer, StatsDashboardContainer } from "./styles";
import Tabs from "../../Components/common/Tabs";
import { statsTabs } from "./constants";

function Stats(props) {
  const [currentTab, setCurrentTab] = useState(statsTabs[0]);
  return (
    <StatsContainer>
      <Tabs tabs={statsTabs} setTab={setCurrentTab} currentTab={currentTab} />
      <StatsDashboardContainer>
        <currentTab.value />
      </StatsDashboardContainer>
    </StatsContainer>
  );
}
export default Stats;
