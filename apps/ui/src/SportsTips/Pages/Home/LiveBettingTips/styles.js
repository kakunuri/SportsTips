import styled from "styled-components";
import colors from "../../../colors";

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
`;
export const Logo = styled.div`
  background-color: #bd0000;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  box-shadow: 0px 0px 4px 1px #bd0000;
  margin-right: 20px;
`;
export const ViewAll = styled.div`
  color: ${colors.primary};
`;

export const BettingTipsSection = styled.div`
  border: 1px solid ${colors.border};
`;
