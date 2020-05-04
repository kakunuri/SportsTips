import React, { useContext, useEffect } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { SportsTipsContainer, AppBody } from "./styles";
import LiveBets from "./Pages/LiveBets";
import Home from "./Pages/Home";
import { Context } from "./Store";
import { setProperty } from "./Store/engine/actions";
import { setImages } from "./Store/images/actions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
function SportsTips() {
  const { dispatch } = useContext(Context);
  useEffect(() => {
    dispatch(
      setProperty("device", window.height > window.width ? "mobile" : "desktop")
    );
    setImages(dispatch, "bookmaker");
    // setImages(dispatch, "news");
    // setImages(dispatch, "upcomingmatches");
    // setImages(dispatch, "carousel");
    // setImages(dispatch, "socialNetworking");
    // setImages(dispatch, "sportsIcons");
  }, []);
  return (
    <SportsTipsContainer>
      <Header />
      <AppBody>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/live-betting-tips" component={LiveBets} />
        </Switch>
      </AppBody>
      <Footer />
      <ToastContainer />
    </SportsTipsContainer>
  );
}

export default SportsTips;
