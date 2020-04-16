import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../../../colors";
import fonts from "../../../../fonts";

export const Card = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:${colors.background};
  margin: 5px;
`;
export const Logo = styled.img`
  height: 50px;
  width: 50px;
  background-color: green;
`;
export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height:100%;
`;
export const Data = styled.div`
  margin-left:30px;
  display: flex;
  width:100%;
  align-items:center;
  :first-of-type{
    margin-bottom:5px;
  }
`;
export const Header = styled.div`
  margin-right: 20px;
  font-size: 13px;
  ${fonts.label}
  width:20%;
`;
export const Value = styled.div`
  font-size: 15px;
  ${fonts.normal}
  width:80%;
`;

export const Join = styled.a`
  background-color: ${colors.primary};
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 7px 20px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  ${fonts.link}
`;
export const Reviews = styled(Link)`
  text-decoration: none;
  color:${colors.primary};
  font-size:12px;
  ${fonts.label}
`;
