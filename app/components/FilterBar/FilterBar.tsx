'use client';

import { useEffect, useState } from 'react';
import css from './FilterBar.module.css';
import Select, { SingleValue, StylesConfig } from 'react-select';
import { getBrands } from '@/lib/api';
import { useCarListStore } from '@/store/useCarListStore';
import { NumberFormatValues, NumericFormat } from 'react-number-format';

interface Brand {
  value: string;
  label: string;
}

interface Price {
  value: string;
  label: string;
}

const customBrandStyles: StylesConfig<Brand> = {
  control: base => ({
    ...base,
    backgroundColor: 'var(--inputs)',
    borderRadius: '12px',
    border: 'none',
    paddingLeft: '6px',
    paddingRight: '6px', // the rest comes from default paddings and margins
    width: '204px',
    height: '44px',
    boxShadow: 'none',
    fontSize: '16px',
    fontFamily: 'var(--font-family)',
    fontWeight: '500',
    marginTop: '8px',
    cursor: 'pointer',
  }),
  placeholder: base => ({
    ...base,
    color: 'var(--main)',
  }),
  singleValue: base => ({
    ...base,
    color: 'var(--main)',
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    paddingTop: '4px',
    paddingBottom: '4px',
    backgroundColor: isFocused ? 'var(--inputs)' : 'transparent',
    color: isSelected ? 'var(--main)' : 'var(--gray)',
    fontSize: '16px',
    cursor: 'pointer',
    margin: 0,
    width: '100%',

    ':hover': {
      backgroundColor: 'var(--inputs)',
    },
    ':active': {
      backgroundColor: 'var(--inputs)',
    },
  }),
  menu: base => ({
    ...base,
    borderRadius: '12px',
    border: '1px solid var(--inputs)',
    boxShadow: 'none',
    paddingRight: '8px',
    paddingLeft: '6px',
    paddingTop: '4px',
    paddingBottom: '4px',
  }),
  menuList: base => ({
    ...base,
    maxHeight: '272px',
    overflowY: 'auto',
    '::-webkit-scrollbar': {
      width: '8px',
    },
    '::-webkit-scrollbar-track': {
      background: 'transparent',
      marginTop: '4px',
      marginBottom: '4px',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'var(--gray-light)',
      borderRadius: '10px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: 'var(--gray)',
    },
  }),
};

const customPriceStyles: StylesConfig<Price> = {
  control: base => ({
    ...base,
    backgroundColor: 'var(--inputs)',
    borderRadius: '12px',
    border: 'none',
    paddingLeft: '6px',
    paddingRight: '6px', // the rest comes from default paddings and margins
    width: '204px',
    height: '44px',
    boxShadow: 'none',
    fontSize: '16px',
    fontFamily: 'var(--font-family)',
    fontWeight: '500',
    marginTop: '8px',
    cursor: 'pointer',
  }),
  placeholder: base => ({
    ...base,
    color: 'var(--main)',
  }),
  singleValue: base => ({
    ...base,
    color: 'var(--main)',

    display: 'flex',
    '&:before': {
      content: '"To $"',
    },
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    paddingTop: '4px',
    paddingBottom: '4px',
    backgroundColor: isFocused ? 'var(--inputs)' : 'transparent',
    color: isSelected ? 'var(--main)' : 'var(--gray)',
    fontSize: '16px',
    cursor: 'pointer',
    margin: 0,
    width: '100%',

    ':hover': {
      backgroundColor: 'var(--inputs)',
    },
    ':active': {
      backgroundColor: 'var(--inputs)',
    },
  }),
  menu: base => ({
    ...base,
    borderRadius: '12px',
    border: '1px solid var(--inputs)',
    boxShadow: 'none',
    paddingRight: '8px',
    paddingLeft: '6px',
    paddingTop: '4px',
    paddingBottom: '4px',
  }),
  menuList: base => ({
    ...base,
    maxHeight: '188px',
    overflowY: 'auto',
    '::-webkit-scrollbar': {
      width: '8px',
    },
    '::-webkit-scrollbar-track': {
      background: 'transparent',
      marginTop: '4px',
      marginBottom: '4px',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'var(--gray-light)',
      borderRadius: '10px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: 'var(--gray)',
    },
  }),
};

// interface FilterBarProps {
//   onChange: (value: string) => void;
// }

const priceOptions: Price[] = [];
for (let i = 30; i <= 200; i += 10) {
  priceOptions.push({ value: i.toString(), label: i.toString() });
}

const FilterBar = () => {
  const { setBrand, setPrice, setMileage, filters, fetchCars, resetFilters } = useCarListStore();
  const [brandOptions, setBrandOptions] = useState<Brand[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const brands = await getBrands();
        const formattedBrands = brands.map(brand => ({ value: brand, label: brand }));
        setBrandOptions(formattedBrands);
      } catch (error) {
        console.error('Failed to fetch brands', error);
        // !delete console.log
      }
    };
    fetchOptions();
  }, []);

  const handleBrandChange = (selectedBrand: SingleValue<Brand>) => {
    if (selectedBrand) {
      setBrand(selectedBrand.value);
    } else {
      resetFilters();
    }
  };

  const handlePriceChange = (selectedPrice: SingleValue<Price>) => {
    const value = selectedPrice ? selectedPrice.value : '';
    setPrice(value);
  };

  const handleFromChange = (vals: NumberFormatValues) => setMileage(vals.value, filters.maxMileage);

  const handleToChange = (vals: NumberFormatValues) => setMileage(filters.minMileage, vals.value);

  const handleSearch = () => {
    fetchCars(true);
  };

  return (
    <div className={css.allFilters}>
      <label className={css.label}>
        Car brand
        <Select<Brand>
          options={brandOptions}
          styles={customBrandStyles}
          placeholder="Choose a brand"
          onChange={handleBrandChange}
          isSearchable
          isClearable
          instanceId="brand-select"
        />
      </label>

      <label className={css.label}>
        Price / 1 hour
        <Select<Price>
          options={priceOptions}
          styles={customPriceStyles}
          placeholder="Choose a price"
          onChange={handlePriceChange}
          isSearchable
          isClearable
          instanceId="brand-select"
        />
      </label>

      <div className={css.carMileageInputs}>
        <div className={css.carMileageFirstInput}>
          <label className={css.label} htmlFor="from">
            Car mileage / km
          </label>
          <NumericFormat
            className={css.carMileageInputL}
            placeholder="From"
            prefix={'From '}
            thousandSeparator=" " // functional requirements
            allowNegative={false}
            decimalScale={0}
            value={filters.minMileage}
            onValueChange={handleFromChange}
            title="Only positive integers allowed"
          />
        </div>
        <NumericFormat
          className={css.carMileageInputR}
          placeholder="To"
          prefix={'To '}
          thousandSeparator=" " // functional requirements
          allowNegative={false}
          decimalScale={0}
          value={filters.maxMileage}
          onValueChange={handleToChange}
          title="Only positive integers allowed"
        />
      </div>

      <button className={css.searchBtn} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default FilterBar;
