import styled from "styled-components";
import colors from "../../colors";

export const PrimaryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const SecondaryContainer = styled.div`
  display: flex;
  margin-top: -600px;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SiteImage = styled.img`
  height: 400px;
  width: 1000px;
  padding: 5px;
`;

export const HomeContainer = styled.div``;
