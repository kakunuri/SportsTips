import React,{useContext} from "react";
import { MatchInfoContainer, MatchName, MatchVs, MatchScore } from "./styles";
import { Context } from "../../../../../Store";
function MatchInformation({ data }) {
  const { state } = useContext(Context);
  return (
    <MatchInfoContainer theme={state.theme}>
      <MatchName>{data.name}</MatchName>
      <MatchVs>{data.vs}</MatchVs>
      <MatchScore>{data.score}</MatchScore>
    </MatchInfoContainer>
  );
}

export default MatchInformation;
