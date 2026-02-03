import CarList from '../components/CarList/CarList';
import css from './page.module.css';
import { getCars } from '@/lib/api';

const Catalog = async () => {
  const response = await getCars();

  return (
    <div className={css.container}>
      <div className={css.filters}>
        <input></input>
        <button className={css.searchBtn}>Search</button>
      </div>

      {response?.cars?.length > 0 && <CarList cars={response.cars} />}

      <button className={css.loadMoreBtn}>Load more</button>
    </div>
  );
};

export default Catalog;
