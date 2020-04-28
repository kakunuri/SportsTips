import DatePicker from "react-date-picker";
import React from "react";
function DatePickerComponent({ value, onChange }) {
  return (
    <DatePicker
      onChange={(date) => onChange(date)}
      value={value}
    />
  );
}

export default DatePickerComponent;
