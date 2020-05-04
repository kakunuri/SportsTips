import React, { useContext } from "react";
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
import { Context } from "../../../../../Store";
const find = require("lodash.find");
function TipRow({ tip }) {
  const { state } = useContext(Context);
  let siteLogo = find(state.images.bookmaker, { image: tip.gamblingSite });
  let sportLogo = find(state.images.sportsIcons, { image: tip.sport });
  return (
    <TipContainer status={tip.result}>
      <Sport src={sportLogo && sportLogo.sm} />
      <Text>{tip.tip}</Text>
      <a href={tip.bettingSite}>
        <Site src={siteLogo && siteLogo.sm} />
        <Tooltip>Click here to join</Tooltip>
      </a>
      <Odds>{tip.odds}</Odds>
      <Timestamp>{tip.insertDateTime._seconds}</Timestamp>
      <Status>{tip.result}</Status>
    </TipContainer>
  );
}
export default TipRow;
