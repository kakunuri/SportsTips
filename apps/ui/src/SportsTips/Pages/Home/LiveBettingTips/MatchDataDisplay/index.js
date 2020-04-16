import React from "react";
import { MatchDataContainer, TipsContainer } from "./styles";
import MatchInformation from "./MatchInformation";
import TipsHeader from "./TipsHeader";
import TipRow from "./TipRow";
function MatchDataDisplay({ data }) {
  return (
    <MatchDataContainer>
      <MatchInformation series={data.series} vs={data.match} />
      <TipsHeader />
      <TipsContainer>
        {data.tips.map((tip, id) => {
          return <TipRow id={id} tip={tip} />;
        })}
      </TipsContainer>
    </MatchDataContainer>
  );
}

export default MatchDataDisplay;
