import React, { useContext } from "react";
import {
  Card,
  Logo,
  CardSection,
  Header,
  Value,
  Data,
  Join,
  Reviews,
} from "./styles";
import { Context } from "../../../../Store";
const find = require("lodash.find");
const BettingSiteCard = ({ bookmaker, bonus, rating, join, review }) => {
  const { state } = useContext(Context);
  let logo = find(state.images.bookmaker, { image: bookmaker });
  return (
    <Card>
      <a href={join}>
        <Logo src={logo && logo.xs}></Logo>
      </a>
      <CardSection>
        <Data>
          <Header>Bonus</Header>
          <Value>{bonus}</Value>
        </Data>
        <Data>
          <Header>Rating</Header>
          <Value>{rating}/5</Value>
        </Data>
      </CardSection>
      <CardSection>
        <Join href={join}>JOIN</Join>
        <Reviews to="reviews">Read Reviews ></Reviews>
      </CardSection>
    </Card>
  );
};
export default BettingSiteCard;
