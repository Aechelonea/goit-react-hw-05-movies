"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{8076:function(r,t,e){e.r(t),e.d(t,{default:function(){return _}});var n=e(5861),a=e(9439),c=e(7757),s=e.n(c),i=e(2791),o=e(7689),u=e(3243),f="Cast_castContainer__NIXqj",d="Cast_card__WlXfx",l="Cast_cardImage__Ez626",m="Cast_cardBody__mY5wg",p="Cast_cardTitle__-+aWo",v="Cast_cardText__FzXsX",h=e(184),_=function(){var r=(0,o.UO)().movieId,t=(0,i.useState)([]),e=(0,a.Z)(t,2),c=e[0],_=e[1],x=(0,i.useState)(!0),g=(0,a.Z)(x,2),w=g[0],k=g[1];(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.zv)(r);case 3:e=t.sent,_(e.cast),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching cast:",t.t0);case 10:return t.prev=10,k(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}();t()}),[r]);var C="https://dummyimage.com/300x450/ffffff/000000&text=No+image";return w?(0,h.jsx)("div",{children:"Loading cast..."}):c.length?(0,h.jsx)("div",{className:f,children:c.map((function(r){return(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)("img",{src:r.profile_path?"https://image.tmdb.org/t/p/w500".concat(r.profile_path):C,alt:r.name,className:l,onError:function(r){var t=r.currentTarget;t.onerror=null,t.src=C}}),(0,h.jsxs)("div",{className:m,children:[(0,h.jsx)("h3",{className:p,children:r.name}),(0,h.jsx)("p",{className:v,children:r.character})]})]},r.cast_id)}))}):(0,h.jsx)("div",{children:"No cast information available."})}},3243:function(r,t,e){e.d(t,{TP:function(){return f},tx:function(){return l},wr:function(){return o},z1:function(){return u},zv:function(){return d}});var n=e(5861),a=e(7757),c=e.n(a),s=e(340);s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"f2f7a3d782ac6a235f03b18407d4c171"};var i=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n,a=arguments;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:{},r.prev=1,r.next=4,s.Z.get(t,{params:e});case 4:return n=r.sent,r.abrupt("return",n.data);case 8:throw r.prev=8,r.t0=r.catch(1),new Error("Error fetching data");case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(t){return r.apply(this,arguments)}}(),o=function(){return i("/trending/movie/day")},u=function(r){return i("/search/movie",{query:encodeURIComponent(r)})},f=function(r){return i("/movie/".concat(r))},d=function(r){return i("/movie/".concat(r,"/credits"))},l=function(r){return i("/movie/".concat(r,"/reviews"))}}}]);
//# sourceMappingURL=76.ad23c9d6.chunk.js.map