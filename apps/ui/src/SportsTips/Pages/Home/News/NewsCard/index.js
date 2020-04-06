import React, { useContext } from "react";
import {
  NewsCardContainer,
  NewsImage,
  NewsDetail,
  NewsHeadline,
  ReadMore,
  NewsDate,
} from "./styles";
import { Context } from "../../../../Store";
function NewsCard({ news }) {
  const { state } = useContext(Context);
  return (
    <NewsCardContainer theme={state.theme}>
      <NewsImage src={news.image} />
      <NewsDetail theme={state.theme}>
        <NewsHeadline>{news.name}</NewsHeadline>
        <NewsDate>{news.timestamp}</NewsDate>
        <ReadMore>Read More ></ReadMore>
      </NewsDetail>
    </NewsCardContainer>
  );
}

export default NewsCard;
