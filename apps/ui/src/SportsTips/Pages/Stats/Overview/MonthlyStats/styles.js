import styled from "styled-components";
import colors from "../../../../colors";

export const MonthlyStatsContainer = styled.div`
  min-height: calc(50% - 10px);
  max-height: calc(50% - 10px);
  border: solid 1px ${colors.primary};
  border-radius: 5px;
  box-sizing: border-box;
  border-right-width:5px;
  padding: 20px;
`;
