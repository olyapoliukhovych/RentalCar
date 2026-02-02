import Image from 'next/image';
import css from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.searchSvgContainer}>
        <Image src="/logo.svg" alt="logo" width={104} height={16} />
      </div>
      <nav>
        <ul className={css.navigation}>
          <li className={css.navigationItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={css.navigationItem}>
            <Link href="/catalog">Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
