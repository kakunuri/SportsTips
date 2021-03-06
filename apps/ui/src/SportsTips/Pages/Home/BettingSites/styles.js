import styled from "styled-components";
import colors from "../../../colors";

export const BettingScroll = styled.div`
  height: 400px;
  overflow-y: scroll;
  padding: 5px;
  box-shadow: inset 0px 0px 4px 2px #1112;
  background-color: ${colors.primary}22;
  border: solid 2px ${colors.primary}33;
`;
export const BettingScrollLarge = styled.div`
  position: auto;
  height: 1000px;
  overflow-y: scroll;
  padding: 5px;
  box-shadow: inset 0px 0px 4px 2px #1112;
  background-color: ${colors.primary}22;
  border: solid 2px ${colors.primary}33;
`;
