(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},135:function(e,t){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),o=a(147),u=a(148),l=a(158),i=a(149),s=a(150),m=a(151),f=a(153),d=a(154),p=a(155),E=a(62),b=a.n(E),h=a(152),k=a(45),g=a.n(k),w=a(63),y=a(9),O=a(64),v=a(69),j=a(65),T=a(70),S=a(145),x=a(39),C=a(16),N=a(157),Q=a(146),A=a(156),I=a(42),H=a(40),P=a(43),D=a(44),q=a(41),F=(a(105),{rows:[],headers:[{key:"name",header:"Name"},{key:"artist",header:"Artist"},{key:"album",header:"Album"},{key:"duration",header:"Duration"},{key:"overflow",header:""}]}),U=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(c)))).shouldComponentUpdate=function(e,t){return!1},a.render=function(){return r.a.createElement(S.a,{id:"search",placeHolderText:"Find a song",size:"lg",labelText:"search",onChange:function(){a.props.searchQueryOnChangeHandler(document.getElementById("search").value)}})},a}return Object(T.a)(t,e),t}(r.a.Component),J=function(e){var t=e.items,a=e.queue,n={};a.length>0&&(n=a.reduce(function(e,t){return e[t.track.uri]=!0,e},{}));var c=(t=t.filter(function(e){return!(e.uri in n)})).map(function(t){return r.a.createElement(x.a,{id:t.id,key:t.id},r.a.createElement(C.a,{key:"".concat(t.id,":name")},t.name),r.a.createElement(C.a,{key:"".concat(t.id,":artist")},t.artists[0].name),r.a.createElement(C.a,{key:"".concat(t.id,":album")},t.album.name,r.a.createElement("img",{src:"".concat(t.album.images[0].url),className:"albumPhoto"})),r.a.createElement(C.a,{key:"".concat(t.id,":duration")},Math.round(10*t.duration_ms/1e3/60)/10," minutes"),r.a.createElement(C.a,{key:"overflow"},r.a.createElement(N.a,{flipped:!0},r.a.createElement(Q.a,{itemText:"Queue",onClick:function(){e.addTrackToQueueHandler(t)}}))))});return r.a.createElement(A.a,F,function(e){e.rows;var t=e.headers,a=e.getHeaderProps,n=(e.getRowProps,e.getTableProps),o=e.getTableContainerProps;return r.a.createElement(I.a,o(),r.a.createElement(H.a,n(),r.a.createElement(P.a,null,r.a.createElement(x.a,null,t.map(function(e){return r.a.createElement(D.a,Object.assign({key:e.key},a({header:e})),e.header)}))),r.a.createElement(q.a,null,c)))})},L=function(e){var t=e.socket,a=e.spotifyID,c=new AbortController,o=Object(n.useState)(""),u=Object(y.a)(o,2),l=u[0],i=u[1],s=Object(n.useState)([]),m=Object(y.a)(s,2),f=m[0],d=m[1],p=Object(n.useState)([]),E=Object(y.a)(p,2),b=E[0],h=E[1];Object(n.useEffect)(function(){return t.on("setAccessToken",function(e){i(e)}),function(){c.abort()}},[l]),Object(n.useEffect)(function(){return t.on("setQueue",function(e){d(e)}),function(){}},[f]);var k=function(){var e=Object(w.a)(g.a.mark(function e(t){var a,n,r,o;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=[],!t){e.next=12;break}return n={method:"GET",headers:{Authorization:"Bearer ".concat(l)},redirect:"follow",signal:c.signal},e.next=5,fetch("https://api.spotify.com/v1/search?q=".concat(t,"&type=track"),n);case 5:return r=e.sent,e.t0=JSON,e.next=9,r.text();case 9:e.t1=e.sent,o=e.t0.parse.call(e.t0,e.t1),a=o.tracks.items;case 12:h(a);case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{searchQueryOnChangeHandler:k}),r.a.createElement(J,{items:b,queue:f,addTrackToQueueHandler:function(e){var n=e,r=n.id,c=n.uri,o=n.name,u=n.album;"available_markets"in u&&delete u.available_markets,e={id:r,uri:c,name:o,album:u},t.emit("addTrackToQueue",{spotifyID:a,track:e})}}))},_=(a(107),function(e){var t=e.socket,a=Object(n.useState)([]),c=Object(y.a)(a,2),o=c[0],u=c[1];Object(n.useEffect)(function(){return t.on("setUsers",function(e){u(e)}),function(){}});var l=[];for(var i in o)l.push(r.a.createElement("img",{key:"".concat(i,"_profilePhoto"),src:o[i].profileImageURL}));return l}),z=(a(108),function(e){var t=e.socket,a=Object(n.useState)([]),c=Object(y.a)(a,2),o=c[0],u=c[1],l=Object(n.useState)([]),i=Object(y.a)(l,2),s=i[0],m=i[1],f=Object(n.useState)(""),d=Object(y.a)(f,2),p=d[0],E=d[1];return Object(n.useEffect)(function(){return t.on("setUsers",function(e){u(e),console.log("New users",e)}),t.on("setQueue",function(e){m(e),console.log("New queue",e)}),t.on("setAccessToken",function(e){E(e),console.log("New accessToken",e)}),function(){}}),r.a.createElement("pre",null,JSON.stringify({users:o,queue:s,accessToken:p},null,2)," ")}),B=(a(109),a(68)),R=a.n(B),M=new URLSearchParams(window.location.search).get("spotifyID"),G="https://nitrus.azurewebsites.net",K=R()(G);K.on("connect",function(){K.emit("init",M)}),K.on("redirectToLogin",function(){window.location.replace("".concat(G,"/login"))});var V={overflowHeight:48,shadowTip:!1,topShadow:!1,overlay:!1,scrollTopAtClose:!0},W=function(){window.location.replace("https://www.spotify.com/logout/")},X=function(){return r.a.createElement("div",{id:"page"},r.a.createElement(o.a,{render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{"aria-label":"Nitrus"},r.a.createElement(l.a,{prefix:""},"Nitrus"),r.a.createElement(i.a,{"aria-label":"Nitrus"},r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{socket:K}))),r.a.createElement(s.a,null,r.a.createElement(m.a,{id:"logoutIcon","aria-label":"Logout",onClick:W},r.a.createElement(h.a,null)))),r.a.createElement(f.a,null,r.a.createElement(d.a,null,r.a.createElement(p.a,{id:"DesktopQueue",sm:{span:0},md:2,lg:2}),r.a.createElement(p.a,{sm:4,md:6,lg:10},r.a.createElement(L,{socket:K,spotifyID:M})),r.a.createElement(p.a,{sm:1,md:{span:0},lg:{span:0}},r.a.createElement(b.a,V,r.a.createElement("div",{id:"MobileQueue"})))),r.a.createElement(d.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(z,{socket:K}))))))}}))};Object(c.render)(r.a.createElement(X,null),document.getElementById("root"))},74:function(e,t,a){e.exports=a(138)}},[[74,1,2]]]);
//# sourceMappingURL=main.9439d12a.chunk.js.map