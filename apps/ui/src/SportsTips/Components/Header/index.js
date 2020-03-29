import React, { useState, useEffect, useContext } from "react";
import {
  HeaderContainer,
  PrimaryLine,
  SecondaryLine,
  Masthead,
  AppLogo,
  AppName,
  MenuOptions,
  SportOption,
  NavLinks,
  NavLink,
  Actions
} from "./styles";
import { Context } from "../../Store";
import Logo from "../../Resources/appLogo.svg";
import UserPane from "./UserPane";
import AllLogo from '../../Resources/all.svg';
import { getSports } from "./service";
export default function Header() {
  let { state } = useContext(Context);
  const [sportsOptions, setSportsOptions] = useState([]);
  useEffect(() => {
    getSports().then(sportsList => {
      setSportsOptions(sportsList);
    });
  }, []);
  return (
    <HeaderContainer theme={state.theme}>
      <PrimaryLine theme={state.theme}>
        <Masthead>
          <AppLogo src={Logo} />
          <AppName theme={state.theme} to="home">
            Sports Tips
          </AppName>
        </Masthead>
        <MenuOptions theme={state.theme}>
          <NavLinks>
            <NavLink theme={state.theme} to="live-betting-tips">
              Live Betting Tips
            </NavLink>
            <NavLink theme={state.theme} to="betting-tips">
              Betting Tips
            </NavLink>
            <NavLink theme={state.theme} to="news">
              News
            </NavLink>
            <NavLink theme={state.theme} to="stats">
              Stats
            </NavLink>
          </NavLinks>
          <Actions>
            <UserPane />
          </Actions>
        </MenuOptions>
      </PrimaryLine>
      <SecondaryLine theme={state.theme}>
        {sportsOptions.length === 0 ? "Loading your sports..." : <SportOption src={AllLogo}/>}
        
        {sportsOptions.map(sportOption => {
          return <SportOption src={sportOption.image} />;
        })}
      </SecondaryLine>
    </HeaderContainer>
  );
}
