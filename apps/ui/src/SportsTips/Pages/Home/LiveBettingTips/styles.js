import styled from "styled-components";
import colors from "../../../colors";
import fonts from "../../../fonts";

export const LiveBettingTipsContainer = styled.div``;
export const Header = styled.div`
  padding: 25px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.div`
  display: flex;
  flex-direciton: row;
  align-items: center;
  font-size: 18px;
  ${fonts.heading}
`;
export const Logo = styled.div`
  background-color: #bd0000;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  box-shadow: 0px 0px 4px 1px #bd0000;
  margin-right: 20px;
  margin-left:4px;
`;
export const ViewAll = styled.div`
  color: ${colors.primary};
  ${fonts.link}
`;

export const BettingTipsSection = styled.div`
  background-color:${colors.primary}11;
  padding-bottom:10px;
`;
