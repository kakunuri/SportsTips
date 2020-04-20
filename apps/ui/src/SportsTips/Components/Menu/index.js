import React,{useContext} from "react";
import { MenuContainer } from "./styles";
import { Context } from "../../Store";

function Menu() {
  const {state} = useContext(Context);
  if(state.engine.applicationProperties==="mobile"){
    return <MenuContainer>
      <MenuButtonContainer></MenuButtonContainer>
    </MenuContainer>;
  }else{
    return <div/>
  }
}
export default Menu;