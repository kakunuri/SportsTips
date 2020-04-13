import styled from "styled-components";
import colors from "../../../../colors";

export const MatchCardContainer = styled.div`
  min-width: calc(25% - 15px);
  max-width: calc(25% - 15px);
  border: solid 1px ${colors.border};
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
`;
export const MatchName = styled.div`
  font-size: 12px;
  font-weight: bold;
`;
export const MatchVs = styled.div`
  font-size: 18px;
`;
export const MatchDate = styled.div`
  font-size: 13px;
  text-align: right;
`;
