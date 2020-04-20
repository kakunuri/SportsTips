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
import {
  prepareTabOption,
  prepareTabOptions,
  computeNotifications,
} from "./utils";
import { notifyFailure } from "../../../Components/Notifications";
function LiveBettingTips() {
  const [liveBettingTipsData, setLiveBettingTipsData] = useState([]);
  const [currentMatch, setCurrentMatch] = useState(null);
  function dataPolling() {
    getLiveBettingTips()
      .then((data) => {
        let dataWithNotifications = computeNotifications(
          data,
          liveBettingTipsData
        );
        setLiveBettingTipsData(dataWithNotifications);
        if (currentMatch === null) {
          setCurrentMatch(dataWithNotifications[0]);
        } else {
          setTimeout(() => {
            dataPolling();
          }, 1000);
        }
      })
      .catch(() => {
        notifyFailure("Failed to retrieve match details");
        setTimeout(() => {
          dataPolling();
        }, 100000);
      });
  }
  useEffect(() => {
    dataPolling();
  }, []);
  if (
    !liveBettingTipsData ||
    liveBettingTipsData.length === 0 ||
    currentMatch === null
  ) {
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
            setCurrentMatch(newTab.value);
            // setCurrentMatch(find(liveBettingTipsData, { match: newTab.label }));
          }}
        />
        <MatchDataDisplay data={currentMatch} />
      </BettingTipsSection>
    </LiveBettingTipsContainer>
  );
}

export default LiveBettingTips;
