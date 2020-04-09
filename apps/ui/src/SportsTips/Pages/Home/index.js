import React from "react";
import CarouselPage from "./CarouselPage";
import BettingSites from "./BettingSites";
import { PrimaryContainer } from "./styles";
import LiveBettingTips from "./LiveBettingTips";
import UpcomingMatches from "./UpcomingMatches";
import News from "./News";
import { HomeContainer } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <PrimaryContainer>
        <CarouselPage />
        <BettingSites />
      </PrimaryContainer>
      <LiveBettingTips />
      <UpcomingMatches />
      <News />
    </HomeContainer>
  );
}
