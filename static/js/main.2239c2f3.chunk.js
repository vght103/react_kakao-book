(this.webpackJsonpkakao_book=this.webpackJsonpkakao_book||[]).push([[0],{21:function(e,t,c){e.exports={books_list:"books_list_books_list__kY_hM"}},28:function(e,t,c){},29:function(e,t,c){},3:function(e,t,c){e.exports={book_info_wrap:"book_info_book_info_wrap__dufib",book_info:"book_info_book_info__27nAE",book_img:"book_info_book_img__Tn0oZ",title:"book_info_title__SGkSB",authors:"book_info_authors__n97_b",dl:"book_info_dl__23QXS",price:"book_info_price__1Blsm",sale_price:"book_info_sale_price__2Gav8",contents:"book_info_contents__2V1Qk"}},37:function(e,t,c){"use strict";c.r(t);var o=c(1),s=c.n(o),n=c(19),a=c.n(n),i=(c(28),c(16)),r=c(2),l=(c(29),c(7)),_=c.n(l),b=c(0),j=function(e){var t=e.book,c=e.clickBook,o=Object(r.f)();console.log(c);return Object(b.jsx)("li",{className:_.a.book_list,onClick:function(){o.push("/book-info"),c(t),console.log(c)},children:Object(b.jsxs)("div",{className:_.a.book_item,children:[Object(b.jsx)("img",{src:t.thumbnail,alt:t.thumbnail,className:_.a.book_img}),Object(b.jsxs)("div",{className:_.a.book_info,children:[Object(b.jsxs)("h3",{className:_.a.title,children:[" ",t.title]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:_.a.price,children:[Object(b.jsx)("span",{children:"\uc815\uc0c1\uac00"}),Object(b.jsxs)("span",{children:[" ",t.price," \uc6d0"]})]}),Object(b.jsxs)("div",{className:_.a.sale_price,children:[Object(b.jsx)("span",{children:"\ud310\ub9e4\uac00"}),Object(b.jsxs)("span",{children:[" ",t.sale_price," \uc6d0"]})]})]})]})]})})},d=c(21),h=c.n(d),u=function(e){var t=e.books,c=e.clickBook;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ul",{className:h.a.books_list,children:t.map((function(e){return Object(b.jsx)(j,{book:e,clickBook:c},e.isbn)}))})})},k=c(3),x=c.n(k),O=function(e){var t=e.book;return console.log(t),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:x.a.book_info_wrap,children:[Object(b.jsxs)("div",{className:x.a.book_info,children:[Object(b.jsx)("img",{src:t.thumbnail,alt:t.title,className:x.a.book_img}),Object(b.jsxs)("div",{className:x.a.book_text,children:[Object(b.jsx)("h2",{className:x.a.title,children:t.title}),Object(b.jsxs)("dl",{className:x.a.dl,children:[Object(b.jsx)("dt",{children:"\uc800\uc790"}),Object(b.jsx)("dd",{children:t.authors})]}),Object(b.jsxs)("dl",{className:x.a.dl,children:[Object(b.jsx)("dt",{children:"\ucd9c\ud310\uc0ac"}),Object(b.jsx)("dd",{children:t.publisher})]}),Object(b.jsxs)("dl",{className:x.a.dl,children:[Object(b.jsx)("dt",{children:"\ud310\ub9e4\uc815\ubcf4"}),Object(b.jsx)("dd",{children:t.status})]}),Object(b.jsxs)("dl",{className:"".concat(x.a.dl," ").concat(x.a.price),children:[Object(b.jsx)("dt",{children:"\uc815\uc0c1\uac00"}),Object(b.jsxs)("dd",{children:[t.price,"\uc6d0"]})]}),Object(b.jsxs)("dl",{className:"".concat(x.a.dl," ").concat(x.a.sale_price),children:[Object(b.jsx)("dt",{children:"\ud310\ub9e4\uac00"}),Object(b.jsxs)("dd",{children:[t.sale_price,"\uc6d0"]})]})]})]}),Object(b.jsx)("p",{className:x.a.contents,children:t.contents})]})})},m=c(6),p=c.n(m),f=function(e){var t=e.search,c=Object(r.f)(),s=Object(o.useRef)(),n=function(){var e=s.current.value;t(e)};return Object(b.jsxs)("header",{className:p.a.header,children:[Object(b.jsxs)("div",{className:p.a.logo,onClick:function(){c.push("/")},children:[Object(b.jsx)("img",{src:"./imgs/logo.png",alt:"logo",className:p.a.logo_img}),Object(b.jsx)("h1",{className:p.a.head_title,children:"Kakao Book"})]}),Object(b.jsxs)("div",{className:p.a.search,children:[Object(b.jsx)("input",{ref:s,type:"text",className:p.a.search_bar,onKeyPress:function(e){"Enter"===e.key&&n()}}),Object(b.jsx)("button",{className:p.a.search_btn,onClick:function(){n()},children:"\uac80\uc0c9"})]}),Object(b.jsxs)("div",{className:p.a.sign_area,children:[Object(b.jsx)("span",{className:p.a.login,onClick:function(){c.push("/login")},children:"\ub85c\uadf8\uc778"}),Object(b.jsx)("span",{className:p.a.logout,children:"\ub85c\uadf8\uc544\uc6c3"})]})]})},g=function(e){return Object(b.jsx)("h2",{children:"\ub85c\uadf8\uc778"})};var v=function(e){var t=e.kakaoService,c=Object(o.useState)([]),s=Object(i.a)(c,2),n=s[0],a=s[1],l=Object(o.useState)(null),_=Object(i.a)(l,2),j=_[0],d=_[1];return Object(o.useEffect)((function(){t.showBookList().then((function(e){return a(e)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{search:function(e){t.search(e).then((function(e){return a(e)}))}}),Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{exact:!0,path:"/",children:Object(b.jsx)(u,{books:n,clickBook:function(e){d(e)}})}),Object(b.jsx)(r.a,{path:"/login",children:Object(b.jsx)(g,{})}),j&&Object(b.jsx)(r.a,{path:"/book-info",children:Object(b.jsx)(O,{book:j})})]})]})},N=c(8),y=c(10),w=c.n(y),B=c(15),S=c(22),E=c(23),K=new(function(){function e(t){Object(S.a)(this,e),this.key=t}return Object(E.a)(e,[{key:"showBookList",value:function(){var e=Object(B.a)(w.a.mark((function e(){var t,c,o,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Headers).append("Authorization","KakaoAK ".concat(this.key)),c={method:"GET",headers:t,redirect:"follow"},e.prev=3,e.next=6,fetch("https://dapi.kakao.com/v3/search/book?query=\uc5ec\ud589&page=2&size=20&key=".concat(this.key),c);case 6:return o=e.sent,e.next=9,o.json();case 9:return s=e.sent,e.abrupt("return",s.documents);case 13:return e.prev=13,e.t0=e.catch(3),e.abrupt("return",console.log("error",e.t0));case 16:case"end":return e.stop()}}),e,this,[[3,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(B.a)(w.a.mark((function e(t){var c,o,s,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=new Headers).append("Authorization","KakaoAK ".concat(this.key)),o={method:"GET",headers:c,redirect:"follow"},e.next=5,fetch("https://dapi.kakao.com/v3/search/book?query=".concat(t,"&page=3&size=20&key=").concat(this.key),o);case 5:return s=e.sent,e.next=8,s.json();case 8:return n=e.sent,e.abrupt("return",n.documents);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())("f1ecec569093bda2f73f5de912bd4656");a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(N.a,{children:Object(b.jsx)("div",{className:"app",children:Object(b.jsx)(v,{kakaoService:K})})})}),document.getElementById("root"))},6:function(e,t,c){e.exports={header:"header_header__mKSL0",logo:"header_logo__3X6B4",logo_img:"header_logo_img__3zw8C",head_title:"header_head_title__3HOEY",search:"header_search__38ume",search_bar:"header_search_bar__2WDB3",search_btn:"header_search_btn__2cHhO",login:"header_login__3_RxH",logout:"header_logout__sgeds"}},7:function(e,t,c){e.exports={book_list:"books_item_book_list__3Pymk",book_item:"books_item_book_item__2Ue9z",book_info:"books_item_book_info__Ff2oH",book_img:"books_item_book_img__2R5Za",title:"books_item_title__dFqWL",price:"books_item_price__36RXX",sale_price:"books_item_sale_price__3cZQa"}}},[[37,1,2]]]);
//# sourceMappingURL=main.2239c2f3.chunk.js.map