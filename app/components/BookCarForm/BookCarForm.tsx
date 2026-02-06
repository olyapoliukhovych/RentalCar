'use client';

import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import CustomDatePicker from '../ui/CustomDatePicker';
import css from './BookCarForm.module.css';

const BookCarForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // initializing state from the URL
  // when you refresh the page, the calendar remains synchronized with the URL
  const [date, setDate] = useState<Date | null>(() => {
    const dateFromUrl = searchParams.get('date');
    if (!dateFromUrl) return null;

    const [day, month, year] = dateFromUrl.split('/').map(Number);
    const parsedDate = new Date(year, month - 1, day);

    return parsedDate.getTime() ? parsedDate : null; // check if the date is valid
  });

  const handleDateChange = (newDate: Date | null) => {
    setDate(newDate);

    const params = new URLSearchParams(searchParams.toString());

    if (newDate) {
      //   const formattedDate = newDate.toISOString().split('T')[0];
      //   const formattedDate = newDate.toLocaleDateString();

      const day = String(newDate.getDate()).padStart(2, '0');
      const month = String(newDate.getMonth() + 1).padStart(2, '0');
      const year = newDate.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;

      params.set('date', formattedDate);
    } else {
      params.delete('date');
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      ...Object.fromEntries(formData.entries()),
      date: date ? date.toLocaleDateString('en-GB') : null,
    };

    console.log('Form Submitted:', data);

    e.currentTarget.reset();
    setDate(null);
    router.push(pathname);

    alert('Success! Form sent.');
  };

  return (
    <form className={css.form}>
      <h3 className={css.heading}>Book your car now</h3>
      <p className={css.paragraph}>Stay connected! We are always ready to help you.</p>

      <input
        className={css.simpleInput}
        type="text"
        name="name"
        placeholder="Name*"
        title="Enter your name"
        required
      />
      <input
        className={css.simpleInput}
        type="email"
        name="email"
        placeholder="Email*"
        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        title="Enter your email"
        // title="myemail@gmail.com"
        required
      />

      <CustomDatePicker
        values={date}
        setFieldValue={(_, value) => handleDateChange(value)}
        submitForm={() => {}}
      />

      <textarea className={css.textarea} name="comment" placeholder="Comment"></textarea>

      <button className={css.sendBtn} type="submit" onClick={handleSubmit}>
        Send
      </button>
    </form>
  );
};

export default BookCarForm;
