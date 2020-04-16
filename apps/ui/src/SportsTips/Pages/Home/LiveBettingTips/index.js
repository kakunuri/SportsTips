import React, { useState, useEffect } from "react";
import Loader from "../../../Components/common/Loader";
import Tabs from "../../../Components/common/Tabs";
import {
  LiveBettingTipsContainer,
  BettingTipsSection,
  Header,
  Title,
  Logo,
  ViewAll,
} from "./styles";
import MatchDataDisplay from "./MatchDataDisplay";
import { getLiveBettingTips } from "./service";
import { prepareTabOption, prepareTabOptions } from "./utils";
const find = require("lodash.find");
function LiveBettingTips() {
  const [liveBettingTipsData, setLiveBettingTipsData] = useState([]);
  const [currentMatch, setCurrentMatch] = useState(null);
  function dataPolling() {
    getLiveBettingTips().then((data) => {
      setLiveBettingTipsData(data);
      if (currentMatch === null) {
        setCurrentMatch(data[0]);
      } else {
        setTimeout(() => {
          dataPolling();
        }, 20000);
      }
    });
  }
  useEffect(() => {
    dataPolling();
  }, [currentMatch]);
  if (liveBettingTipsData.length === 0 || currentMatch === null) {
    return <Loader />;
  }
  return (
    <LiveBettingTipsContainer>
      <Header>
        <Title>
          <Logo />
          Live betting tips
        </Title>
        <ViewAll>View All ></ViewAll>
      </Header>
      <BettingTipsSection>
        <Tabs
          currentTab={prepareTabOption(currentMatch)}
          tabs={prepareTabOptions(liveBettingTipsData)}
          setTab={(newTab) => {
            setCurrentMatch(find(liveBettingTipsData, { match: newTab.label }));
          }}
        />
        <MatchDataDisplay data={currentMatch} />
      </BettingTipsSection>
    </LiveBettingTipsContainer>
  );
}

export default LiveBettingTips;
