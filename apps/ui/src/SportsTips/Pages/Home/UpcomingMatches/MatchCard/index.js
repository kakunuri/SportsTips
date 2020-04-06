import React, { useContext } from "react";
import {
  MatchCardContainer,
  MatchImage,
  MatchDetail,
  MatchName,
  MatchVs,
  MatchDate,
} from "./styles";
import { Context } from "../../../../Store";
function MatchCard({ match }) {
  const { state } = useContext(Context);
  return (
    <MatchCardContainer theme={state.theme}>
      <MatchImage src={match.image} />
      <MatchDetail theme={state.theme}>
        <MatchName>{match.name}</MatchName>
        <MatchVs>{match.vs}</MatchVs>
        <MatchDate>{match.timestamp}</MatchDate>
      </MatchDetail>
    </MatchCardContainer>
  );
}

export default MatchCard;
