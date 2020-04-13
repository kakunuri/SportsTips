import styled from "styled-components";
import colors from "../../../../../colors";

const colorMap = {
  Success: "good",
  Failure: "bad",
  Pending: "pending",
};
export const TipContainer = styled.div`
    color:${({ status }) => colors[colorMap[status]]}
    border-color:${({ status }) => colors[colorMap[status]]};
    border-width:1px;
    border-style:solid;
    background-color:${colors.background};
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
    color${colors.text};
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
  color: ${colors.text};
`;
export const Status = styled.div``;
