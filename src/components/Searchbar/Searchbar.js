import React from 'react';
import style from './Searchbar.module.css';
import SearchForm from './SearchForm';

const Searchbar = onSubmit => {
  return (
    <header className={style.Searchbar}>
      <SearchForm onSubmit={onSubmit.onSubmit} />
    </header>
  );
};

export default Searchbar;
