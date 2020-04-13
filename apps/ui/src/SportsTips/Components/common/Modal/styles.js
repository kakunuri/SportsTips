import styled from 'styled-components';
import colors from '../../../colors';
export const ModalContainer = styled.div``;
export const DarkBackground = styled.div`
    position:fixed;
    background-color:rgba(0,0,0,0.5);
    height:100%;
    width:100%;
    top:0;
    left:0;
`;
export const PopupContainer = styled.div`
    position:fixed;
    top:25vh;
    height:50vh;
    left:25vw;
    width:50vw;
    background-color:${colors.background};
`;