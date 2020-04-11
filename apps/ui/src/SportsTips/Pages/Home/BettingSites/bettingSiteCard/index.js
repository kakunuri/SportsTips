import React, { Component } from "react";
import { Card, Logo, Bonus, Join, Rating, Reviews } from "./styles";

const BettingSiteCard = ({ logo, bonus, rating, join, review }) => {
  return (
    <Card>
      <a href={join}>
        <Logo src={logo}></Logo>
      </a>
      <Bonus>
        <b>Bonus</b>

        <br></br>
        {bonus}
      </Bonus>
      <Rating>
        <b>Rating</b>
        <br></br>
        <br></br>
        {rating}/5
      </Rating>
      <Join href={join}>JOIN</Join>
      <Reviews to="reviews">Read Reviews ></Reviews>
    </Card>
  );
};
export default BettingSiteCard;
