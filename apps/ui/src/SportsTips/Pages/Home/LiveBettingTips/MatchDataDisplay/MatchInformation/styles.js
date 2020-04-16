import styled from "styled-components";
import colors from "../../../../../colors";
import fonts from "../../../../../fonts";
export const MatchInfoContainer = styled.div`
  margin: 10px 0px;
  box-sizing: border-box;
  background-color: ${colors.background};
  border:solid 1px ${colors.primary}55;
  color: ${colors.primary};
  display: flex;
  padding: 15px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
  border-radius: 5px;
`;
export const MatchName = styled.div`
  ${fonts.heading}
`;
export const MatchVs = styled.div`
  ${fonts.bold}
`;
export const MatchScore = styled.div`
  font-size: 18px ${fonts.text};
`;
