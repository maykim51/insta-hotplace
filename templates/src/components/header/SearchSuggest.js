import React from 'react';
import './header.css';

// 자동완성 키워드 목록 (낱개)
function SuggestList(props) {
  return (
      <li className="search_keyword_item" onClick={props.onClick}>{props.name}</li>
  );
}

function SuggestBox(props) {
  return (
    <div
    className={'search_keyword_suggest' + props.blind}
    onMouseEnter={props.onMouse}
    onMouseLeave={props.onMouse}
  >
    <ul className="search_keyword_suggest_ul">
      <span className="search_keyword_subtitle key_font">추천지역</span>
      <div className="search_keyword_list key_color_hv  key_font">{props.suggestList}</div>
    </ul>
  </div>
  );
}

export { SuggestList, SuggestBox };
