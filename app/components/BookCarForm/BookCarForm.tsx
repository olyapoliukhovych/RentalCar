'use client';

import { useEffect, useState } from 'react';
import CustomDatePicker from '../ui/CustomDatePicker';
import css from './BookCarForm.module.css';
import toast from 'react-hot-toast';
import { useFormDraftStore } from '@/store/useFormDraftStore';

const BookCarForm = () => {
  const { draft, setDraft, clearDraft } = useFormDraftStore();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);

  useEffect(() => {
    const start = draft.startDate ? new Date(draft.startDate) : null;
    const end = draft.endDate ? new Date(draft.endDate) : null;

    if (
      start?.getTime() !== dateRange[0]?.getTime() ||
      end?.getTime() !== dateRange[1]?.getTime()
    ) {
      setDateRange([start, end]);
    }
  }, [draft.startDate, draft.endDate, dateRange]);

  const handleDateChange = (range: [Date | null, Date | null]) => {
    const [startDate, endDate] = range;

    if (startDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (startDate < today) {
        toast.error('Date cannot be in the past!', { id: 'past-date' });
        return;
      }
    }

    setDateRange(range);

    setDraft({
      ...draft,
      startDate: startDate ? startDate.toISOString() : '',
      endDate: endDate ? endDate.toISOString() : '',
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    clearDraft();
    setDateRange([null, null]);
    e.currentTarget.reset();

    toast.success('Form was sent successfully.', { id: 'form-success' });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDraft({
      ...draft,
      [event.target.name]: event.target.value,
    });
  };

  if (!isMounted) {
    return null; // prevent hydration mismatch
  }

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
        name="name"
        id="user-name"
        placeholder="Name*"
        pattern="^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s]+$" // allow only letters and space
        title="Enter letters only."
        autoComplete="on"
        required
        onChange={handleChange}
        value={draft.name}
      />

      <label htmlFor="user-email" className={css.visuallyHidden}>
        User email
      </label>
      <input
        className={css.simpleInput}
        type="email"
        name="email"
        id="user-email"
        placeholder="Email*"
        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        title="myemail@gmail.com"
        autoComplete="on"
        required
        onChange={handleChange}
        value={draft.email}
      />

      <label htmlFor="date-input" className={css.visuallyHidden}>
        Booking date
      </label>
      <CustomDatePicker
        values={dateRange}
        setFieldValue={(_, value) => handleDateChange(value)}
        submitForm={() => {}}
        name="date-input"
        id="date-input"
      />

      <label htmlFor="comment" className={css.visuallyHidden}>
        Comment
      </label>
      <textarea
        className={css.textarea}
        name="comment"
        id="comment"
        placeholder="Comment"
        onChange={handleChange}
        value={draft.comment}
      ></textarea>

      <button className={css.sendBtn} type="submit">
        Send
      </button>
    </form>
  );
};

export default BookCarForm;
