import styled from "styled-components";
import { Link } from "react-router-dom";
export const FooterContainer = styled.div`
  height: 50px;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  // justify-content: space-between;
  // align-items: center;
  // padding: 0px 20px;
`;
export const Social = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40%;
`;
export const Icon = styled.img`
  height: 35px;
  margin-left: 20px;
`;
export const Text = styled.div`
  color: white;
`;
