import React, { Component } from 'react';
import { Loading, InstaBoxItem } from './../components/BoxItems';
import { GetSearch, } from './../services/GetData';

class Detail extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      fetching: false,
      hasError: false,
      venueData: {
        detail: { description : null, 
                  url_naver_map: null },
        name: null ,
        num_of_posts: null ,
        posts: [
                  { hashtags:[],
                  img_urls:[],
                  key: null }
        ]
      },
      itemsPerPage: 12,
      loadPage: 1,
      indexStart: 0,
      data: null,
    };
  }

  // Get Search Result Data
  fetchSearch = async (keyword, name) => {
    if (this._ismounted === true) {
      this.setState({ fetching: true });
      console.log('얍1');
      try {
        const searchRequest = await GetSearch(keyword);
        const searchList = searchRequest.data.venues;
        const index = searchList.findIndex(i => i.name === name);
        var venueData = searchList[index];
        this.setState({
          venueData,
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

  // nextPage = () => {
  //   var { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  //   if (scrollHeight === scrollTop + clientHeight) {
  //     this.setState({ loadPage: this.state.loadPage + 1 });
  //   }
  // };


  render() {
    var {venueData, fetching} = this.state;
    var venueDetail = venueData.detail;
    var venuePosts = venueData.posts;
    // console.log(instaList.img_urls[0]);
    // var relatedBoxItems = this.state.searchList.map((searchList, i) => {
    //   return (
    //     <RelatedBoxItem
    //       rank={searchList.rank}
    //       name={searchList.name}
    //       backgroundImage={searchList.backgroundImage}
    //       key={i}
    //       onClick={this.props.onClick}
    //     />
    //   );
    // });

    var instaBoxItems = venuePosts.map((venuePosts, i) => {

      var tags = venuePosts.hashtags.map((hashtags) => '#' + hashtags + ' ');
      var img_urls = venuePosts.img_urls.map((img_urls) => 'url(' + img_urls + ')');
      return (
        <InstaBoxItem
          img_urls={img_urls}
          tags={tags}
          key={i}
          link={venuePosts.key}
        />
      );
    });
    return (
      <div className="main_container fullwidth">
        <main className="main">
          {/* <div className="related_box_container">
            <button className="related_prv">
              <span className="blind">이전</span>
            </button>
            <div className="related_box_list_wrap">
              <ul className="related_box_list">{relatedBoxItems}</ul>
            </div>
            <button className="related_nxt">
              <span className="blind">다음</span>
            </button>
          </div> */}
          <h1 className="detail_title">{venueData.name}</h1>
          <div className="deatil">
            <div className="detail_map" style={{ backgroundImage: `url(${venuePosts[0].img_urls[0]})` }}></div>
            <div className="detail_desc">
              <p className="detail_txt">
                {venueDetail.description}
              </p>
              <a className="detail_map_link key_color" href={venueDetail.url_naver_map} target="_naver">
                <p className="detail_txt map_ico">네이버 지도에서 보기</p>
              </a>
            </div>
          </div>
          <h2 className="insta_count">인스타그램 검색결과 : {venuePosts.length}건</h2>
          <ul className="box_container">{instaBoxItems}</ul>
          <Loading blind={fetching ? '' : 'blind'} />
        </main>
      </div>
    );
  }

  componentDidMount() {
    this._ismounted = true;
    this.fetchSearch(this.props.match.params.query, this.props.match.params.name);
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

export default Detail;
