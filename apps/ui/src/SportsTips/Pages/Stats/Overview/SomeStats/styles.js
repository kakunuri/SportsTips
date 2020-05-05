import styled from "styled-components";
import colors from "../../../../colors";

export const SomeStatsContainer = styled.div`
  border: solid 1px ${colors.primary};
  border-radius: 5px;
  border-left-width: 5px;
  width: calc(30% - 10px);
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 248px);
  max-height: calc(100vh - 248px);
  overflow-y: scroll;
`;

export const StatsSection = styled.div`
  margin-bottom: 30px;
`;
export const StatsList = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;
