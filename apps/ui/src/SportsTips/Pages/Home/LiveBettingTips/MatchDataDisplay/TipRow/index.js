import React from "react";
import { TipContainer, Sport,Text, Site, Odds, Timestamp, Status } from "./styles";
function TipRow({ tip }) {
  return (
    <TipContainer status={tip.status}>
    <Sport src={tip.sportImage}/>
      <Text>{tip.tip}</Text>
      <Site src={tip.site}/>
      <Odds>{tip.odds}</Odds>
      <Timestamp>{tip.timestamp}</Timestamp>
      <Status>{tip.status}</Status>
    </TipContainer>
  );
}
export default TipRow;
