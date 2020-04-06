import React,{useState,useEffect,useContext} from 'react';
import Loader from '../../../Components/common/Loader';
import { Title, ViewAll } from '../UpcomingMatches/styles';
import {NewsContainer,NewsHeader,NewsCardsContainer} from './styles';
import { getNewsData } from './service';
import NewsCard from './NewsCard';
import { Context } from '../../../Store';
function News(){
    const [newsData, setNewsData] = useState([]);
    const {state} = useContext(Context);
    useEffect(() => {
        getNewsData().then(data=>{
            setNewsData(data);
        })
    }, []);
    return <NewsContainer>
        <NewsHeader>
            <Title>News</Title>
            <ViewAll theme={state.theme}>View All ></ViewAll>
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