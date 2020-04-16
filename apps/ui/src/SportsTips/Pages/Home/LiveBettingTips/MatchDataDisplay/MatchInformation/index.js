import React from "react";
import { MatchInfoContainer, MatchName, MatchVs, MatchScore } from "./styles";
function MatchInformation({ series, vs }) {
  return (
    <MatchInfoContainer>
      <MatchName>{series}</MatchName>
      <MatchVs>{vs}</MatchVs>
      <MatchScore></MatchScore>
    </MatchInfoContainer>
  );
}

export default MatchInformation;
