import React from "react";
import {
  NewsCardContainer,
  NewsImage,
  NewsDetail,
  NewsHeadline,
  ReadMore,
  NewsDate,
} from "./styles";
function NewsCard({ news }) {
  return (
    <NewsCardContainer>
      <NewsImage src={news.image} />
      <NewsDetail>
        <NewsHeadline>{news.name}</NewsHeadline>
        <NewsDate>{news.timestamp}</NewsDate>
        <ReadMore>Read More ></ReadMore>
      </NewsDetail>
    </NewsCardContainer>
  );
}

export default NewsCard;
