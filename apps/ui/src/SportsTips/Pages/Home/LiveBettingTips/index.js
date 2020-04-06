import React, { useState, useEffect,useContext } from "react";
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
import { Context } from "../../../Store";
function LiveBettingTips() {
  const [liveBettingTipsData, setLiveBettingTipsData] = useState({});
  const [currentMatch,setCurrentMatch] = useState("");
  const {state} = useContext(Context);
  function dataPolling() {
    getLiveBettingTips().then((data) => {
      setLiveBettingTipsData(data);
      if(currentMatch===""){
        setCurrentMatch(Object.keys(data)[0])
      }
      else{
        setTimeout(() => {
            dataPolling();
          }, 1000);
      }
    });
  }
  useEffect(()=>{
      dataPolling();
  },[currentMatch])
  if (liveBettingTipsData === {} || currentMatch === "") {
    return <Loader />;
  }
  return (
    <LiveBettingTipsContainer>
      <Header>
        <Title>
          <Logo />
          Live betting tips
        </Title>
        <ViewAll theme={state.theme}>View All ></ViewAll>
      </Header>
      <BettingTipsSection theme={state.theme}>
      <Tabs
        currentTab={prepareTabOption(currentMatch)}
        tabs={prepareTabOptions(Object.keys(liveBettingTipsData))}
        setTab={(newTab)=>{
            setCurrentMatch(newTab.value);
        }}
      />
      <MatchDataDisplay data={liveBettingTipsData[currentMatch]}/>
      </BettingTipsSection>
    </LiveBettingTipsContainer>
  );
}

export default LiveBettingTips;
