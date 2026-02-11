'use client';

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './CustomDatePicker.module.css';
import { Icon } from '../Icon/Icon';

interface CustomDatePickerProps {
  values: [Date | null, Date | null];
  setFieldValue: (field: string, value: [Date | null, Date | null]) => void;
  submitForm: () => void;
  name?: string;
  id?: string;
}

const CustomDatePicker = ({
  values,
  setFieldValue,
  submitForm,
  name,
  id,
}: CustomDatePickerProps) => {
  const [startDate, endDate] = values;

  return (
    <div className={css.datePickerWrapper}>
      <DatePicker
        name={name}
        id={id}
        startDate={startDate}
        endDate={endDate}
        onChange={(date: [Date | null, Date | null]) => {
          setFieldValue('date', date);
          submitForm();
        }}
        dateFormat="dd/MM/yyyy"
        placeholderText="Booking date"
        formatWeekDay={dayName => dayName.substring(0, 3)}
        onKeyDown={event => event.preventDefault()} // keyboard disabled
        autoComplete="off"
        isClearable
        selectsRange={true} // allow range
        customInput={
          <input
            className={css.dateInput}
            readOnly // no typing
          />
        }
        calendarStartDay={1}
        previousMonthButtonLabel={
          <Icon id="arrow-left" className={css.iconLeft} width={24} height={24} />
        }
        nextMonthButtonLabel={
          <Icon id="arrow-right" className={css.iconRight} width={24} height={24} />
        }
      />
    </div>
  );
};

export default CustomDatePicker;
