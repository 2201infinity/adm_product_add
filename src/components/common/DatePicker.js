import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import theme from "styles/theme";

export const DatePickerTemplate = ({ dateTime, onChangeDateTime, ...rest }) => {
  const onChangeDate = (date) => {
    onChangeDateTime(date);
  };

  return (
    <DatePickerInput
      {...rest}
      selected={dateTime}
      onChange={onChangeDate}
      selectsStart
      startDate={dateTime}
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
