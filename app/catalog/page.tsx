import Image from 'next/image';
import css from './page.module.css';

const Catalog = () => {
  return (
    <div className={css.container}>
      <div className={css.filters}>
        <input></input>

        <button className={css.searchBtn}>Search</button>
      </div>

      <ul className={css.carsList}>
        <li className={css.carsLi}>
          <Image
            className={css.carImg}
            src="/image1.jpg"
            width={276}
            height={268}
            alt="Picture of the car"
          ></Image>
          <div className={css.topTextPosition}>
            <p className={css.topText}>Buick Enclave, 2008</p>
            <p className={css.topText}>$40</p>
          </div>

          <p className={css.bottomText}>Kiev | Ukraine | Luxury Car Rentals | Suv | 9 582 km</p>

          <button className={css.carsLiButton}>Read more</button>
        </li>
        <li className={css.carsLi}>
          <Image
            className={css.carImg}
            src="/image2.jpg"
            width={276}
            height={268}
            alt="Picture of the car"
          ></Image>
          <div className={css.topTextPosition}>
            <p className={css.topText}>Volvo XC90, 2019</p>
            <p className={css.topText}>$50</p>
          </div>

          <p className={css.bottomText}>Lviv | Ukraine | Premium Auto Rentals | Suv | 5 352 km</p>

          <button className={css.carsLiButton}>Read more</button>
        </li>
        <li className={css.carsLi}>
          <Image
            className={css.carImg}
            src="/image3.jpg"
            width={276}
            height={268}
            alt="Picture of the car"
          ></Image>
          <div className={css.topTextPosition}>
            <p className={css.topText}>Volvo XC60, 2020</p>
            <p className={css.topText}>$40</p>
          </div>

          <p className={css.bottomText}>Odessa | Ukraine | Luxury Car Rentals | Suv | 5 966 km</p>

          <button className={css.carsLiButton}>Read more</button>
        </li>
        <li className={css.carsLi}>
          <Image
            className={css.carImg}
            src="/image4.jpg"
            width={276}
            height={268}
            alt="Picture of the car"
          ></Image>
          <div className={css.topTextPosition}>
            <p className={css.topText}>Subaru Outback, 2016</p>
            <p className={css.topText}>$30</p>
          </div>

          <p className={css.bottomText}>Kyiv | Ukraine | Adventure Car Rentals | Suv | 4 061 km</p>

          <button className={css.carsLiButton}>Read more</button>
        </li>
      </ul>
    </div>
  );
};

export default Catalog;
