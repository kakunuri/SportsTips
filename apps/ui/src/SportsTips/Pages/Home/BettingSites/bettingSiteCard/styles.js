import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  display: flex;
  width: 96%;
  height: 20%;
  border: 1px solid;
  margin-top: 1%;
  margin-left: 1%;
  // justify-content: space-around;
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
export const Logo = styled.img`
  height: 75%;
  width: 60px;
  background-color: green;
  margin-top: 10px;
  margin-left: 20px;
`;
export const Bonus = styled.div`
  height: 75%;
  width: 70px;
  margin-top: 14px;
  margin-left: 30px;
`;
export const Join = styled.a`
  height: 35px;
  width: 90px;
  background-color: #0e0d5c;
  color: white;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  padding-top: 7px;
  margin-top: 10px;
  margin-left: 30px;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
export const Rating = styled.div`
  height: 75%;
  width: 70px;
  margin-top: 14px;
  margin-left: 30px;
`;
export const Reviews = styled(Link)`
  margin-top: 58px;
  margin-left: -100px;
  text-decoration: none;
`;
