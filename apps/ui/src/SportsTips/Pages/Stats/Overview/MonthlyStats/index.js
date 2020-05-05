import React, { useState, useEffect } from "react";
import { MonthlyStatsContainer } from "./styles";
import Graph from "../../../../Components/common/Graph";
import Loader from "../../../../Components/common/Loader";
import { getMonthlyStats } from "./service";

function MonthlyStats() {
  const [MonthlyStatsData, setMonthlyStatsData] = useState(false);
  useEffect(() => {
    getMonthlyStats().then((retrievedStats) => {
      setMonthlyStatsData(retrievedStats);
    });
  }, []);
  if (!MonthlyStatsData) {
    return (
      <MonthlyStatsContainer>
        <Loader />
      </MonthlyStatsContainer>
    );
  }
  return (
    <MonthlyStatsContainer>
      <Graph
        title="Monthly Stats"
        xLabel="Date"
        yLabels={["Profit %", "Win Chance %"]}
        type={["line", "line"]}
        xKey="date"
        xAxisOptions={{
          type: "dateTime",
        }}
        yKeys={["profit", "chance"]}
        data={MonthlyStatsData}
      />
    </MonthlyStatsContainer>
  );
}
export default MonthlyStats;
