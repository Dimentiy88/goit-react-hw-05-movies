"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{736:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a,c=e(861),u=e(439),i=e(687),s=e.n(i),o=e(791),p=e(689),f=e(51),l=e(168),d=e(686),h=d.Z.ul(r||(r=(0,l.Z)(["\n  margin-top: 12px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n"]))),v=d.Z.li(a||(a=(0,l.Z)(["\n  min-width: 182px;\n  font-size: 14px;\n  padding: 6px;\n  max-width: min-content;\n  background-color: #2a2a2a;\n\n  :not(:last-child) {\n    margin-bottom: 6px;\n  }\n\n  img {\n    max-width: 182px;\n  }\n  span {\n    color: #6671e5;\n  }\n"]))),x=e(184),m=function(){var n=(0,p.UO)().movieId,t=(0,o.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,c.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.Eb)(n);case 3:e=t.sent,a(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(h,{children:r.map((function(n){var t=n.id,e=n.profile_path,r=n.original_name,a=n.character;return(0,x.jsxs)(v,{children:[(0,x.jsx)("img",{src:"".concat(e?"https://image.tmdb.org/t/p/w500/"+e:"https://via.placeholder.com/182x273?text="+r),alt:r}),(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{children:" Actor:"})," ",r]}),(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{children:"Character:"})," ",a]})]},t)}))})})}},51:function(n,t,e){e.d(t,{Df:function(){return s},Eb:function(){return f},Hu:function(){return l},Pg:function(){return p},Ph:function(){return o}});var r=e(861),a=e(687),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="35d0834a9921bbb13d1153018d5cbd5a",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/week?api_key=".concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.c9374d39.chunk.js.map