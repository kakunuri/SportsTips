import React from "react";
import { JumpToDateContainer } from "./styles";
import DatePicker from "../../../../Components/common/DatePicker";

function JumpToDate({currentDate,setCurrentDate}) {
  return <JumpToDateContainer>
    <DatePicker value={currentDate} onChange={setCurrentDate}/>
  </JumpToDateContainer>;
}
export default JumpToDate;