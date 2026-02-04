'use client';

import { useEffect, useState } from 'react';
import css from './FilterBar.module.css';
import Select, { SingleValue, StylesConfig } from 'react-select';
import { getBrands } from '@/lib/api';
import { useCarListStore } from '@/store/useCarListStore';

interface Brand {
  value: string;
  label: string;
}

const customStyles: StylesConfig<Brand> = {
  control: base => ({
    ...base,
    backgroundColor: 'var(--inputs)',
    borderRadius: '12px',
    border: 'none',
    padding: '6px 6px',
    width: '204px',
    fontFamily: 'var(--font-family)',
    // scrollbarColor: 'var(--gray-light)',
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
    backgroundColor: isSelected ? 'var(--white)' : isFocused ? 'var(--inputs)' : 'var(--white)',
    color: isSelected ? 'var(--main)' : 'var(--gray)',
    cursor: 'pointer',
  }),
};

// interface FilterBarProps {
//   onChange: (value: string) => void;
// }

const FilterBar = () => {
  const { setBrand, fetchCars, resetFilters } = useCarListStore();
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

  const handleChange = (newValue: SingleValue<Brand>) => {
    if (newValue) {
      setBrand(newValue.value);
    } else {
      resetFilters();
    }
  };

  const handleSearch = () => {
    fetchCars(true);
  };

  return (
    <div className={css.allFilters}>
      <Select<Brand>
        options={brandOptions}
        styles={customStyles}
        placeholder="Choose a brand"
        onChange={handleChange}
        isSearchable
        isClearable
        instanceId="brand-select"
      />

      {/* <div className={css.carMileageInput}>
        <input></input>
        <input></input>
      </div> */}

      <button className={css.searchBtn} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default FilterBar;
