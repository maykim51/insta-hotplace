(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{19:function(e,t,a){},36:function(e,t,a){e.exports=a(67)},41:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),s=a.n(c),l=(a(41),a(3)),o=a(2),i=a(5),u=a(4),m=a(6);a(19);var h=function(e){return r.a.createElement("fieldset",null,r.a.createElement("legend",{className:"blind"},"\uac80\uc0c9"),r.a.createElement("div",{className:"search_sharp"},r.a.createElement("span",null,"#")),r.a.createElement("span",{className:"search_outline"},r.a.createElement("input",{type:"text",className:"key_color search_input",placeholder:"\uac15\ub0a8\uc5ed",value:e.query,onChange:e.onChange,onFocus:e.onFocus,onBlur:e.onFocus})),r.a.createElement("button",{type:"button",className:"search_clear_btn",onClick:e.inputClear},r.a.createElement("span",{className:"blind"},"\uc9c0\uc6b0\uae30"),r.a.createElement("span",{className:"search_clear_btn_ico"})),r.a.createElement("div",{className:"search_fixed_text"},r.a.createElement("span",null,"\ub9db\uc9d1 |")),r.a.createElement("button",{type:"submit",className:"search_btn",onClick:e.onClick},r.a.createElement("span",{className:"blind"},"\uac80\uc0c9"),r.a.createElement("span",{className:"search_btn_ico"})))},p=a(11),d=a.n(p),f=a(15),g=a(17),E=a.n(g);function b(e){return console.log("http://0.0.0.0:5000/areas/"+e),E.a.get("http://0.0.0.0:5000/areas/"+e)}function v(e){return console.log("https://my-json-server.typicode.com/dudusae/demo/"+e),E.a.get("https://my-json-server.typicode.com/dudusae/demo/"+e)}function y(e){return r.a.createElement("li",{className:"search_keyword_item",onClick:e.onClick},e.name)}function _(e){return r.a.createElement("div",{className:"search_keyword_suggest"+e.blind,onMouseEnter:e.onMouse,onMouseLeave:e.onMouse},r.a.createElement("ul",{className:"search_keyword_suggest_ul"},r.a.createElement("span",{className:"search_keyword_subtitle key_font"},"\ucd94\ucc9c\uc9c0\uc5ed"),r.a.createElement("div",{className:"search_keyword_list key_color_hv  key_font"},e.suggestList)))}var k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).fetchSearch=Object(f.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({fetching:!0}),e.next=3,console.log("http://0.0.0.0:5000/areas"),E.a.get("http://0.0.0.0:5000/areas");case 3:t=e.sent,n=t.area_list.data,console.log(n),a.setState({suggestList:n,fetching:!1});case 7:case"end":return e.stop()}}),e)}))),a.state={fetching:!1,suggestList:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchSearch()}},{key:"render",value:function(){var e=this,t=this.state.suggestList.map((function(t,a){return r.a.createElement(y,{name:t.name,key:a,onClick:function(a){e.props.autoComp(a,t.name)}})}));return r.a.createElement(_,{blind:this.props.blind,onMouse:this.props.onMouse,suggestList:t})}}]),t}(n.Component),C=a(12),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).returnSearch=function(e){e.preventDefault(),a.setState({inputFocus:!1});var t=e.target.firstChild.childNodes[2].lastChild.value;a.props.history.push("/search/".concat(t))},a.suggestHandle=function(e){!1===a.suggestHover&&a.setState({inputFocus:"focus"===e.type})},a.suggestHoverListen=function(e){a.suggestHover="mouseenter"===e.type},a.autoComp=function(e,t){e.preventDefault(),a.setState({inputFocus:!1}),a.props.history.push("/search/".concat(t)),a.props.onClickSgt(t)},a.suggestHover=!1,a.state={inputFocus:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e){return"blind"!==e.blind}}]),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.blind,a=e.query,n=e.onChange,c=e.inputClear;return r.a.createElement("div",{className:"search "+t},r.a.createElement("form",{onSubmit:this.returnSearch,method:"get",autoComplete:"off"},r.a.createElement(h,{query:a,onChange:n,inputClear:c,onFocus:this.suggestHandle}),r.a.createElement(k,{blind:this.state.inputFocus?"":" blind",autoComp:this.autoComp,onMouse:this.suggestHoverListen})))}}]),t}(n.Component),j=Object(C.f)(N);var S=function(e){return r.a.createElement("div",{className:"logo_area"},r.a.createElement("h1",null,r.a.createElement("a",{href:"/"},r.a.createElement("span",{className:"logo"},"\ud56b\ud50c",r.a.createElement("span",{className:"mb_blind"},"\uac80\uc0c9")))))};var O=function(e){return r.a.createElement("div",{className:"header_container fullwidth key_color_bg"},r.a.createElement("header",{className:"header"},r.a.createElement(S,null),r.a.createElement(j,{blind:e.blind,query:e.query,onChange:e.onChange,inputClear:e.inputClear,onClickSgt:e.onClickSgt})))},x=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.query,a=e.onChange,n=e.inputClear,c=e.onClickSgt;return r.a.createElement("div",{className:"intro"},r.a.createElement(O,{blind:"blind"}),r.a.createElement("div",{className:"main_container fullwidth key_font"},r.a.createElement("main",{className:"main"},r.a.createElement("h1",{className:"main_copy"},"\uc9c0\uae08 \uc778\uc2a4\ud0c0\uadf8\ub7a8\uc5d0\uc11c"," ",r.a.createElement("span",{className:"mb_view"},r.a.createElement("br",null)),r.a.createElement("span",{className:"key_color"},"\ud56b\ud55c")," \ub9db\uc9d1\uc740?"),r.a.createElement(j,{query:t,onChange:a,inputClear:n,onClickSgt:c}),r.a.createElement("div",{className:"home_ico"}))))}}]),t}(n.Component);a(35);function w(e){return r.a.createElement("li",{className:"box_item"},r.a.createElement("a",{href:"http://#",onClick:e.onClick},r.a.createElement("div",{className:"box_img",style:{backgroundImage:"url(".concat(e.searchList.backgroundImage,")")}},r.a.createElement("div",{className:"box_img_overlay"}),r.a.createElement("div",{className:"box_rank key_color_bg"},r.a.createElement("span",{className:"box_rank_num"},e.searchList.rank,"\ub4f1")),r.a.createElement("div",{className:"box_insta_count"},r.a.createElement("p",{className:"box_insta_count_txt"},e.searchList.instatCount))),r.a.createElement("div",{className:"box_txt"},r.a.createElement("h2",{className:"box_title"},e.searchList.name),r.a.createElement("p",{className:"box_desc"},e.searchList.desc))))}function q(e){return r.a.createElement("li",{className:"box_item insta_box_item"},r.a.createElement("a",{href:e.link},r.a.createElement("div",{className:"insta_box_img",style:{backgroundImage:"url(".concat(e.backgroundImage,")")}}),r.a.createElement("div",{className:"insta_box_txt"},r.a.createElement("p",{className:"insta_box_tags"},e.tags))))}function L(e){return r.a.createElement("div",{className:"loading "+e.blind,onClick:e.onClick},r.a.createElement("span",{className:"loading_ico"}),r.a.createElement("br",null),r.a.createElement("span",null,"\ub2e4\uc74c \ud398\uc774\uc9c0\ub97c \ubd88\ub7ec\uc624\uace0 \uc788\uc2b5\ub2c8\ub2e4."))}var H=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).fetchSearch=function(){var e=Object(f.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({fetching:!0}),e.prev=1,e.next=4,b(t);case 4:n=e.sent,r=n.data,a.setState({searchCount:r.length,searchList:r,fetching:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),a.setState({fetching:!1,hasError:!0});case 12:return e.prev=12,a.setState({hasError:!1}),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(t){return e.apply(this,arguments)}}(),a.nextPage=function(){var e=document.documentElement;e.scrollHeight===e.scrollTop+e.clientHeight&&a.setState({loadPage:a.state.loadPage+1})},a.viewDetail=function(e,t){e.preventDefault(),a.props.history.push("/search/".concat(a.props.match.params.query,"/").concat(t))},a.state={fetching:!1,hasError:!1,searchCount:null,searchList:[],itemsPerPage:12,loadPage:1,indexStart:0,keyword:a.props.keyword},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchSearch(this.props.match.params.query),window.addEventListener("scroll",this.nextPage)}},{key:"componentDidUpdate",value:function(e,t){e.match.params.query!==this.props.match.params.query&&this.fetchSearch(this.props.keyword)}},{key:"render",value:function(){var e=this,t=this.state,a=t.fetching,n=t.hasError,c=t.searchCount,s=t.searchList,l=t.itemsPerPage,o=t.loadPage,i=t.indexStart;if(n)return r.a.createElement(C.a,{to:"/sorry"});var u=l*o,m=s.slice(i,u).map((function(t,a){return r.a.createElement(w,{searchList:t,key:a,onClick:function(a){e.viewDetail(a,t.name)}})}));return r.a.createElement("div",{className:"main_container fullwidth"},r.a.createElement("main",{className:"main search_result"},r.a.createElement("p",{className:"search_count"},"\uac80\uc0c9\uacb0\uacfc : ",c," \uac74"),r.a.createElement("ul",{className:"box_container"},m),r.a.createElement(L,{blind:a?"":"blind"})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.keyword!==t.keyword?{keyword:e.keyword}:null}}]),t}(n.Component),I=Object(C.f)(H),P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).autoComp=function(e,t){e.preventDefault(),a.props.history.push("/search/".concat(t)),a.props.onClickSgt(t)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main_container fullwidth"},r.a.createElement("main",{className:"main search_result"},r.a.createElement("div",{className:"search_no_msg"},r.a.createElement("span",{className:"sch_no_ico"}),r.a.createElement("span",{className:"main_copy"},"\uc9c0\uae08\uc740 \uc11c\uc6b8\ub9cc \uac00\ub2a5\ud574\uc694",r.a.createElement("br",null),"\uc774\ub7f0 \ud0a4\uc6cc\ub4dc\ub294 \uc5b4\ub5a0\uc138\uc694?"),r.a.createElement(k,{autoComp:this.autoComp}))))}}]),t}(n.Component),D=Object(C.f)(P),F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).fetchSearch=function(){var e=Object(f.a)(d.a.mark((function e(t,n){var r,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a.state.detailInfo),a.setState({fetching:!0}),e.next=4,Promise.all([(l=n,console.log("https://my-json-server.typicode.com/dudusae/demo/"+l),E.a.get("https://my-json-server.typicode.com/dudusae/demo/"+l)),v(t),b(t)]);case 4:r=e.sent,c=r[0].data,s=r[1].data,a.setState({detailInfo:c[0],instaList:s,fetching:!1}),console.log(a.state.detailInfo);case 9:case"end":return e.stop()}var l}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.state={fetching:!1,name:a.props.name,detailInfo:[],instaList:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){console.log("\uc774\uac70;"+this.props.match.params.name),console.log("\uc774\uac70;"+this.props.match.params.query);var e=this.props.match.params,t=e.query,a=e.name;this.fetchSearch(t,a)}},{key:"render",value:function(){var e=this.state,t=e.detailInfo,a=e.fetching,n=this.state.instaList.map((function(e,t){return r.a.createElement(q,{backgroundImage:e.backgroundImage,tags:e.desc,key:t})}));return r.a.createElement("div",{className:"main_container fullwidth"},r.a.createElement("main",{className:"main"},r.a.createElement("h1",{className:"detail_title"},t.name),r.a.createElement("div",{className:"deatil"},r.a.createElement("div",{className:"detail_map"}),r.a.createElement("div",{className:"detail_desc"},r.a.createElement("p",{className:"detail_txt"},t.desc),r.a.createElement("a",{className:"detail_map_link key_color",href:"/#"},r.a.createElement("p",{className:"detail_txt map_ico"},"\ub124\uc774\ubc84 \uc9c0\ub3c4\uc5d0\uc11c \ubcf4\uae30")))),r.a.createElement("h2",{className:"insta_count"},"\uc778\uc2a4\ud0c0\uadf8\ub7a8 \uac80\uc0c9\uacb0\uacfc : ",this.state.instaList.length,"\uac74"),r.a.createElement("ul",{className:"box_container"},n),r.a.createElement(L,{blind:a?"":"blind"})))}}]),t}(n.Component),M=a(13);var B=function(e){return r.a.createElement(M.a,null,r.a.createElement(O,{query:e.query,onChange:e.onChange,inputClear:e.inputClear,onClickSgt:e.onClickSgt}),r.a.createElement(C.b,{exact:!0,path:"/search/:query",render:function(){return r.a.createElement(I,{keyword:e.query})}}),r.a.createElement(C.b,{exact:!0,path:"/sorry",render:function(){return r.a.createElement(D,{query:e.query,onChange:e.onChange,inputClear:e.inputClear,onClickSgt:e.onClickSgt})}}),r.a.createElement(C.b,{exact:!0,path:"/search/:query/:name",component:F}))};var J=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"footer"},r.a.createElement("a",{href:"https://github.com/maykim51/scc-hotplace"},r.a.createElement("span",null,"https://github.com/maykim51/scc-hotplace"))))},U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).queryHandle=function(e){a.setState({query:e.target.value})},a.queryClearHandle=function(){a.setState({query:""})},a.onClickSgt=function(e){a.setState({query:e})},a.state={query:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"fullheight"},r.a.createElement(M.a,null,r.a.createElement(C.b,{exact:!0,path:"/",render:function(){return r.a.createElement(x,{query:e.state.query,onChange:e.queryHandle,inputClear:e.queryClearHandle,onClickSgt:e.onClickSgt})}}),r.a.createElement(C.b,{path:"/search/",render:function(){return r.a.createElement(B,{query:e.state.query,onChange:e.queryHandle,inputClear:e.queryClearHandle,onClickSgt:e.onClickSgt})}})),r.a.createElement(J,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.888a27d5.chunk.js.map