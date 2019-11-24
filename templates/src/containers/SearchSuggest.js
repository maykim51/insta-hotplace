import React, { Component } from 'react';
import { GetSuggestList } from './../services/GetData';
import { SuggestList, SuggestBox } from './../components/header/SearchSuggest';

class SearchSuggest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      suggestList: [],
    };
  }

  fetchSearch = async () => {
    this.setState({ fetching: true });
    const sgtListRequest = await GetSuggestList();
    const suggestList = sgtListRequest.data.area_list;
    this.setState({
      suggestList,
      fetching: false,
    });
  };

  // Re-render only :
  // 1) when Suggestbox display state(blind) changes.
  // 2) or when Suggestlist data loading state(fecthing) changes.
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.blind !== this.props.blind ||
      nextState.fetching !== this.state.fetching
    );
  }

  render() {
    if (this.props.blind !== ' blind') {
      var suggestList = this.state.suggestList.map((list, i) => {
        return (
          <SuggestList
            name={list}
            key={i}
            onClick={e => {
              this.props.autoComplete(e, list);
            }}
          />
        );
      });

      return (
        <SuggestBox
          blind={this.props.blind}
          onMouse={this.props.onMouse}
          suggestList={suggestList}
        />
      );
    } else {
      return null;
    }
  }

  componentDidMount() {
    this.fetchSearch();
  }
}

export { SuggestList, SearchSuggest };
