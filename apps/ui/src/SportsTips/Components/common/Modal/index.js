import React,{useContext} from "react";
import { ModalContainer, DarkBackground, PopupContainer } from "./styles";
export default function Modal({ children, onClose }) {
  return (
    <ModalContainer>
      <DarkBackground onClick={onClose} />
      <PopupContainer>{children}</PopupContainer>
    </ModalContainer>
  );
}
