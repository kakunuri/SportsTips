import styled from "styled-components";
import colors from "../../../../colors";

export const MatchListContainer = styled.div`
    min-height:calc(100vh - 350px);
    max-height:calc(100vh - 350px);
    overflow-y:scroll;
    background-color:${colors.primary}09;
`;