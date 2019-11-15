import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { BoxItem, Loading } from './../components/BoxItems';
import { GetSearch } from './../services/GetData';

class SearchResult extends Component {
  // 키워드 검색결과 가져와서 state에 담기
  fetchSearch = async keyword => {
    this.setState({ fetching: true });
    try {
      const searchRequest = await GetSearch(keyword);
      const searchList = searchRequest.data;
      this.setState({
        searchCount: searchList.length,
        searchList,
        fetching: false,
      });
    } catch (e) {
      this.setState({
        fetching: false,
        hasError: true,
      });
    } finally {
      this.setState({ hasError: false });
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      hasError: false,
      searchCount: null,
      searchList: [],
      itemsPerPage: 12,
      loadPage: 1,
      indexStart: 0,
      keyword: this.props.keyword,
    };
  }

  // render()다음 데이터를 호출한다
  componentDidMount() {
    this.fetchSearch(this.props.match.params.query);
    window.addEventListener('scroll', this.nextPage);
  }

  // 업데이트 될 때 실행됨
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.keyword !== prevState.keyword) {
      return { keyword: nextProps.keyword };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.query !== this.props.match.params.query) {
      this.fetchSearch(this.props.keyword);
    }
  }

  // 무한스크롤
  nextPage = () => {
    var { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollHeight === scrollTop + clientHeight) {
      this.setState({ loadPage: this.state.loadPage + 1 });
    }
  };

  // 상세보기로 이동
  viewDetail = (e, name) => {
    e.preventDefault();
    this.props.history.push(`/search/${this.props.match.params.query}/${name}`);
  };

  render() {
    var {
      fetching,
      hasError,
      searchCount,
      searchList,
      itemsPerPage,
      loadPage,
      indexStart,
    } = this.state;

    // 검색결과가 없으면 /sorry 페이지로 이동
    if (hasError) {
      return <Redirect to="/sorry" />;
    } else {
      // 검색결과가 있으면 로드한 데이터를 12개씩 보여준다
      var indexEnd = itemsPerPage * loadPage;
      var searchListSlice = searchList.slice(indexStart, indexEnd);

      // 데이터를 불러와 카드레이아웃으로 보여준다
      var boxItems = searchListSlice.map((searchList, i) => {
        return (
          <BoxItem
            searchList={searchList}
            key={i}
            onClick={e => {
              this.viewDetail(e, searchList.name);
            }}
          />
        );
      });

      return (
        <div className="main_container fullwidth">
          <main className="main search_result">
            <p className="search_count">검색결과 : {searchCount} 건</p>
            <ul className="box_container">{boxItems}</ul>
            {/* ajax로 데이터를 가져오는 동안 Loading을 보여준다 */}
            <Loading blind={fetching ? '' : 'blind'} />
          </main>
        </div>
      );
    }
  }
}

export default withRouter(SearchResult);