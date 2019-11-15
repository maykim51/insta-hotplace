import React from 'react';
import Search from './Search';
import Logo from './../components/header/Logo';

function Header(props) {
  return (
    <div className="header_container fullwidth key_color_bg">
      <header className="header">
        <Logo/>
        <Search
          blind={props.blind}
          query={props.query}
          onChange={props.onChange}
          inputClear={props.inputClear}
          onClickSgt={props.onClickSgt}
        />
      </header>
    </div>
  );
}

export default Header;
