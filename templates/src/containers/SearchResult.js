import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { BoxItem, Loading } from './../components/BoxItems';
import { GetSearch } from './../services/GetData';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      fetching: false,
      hasError: false,
      searchCount: null,
      searchList: [],
      itemsPerPage: 12,
      loadPage: 1,
      indexStart: 0,
      data: null,
    };
  }

  // Get Search Result Data
  fetchSearch = async keyword => {
    if (this._ismounted === true) {
      this.setState({ fetching: true });
      try {
        const searchRequest = await GetSearch(keyword);
        const searchList = searchRequest.data.venues;
        this.setState({
          searchCount: searchList.length,
          searchList,
          fetching: false,
        });
      } catch (e) {
        console.log(e);
        this.setState({
          fetching: false,
          hasError: true,
        });
      } finally {
        this.setState({ hasError: false });
      }
    }
  };

  // Infinite scroll
  viewNextPage = () => {
    var { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollHeight === scrollTop + clientHeight) {
      this.setState({ loadPage: this.state.loadPage + 1 });
    }
  };

  // go to Detail page
  viewDetail = (e, name) => {
    e.preventDefault();
    this.props.history.push(
      `/search/${this.props.match.params.query}/${name}`,
    );
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

    if (hasError) {
      return <Redirect to="/sorry" />;
    } else {
      var indexEnd = itemsPerPage * loadPage;
      var searchListSlice = searchList.slice(indexStart, indexEnd);
      var boxItems = 
      searchListSlice.map((searchList, i) => {
        var img_urls = searchList.posts[0].img_urls.map((img_urls) => 'url(' + img_urls + ')');
        // img_urls.push('url(./asset/images/ico_main@2x.png)');
        return (
          <BoxItem
            // img_urls={searchList.posts[0].img_urls}
            img_urls={img_urls}
            rank={searchList.rank}
            num_of_posts={searchList.num_of_posts}
            name={searchList.name}
            desc={searchList.detail.description}
            key={i}
            onClick={e => {
              this.viewDetail(e, searchList.name);
            }}
          />
        );
        }
      );

      return (
        <div className="main_container fullwidth">
          <main className="main search_result">
            <p className="search_count">검색결과 : {searchCount} 건</p>
            <ul className="box_container">{boxItems}</ul>
            <Loading blind={fetching ? '' : 'blind'} />
          </main>
        </div>
      );
    }
  }

  componentDidMount() {
    this._ismounted = true;
    this.fetchSearch(this.props.match.params.query);
    window.addEventListener('scroll', this.viewNextPage);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.query !== this.props.match.params.query) {
      this.fetchSearch(this.props.match.params.query);
    }
  }

  componentWillUnmount() {
    this._ismounted = false;
  }
}

export default withRouter(SearchResult);
