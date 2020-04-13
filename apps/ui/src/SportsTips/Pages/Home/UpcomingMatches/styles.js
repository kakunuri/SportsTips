import styled from "styled-components";
import colors from "../../../colors";
export const UpcomingMatchesContainer = styled.div``;
export const UpcomingMatchesHeader = styled.div`
  padding: 25px 0px 15px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.div`
  font-size: 18px;
`;
export const ViewAll = styled.div`
  color:${colors.primary}
`;
export const MatchCardsContainer = styled.div`
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 10px 0px;
`;
