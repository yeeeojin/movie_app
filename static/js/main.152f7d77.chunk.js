(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),s=n.n(o),i=(n(16),n(1)),c=n.n(i),l=n(4),u=n(5),m=n(6),v=n(8),p=n(7),f=n(9);n(18),n(19);function d(e){var t=e.poster,n=e.alt;return r.a.createElement("img",{src:t,alt:n,title:n,className:"Movie_Poster"})}function h(e){var t=e.genre;return r.a.createElement("span",{className:"Movie_Genre"},t)}var g=function(e){var t=e.title,n=e.poster,a=e.genres,o=e.synopsis;return r.a.createElement("div",null,r.a.createElement("div",{className:"Movie_Columns"},r.a.createElement(d,{poster:n,alt:t})),r.a.createElement("div",{className:"Movie_Columns"},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"Movie_Genres"},a.map(function(e,t){return r.a.createElement(h,{genre:e,key:t})})),r.a.createElement("p",{className:"Movie_Synopsis"},o)))},_=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e)})),n._callApi=function(){return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n._renderMovies=function(){return n.state.movies.map(function(e){return console.log(e),r.a.createElement(g,{key:e.id,title:e.title_english,poster:e.medium_cover_image,genres:e.genres,synopsis:e.synopsis})})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.movies?this._renderMovies():"Loading...")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.152f7d77.chunk.js.map