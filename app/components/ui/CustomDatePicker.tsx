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
          setTimeout(() => submitForm(), 50);
        }}
        dateFormat="dd/MM/yyyy"
        placeholderText="Booking date"
        // title="dd/mm/yyyy"
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
          //   <Image src="/arrow-left.svg" width={6} height={10} alt="Previous month" />
          <Icon id="arrow-left" className={css.icon} width={24} height={24} />
        }
        nextMonthButtonLabel={
          //   <Image src="/arrow-right.svg" width={6} height={10} alt="Next month" />
          <Icon id="arrow-right" className={css.icon} width={24} height={24} />
        }
      />
    </div>
  );
};

export default CustomDatePicker;
