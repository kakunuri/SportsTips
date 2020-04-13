import React,{useState,useEffect} from 'react';
import Loader from '../../../Components/common/Loader';
import { Title, ViewAll } from '../UpcomingMatches/styles';
import {NewsContainer,NewsHeader,NewsCardsContainer} from './styles';
import { getNewsData } from './service';
import NewsCard from './NewsCard';
function News(){
    const [newsData, setNewsData] = useState([]);
    useEffect(() => {
        getNewsData().then(data=>{
            setNewsData(data);
        })
    }, []);
    return <NewsContainer>
        <NewsHeader>
            <Title>News</Title>
            <ViewAll>View All ></ViewAll>
        </NewsHeader>
        <NewsCardsContainer>
        {
            newsData.length ===0 && <Loader/>
        }
        {
            newsData.map(news=>{
                return <NewsCard news={news}/>
            })
        }
        </NewsCardsContainer>

    </NewsContainer>;
}

export default News;