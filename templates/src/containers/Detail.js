import React, { Component } from 'react';
import { Loading, InstaBoxItem } from './../components/BoxItems';
import { GetDetail, GetSearch, GetInsta } from './../services/GetData';

class Detail extends Component {
  fetchSearch = async (query, name) => {
    console.log(this.state.detailInfo);
    this.setState({ fetching: true });
      const detailRequest = await Promise.all([
        GetDetail(name),
        GetInsta(query),
        GetSearch(query)
      ]);
      const detailInfo = detailRequest[0].data;
      const instaList = detailRequest[1].data;
      // const searchList = detailRequest[2].data;

      this.setState({
        detailInfo: detailInfo[0],
        // searchList,
        instaList,
        fetching: false,
      });
      console.log(this.state.detailInfo);
    }

  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      name: this.props.name,
      detailInfo: [],
      // searchList: [],
      instaList: [],
    };
  }

  // render()다음 데이터를 호출한다
  componentDidMount() {
    console.log('이거;'+this.props.match.params.name)
    console.log('이거;'+this.props.match.params.query)
    const {query, name} = this.props.match.params;
    this.fetchSearch(query, name);
    // window.addEventListener('scroll', this.nextPage);
  }

  // // 무한스크롤
  // nextPage = () => {
  //   var { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  //   if (scrollHeight === scrollTop + clientHeight) {
  //     this.setState({ loadPage: this.state.loadPage + 1 });
  //   }
  // };



  render() {

    // 검색결과가 있으면 로드한 데이터를 12개씩 보여준다

    var {detailInfo, fetching} = this.state;
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

    var instaBoxItems = this.state.instaList.map((instaList, i) => {
      return (
        <InstaBoxItem
          backgroundImage={instaList.backgroundImage}
          tags={instaList.desc}
          key={i}
          // link={instaList.link}
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
          <h1 className="detail_title">{detailInfo.name}</h1>
          <div className="deatil">
            <div className="detail_map"></div>
            <div className="detail_desc">
              <p className="detail_txt">
              {detailInfo.desc}
              </p>
              <a className="detail_map_link key_color" href="/#">
                <p className="detail_txt map_ico">네이버 지도에서 보기</p>
              </a>
            </div>
          </div>
          <h2 className="insta_count">인스타그램 검색결과 : {this.state.instaList.length}건</h2>
          <ul className="box_container">{instaBoxItems}</ul>
          <Loading blind={fetching ? '' : 'blind'} />
        </main>
      </div>
    );
  }
}

export default Detail;
