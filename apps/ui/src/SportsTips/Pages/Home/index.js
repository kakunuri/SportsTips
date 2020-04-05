import React from "react";
import CarouselPage from "../../Components/CarouselPage";
import BettingSites from "../../Components/BettingSites";
import { PrimaryContainer } from "./styles";

export default function Home() {
  return (
    <PrimaryContainer>
      <CarouselPage />
      <BettingSites />
    </PrimaryContainer>
  );
}
