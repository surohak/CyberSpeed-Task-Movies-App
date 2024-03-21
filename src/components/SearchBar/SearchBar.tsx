import React from 'react';
import { FaSearch } from 'react-icons/fa';

import styles from './SearchBar.module.scss';

interface ISearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChange, onBlur, placeholder = 'Search movie' }: ISearchBarProps) => {
  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={(e) => e.key === 'Enter' && onBlur && onBlur()}
      />
      <div className={styles.searchIconContainer} onClick={() => onBlur && onBlur()}>
        <FaSearch />
      </div>
    </div>
  );
};

export default SearchBar;
