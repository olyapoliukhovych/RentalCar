import { Icon } from '../Icon/Icon';
import css from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href="/" aria-label="Home">
          <Icon id="logo" width={104} height={16} />
        </Link>

        <nav aria-label="Main Navigation">
          <ul className={css.navigation}>
            <li className={css.navigationItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={css.navigationItem}>
              <Link href="/catalog">Catalog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
