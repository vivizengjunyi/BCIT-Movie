(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(24),i=c.n(s),r=c(6),o=c(4),l=c(3),j=c(7),u=c.n(j),d=c(12),b="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2Q4NzA5NWYyY2RjZTBkYjM2MDBiOTY1OWIwYzYyMSIsInN1YiI6IjYxMWJlNzAzNGEwYjE5MDA0NWM2MmQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I7bffZOYQCup48LfeLOQlzxYv0_EjSugb6lVmRglJ10",v=c(22),p=c(1),m=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1",{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+b}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=(c=e.sent).results.splice(0,4),n(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var s=Object(a.useState)(0),i=Object(l.a)(s,2),o=i[0],j=i[1],m=c.length,h=Object(a.useRef)(null);Object(a.useEffect)((function(){return h.current=setTimeout((function(){j((function(e){return e===m-1?0:e+1}))}),5e3),function(){h.current&&clearTimeout(h.current)}}),[o,m]);var O=function(e){e.preventDefault(),h.current&&clearTimeout(h.current),j(o===m-1?0:o+1)},x=function(e){e.preventDefault(),h.current&&clearTimeout(h.current),j(0===o?m-1:o-1)};return!Array.isArray(c)||m<=0?null:Object(p.jsx)("div",{className:"outerContainer",children:c.map((function(e,t){return t===o&&Object(p.jsx)("div",{className:"sliderWrapper",children:Object(p.jsx)(r.b,{to:"/movie/".concat(e.id),children:Object(p.jsxs)("div",{className:"sliderContainer",style:{backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(e.backdrop_path,")")},children:[Object(p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/"+e.poster_path,alt:e.title,className:"slider-img"}),Object(p.jsx)("div",{className:"slider-title",children:e.title}),Object(p.jsx)(v.a,{onClick:x,className:"back"}),Object(p.jsx)(v.b,{onClick:O,className:"next"})]},t)})})}))})},h=c(26),O=function(e){var t=e.toggle,c=e.show,n=void 0!==c&&c,s=Object(a.useState)(!1),i=Object(l.a)(s,2),j=i[0],u=i[1],d=Object(a.useState)(""),b=Object(l.a)(d,2),v=b[0],m=b[1],O=Object(a.useRef)(null),x=Object(o.f)(),f=t||function(){},g=function(){j?""===v.trim()?u(!1):x.push("/search?query="+v):(u(!0),setTimeout((function(){return O.current.focus()})))};return Object(p.jsx)("nav",{className:"dropdownMenu ".concat(n?"show-nav":""),children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(r.c,{to:"/",onClick:f,children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)(r.c,{to:"/favs",onClick:f,children:"Favs"})}),Object(p.jsx)("li",{children:Object(p.jsx)(r.c,{to:"/about",onClick:f,children:"About"})}),Object(p.jsxs)("li",{className:"search",children:[j&&Object(p.jsx)("input",{type:"text",ref:O,onChange:function(e){return m(e.target.value)},onKeyDown:function(e){return"Enter"===e.key&&g()}}),Object(p.jsx)(h.a,{className:"search-icon",onClick:g})]})]})})},x=c(27),f=c(28),g=function(){var e=Object(o.g)(),t=Object(a.useState)(!0),c=Object(l.a)(t,2),n=c[0],s=c[1],i=function(){s(!0!==n)};return Object(p.jsxs)("header",{children:[("/"===e.pathname||"/index.html"===e.pathname||e.pathname.indexOf("/sort/")>-1)&&Object(p.jsx)(m,{}),Object(p.jsxs)("div",{class:"flex-column",children:[Object(p.jsxs)("div",{className:"flex-row",children:[Object(p.jsx)("div",{className:"brand",children:Object(p.jsx)(r.c,{to:"/",children:"GoMovie"})}),Object(p.jsx)(O,{show:!0}),!0===n?Object(p.jsx)("div",{className:"little-gap",children:Object(p.jsx)(x.a,{className:"burgerMenuIcon",onClick:i})}):Object(p.jsx)(f.a,{class:"closeMenuIcon",onClick:i})]}),!1===n&&Object(p.jsx)(O,{toggle:i})]})]})},N=function(){return Object(p.jsx)("footer",{children:Object(p.jsx)("p",{children:"\xa9 GoMovie is created with React by Junyi(Vivi) Zeng"})})},w=[{text:"Popular",categoryId:"popular"},{text:"Top Rated",categoryId:"top_rated"},{text:"Now Playing",categoryId:"now_playing"},{text:"Upcoming",categoryId:"upcoming"}],y={popular:"background1",top_rated:"background2",now_playing:"background3",upcoming:"background4"},S=function(e){var t=e.categoryId,c=void 0===t?"popular":t;return Object(p.jsxs)("div",{class:"place-background",children:[Object(p.jsx)("nav",{className:"navSort",children:Object(p.jsx)("ul",{children:w.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(r.c,{to:"/sort/"+e.categoryId,children:e.text})})}))})}),Object(p.jsx)("div",{className:y[c]})]})},k=c.p+"static/media/no-image.e550447a.jpeg",I="movie";function C(){var e=localStorage.getItem(I);return e=null===e?[]:JSON.parse(e)}var _={addFav:function(e){var t=C();if(!t.find((function(t){return t.id===e.id}))){t.push(e);var c=JSON.stringify(Array.from(new Set(t)));return localStorage.setItem(I,c),t}},removeFav:function(e){var t=C();t=t.filter((function(t){return t.id!==e.id}));var c=JSON.stringify(t);return localStorage.setItem(I,c),t}},A={getFavs:C,actions:_},T=c(29),J=c(11),M=c(17);var R=function(e){var t=e.movieObj,c=e.onUpdate,n=e.showDetail,s=A.getFavs,i=A.actions,o=Object(a.useState)([]),j=Object(l.a)(o,2),u=j[0],d=j[1];Object(a.useEffect)((function(){d(s())}),[]);var b,v,m=function(e,t){var a=i[t?"removeFav":"addFav"](e);d(a),c&&c()};return Object(p.jsxs)("div",{className:"movie-card",children:[(b=u,v=t.id,0!==b.length&&b.some((function(e){return e.id===v}))?Object(p.jsx)(J.a,{className:"float-right icon-fav",onClick:function(){return m(t,!0)}}):Object(p.jsx)(J.b,{className:"float-right icon-fav",onClick:function(){return m(t,!1)}})),Object(p.jsxs)("div",{className:"movie-poster",children:[null===t.poster_path?Object(p.jsx)("img",{src:k,alt:"No poster"}):Object(p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.title}),n?Object(p.jsx)("div",{className:"movieInfoSection",children:Object(p.jsxs)("div",{className:"movieInfo",children:[Object(p.jsx)("p",{className:"movieTitle",children:t.title}),Object(p.jsxs)("div",{className:"flex-row",children:[Object(p.jsx)("p",{children:t.release_date}),Object(p.jsxs)("div",{className:"flex-row",children:[Object(p.jsx)(M.a,{className:"start"}),Object(p.jsx)("p",{children:t.vote_average})]})]}),Object(p.jsx)("p",{className:"overviewTitle",children:"Overview:"}),Object(p.jsx)("p",{className:"overview",children:t.overview}),Object(p.jsxs)(r.b,{to:"/movie/".concat(t.id),children:["More Info",Object(p.jsx)(T.a,{})]})]})}):null,Object(p.jsx)("p",{className:"movieTitle2",children:Object(p.jsx)(r.b,{to:"/movie/".concat(t.id),children:t.title})})]})]})},Y=function(e){var t=e.movieData;return Object(p.jsx)("section",{className:"movies-container",children:t.map((function(e,t){return Object(p.jsx)(R,{movieObj:e,showDetail:!0},t)}))})};var E=function(){var e=Object(o.h)().categoryId,t=void 0===e?"popular":e,c=Object(a.useState)(null),n=Object(l.a)(c,2),s=n[0],i=n[1];return Object(a.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?&language=en-US&page=1"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+b}});case 2:return c=e.sent,e.next=5,c.json();case 5:a=(a=e.sent).results.splice(0,15),i(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(p.jsxs)("section",{className:"home-page",children:[Object(p.jsx)(S,{categoryId:t}),null!==s&&Object(p.jsx)(Y,{movieData:s})]})},F=function(){return Object(p.jsx)("div",{className:"page-about",children:Object(p.jsxs)("div",{className:"about-content",children:[Object(p.jsx)("div",{className:"about-gomovie-name",children:"About GoMovie"}),Object(p.jsx)("p",{children:"GoMovie is a community showing movie database. Hundreds and thousands of movies information can be found here. You can search for any movies you are interested in and you can favorite them as well. In addition, you can choose any categories of movies to explore like popular, top-rated, now playing and upcoming. All the movie data are up-to-date."}),Object(p.jsx)("p",{children:"GoMovie is a React JS project for educational purposes and is created by Junyi(Vivi) Zeng. "})]})})},z=function(){var e=A.getFavs,t=Object(a.useState)([]),c=Object(l.a)(t,2),n=c[0],s=c[1];Object(a.useEffect)((function(){s(e())}),[]);var i=function(){s(e())};return Object(p.jsxs)("div",{className:"favs-Section",children:[Object(p.jsxs)("p",{className:"favs-paragraph",children:[Object(p.jsx)(J.a,{className:"favs-heart"}),"Your favorite movies:"]}),n.length?Object(p.jsx)("section",{className:"movies-container",children:n.map((function(e,t){return Object(p.jsx)(R,{movieObj:e,onUpdate:i},t)}))}):Object(p.jsx)("section",{className:"no-favs",children:Object(p.jsxs)("p",{children:["You didn't favorite any movies, please",Object(p.jsx)(r.c,{to:"/",children:"select now."})]})})]})};var B=function(){var e=new URLSearchParams(Object(o.g)().search).get("query"),t=function(){var t=Object(d.a)(u.a.mark((function t(){var c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(e),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+b}});case 2:return c=t.sent,t.next=5,c.json();case 5:a=(a=t.sent).results.splice(0,12),i(a);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=Object(a.useState)([]),n=Object(l.a)(c,2),s=n[0],i=n[1];return Object(a.useEffect)((function(){t()}),[e]),Object(p.jsx)("div",{className:"favs-Section",children:s.length?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{className:"favs-paragraph",children:"We found some movies for you:"}),Object(p.jsx)("section",{className:"movies-container",children:s.map((function(e,t){return Object(p.jsx)(R,{movieObj:e,showDetail:!0},t)}))})]}):Object(p.jsx)("section",{className:"no-favs",children:Object(p.jsx)("p",{children:"No movies found."})})})},D=c(23),U=c.p+"static/media/no-photo.bf1d36bd.jpeg",W=function(e){var t,c,n,s,i,r=e.movieObj,o=e.movieReview,j=e.fecthReview;var v=A.getFavs,m=A.actions,h=Object(a.useState)([]),O=Object(l.a)(h,2),x=O[0],f=O[1],g=Object(a.useState)([]),N=Object(l.a)(g,2),w=N[0],y=N[1],S=Object(a.useState)(1),k=Object(l.a)(S,2),I=k[0],C=k[1],_=Object(a.useState)(1),T=Object(l.a)(_,2),R=T[0],Y=T[1],E=Object(a.useState)(0),F=Object(l.a)(E,2),z=F[0],B=F[1],W=Object(a.useState)(3),G=Object(l.a)(W,2),Q=G[0],Z=G[1],L=Object(a.useState)(),V=Object(l.a)(L,2),q=V[0],P=V[1],H=Object(a.useState)(),K=Object(l.a)(H,2),X=K[0];K[1];Object(a.useEffect)((function(){f(v())}),[]),Object(a.useEffect)((function(){o&&(y((function(e){return console.log("movieReview.results",o.results),[].concat(Object(D.a)(e),Object(D.a)(o.results))})),C(o.page),Y(o.total_pages),B(o.total_results))}),[o]);var $,ee,te=function(e,t){var c=m[t?"removeFav":"addFav"](e);f(c)};return Object(a.useEffect)((function(){r&&function(){var e=Object(d.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(r.id,"/videos?language=en-US&page=1"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+b}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,P(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r]),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"single-movie",children:Object(p.jsxs)("div",{className:"single-movie-content",children:[Object(p.jsx)("div",{className:"single-movie-poster",children:null==r.poster_path?Object(p.jsx)("img",{src:"/",alt:"no poster"}):Object(p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(r.poster_path),alt:r.title})}),Object(p.jsxs)("div",{className:"single-movie-info",children:[Object(p.jsxs)("div",{className:"flexRow",children:[Object(p.jsx)("p",{className:"title",children:r.title}),($=x,ee=r.id,0!==$.length&&$.some((function(e){return e.id===ee}))?Object(p.jsx)(J.a,{className:"icon-fav red",onClick:function(){return te(r,!0)}}):Object(p.jsx)(J.b,{className:"icon-fav ",onClick:function(){return te(r,!1)}}))]}),Object(p.jsx)("div",{className:"genres",children:null===(t=r.genres)||void 0===t?void 0:t.map((function(e,t){return Object(p.jsx)("ul",{children:Object(p.jsx)("li",{children:e.name})})}))}),Object(p.jsxs)("div",{className:"flexRow",children:[Object(p.jsxs)("div",{className:"stick",children:[Object(p.jsx)(M.a,{className:"start"}),Object(p.jsx)("p",{children:r.vote_average})]}),Object(p.jsx)("p",{children:r.release_date})]}),Object(p.jsx)("div",{className:"line"}),Object(p.jsx)("div",{className:"tagline",children:r.tagline}),Object(p.jsx)("p",{className:"overview-title",children:"Overview"}),Object(p.jsx)("p",{className:"overview",children:r.overview}),Object(p.jsxs)("div",{className:"cast",children:[Object(p.jsx)("p",{className:"cast-title",children:"Cast & Crew"}),Object(p.jsx)("div",{className:"cast-layout",children:null===(c=r.credits)||void 0===c?void 0:c.cast.slice(0,4).map((function(e){return Object(p.jsxs)("div",{class:"cast-detail",children:[null===e.profile_path?Object(p.jsx)("img",{src:U,alt:"no photo"}):Object(p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path),alt:e.name}),Object(p.jsx)("p",{className:"cast-name",children:e.name}),Object(p.jsx)("p",{className:"cast-character",children:e.character})]})}))})]})]})]})}),q&&(null===(n=q.results)||void 0===n?void 0:n[0])&&q.results[1]&&Object(p.jsxs)("div",{className:"movie-video",children:[Object(p.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(null===(s=q.results[0])||void 0===s?void 0:s.key,"?rel=0"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(p.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(null===(i=q.results[1])||void 0===i?void 0:i.key,"?rel=0"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}),Object(p.jsxs)("div",{className:"movie-review",children:[Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"align-center",children:Object(p.jsx)("p",{className:"review-title",children:"Reviews"})}),0===w.length?Object(p.jsx)("p",{className:"no-review",children:"No reviews so far."}):Object(p.jsx)("ul",{className:"review-list cols-3 cols-1-xs align-center",children:w&&w.slice(0,Q).map((function(e){return Object(p.jsxs)("li",{children:[Object(p.jsx)("div",{className:"reviewer-name",contenteditable:"false",children:e.author}),Object(p.jsx)("p",{className:"review-content",contenteditable:"false",children:e.content}),Object(p.jsx)("div",{className:"review-more",children:Object(p.jsx)("a",{href:e.url,target:"_blank",children:"view more"})}),Object(p.jsx)("small",{contenteditable:"false",children:new Date(e.created_at).toLocaleDateString()})]})}))})]}),Q<z&&Object(p.jsx)("div",{className:"load-more",children:Object(p.jsx)("a",{href:"javascript:void(0)",onClick:function(){Q+3>w.length&&I<R&&j(I+1),Z(Math.min(Q+3,z))},children:"load more"})})]}),Object(p.jsx)("div",{className:"similar-movie",children:X&&X.map((function(e,t){return Object(p.jsx)("div",{children:e})}))})]})},G=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(null),i=Object(l.a)(s,2),r=i[0],j=i[1],v=Object(o.h)().id,m=function(){var e=Object(d.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(v,"?language=en-US&append_to_response=videos,images,credits"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+b}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(u.a.mark((function e(){var t,c,a,n=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(v,"/reviews?language=en-US&page=").concat(t),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+b}});case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,j(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){m(),h()}),[]),Object(p.jsx)("div",{className:"single-movie-page",children:null!==c&&Object(p.jsx)(W,{movieObj:c,movieReview:r,fecthReview:h})})};var Q=function(){return Object(p.jsx)(r.a,{basename:"/gomovie",children:Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)(g,{}),Object(p.jsx)("main",{className:"main",children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{path:"/",exact:!0,children:Object(p.jsx)(E,{})}),Object(p.jsx)(o.a,{path:"/sort/:categoryId",children:Object(p.jsx)(E,{})}),Object(p.jsx)(o.a,{path:"/about",children:Object(p.jsx)(F,{})}),Object(p.jsx)(o.a,{path:"/favs",children:Object(p.jsx)(z,{})}),Object(p.jsx)(o.a,{path:"/search",children:Object(p.jsx)(B,{})}),Object(p.jsx)(o.a,{path:"/movie/:id",children:Object(p.jsx)(G,{})})]})}),Object(p.jsx)(N,{})]})})};c(44);i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(Q,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.2bcfb104.chunk.js.map