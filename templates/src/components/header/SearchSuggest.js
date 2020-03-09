import React from 'react';
import './header.css';

function SuggestList({ onClick, name }) {
  return (
    <li className="search_keyword_item" onClick={onClick}>
      {name}
    </li>
  );
}

function SuggestBox({ blind, onMouse, suggestList }) {
  return (
    <div
      className={'search_keyword_suggest' + blind}
      onMouseEnter={onMouse}
      onMouseLeave={onMouse}
    >
      <ul className="search_keyword_suggest_ul">
        <span className="search_keyword_subtitle key_font">추천지역</span>
        <div className="search_keyword_list key_color_hv  key_font">
          {suggestList}
        </div>
      </ul>
    </div>
  );
}

export { SuggestList, SuggestBox };
