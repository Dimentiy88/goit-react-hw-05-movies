"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,u,c=e(861),o=e(439),s=e(687),i=e.n(s),p=e(791),f=e(689),l=e(51),d=e(168),v=e(686),h=v.Z.ul(r||(r=(0,d.Z)(["\n  margin-top: 12px;\n"]))),x=v.Z.li(a||(a=(0,d.Z)(["\n  font-size: 14px;\n  padding: 6px;\n  background-color: #2a2a2a;\n  border-radius: 14px;\n\n  :not(:last-child) {\n    margin-bottom: 12px;\n  }\n\n  span {\n    color: #ffc700;\n  }\n"]))),g=v.Z.p(u||(u=(0,d.Z)(["\n  color: #888888;\n  margin-top: 6px;\n"]))),m=e(184),k=function(){var n=(0,f.UO)().movieId,t=(0,p.useState)([]),e=(0,o.Z)(t,2),r=e[0],a=e[1];return(0,p.useEffect)((function(){var t=function(){var t=(0,c.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.Hu)(n);case 3:e=t.sent,a(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),0===r.length?(0,m.jsx)("h3",{children:"No Reviews."}):(0,m.jsx)(h,{children:r.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,m.jsxs)(x,{children:[(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{children:"Author:"})," ",e]}),(0,m.jsx)(g,{children:r})]},t)}))})}},51:function(n,t,e){e.d(t,{Df:function(){return s},Eb:function(){return f},Hu:function(){return l},Pg:function(){return p},Ph:function(){return i}});var r=e(861),a=e(687),u=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="35d0834a9921bbb13d1153018d5cbd5a",s=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/week?api_key=".concat(o));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.dfd992b2.chunk.js.map