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
    <TipContainer status={tip.status}>
      <Sport src={tip.sportImage} />
      <Text>{tip.tip}</Text>
      <a href={tip.siteUrl}>
        <Site src={tip.siteLogo} />
        <Tooltip>Click here to join</Tooltip>
      </a>
      <Odds>{tip.odds}</Odds>
      <Timestamp>{tip.timestamp}</Timestamp>
      <Status>{tip.status}</Status>
    </TipContainer>
  );
}
export default TipRow;
