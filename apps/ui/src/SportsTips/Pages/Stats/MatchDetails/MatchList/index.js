import React from "react";
import { MatchListContainer } from "./styles";
import MatchCard from "./MatchCard";
import Loader from '../../../../Components/common/Loader';
function MatchList({matches}) {
  if(!matches){
    return <MatchListContainer>
      <Loader/>
    </MatchListContainer>
  }
  return <MatchListContainer>
    {
      matches.map(match=>{
        return <MatchCard match={match}/>
      })
    }
  </MatchListContainer>;
}
export default MatchList;