import Link from 'next/link';
import css from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={css.container}>
      <div className={css.heroWrapper}>
        <Image
          src="/bgImg/picture.jpg"
          alt="Rental Car Background"
          fill
          priority
          className={css.bgImage}
        />

        <div className={css.overlay} />

        <div className={css.heroContent}>
          <h1 className={css.heroMainText}>Find your perfect rental car</h1>
          <h2 className={css.heroSecondaryText}>
            Reliable and budget-friendly rentals for any journey
          </h2>
          <Link href="/catalog" className={css.heroButton}>
            View Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
