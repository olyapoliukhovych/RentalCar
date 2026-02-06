'use client';

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './CustomDatePicker.module.css';
import { Icon } from '../Icon/Icon';

interface CustomDatePickerProps {
  values: Date | null;
  setFieldValue: (field: string, value: Date | null) => void;
  submitForm: () => void;
}

const CustomDatePicker = ({ values, setFieldValue, submitForm }: CustomDatePickerProps) => {
  return (
    <div className={css.datePickerWrapper}>
      <DatePicker
        selected={values}
        onChange={(date: Date | null) => {
          setFieldValue('date', date);
          submitForm();
        }}
        dateFormat="dd/MM/yyyy"
        placeholderText="Booking date"
        formatWeekDay={dayName => dayName.substring(0, 3)}
        onKeyDown={event => event.preventDefault()} // keyboard disabled
        autoComplete="off"
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
