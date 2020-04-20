import styled from "styled-components";
import colors from "../../../colors";
import fonts from "../../../fonts";
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
  ${fonts.heading}
`;
export const ViewAll = styled.div`
  color:${colors.primary}
  ${fonts.link}
  :hover{
    cursor:pointer;
  }
`;
export const MatchCardsContainer = styled.div`
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 10px 0px;
`;
