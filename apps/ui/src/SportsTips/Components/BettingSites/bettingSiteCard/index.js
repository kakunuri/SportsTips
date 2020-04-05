import React, { Component } from "react";
import { Card, Logo, Bonus, Join, Rating, Reviews } from "./styles";

const BettingSiteCard = ({ logo, bonus, rating, join, review }) => {
  return (
    <Card>
      <Logo src=""></Logo>
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
      <Reviews>{review}</Reviews>
    </Card>
  );
};
export default BettingSiteCard;
