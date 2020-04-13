import React, { useState, useEffect } from "react";
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
import Logo from "../../Resources/appLogo.svg";
import UserPane from "./UserPane";
import AllLogo from '../../Resources/all.svg';
import { getSports } from "./service";
export default function Header() {
  const [sportsOptions, setSportsOptions] = useState([]);
  useEffect(() => {
    getSports().then(sportsList => {
      setSportsOptions(sportsList);
    });
  }, []);
  return (
    <HeaderContainer>
      <PrimaryLine>
        <Masthead>
          <AppLogo src={Logo} />
          <AppName to="home">
            Sports Tips
          </AppName>
        </Masthead>
        <MenuOptions>
          <NavLinks>
            <NavLink to="live-betting-tips">
              Live Betting Tips
            </NavLink>
            <NavLink to="betting-tips">
              Betting Tips
            </NavLink>
            <NavLink to="news">
              News
            </NavLink>
            <NavLink to="stats">
              Stats
            </NavLink>
          </NavLinks>
          <Actions>
            <UserPane />
          </Actions>
        </MenuOptions>
      </PrimaryLine>
      <SecondaryLine>
        {sportsOptions.length === 0 ? "Loading your sports..." : <SportOption src={AllLogo}/>}
        
        {sportsOptions.map(sportOption => {
          return <SportOption src={sportOption.image} />;
        })}
      </SecondaryLine>
    </HeaderContainer>
  );
}
