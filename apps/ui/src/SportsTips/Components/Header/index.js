import React from 'react';
import { HeaderContainer } from './styles';
import { useContext } from 'react';
import {Context} from '../../Store';
export default function Header(){
    let {state} = useContext(Context);
    return <HeaderContainer theme={state.theme}>
        Header here
    </HeaderContainer>;
}