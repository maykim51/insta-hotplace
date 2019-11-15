import React from 'react';
import './header.css';

function Logo(props) {
  return (
    <div className='logo_area'>
          <h1>
            <a href="/">
              <span className="logo">핫플<span className="mb_blind">검색</span></span>
            </a>
          </h1>
        </div>
  );
}

export default Logo;
