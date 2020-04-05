import React from "react";
import {MatchDataContainer,TipsContainer} from './styles';
import MatchInformation from './MatchInformation';
import TipsHeader from "./TipsHeader";
import TipRow from "./TipRow";
function MatchDataDisplay({ data }) {
  return (
    <MatchDataContainer>
      <MatchInformation data={data.matchDetails} />
      <TipsHeader />
      <TipsContainer>
        {data.tips.map((tip) => {
          return <TipRow tip={tip} />;
        })}
      </TipsContainer>
    </MatchDataContainer>
  );
}

export default MatchDataDisplay;
