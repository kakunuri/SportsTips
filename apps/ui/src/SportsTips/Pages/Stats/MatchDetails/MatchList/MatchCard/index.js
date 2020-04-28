import React,{useState} from "react";
import { MatchCardContainer,MatchRow,MatchSeries,MatchName,MatchWin,MatchNet,TipsInfo } from "./styles";
import TipsHeader from "../../../../Home/LiveBettingTips/MatchDataDisplay/TipsHeader";
import { TipsContainer } from "../../../../Home/LiveBettingTips/MatchDataDisplay/styles";
import TipRow from "../../../../Home/LiveBettingTips/MatchDataDisplay/TipRow";

function MatchCard({ match }) {
  const [showTips, setTipsVisibility] = useState(false);
  return (
    <MatchCardContainer>
      <MatchRow onClick={()=>{setTipsVisibility(!showTips)}}>
        <MatchSeries>{match.series}</MatchSeries>
        <MatchName>{match.match}</MatchName>
        <MatchWin>{match.winPercentage}</MatchWin>
        <MatchNet>{match.net}</MatchNet>
      </MatchRow>
      {showTips && <TipsInfo>
        <TipsHeader />
        <TipsContainer>
          {match.tips.map((tip, id) => {
            return <TipRow id={id} tip={tip} />;
          })}
        </TipsContainer>
      </TipsInfo>}
    </MatchCardContainer>
  );
}
export default MatchCard;
