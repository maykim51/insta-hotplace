import React, { Component } from 'react';
import { SearchSuggest } from './SearchSuggest';
import { withRouter } from 'react-router-dom';

class SearchResultNone extends Component {
  autoComplete = (e, keyword) => {
    e.preventDefault();
    this.props.history.push(`/search/${keyword}`);
    this.props.onClickSgt(keyword);
  };

  render() {
    return (
      <div className="main_container fullwidth">
        <main className="main search_result">
          <div className="search_no_msg">
            <span className="sch_no_ico"></span>
            <span className="main_copy">
              지금은 서울만 가능해요
              <br />
              이런 키워드는 어떠세요?
            </span>
            <SearchSuggest
            autoComplete={this.autoComplete}
          />
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(SearchResultNone);
