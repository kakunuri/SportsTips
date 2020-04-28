import styled from "styled-components";
import colors from '../../../../colors';
import fonts from '../../../../fonts';
export const DatePickerContainer = styled.div`
    margin:20px 0px;
    border-top-style:solid;
    border-bottom-style:solid;
    border-width:1px;
    border-color:${colors.primary};
    display:flex;
    align-items:center;
    justify-content:space-between;
`;
export const DateArrow= styled.div`
    ${fonts.link}
    :hover{
        cursor:pointer;
    }
    padding:5px 20px;
    background-color:${colors.primary}44;
`;
export const DateOption=styled.div`
    ${props=>props.active?`
        ${fonts.bold}
        color:${colors.text}
    `:`
        ${fonts.normal}
        color:${colors.primary}
    `}
    :hover{
        cursor:pointer;
    }
    padding:5px;
`;