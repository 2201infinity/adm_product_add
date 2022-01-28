import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import theme from 'styles/theme';

export const DatePickerTemplate = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <DatePickerContainer>
      <DatePickerInput
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        showTimeSelect
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="yyyy.MM.dd hh:mm aa"
        placeholderText="YYYY.MM.DD YY:MM"
      />
      <span>~</span>
      <DatePickerInput
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
`;

const DatePickerContainer = styled.div`
  display: flex;
  align-items: center;
`;
