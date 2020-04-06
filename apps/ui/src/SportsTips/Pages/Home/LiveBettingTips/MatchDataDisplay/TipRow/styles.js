import styled from "styled-components";

const colorMap = {
  Success: "good",
  Failure: "bad",
  Pending: "pending",
};
export const TipContainer = styled.div`
    color:${({ theme, status }) => theme[colorMap[status]]}
    border-color:${({ theme, status }) => theme[colorMap[status]]};
    border-width:1px;
    border-style:solid;
    margin: 7px 0px;
    padding:5px;
    display:flex;
    font-size:14px;
    align-items:center;
`;
export const Sport = styled.img`
  height: 35px;
  width: 35px;
`;
export const Text = styled.div`
    margin-left:2%;
    color${({ theme }) => theme.text};
    width:65%;
`;
export const Site = styled.img`
  height: 35px;
  width: 35px;
`;
export const Odds = styled.div`
  font-size: 18px;
  font-weight: bold;
  width:3%;
  margin: 0px 2%;
`;
export const Timestamp = styled.div`
  width: 15%;
  color: ${({ theme }) => theme.text};
`;
export const Status = styled.div``;
