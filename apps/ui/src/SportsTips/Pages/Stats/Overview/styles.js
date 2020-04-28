import styled from "styled-components";
import fonts from "../../../fonts";

export const OverviewContainer = styled.div`
  min-height: 100%;
  max-height: 100%;
  box-sizing: border-box;
  padding: 20px;
`;
export const HorizontalSplitter = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100%;
  max-height: 100%;
`;
export const VerticalSplitter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(70% - 10px);
`;
export const StatsHeading = styled.div`
  font-size: 24px;
  ${fonts.heading}
  margin-bottom:5px;
`;
