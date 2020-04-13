import styled from 'styled-components';
import colors from '../../../../colors';

export const NewsCardContainer = styled.div`
    min-width:calc(25% - 15px);
    max-width:calc(25% - 15px);
    border:solid 1px ${colors.border};
    display:inline-block;
    margin:5px;
`;
export const NewsImage = styled.img`
    width:100%;
    height:200px;
`;
export const NewsDetail = styled.div`
    color:${colors.text};
    padding:10px;
    box-sizing:border-box;
`;
export const NewsHeadline = styled.div`
    font-size:18px;
    margin-bottom:5px;
`;
export const NewsDate = styled.div`
    font-size:13px;
    font-weight:bold;
`;
export const ReadMore = styled.div`
    font-size:12px;
    text-align:right;
`;
