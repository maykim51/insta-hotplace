import React from 'react';
import './header.css';

function SearchField(props) {
  return (
    <fieldset>
      <legend className="blind">검색</legend>
      <div className="search_sharp">
        <span>#</span>
      </div>
      <span className="search_outline">
        <input
          type="text"
          className="key_color search_input"
          placeholder="강남역"
          value={props.query}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onFocus}
        />
      </span>
      <button
        type="button"
        className="search_clear_btn"
        onClick={props.inputClear}
      >
        <span className="blind">지우기</span>
        <span className="search_clear_btn_ico"></span>
      </button>
      <div className="search_fixed_text">
        <span>맛집 |</span>
      </div>
      <button type="submit" className="search_btn" onClick={props.onClick}>
        <span className="blind">검색</span>
        <span className="search_btn_ico"></span>
      </button>
    </fieldset>
  );
}

export default SearchField;
