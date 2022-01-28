import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import theme from 'styles/theme';

export const DatePickerTemplate = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <DatePickerInput
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      selectsStart
      startDate={startDate}
      dateFormat="yyyy.MM.dd"
      placeholderText="YYYY.MM.DD"
    />
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
