import styled from "styled-components";

export const PrimaryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HomeContainer = styled.div`
  margin-top:2%
  width: 90%;
  margin-left: 5%;
`;
