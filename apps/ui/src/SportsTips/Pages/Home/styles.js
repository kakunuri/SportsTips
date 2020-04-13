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

export const HomeContainer = styled.div`
`;
