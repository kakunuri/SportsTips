import React  from "react";
import { FooterContainer, Icon, Social, Text } from "./styles";
import Instagram from "../../Resources/Social-logos/instagram-seeklogo.com 1.svg";
import Facebook from "../../Resources/Social-logos/Vector.svg";
export default function Footer() {
  return (
    <FooterContainer>
      <Social>
        <Text>Connect with us on :</Text>
        <Icon src={Instagram}></Icon>
        <Icon src={Facebook}></Icon>
      </Social>
    </FooterContainer>
  );
}
