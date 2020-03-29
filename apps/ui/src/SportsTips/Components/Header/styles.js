import styled from "styled-components";
import { Link } from "react-router-dom";
export const HeaderContainer = styled.div`
  color: ${({ theme }) => theme.background};
`;

export const PrimaryLine = styled.div`
  height: 50px;
  background-color: ${({ theme }) => theme.primary};
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
  color: ${({ theme }) => theme.background};

  font-size: 18px;
  padding-right: 20px;
  margin-top: 3px;
  color: ${({ theme }) => theme.background};
  text-decoration: none;
`;
export const MenuOptions = styled.div`
  color: ${({ theme }) => theme.background};
  display: flex;
`;
export const NavLinks = styled.div`
  height: 50px;
  border-right: solid 1px ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  padding: 0px 15px;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.background};
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
  background-color: ${({ theme }) => theme.primary}55;
  color:${({theme})=>theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

export const SportOption=styled.img`
  margin:0px 30px;
  height:20px;
  cursor:pointer;
`;
