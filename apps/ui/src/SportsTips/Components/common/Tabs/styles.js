import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0px 1px 4px 0px #0004;
`;
export const Tab = styled.div`
    padding: 10px 20px;
    color:${({ active, theme }) => (active ? theme.primary : theme.background)};
    background-color:${({ active, theme }) =>
      active ? theme.background : theme.primary}
    cursor:pointer;
`;
