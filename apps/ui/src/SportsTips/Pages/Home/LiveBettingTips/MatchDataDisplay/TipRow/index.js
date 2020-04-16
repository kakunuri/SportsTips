import React from "react";
import {
  TipContainer,
  Sport,
  Text,
  Site,
  Odds,
  Timestamp,
  Status,
  Tooltip,
} from "./styles";
function TipRow({ tip }) {
  return (
    <TipContainer status={tip.result}>
      <Sport src={tip.sportImage} />
      <Text>{tip.tip}</Text>
      <a href={tip.bettingSite}>
        <Site src={tip.siteLogo} />
        <Tooltip>Click here to join</Tooltip>
      </a>
      <Odds>{tip.odds}</Odds>
      <Timestamp>{tip.insertDateTime._seconds}</Timestamp>
      <Status>{tip.result}</Status>
    </TipContainer>
  );
}
export default TipRow;
