import styled from "styled-components";
import { Link } from "react-router-dom";
export const HeaderContainer = styled.div`
  height: 50px;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  color: ${({ theme }) => theme.background};
`;

export const Masthead = styled.div`
  display: flex;
  align-items: center;
`;
export const AppLogo = styled.img`
  height: 35px;
  margin-right: 10px;
`;
export const AppName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: ${({ theme }) => theme.background};
`;
export const Title = styled(Link)`
  font-size: 18px;
  padding-right: 20px;
  margin-top: 3px;
  color: ${({ theme }) => theme.background};
  text-decoration: none;
`;
export const Sport = styled.div`
  font-size: 10px;
  margin-top: -3px;
`;
export const MenuOptions = styled.div`
  color: ${({ theme }) => theme.background};
  display:flex;
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
    display:flex;
    align-items:center;
    padding: 0px 15px;
`;
