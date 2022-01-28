import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerTemplate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        showTimeSelect
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="yyyy.MM.dd hh:mm aa"
      />

      <DatePicker
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
      />
    </>
  );
};
