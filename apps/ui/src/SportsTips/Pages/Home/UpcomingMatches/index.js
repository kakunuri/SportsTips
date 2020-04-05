import React,{useState,useContext,useEffect} from "react";
import Loader from "../../../Components/common/Loader";
import MatchCard from "./MatchCard";
import { UpcomingMatchesContainer,UpcomingMatchesHeader,Title,ViewAll,MatchCardsContainer } from "./styles";
import { getUpcomingMatches } from "./service";
import { Context } from "../../../Store";

function UpcomingMatches() {
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const {state} = useContext(Context);
  useEffect(() => {
    getUpcomingMatches().then((matches) => {
      setUpcomingMatches(matches);
    });
  }, []);
  return (
    <UpcomingMatchesContainer>
      <UpcomingMatchesHeader>
        <Title>Upcoming Matches</Title>
        <ViewAll theme={state.theme}>View All ></ViewAll>
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
