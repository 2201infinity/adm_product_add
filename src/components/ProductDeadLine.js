import { useState } from 'react';
import { DatePickerTemplate } from './common/DatePicker';
import { RadioButton } from './common/RadioButton';

const EXPOSURE_PERIOD = ['제한 없음', '미노출', '노출 기간 설정'];
const SALES_PERIOD = ['제한 없음', '미판매', '판매 기간 설정'];

export const ProductDeadLine = () => {
  const [exposureInputStatus, setExposureInputStatus] = useState('');
  const [salesInputStatus, setSalesInputStatus] = useState('');

  const onChangeExposurePeriod = (e) => {
    setExposureInputStatus(e.target.value);
  };
  const onChangeSalesPeriod = (e) => {
    setSalesInputStatus(e.target.value);
  };

  return (
    <>
      <DatePickerTemplate />
    </>
  );
};
