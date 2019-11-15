import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

// 검색결과 박스 (낱개)
function BoxItem(props) {
  return (
    <li className="box_item">
      <a href="http://#" onClick={props.onClick}>
        <div
          className="box_img"
          style={{ backgroundImage: `url(${props.searchList.backgroundImage})` }}
        >
          <div className="box_img_overlay"></div>
          <div className="box_rank key_color_bg">
            <span className="box_rank_num">{props.searchList.rank}등</span>
          </div>
          <div className="box_insta_count">
            <p className="box_insta_count_txt">{props.searchList.instatCount}</p>
          </div>
        </div>
        <div className="box_txt">
          <h2 className="box_title">{props.searchList.name}</h2>
          <p className="box_desc">{props.searchList.desc}</p>
        </div>
      </a>
    </li>
  );
}

function RelatedBoxItem(props) {
  return (
    <li className="related_box_item">
      <a href="/#" onClick={props.onClick}>
        <div
          className="related_box_img"
          style={{ backgroundImage: `url(${props.backgroundImage})` }}
        >
          <div className="related_box_rank">
            <span className="related_box_rank_num">{props.rank}</span>
          </div>
        </div>
        <div className="related_box_txt">
          <h3 className="related_box_title key_color"><LinesEllipsis text={props.name} maxLine='1' ellipsis='...' trimRight basedOn='letters' /></h3>
        </div>
      </a>
    </li>
  );
}

function InstaBoxItem(props) {
  return (
    <li className="box_item insta_box_item">
      <a href={props.link}>
        <div
          className="insta_box_img"
          style={{ backgroundImage: `url(${props.backgroundImage})` }}
        ></div>
        <div className="insta_box_txt">
          <p className="insta_box_tags">{props.tags}</p>
        </div>
      </a>
    </li>
  );
}

function Loading(props) {
  return (
    <div className={'loading '+props.blind} onClick={props.onClick}>
      <span className="loading_ico" />
      <br />
      <span>다음 페이지를 불러오고 있습니다.</span>
    </div>
  );
}

export { BoxItem, Loading, RelatedBoxItem, InstaBoxItem };
