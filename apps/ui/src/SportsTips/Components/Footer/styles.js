import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../colors";
export const FooterContainer = styled.div`
  height: 50px;
  background-color: ${colors.primary};
  display: flex;
  width:100vw;
`;
export const Social = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40%;
`;
export const Icon = styled.img`
  height: 25px;
  margin-left: 20px;
`;
export const Text = styled.div`
  color: white;
`;
