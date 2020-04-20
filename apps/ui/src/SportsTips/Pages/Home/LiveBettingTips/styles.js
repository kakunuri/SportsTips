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
  :hover{
    cursor:pointer;
  }
`;

export const BettingTipsSection = styled.div`
  background-color:${colors.primary}11;
  padding-bottom:10px;
`;

export const MatchLabel=styled.div`
  display:flex;
  padding: 0px 5px;
  justify-content:space-between;
  align-items:center;
`;
export const MatchName=styled.div`
  margin-right:20px;
`;
export const NotificationChip=styled.div`
  color:${colors.background};
  background-color:${colors.bad};
  padding:3px;
  border-radius:50%;
  width:20px;
  height:20px;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
`;