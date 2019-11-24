import React from 'react';
import Search from './Search';
import Logo from './../components/header/Logo';

function Header({ blind, query, onChange, inputClear, pushQueryToInput }) {
  return (
    <div className="header_container fullwidth key_color_bg">
      <header className="header">
        <Logo/>
        <Search
          blind={blind}
          query={query}
          onChange={onChange}
          inputClear={inputClear}
          pushQueryToInput={pushQueryToInput}
        />
      </header>
    </div>
  );
}

export default Header;
