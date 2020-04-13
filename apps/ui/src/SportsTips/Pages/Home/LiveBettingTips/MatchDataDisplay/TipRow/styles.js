import styled from "styled-components";
import colors from "../../../../../colors";
import fonts from "../../../../../fonts";

const colorMap = {
  Success: "good",
  Failure: "bad",
  Pending: "pending",
};
export const TipContainer = styled.div`
    color:${({ status }) => colors[colorMap[status]]}
    border-color:${({ status }) => colors[colorMap[status]]}55;
    border-width:1px;
    border-radius:5px;
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
    ${fonts.text}
`;
export const Site = styled.img`
  height: 35px;
  width: 35px;
`;
export const Odds = styled.div`
  font-size: 18px;
  width:3%;
  margin: 0px 2%;
  ${fonts.bold}
`;
export const Timestamp = styled.div`
  width: 15%;
  color: ${colors.text};
  font-size:12px;
  ${fonts.date}
`;
export const Status = styled.div`
  ${fonts.bold}
`;
