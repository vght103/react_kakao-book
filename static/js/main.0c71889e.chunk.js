(this.webpackJsonpkakao_book=this.webpackJsonpkakao_book||[]).push([[0],{21:function(e,t,o){e.exports={books_list:"books_list_books_list__kY_hM"}},28:function(e,t,o){},29:function(e,t,o){},3:function(e,t,o){e.exports={book_info_wrap:"book_info_book_info_wrap__dufib",book_info:"book_info_book_info__27nAE",book_img:"book_info_book_img__Tn0oZ",title:"book_info_title__SGkSB",authors:"book_info_authors__n97_b",dl:"book_info_dl__23QXS",price:"book_info_price__1Blsm",sale_price:"book_info_sale_price__2Gav8",contents:"book_info_contents__2V1Qk"}},37:function(e,t,o){"use strict";o.r(t);var c=o(1),a=o.n(c),n=o(19),s=o.n(n),r=(o(28),o(16)),i=o(2),l=(o(29),o(7)),_=o.n(l),b=o(0),h=function(e){var t=e.book,o=e.clickBook,c=Object(i.f)();console.log(o);return Object(b.jsx)("li",{className:_.a.book_list,onClick:function(){c.push("/book-info"),o(t),console.log(o)},children:Object(b.jsxs)("div",{className:_.a.book_item,children:[Object(b.jsx)("img",{src:t.thumbnail,alt:t.thumbnail,className:_.a.book_img}),Object(b.jsxs)("div",{className:_.a.book_info,children:[Object(b.jsxs)("h3",{className:_.a.title,children:[" ",t.title]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:_.a.price,children:[Object(b.jsx)("span",{children:"\uc815\uc0c1\uac00"}),Object(b.jsxs)("span",{children:[" ",t.price," \uc6d0"]})]}),Object(b.jsxs)("div",{className:_.a.sale_price,children:[Object(b.jsx)("span",{children:"\ud310\ub9e4\uac00"}),Object(b.jsxs)("span",{children:[" ",t.sale_price," \uc6d0"]})]})]})]})]})})},d=o(21),j=o.n(d),k=function(e){var t=e.books,o=e.clickBook;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ul",{className:j.a.books_list,children:t.map((function(e){return Object(b.jsx)(h,{book:e,clickBook:o},e.isbn)}))})})},u=o(3),p=o.n(u),f=function(e){var t=e.book;return console.log(t),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:p.a.book_info_wrap,children:[Object(b.jsxs)("div",{className:p.a.book_info,children:[Object(b.jsx)("img",{src:t.thumbnail,alt:t.title,className:p.a.book_img}),Object(b.jsxs)("div",{className:p.a.book_text,children:[Object(b.jsx)("h2",{className:p.a.title,children:t.title}),Object(b.jsxs)("dl",{className:p.a.dl,children:[Object(b.jsx)("dt",{children:"\uc800\uc790"}),Object(b.jsx)("dd",{children:t.authors})]}),Object(b.jsxs)("dl",{className:p.a.dl,children:[Object(b.jsx)("dt",{children:"\ucd9c\ud310\uc0ac"}),Object(b.jsx)("dd",{children:t.publisher})]}),Object(b.jsxs)("dl",{className:p.a.dl,children:[Object(b.jsx)("dt",{children:"\ud310\ub9e4\uc815\ubcf4"}),Object(b.jsx)("dd",{children:t.status})]}),Object(b.jsxs)("dl",{className:"".concat(p.a.dl," ").concat(p.a.price),children:[Object(b.jsx)("dt",{children:"\uc815\uc0c1\uac00"}),Object(b.jsxs)("dd",{children:[t.price,"\uc6d0"]})]}),Object(b.jsxs)("dl",{className:"".concat(p.a.dl," ").concat(p.a.sale_price),children:[Object(b.jsx)("dt",{children:"\ud310\ub9e4\uac00"}),Object(b.jsxs)("dd",{children:[t.sale_price,"\uc6d0"]})]})]})]}),Object(b.jsx)("p",{className:p.a.contents,children:t.contents})]})})},m=o(6),x=o.n(m),O=function(e){var t=e.search,o=Object(i.f)(),a=Object(c.useRef)(),n=function(){var e=a.current.value;t(e)};return Object(b.jsxs)("header",{className:x.a.header,children:[Object(b.jsxs)("div",{className:x.a.logo,onClick:function(){o.push("/")},children:[Object(b.jsx)("img",{src:"/react_kakao-book/imgs/logo.png",className:x.a.logo_img}),Object(b.jsx)("h1",{className:x.a.head_title,children:"Kakao Book"})]}),Object(b.jsxs)("div",{className:x.a.search,children:[Object(b.jsx)("input",{ref:a,type:"text",className:x.a.search_bar,onKeyPress:function(e){"Enter"===e.key&&n()}}),Object(b.jsx)("button",{className:x.a.search_btn,onClick:function(){n()},children:"\uac80\uc0c9"})]}),Object(b.jsx)("div",{className:x.a.sign_area,children:Object(b.jsx)("img",{src:"/react_kakao-book/imgs/kakao_login.png",alt:"\uce74\uce74\uc624\ud1a1 \ub85c\uadf8\uc778",className:x.a.login,onClick:function(){o.push("/login")}})})]})},g=function(e){var t=e.kakaoCode;return console.log(t),Object(b.jsx)("h2",{children:"\ub85c\uadf8\uc778 \ud558\uae30"})};var v=function(e){var t=e.kakaoService,o=Object(c.useState)([]),a=Object(r.a)(o,2),n=a[0],s=a[1],l=Object(c.useState)(null),_=Object(r.a)(l,2),h=_[0],d=_[1];return Object(c.useEffect)((function(){t.showBookList().then((function(e){return s(e)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{search:function(e){t.search(e).then((function(e){return s(e)}))}}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{exact:!0,path:"/",children:Object(b.jsx)(k,{books:n,clickBook:function(e){d(e)}})}),Object(b.jsx)(i.a,{path:"/login",children:Object(b.jsx)(g,{kakaoCode:function(){t.kakaoGetCode().then(console.log)}})}),h&&Object(b.jsx)(i.a,{path:"/book-info",children:Object(b.jsx)(f,{book:h})})]})]})},N=o(8),y=o(10),w=o.n(y),B=o(15),C=o(22),K=o(23),S=new(function(){function e(t){Object(C.a)(this,e),this.key=t}return Object(K.a)(e,[{key:"showBookList",value:function(){var e=Object(B.a)(w.a.mark((function e(){var t,o,c,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Headers).append("Authorization","KakaoAK ".concat(this.key)),o={method:"GET",headers:t,redirect:"follow"},e.prev=3,e.next=6,fetch("https://dapi.kakao.com/v3/search/book?query=\uc5ec\ud589&page=2&size=20&key=".concat(this.key),o);case 6:return c=e.sent,e.next=9,c.json();case 9:return a=e.sent,e.abrupt("return",a.documents);case 13:return e.prev=13,e.t0=e.catch(3),e.abrupt("return",console.log("error",e.t0));case 16:case"end":return e.stop()}}),e,this,[[3,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(B.a)(w.a.mark((function e(t){var o,c,a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new Headers).append("Authorization","KakaoAK ".concat(this.key)),c={method:"GET",headers:o,redirect:"follow"},e.next=5,fetch("https://dapi.kakao.com/v3/search/book?query=".concat(t,"&page=3&size=20&key=").concat(this.key),c);case 5:return a=e.sent,e.next=8,a.json();case 8:return n=e.sent,e.abrupt("return",n.documents);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"kakaoGetCode",value:function(){var e=new Headers;e.append("Authorization","KakaoAK ".concat(this.key)),e.append("Cookie","_kadu=dYfFK9kj6OQ-0x3p_1628919829998");var t={method:"GET",headers:e,redirect:"follow"};fetch("https://kauth.kakao.com/oauth/authorize?client_id$=".concat(this.key,"&redirect_uri=http://localhost:3000/oauth&response_type=code&key$=").concat(this.key),t).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log("error",e)}))}}]),e}())("f1ecec569093bda2f73f5de912bd4656");s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(N.a,{children:Object(b.jsx)("div",{className:"app",children:Object(b.jsx)(v,{kakaoService:S})})})}),document.getElementById("root"))},6:function(e,t,o){e.exports={header:"header_header__mKSL0",logo:"header_logo__3X6B4",logo_img:"header_logo_img__3zw8C",head_title:"header_head_title__3HOEY",search:"header_search__38ume",search_bar:"header_search_bar__2WDB3",search_btn:"header_search_btn__2cHhO",login:"header_login__3_RxH"}},7:function(e,t,o){e.exports={book_list:"books_item_book_list__3Pymk",book_item:"books_item_book_item__2Ue9z",book_info:"books_item_book_info__Ff2oH",book_img:"books_item_book_img__2R5Za",title:"books_item_title__dFqWL",price:"books_item_price__36RXX",sale_price:"books_item_sale_price__3cZQa"}}},[[37,1,2]]]);
//# sourceMappingURL=main.0c71889e.chunk.js.map