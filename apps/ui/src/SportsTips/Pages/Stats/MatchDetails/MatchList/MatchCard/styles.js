import styled from "styled-components";
import colors from "../../../../../colors";

export const MatchCardContainer = styled.div`
  margin: 5px;
  display:flex;
  align-items:center;
  flex-direction:column;
`;
export const MatchRow = styled.div`
width:100%;
  background-color: ${colors.background};
  display: flex;
  justify-content: space-around;
  padding:10px;
  box-sizing:border-box;
  border:solid 1px ${colors.primary};
  border-radius:5px;
`;
export const MatchSeries = styled.div`
  width: 30%;
`;
export const MatchName = styled.div`
  width: 40%;
`;
export const MatchWin = styled.div`
  width: 15%;
`;
export const MatchNet = styled.div`
  width: 15%;
`;
export const TipsInfo = styled.div`
padding:20px;
box-sizing:border-box;
width:99%;

box-shadow:inset 0px 0px 4px 2px #1112;
background-color: ${colors.primary}11;
`;
