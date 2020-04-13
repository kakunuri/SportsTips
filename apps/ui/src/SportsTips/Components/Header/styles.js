import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../colors";
export const HeaderContainer = styled.div`
  z-index: 10;
  color: ${colors.background};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
`;

export const PrimaryLine = styled.div`
  height: 50px;
  background-color: ${colors.primary}dd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

export const Masthead = styled.div`
  display: flex;
  align-items: center;
`;
export const AppLogo = styled.img`
  height: 35px;
  margin-right: 10px;
`;
export const AppName = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: ${colors.background};

  font-size: 18px;
  padding-right: 20px;
  margin-top: 3px;
  color: ${colors.background};
  text-decoration: none;
`;
export const MenuOptions = styled.div`
  color: ${colors.background};
  display: flex;
`;
export const NavLinks = styled.div`
  height: 50px;
  border-right: solid 1px ${colors.background};
  display: flex;
  align-items: center;
  padding: 0px 15px;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.background};
  margin: 0px 20px;
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

export const Action = styled.div`
  margin: 0px 20px;
`;

export const SecondaryLine = styled.div`
  height: 35px;
  background-color: ${colors.primary}55;
  color: ${colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

export const SportOption = styled.img`
  margin: 0px 30px;
  height: 20px;
  cursor: pointer;
`;
