import React from "react";
import {
  HeaderContainer,
  Masthead,
  AppLogo,
  Title,
  Sport,
  AppName,
  MenuOptions,
  NavLinks,
  NavLink,
  Actions
} from "./styles";
import { useContext } from "react";
import { Context } from "../../Store";
import Logo from "../../Resources/appLogo.svg";
import SportSwitcher from "./SportSwitcher";
import UserPane from "./UserPane";
export default function Header() {
  let { state } = useContext(Context);
  return (
    <HeaderContainer theme={state.theme}>
      <Masthead>
        <AppLogo src={Logo} />
        <AppName><Title theme={state.theme} to="home">Sports Tips</Title><Sport>{state.user.game}</Sport></AppName>
      </Masthead>
      <MenuOptions theme={state.theme}>
        <NavLinks>
            <NavLink theme={state.theme} to="live-betting-tips">Live Betting Tips</NavLink>
            <NavLink theme={state.theme} to="betting-tips">Betting Tips</NavLink>
            <NavLink theme={state.theme} to="news">News</NavLink>
            <NavLink theme={state.theme} to="stats">Stats</NavLink>
        </NavLinks>
        <Actions>
            <SportSwitcher/>
            <UserPane/>
        </Actions>
      </MenuOptions>
    </HeaderContainer>
  );
}
