import React, { useState } from "react";
import BettingSites from "../Home/BettingSites";
import { PrimaryContainer, SecondaryContainer, SiteImage } from "./styles";
import { HomeContainer } from "./styles";
import CarouselPage from "../Home/CarouselPage";
import LeftNav from "./LeftNav";
import { reviewTabs } from "./constants";
import Content from "./Content";

export default function Review() {
  const [currentTab, setCurrentTab] = useState(reviewTabs[0]);
  return (
    <HomeContainer>
      <PrimaryContainer>
        <SiteImage src="https://i1.wp.com/www.bettingplus.net/wp-content/uploads/2019/03/bet365-alternative-link.jpg?fit=935%2C629&ssl=1" />
        <BettingSites size="Large" />
      </PrimaryContainer>
      <SecondaryContainer>
        <LeftNav
          tabs={reviewTabs}
          setTab={setCurrentTab}
          currentTab={currentTab}
        />
        <Content />
      </SecondaryContainer>
    </HomeContainer>
  );
}
