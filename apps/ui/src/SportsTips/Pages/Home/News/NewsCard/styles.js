import styled from "styled-components";
import colors from "../../../../colors";
import fonts from "../../../../fonts";

export const NewsCardContainer = styled.div`
  min-width: calc(25% - 15px);
  max-width: calc(25% - 15px);
  border: solid 1px ${colors.primary}22;
  border-radius: 5px;
  display: inline-block;
  margin: 5px;
`;
export const NewsImage = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  height: 200px;
`;
export const NewsDetail = styled.div`
  color: ${colors.text};
  padding: 10px;
  box-sizing: border-box;
`;
export const NewsHeadline = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
  ${fonts.heading}
`;
export const NewsDate = styled.div`
  font-size: 12px;
  ${fonts.date}
`;
export const ReadMore = styled.div`
  font-size: 12px;
  text-align: right;
  ${fonts.link}
  color:${colors.primary}
`;
