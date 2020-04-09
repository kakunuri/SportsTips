import React, { Component } from "react";
import { Card, Logo, Bonus, Join, Rating, Reviews } from "./styles";

const BettingSiteCard = ({ logo, bonus, rating, join, review }) => {
  return (
    <Card>
      <Logo src="https://pbs.twimg.com/profile_images/875372540885118976/hVI5lP67_400x400.jpg"></Logo>
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
      <Reviews href="#">Read Reviews ></Reviews>
    </Card>
  );
};
export default BettingSiteCard;
