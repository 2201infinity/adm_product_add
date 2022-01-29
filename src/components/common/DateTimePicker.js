import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import theme from "styles/theme";

export const DateTimePicker = ({ onChangeOrderEndTime, ...rest }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onChangeDate = (date) => {
    setStartDate(date);
    onChangeOrderEndTime(date);
  };

  return (
    <DatePickerContainer>
      <DatePickerInput
        {...rest}
        selected={startDate}
        onChange={onChangeDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        showTimeSelect
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="yyyy.MM.dd hh:mm aa"
        placeholderText="YYYY.MM.DD YY:MM"
      />
      <Span>~</Span>
      <DatePickerInput
        {...rest}
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        showTimeSelect
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="yyyy.MM.dd hh:mm aa"
        placeholderText="YYYY.MM.DD YY:MM"
      />
    </DatePickerContainer>
  );
};

const DatePickerInput = styled(DatePicker)`
  padding: 10px;
  border-radius: 5px;
  border: 1.5px solid ${theme.colors.lightPurple};
  margin-left: 5px;
  color: transparent;
  text-shadow: 0 0 0 black;
`;

const Span = styled.span`
  margin: 0 5px;
  position: relative;
  font-weight: 500;
  color: transparent;
  text-shadow: 0 0 0 black;
  &::after {
    position: absolute;
    display: block;
    left: 185px;
    bottom: 7px;
    content: "";
    width: 6px;
    height: 6px;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    transform: rotate(-45deg);
    z-index: 10;
  }
  &::before {
    position: absolute;
    display: block;
    right: 35px;
    bottom: 7px;
    content: "";
    width: 6px;
    height: 6px;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    transform: rotate(-45deg);
    z-index: 10;
  }
`;

const DatePickerContainer = styled.div`
  display: flex;
  align-items: center;
`;
