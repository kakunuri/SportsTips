import React,{useEffect,useState} from "react";
import { UpcomingMatchesContainer } from "./styles";
import MatchList from "../MatchDetails/MatchList";
import { getUpcomingMatches } from "./service";

function UpcomingMatches() {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    setMatches(false);
    getUpcomingMatches().then(retrievedMatches=>{
      setMatches(retrievedMatches);
    })
  }, []);
  return <UpcomingMatchesContainer>
    <MatchList matches={matches}/>
  </UpcomingMatchesContainer>;
}
export default UpcomingMatches;