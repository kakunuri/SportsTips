import React from "react";
import { MatchInfoContainer, MatchName, MatchVs, MatchScore } from "./styles";
function MatchInformation({ data }) {
  return (
    <MatchInfoContainer>
      <MatchName>{data.name}</MatchName>
      <MatchVs>{data.vs}</MatchVs>
      <MatchScore>{data.score}</MatchScore>
    </MatchInfoContainer>
  );
}

export default MatchInformation;
