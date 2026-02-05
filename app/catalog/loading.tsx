import { ListItemSkeleton } from '../components/ListItemSkeleton/ListItemSkeleton';
import css from './page.module.css';

export default function Loading() {
  return (
    <ul className={css.carsList}>
      {Array.from({ length: 12 }).map((_, index) => (
        <ListItemSkeleton key={index} />
      ))}
    </ul>
  );
}
