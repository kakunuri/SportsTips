import React, { useState, useEffect } from "react";
import { WeeklyStatsContainer } from "./styles";
import Graph from "../../../../Components/common/Graph";
import Loader from "../../../../Components/common/Loader";
import { getWeeklyStats } from "./service";

function WeeklyStats() {
  const [weeklyStatsData, setWeeklyStatsData] = useState(false);
  useEffect(() => {
    getWeeklyStats().then((retrievedStats) => {
      setWeeklyStatsData(retrievedStats);
    });
  }, []);
  if (!weeklyStatsData) {
    return (
      <WeeklyStatsContainer>
        <Loader />
      </WeeklyStatsContainer>
    );
  }
  return (
    <WeeklyStatsContainer>
      <Graph
        title="Weekly Stats"
        xLabel="Date"
        yLabels={["Profit %", "Win Chance %"]}
        type={["line", "line"]}
        xKey="date"
        xAxisOptions={{
          type: "dateTime",
        }}
        yKeys={["profit", "chance"]}
        data={weeklyStatsData}
      />
    </WeeklyStatsContainer>
  );
}
export default WeeklyStats;
