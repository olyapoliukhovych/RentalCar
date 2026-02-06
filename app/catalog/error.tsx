'use client';

import css from './page.module.css';

type Props = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  return (
    <div className={css.errorWrapper}>
      <h2 className={css.title}>Error</h2>
      <p className={css.description}>{error.message}</p>
      <button className={css.btn} onClick={reset}>
        Try again
      </button>
    </div>
  );
};

export default Error;
