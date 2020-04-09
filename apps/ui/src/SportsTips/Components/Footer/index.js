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
  Actions,
} from "./styles";
import { Context } from "../../Store";
import Logo from "../../Resources/appLogo.svg";
// import UserPane from "./UserPane";
import AllLogo from "../../Resources/all.svg";
// import { getSports } from "./service";
export default function Footer() {
  let { state } = useContext(Context);
  //   const [sportsOptions, setSportsOptions] = useState([]);
  //   useEffect(() => {
  //     getSports().then((sportsList) => {
  //       setSportsOptions(sportsList);
  //     });
  //   }, []);
  return (
    <HeaderContainer theme={state.theme}>
      <PrimaryLine theme={state.theme}>
        <MenuOptions theme={state.theme}>
          <NavLinks>
            <NavLink theme={state.theme} href="https://www.google.com">
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
          {/* <Actions>
            <UserPane />
          </Actions> */}
        </MenuOptions>
      </PrimaryLine>
    </HeaderContainer>
  );
}
