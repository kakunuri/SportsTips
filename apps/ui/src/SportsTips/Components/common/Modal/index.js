import React,{useContext} from "react";
import { ModalContainer, DarkBackground, PopupContainer } from "./styles";
import { Context } from "../../../Store";
export default function Modal({ children, onClose }) {
    const {state} = useContext(Context);
  return (
    <ModalContainer>
      <DarkBackground onClick={onClose} />
      <PopupContainer theme={state.theme}>{children}</PopupContainer>
    </ModalContainer>
  );
}
