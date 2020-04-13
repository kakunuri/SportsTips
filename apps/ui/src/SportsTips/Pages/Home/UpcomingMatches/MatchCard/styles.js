import styled from "styled-components";
import colors from "../../../../colors";
import fonts from "../../../../fonts";

export const MatchCardContainer = styled.div`
  min-width: calc(25% - 15px);
  max-width: calc(25% - 15px);
  display: inline-block;
  margin: 5px;
`;
export const MatchImage = styled.img`
  width: 100%;
  height: 200px;
`;
export const MatchDetail = styled.div`
  background-color: ${colors.primary};
  color: ${colors.background};
  padding: 10px;
  box-sizing: border-box;
  border-bottom-left-radius:5px;
  border-bottom-right-radius:5px;
`;
export const MatchName = styled.div`
  font-size: 12px;
  ${fonts.label}
`;
export const MatchVs = styled.div`
  font-size: 18px;
  ${fonts.heading}
`;
export const MatchDate = styled.div`
  font-size: 12px;
  text-align: right;
  ${fonts.date}
`;
