import styled from "styled-components";
import colors from "../../../colors";

export const TabsContainer = styled.div`
  display: flex;
  background-color: ${colors.primary};
  box-shadow: 0px 1px 4px 0px #0004;
`;
export const Tab = styled.div`
    padding: 10px 20px;
    color:${({ active }) => (active ? colors.primary : colors.background)};
    background-color:${({ active }) =>
      active ? colors.background : colors.primary}
    cursor:pointer;
`;
