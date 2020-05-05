import React,{useEffect,useState} from "react";
import { LiveMatchesContainer } from "./styles";
import MatchList from "../MatchDetails/MatchList";
import { getLiveMatches } from "./service";

function LiveMatches() {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    setMatches(false);
    getLiveMatches().then(retrievedMatches=>{
      setMatches(retrievedMatches);
    })
  }, []);
  return <LiveMatchesContainer>
    <MatchList matches={matches}/>
  </LiveMatchesContainer>;
}
export default LiveMatches;