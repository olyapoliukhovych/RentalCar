'use client';

import { useState } from 'react';
import CustomDatePicker from '../ui/CustomDatePicker';
import css from './BookCarForm.module.css';
import toast from 'react-hot-toast';

const BookCarForm = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);

  const handleDateChange = (range: [Date | null, Date | null]) => {
    const [startDate] = range;

    if (startDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (startDate < today) {
        toast.error('Date cannot be in the past!', { id: 'past-date' });
        return;
      }
    }

    setDateRange(range);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const formData = new FormData(e.currentTarget);
    // const data = {
    //   ...Object.fromEntries(formData.entries()),
    //   startDate: startDate.toLocaleDateString('uk-UA'),
    //   endDate: endDate.toLocaleDateString('uk-UA'),
    // };

    // data is not used right now

    e.currentTarget.reset();
    setDateRange([null, null]);

    toast.success('Form was sent successfully.', { id: 'form-success' });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h3 className={css.heading}>Book your car now</h3>
      <p className={css.paragraph}>Stay connected! We are always ready to help you.</p>

      <label htmlFor="user-name" className={css.visuallyHidden}>
        User name
      </label>
      <input
        className={css.simpleInput}
        type="text"
        name="user-name"
        id="user-name"
        placeholder="Name*"
        required
      />

      <label htmlFor="user-email" className={css.visuallyHidden}>
        User email
      </label>
      <input
        className={css.simpleInput}
        type="email"
        name="user-email"
        id="user-email"
        placeholder="Email*"
        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        title="myemail@gmail.com"
        required
      />

      <label htmlFor="date-input" className={css.visuallyHidden}>
        Booking date
      </label>
      <CustomDatePicker
        values={dateRange}
        setFieldValue={(_, value) => handleDateChange(value)}
        submitForm={() => {}}
        name="date-input"
      />

      <label htmlFor="comment" className={css.visuallyHidden}>
        Comment
      </label>
      <textarea className={css.textarea} name="comment" placeholder="Comment"></textarea>

      <button className={css.sendBtn} type="submit">
        Send
      </button>
    </form>
  );
};

export default BookCarForm;
