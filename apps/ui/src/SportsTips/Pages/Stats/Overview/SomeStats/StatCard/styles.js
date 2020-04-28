import styled from "styled-components";
import fonts from "../../../../../fonts";
import colors from "../../../../../colors";

export const StatCardContainer = styled.div`
    margin:10px;
    padding:20px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:column;
    box-shadow:inset 0px 0px 4px 2px #1112;
    background-color: ${colors.primary}11;
`;


export const StatLabel = styled.div`
    ${fonts.label};
    font-size:14px;
    margin-bottom:10px;
    color:${colors.primary};
`;
export const StatValue = styled.div`
    ${fonts.text};
    font-size:32px;
`;