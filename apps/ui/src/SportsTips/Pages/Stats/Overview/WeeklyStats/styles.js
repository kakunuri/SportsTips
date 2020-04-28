import styled from "styled-components";
import colors from "../../../../colors";

export const WeeklyStatsContainer = styled.div`
  min-height: calc(50% - 10px);
  max-height: calc(50% - 10px);
  border: solid 1px ${colors.primary};
  border-radius: 5px;
  box-sizing: border-box;
  padding: 20px;
`;
