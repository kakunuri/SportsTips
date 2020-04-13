import styled from "styled-components";
import colors from "./colors";
import fonts from "./fonts";

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
  ${fonts.text}
`;//Breakpoints to be implemented here later
