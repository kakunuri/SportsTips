import React from 'react';
import {HeaderContainer,Sport,Tip,Site,Timestamp,Status, Odds} from './styles';
function TipsHeader(){
    return <HeaderContainer>
        <Sport>Sport</Sport>
        <Tip>Tip</Tip>
        <Site>Site</Site>
        <Odds>Odds</Odds>
        <Timestamp>Timestamp</Timestamp>
        <Status>Status</Status>
    </HeaderContainer>;
}

export default TipsHeader;