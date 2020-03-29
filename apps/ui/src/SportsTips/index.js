import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { SportsTipsContainer, AppBody } from "./styles";
import LiveBets from "./Pages/LiveBets";
import Home from "./Pages/Home";
function SportsTips() {
  return (
    <SportsTipsContainer>
      <Header />
      <AppBody>
        <Router>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/live-bets" component={LiveBets} />
            <Route
              path="/"
              component={() => {
                return <Redirect to="/home" />;
              }}
            />
          </Switch>
        </Router>
      </AppBody>
      <Footer />
    </SportsTipsContainer>
  );
}

export default SportsTips;
