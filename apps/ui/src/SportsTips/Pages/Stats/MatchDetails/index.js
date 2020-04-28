import React, { useState, useEffect } from "react";
import { MatchDetailsContainer } from "./styles";
import DatePicker from "./DatePicker";
import MatchList from "./MatchList";
import JumpToDate from "./JumpToDate";
import { getDayMatches } from "./service";
function MatchDetails(props) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    setMatches(false);
    getDayMatches(currentDate).then(retrievedMatches=>{
      setMatches(retrievedMatches);
    })
  }, [currentDate]);
  return (
    <MatchDetailsContainer>
      <JumpToDate currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <DatePicker currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <MatchList matches={matches} />
    </MatchDetailsContainer>
  );
}
export default MatchDetails;
