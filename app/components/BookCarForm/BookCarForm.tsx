'use client';

import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import CustomDatePicker from '../ui/CustomDatePicker';
import css from './BookCarForm.module.css';
import toast from 'react-hot-toast';

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
    if (newDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (newDate < today) {
        toast.error('Date cannot be in the past!');
        return;
      }
    }

    setDate(newDate);

    const params = new URLSearchParams(searchParams.toString());

    if (newDate) {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const formData = new FormData(e.currentTarget);
    // const data = {
    //   ...Object.fromEntries(formData.entries()),
    //   date: date ? date.toLocaleDateString('uk-UA') : null,
    // };

    // data is not used right now

    e.currentTarget.reset();
    setDate(null);
    router.push(pathname, { scroll: false });

    toast.success('Form was sent successfully.');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h3 className={css.heading}>Book your car now</h3>
      <p className={css.paragraph}>Stay connected! We are always ready to help you.</p>

      <input className={css.simpleInput} type="text" name="name" placeholder="Name*" required />
      <input
        className={css.simpleInput}
        type="email"
        name="email"
        placeholder="Email*"
        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        title="myemail@gmail.com"
        required
      />

      <CustomDatePicker
        values={date}
        setFieldValue={(_, value) => handleDateChange(value)}
        submitForm={() => {}}
      />

      <textarea className={css.textarea} name="comment" placeholder="Comment"></textarea>

      <button className={css.sendBtn} type="submit">
        Send
      </button>
    </form>
  );
};

export default BookCarForm;
