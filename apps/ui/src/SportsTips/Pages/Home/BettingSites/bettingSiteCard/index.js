import React from "react";
import { Card, Logo, CardSection,Header,Value,Data, Join, Reviews } from "./styles";

const BettingSiteCard = ({ logo, bonus, rating, join, review }) => {
  return (
    <Card>
      <a href={join}>
        <Logo src={logo}></Logo>
      </a>
      <CardSection>
        <Data><Header>Bonus</Header>
        <Value>{bonus}</Value></Data>
        <Data>
        <Header>Rating</Header>
        <Value>{rating}/5</Value></Data>
      </CardSection>
      <CardSection>
        <Join href={join}>JOIN</Join>
        <Reviews to="reviews">Read Reviews ></Reviews>
      </CardSection>
    </Card>
  );
};
export default BettingSiteCard;
