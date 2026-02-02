import css from './page.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <div className={css.bgImg}>
        <div className={css.heroContent}>
          <h1 className={css.heroMainText}>Find your perfect rental car</h1>
          <h2 className={css.heroSecondaryText}>
            Reliable and budget-friendly rentals for any journey
          </h2>
          <button className={css.heroButton}>View Catalog</button>
        </div>
      </div>
    </div>
  );
}
