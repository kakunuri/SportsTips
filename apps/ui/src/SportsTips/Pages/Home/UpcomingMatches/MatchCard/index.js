import React from "react";
import {
  MatchCardContainer,
  MatchImage,
  MatchDetail,
  MatchName,
  MatchVs,
  MatchDate,
} from "./styles";
function MatchCard({ match }) {
  return (
    <MatchCardContainer>
      <MatchImage src={match.image} />
      <MatchDetail>
        <MatchName>{match.name}</MatchName>
        <MatchVs>{match.vs}</MatchVs>
        <MatchDate>{match.timestamp}</MatchDate>
      </MatchDetail>
    </MatchCardContainer>
  );
}

export default MatchCard;
