import React, { useState,useEffect } from "react";
import { SomeStatsContainer, StatsSection, StatsList } from "./styles";
import { StatsHeading } from "../styles";
import StatCard from "./StatCard";
import Loader from "../../../../Components/common/Loader";
import { getSomeStats } from "./service";

function SomeStats() {
  const [someStatsData, setSomeStatsData] = useState(false);
  useEffect(() => {
    getSomeStats().then((retrivedStats)=>{
      setSomeStatsData(retrivedStats);
    })
  }, []);
  if (!someStatsData) {
    return (
      <SomeStatsContainer>
        <Loader />
      </SomeStatsContainer>
    );
  }
  return (
    <SomeStatsContainer>
      {someStatsData.sections.map((section) => {
        return (
          <StatsSection>
            <StatsHeading>{section.name}</StatsHeading>
            <StatsList>
              {section.stats.map((stat) => {
                return <StatCard label={stat.label} value={stat.value} />;
              })}
            </StatsList>
          </StatsSection>
        );
      })}
    </SomeStatsContainer>
  );
}
export default SomeStats;
