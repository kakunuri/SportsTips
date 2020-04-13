import styled from "styled-components";
import colors from "./colors";

export const SportsTipsContainer = styled.div`
  background-color: ${colors.primary}22;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  display:flex;
  flex-direction:column;
  align-items:center;
`;
export const AppBody = styled.div`
  margin-top: 100px;
  width: 85%; 
  background-color: ${colors.background};
  padding:20px 40px;
  box-sizing:border-box;
`;//Breakpoints to be implemented here later
