import React,{useState, useEffect} from "react";
import Loader from "../../../Components/common/Loader";
import MatchCard from "./MatchCard";
import { UpcomingMatchesContainer,UpcomingMatchesHeader,Title,ViewAll,MatchCardsContainer } from "./styles";
import { getUpcomingMatches } from "./service";

function UpcomingMatches() {
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  useEffect(() => {
    getUpcomingMatches().then((matches) => {
      setUpcomingMatches(matches);
    });
  }, []);
  return (
    <UpcomingMatchesContainer>
      <UpcomingMatchesHeader>
        <Title>Upcoming Matches</Title>
        <ViewAll>View All ></ViewAll>
      </UpcomingMatchesHeader>
      <MatchCardsContainer>
        {upcomingMatches.length === 0 && <Loader />}
        {upcomingMatches.map((match) => {
          return <MatchCard match={match} />;
        })}
      </MatchCardsContainer>
    </UpcomingMatchesContainer>
  );
}

export default UpcomingMatches;
