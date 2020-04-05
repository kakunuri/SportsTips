import React from "react";
import LiveBettingTips from "./LiveBettingTips";
import UpcomingMatches from "./UpcomingMatches";
import News from "./News";
import { HomeContainer } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <LiveBettingTips />
      <UpcomingMatches />
      <News />
    </HomeContainer>
  );
}
