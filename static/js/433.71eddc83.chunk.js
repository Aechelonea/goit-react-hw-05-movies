"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[433],{433:function(e,n,r){r.r(n),r.d(n,{default:function(){return h}});var t=r(5861),i=r(9439),a=r(7757),c=r.n(a),s=r(2791),o=r(1087),u=r(3243),l="Home_container__MGYYT",v="Home_movieList__dew6t",f="Home_movieItem__yfa+9",d=r(6239),m=r(184),h=function(){var e=(0,s.useState)([]),n=(0,i.Z)(e,2),r=n[0],a=n[1],h=(0,s.useState)(!0),p=(0,i.Z)(h,2),_=p[0],x=p[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.wr)();case 3:n=e.sent,a(n.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0);case 10:return e.prev=10,x(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d.Z,{}),(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("h1",{children:"Trending Movies"}),_?(0,m.jsx)("p",{children:"Loading..."}):(0,m.jsx)("ul",{className:v,children:r.map((function(e){return(0,m.jsx)("li",{className:f,children:(0,m.jsx)(o.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})})]})}},6239:function(e,n,r){r.d(n,{Z:function(){return u}});r(2791);var t=r(1087),i="Navigation_nav__7WdPp",a="Navigation_navList__4liLY",c="Navigation_navItem__u-EYc",s="Navigation_activeLink__M+D4I",o=r(184),u=function(){return(0,o.jsx)("nav",{className:i,children:(0,o.jsxs)("ul",{className:a,children:[(0,o.jsx)("li",{className:c,children:(0,o.jsx)(t.OL,{to:"/",className:function(e){return e.isActive?s:""},children:"Home"})}),(0,o.jsx)("li",{className:c,children:(0,o.jsx)(t.OL,{to:"/movies",className:function(e){return e.isActive?s:""},children:"Movies"})})]})})}},3243:function(e,n,r){r.d(n,{TP:function(){return l},tx:function(){return f},wr:function(){return o},z1:function(){return u},zv:function(){return v}});var t=r(5861),i=r(7757),a=r.n(i),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"f2f7a3d782ac6a235f03b18407d4c171"};var s=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t,i=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.prev=1,e.next=4,c.Z.get(n,{params:r});case 4:return t=e.sent,e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(1),new Error("Error fetching data");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}(),o=function(){return s("/trending/movie/day")},u=function(e){return s("/search/movie",{query:encodeURIComponent(e)})},l=function(e){return s("/movie/".concat(e))},v=function(e){return s("/movie/".concat(e,"/credits"))},f=function(e){return s("/movie/".concat(e,"/reviews"))}}}]);
//# sourceMappingURL=433.71eddc83.chunk.js.map