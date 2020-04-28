import React from "react";
import { DatePickerContainer, DateArrow, DateOption } from "./styles";
const numberOfOptions = 7;
function DatePicker({ currentDate, setCurrentDate }) {
  let dateOptions = [];
  let dateCursor = new Date(currentDate);
  dateCursor.setDate(currentDate.getDate() - (numberOfOptions / 2 - 1));
  for (var i = 0; i < numberOfOptions; i = i + 1) {
    dateOptions.push({
      label:
        dateCursor.getDate() +
        "-" +
        (dateCursor.getMonth() + 1) +
        "-" +
        dateCursor.getFullYear(),
      value: new Date(dateCursor),
    });
    dateCursor.setDate(dateCursor.getDate() + 1);
  }
  return (
    <DatePickerContainer>
      <DateArrow> {"<"} </DateArrow>
      {dateOptions.map((dateOption) => {
        return (
          <DateOption
            active={dateOption.value.toString() === currentDate.toString()}
            onClick={() => {
              setCurrentDate(dateOption.value);
            }}
          >
            {dateOption.label}
          </DateOption>
        );
      })}
      <DateArrow>{">"}</DateArrow>
    </DatePickerContainer>
  );
}
export default DatePicker;
