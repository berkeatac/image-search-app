(this["webpackJsonpimage-search-app"]=this["webpackJsonpimage-search-app"]||[]).push([[0],{46:function(e,n,t){e.exports=t.p+"static/media/dropdown_indicator.c17bde18.svg"},47:function(e,n,t){e.exports=t.p+"static/media/logo.19361864.svg"},51:function(e,n,t){e.exports=t(82)},82:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(15),o=t.n(c),i=t(18),u=t.n(i),l=t(22),p=t(21),s=t(3),f=t(44),d=t.n(f),b=t(4),m=t(50),g=t(5),x=t(8),v=t(2),h=t(46),y=t.n(h),O={indicatorSeparator:function(){},dropdownIndicator:function(e){return Object(x.a)(Object(x.a)({},e),{},{color:"black",padding:"".concat(14,"px")})},option:function(e,n){return Object(x.a)(Object(x.a)({},e),{},{backgroundColor:n.isFocused||n.isSelected?"rgba(213, 215, 229, 0.3)":"white",color:(n.isSelected,"black")})},control:function(e){return Object(x.a)(Object(x.a)({},e),{},{minHeight:"initial"})},valueContainer:function(e){return Object(x.a)(Object(x.a)({},e),{},{height:"".concat(48,"px"),padding:"0 20px"})},clearIndicator:function(e){return Object(x.a)(Object(x.a)({},e),{},{padding:"".concat(14,"px")})}},j=[{value:0,label:"Default"},{value:1079798,label:"Street Art"},{value:1065976,label:"Wallpapers"},{value:327760,label:"Nature"},{value:3330445,label:"Textures & Patterns"},{value:281665,label:"Architecture"}],E=function(e){return r.a.createElement(v.z.DropdownIndicator,e,r.a.createElement("img",{src:y.a,alt:"dropdown arrow"}))},w=t(47),S=t.n(w),k=t(30);function _(){var e=Object(s.a)(["\n  width: 246px;\n  height: 50px;\n  background: #2a2b8d;\n  border-color: #2a2b8d;\n  border-radius: 25px;\n  cursor: pointer;\n  margin-left: 52px;\n"]);return _=function(){return e},e}function A(){var e=Object(s.a)(["\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 14px;\n  line-height: 19px;\n  letter-spacing: 0.1em;\n  color: #ffffff;\n"]);return A=function(){return e},e}function z(){var e=Object(s.a)(["\n  width: 400px;\n  height: 50px;\n  border-radius: 4px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 14px;\n  margin-left: 30px;\n"]);return z=function(){return e},e}function I(){var e=Object(s.a)(["\n  width: 400px;\n  height: 50px;\n  border-radius: 4px;\n  padding: 0px 22px;\n  font-family: Open Sans;\n  font-size: 14px;\n  border: 1px solid #cccccc;\n"]);return I=function(){return e},e}function N(){var e=Object(s.a)(["\n  display: flex;\n  width: calc(100% - 170px);\n  height: 120px;\n  align-items: center;\n  margin-right: 100px;\n  justify-content: space-evenly;\n"]);return N=function(){return e},e}function R(){var e=Object(s.a)(["\n  width: 41px;\n  height: 35px;\n  margin: 2px 1px;\n"]);return R=function(){return e},e}function C(){var e=Object(s.a)(["\n  width: 70px;\n  height: 70px;\n  background: linear-gradient(\n    333.23deg,\n    #2a2b8d -16.84%,\n    #2b2f8f -12.31%,\n    #559bd1 119.72%\n  );\n  border-radius: 26px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 25px 50px 25px 50px;\n"]);return C=function(){return e},e}function M(){var e=Object(s.a)(["\n  height: 120px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return M=function(){return e},e}function T(){var e=Object(s.a)(["\n  height: 120px;\n  width: 100vw;\n  background-color: #050417;\n  display: flex;\n  position: sticky;\n  top: 0;\n  z-index: 20;\n"]);return T=function(){return e},e}var D=b.c.div(T()),J=b.c.div(M()),P=b.c.div(C()),q=b.c.img(R()),G=b.c.form(N()),F=b.c.input(I()),H=Object(b.c)(k.a)(z()),L=b.c.p(A()),Q=b.c.button(_()),U=function(e){var n=e.dispatch,t=Object(a.useRef)(""),c=Object(a.useRef)(0);return Object(a.useEffect)((function(){t.current.value="istanbul"}),[]),r.a.createElement(D,null,r.a.createElement(J,null,r.a.createElement(P,null,r.a.createElement(q,{src:S.a,alt:"logo"}))),r.a.createElement(G,{onSubmit:function(e){return a=e,console.log(t,c),a.preventDefault(),void(""!==t.current.value&&c.current.state.value&&n({type:"SET_PARAMS",payload:{term:t.current.value,collection:c.current.state.value.value}}));var a}},r.a.createElement(F,{type:"text",placeholder:"Query",ref:t,"data-cy":"query-text"}),r.a.createElement(H,{ref:c,options:j,placeholder:"Collections",defaultValue:{label:"Default",value:0},styles:O,components:{DropdownIndicator:E},"data-cy":"query-dropdown"}),r.a.createElement(Q,{type:"submit","data-cy":"query-button"},r.a.createElement(L,null,"SEARCH"))))};function V(){var e=Object(s.a)(["\n  width: 300px;\n"]);return V=function(){return e},e}function W(){var e=Object(s.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 0px 10px;\n  grid-auto-rows: 10px;\n"]);return W=function(){return e},e}var B=b.c.div(W()),K=b.c.img(V()),X=function(e){var n=e.images,t=n.map((function(e){var n=e.height*(300/e.width);return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(Math.ceil(n/10)+2)},key:e.id},r.a.createElement("a",{href:e.links.html,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(K,{src:e.urls.small,alt:e.alt_description,"data-cy":"image-item"})))}));return r.a.createElement(B,{"data-cy":"image-list"},n&&t)};function Y(){var e=Object(s.a)(["\n      cursor: default;\n      opacity: 0.4;\n    "]);return Y=function(){return e},e}function Z(){var e=Object(s.a)(["\n  border: 1px solid #d5d7e5;\n  box-sizing: border-box;\n  border-radius: 2px;\n  cursor: pointer;\n  margin: 5px;\n  ","\n"]);return Z=function(){return e},e}function $(){var e=Object(s.a)(["\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 19px;\n  color: #2a2b8d;\n  margin: 12px 30px 12px 30px;\n"]);return $=function(){return e},e}function ee(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n"]);return ee=function(){return e},e}var ne=b.c.div(ee()),te=b.c.p($()),ae=b.c.button(Z(),(function(e){return e.disabled&&Object(b.b)(Y())})),re=function(e){var n=e.state,t=e.dispatch,a=function(e){t({type:"SET_PAGE",payload:{page:n.page+e}})};return r.a.createElement(ne,null,r.a.createElement(ae,{onClick:function(){return a(-1)},disabled:1===n.page,"data-cy":"prev-page"},r.a.createElement(te,null,"Previous")),r.a.createElement(ae,{onClick:function(){return a(1)},disabled:n.page===n.total_pages,"data-cy":"next-page"},r.a.createElement(te,null,"Next")))};function ce(){var e=Object(s.a)(["\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  color: #ff4a4a;\n  opacity: 1;\n"]);return ce=function(){return e},e}function oe(){var e=Object(s.a)(["\n  background: rgb(255, 74, 74, 0.1);\n  border-radius: 4px;\n  padding: 4px 30px;\n"]);return oe=function(){return e},e}var ie=b.c.div(oe()),ue=b.c.p(ce()),le=function(e){var n=e.errorMessage;return r.a.createElement(ie,null,r.a.createElement(ue,{className:"error-text"},n))},pe=function(e,n){try{localStorage.setItem(JSON.stringify(e),JSON.stringify(n))}catch(t){console.log(t)}},se=function(e){var n=localStorage.getItem(JSON.stringify(e));return n?JSON.parse(n):null},fe=t(49),de=t.n(fe).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"".concat("Client-ID 5824724607d2fad613cba2c83a8021f936843a005cb1c4979b647b52bfaafdda")}}),be=function(){var e=Object(l.a)(u.a.mark((function e(n,t,a){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(r=se([n,t,a]))){e.next=5;break}return e.abrupt("return",[r,null]);case 5:return e.prev=5,e.next=8,de.get("/search/photos",{params:{query:n,page:a,per_page:9,collections:t}});case 8:return c=e.sent,pe([n,t,a],c.data),e.abrupt("return",[c.data,null]);case 13:if(e.prev=13,e.t0=e.catch(5),!e.t0.response){e.next=17;break}return e.abrupt("return",[null,"".concat(e.t0.response.status," ").concat(e.t0.response.data.errors[0])]);case 17:return e.abrupt("return",[null,"Something went wrong"]);case 18:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(n,t,a){return e.apply(this,arguments)}}(),me={images:[],term:"istanbul",collection:0,page:1,total_pages:1},ge=function(e,n){switch(n.type){case"SET_PARAMS":return Object(x.a)(Object(x.a)({},e),{},{term:n.payload.term,collection:n.payload.collection,page:1});case"SET_IMAGES":return Object(x.a)(Object(x.a)({},e),{},{images:n.payload.images,total_pages:n.payload.total_pages});case"SET_PAGE":return Object(x.a)(Object(x.a)({},e),{},{page:n.payload.page});default:return e}};function xe(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n"]);return xe=function(){return e},e}function ve(){var e=Object(s.a)(["\n  max-width: 960px;\n  margin: 30px auto;\n"]);return ve=function(){return e},e}var he=b.c.div(ve()),ye=b.c.div(xe());function Oe(){var e=Object(s.a)(["\n  body {\n    margin: 0px;\n  }\n"]);return Oe=function(){return e},e}var je=Object(b.a)(Oe()),Ee=function(){var e=Object(a.useReducer)(ge,me),n=Object(p.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),i=Object(p.a)(o,2),s=i[0],f=i[1],b=Object(a.useState)(!1),x=Object(p.a)(b,2),v=x[0],h=x[1],y=function(){var e=Object(l.a)(u.a.mark((function e(){var n,a,r,o,i,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(""),h(!0),e.next=4,be(t.term,t.collection,t.page,f);case 4:n=e.sent,a=Object(p.a)(n,2),r=a[0],(o=a[1])?f(o):(i=r.results,l=r.total_pages,c({type:"SET_IMAGES",payload:{images:i,total_pages:l}}),i.length||f("No result has been found")),h(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){y()}),[t.term,t.collection,t.page]),r.a.createElement(m.a,null,r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/",exact:!0,render:function(){return r.a.createElement("div",null,r.a.createElement(je,null),r.a.createElement(U,{state:t,dispatch:c}),r.a.createElement(he,null,v&&r.a.createElement(ye,{className:"loader-container"},r.a.createElement(d.a,null)),""!==s&&!v&&r.a.createElement(le,{errorMessage:s}),!v&&""===s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(X,{images:t.images}),r.a.createElement(re,{state:t,dispatch:c}))))}}),r.a.createElement(g.a,{path:"/about",render:function(){return r.a.createElement("p",null,"About")}})))};o.a.render(r.a.createElement(Ee,null),document.querySelector("#root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.527c2f23.chunk.js.map