import React, { Component } from 'react';
import SearchField from './../components/header/SearchField';
import { SearchSuggest } from './SearchSuggest';
import { withRouter } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.suggestHover = false;
    this.state = {
      inputFocus: false,
    };
  }

  returnSearch = (e, keyword) => {
    console.log('Search > returnSearch');
    if (!keyword) {
      keyword = e.target.firstChild.childNodes[2].lastChild.value;
    }
    e.preventDefault();
    this.setState({ inputFocus: false });
    this.props.history.push(`/search/${keyword}`);
  };

  autoComplete = (e, keyword) => {
    console.log('Search > autoComplete');
    this.returnSearch(e, keyword);
    this.props.pushQueryToInput(keyword);
  };

  // Keyword suggest list display : on/off toggle
  suggestHandle = e => {
    if (this.suggestHover === false) {
      console.log('Search > suggestHandle');
      this.setState({ inputFocus: e.type === 'focus' ? true : false });
    }
  };

  suggestHoverListen = e => {
    console.log('Search > suggestHoverListen');
    this.suggestHover = e.type === 'mouseenter' ? true : false;
  };

  render() {
    if (this.props.blind !== 'blind') {
      var { blind, query, onChange, inputClear } = this.props;

      return (
        <div className={'search ' + blind}>
          <form onSubmit={this.returnSearch} method="get" autoComplete="off">
            <SearchField
              query={query}
              onChange={onChange}
              inputClear={inputClear}
              onFocus={this.suggestHandle}
            />
            <SearchSuggest
              blind={this.state.inputFocus ? '' : ' blind'}
              autoComplete={this.autoComplete}
              onMouse={this.suggestHoverListen}
            />
          </form>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(Search);
