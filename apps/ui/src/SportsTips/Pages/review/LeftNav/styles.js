import styled from "styled-components";
import colors from "../../../colors";
import fonts from "../../../fonts";

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.primary}dd;
  box-shadow: 0px 1px 4px 0px #0004;
  width: calc(20%);
  height: calc(20%);
  margin-top: 10px;
`;
export const Tab = styled.a`
    padding: 14px 20px;
    text-decoration:none;
    color:${({ active }) => (active ? colors.primary : colors.background)};
    background-color:${({ active }) =>
      active ? colors.background : colors.primary}
    cursor:pointer;
    ${fonts.link}
`;
