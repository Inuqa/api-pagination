(this["webpackJsonpapi-and-pagination"]=this["webpackJsonpapi-and-pagination"]||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),r=n.n(c),s=n(14),i=n.n(s),o=(n(22),n(5)),u=n.n(o),j=n(15),l=n(3),d=(n(24),n(16)),b=n.n(d),h=(n(43),function(e){var t=new Date(e.released).toDateString(),n=e.author.join(", ");return Object(a.jsx)("div",{className:"books",children:Object(a.jsxs)("div",{className:"book",children:[Object(a.jsxs)("h3",{children:["Book ",e.number]}),Object(a.jsx)("h2",{children:e.name}),Object(a.jsxs)("div",{className:"details",children:[Object(a.jsxs)("p",{children:["Author: ",n]}),Object(a.jsxs)("p",{children:["Number of pages: ",e.pages]}),Object(a.jsxs)("p",{children:["Book Country: ",e.country]}),Object(a.jsxs)("p",{children:["Realease Date: ",t]})]})]})})}),p=(n(44),function(e){var t=r.a.useState(1),n=Object(l.a)(t,2),c=n[0],s=n[1],i=r.a.useState(4),o=Object(l.a)(i,2),u=o[0];o[1];console.log(e.data.length);for(var j=c*u,d=j-u,b=e.data.slice(d,j),h=function(e){s(Number(e.target.id))},p=b.map((function(e,t){return Object(a.jsx)("li",{children:e},t)})),O=[],f=1;f<=Math.ceil(e.data.length/u);f++)O.push(f);console.log(O,10);var x=O.map((function(e){return Object(a.jsx)("li",{id:e,onClick:h,children:e},e)}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("ul",{children:p}),Object(a.jsx)("ul",{id:"page-numbers",children:x})]})});var O=function(){var e=r.a.useState([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://www.anapioficeandfire.com/api/books?pageSize=30");case 2:n=e.sent,c(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=n.map((function(e,t){return Object(a.jsx)(h,{name:e.name,author:e.authors,pages:e.numberOfPages,country:e.country,released:e.released,number:e.index},e.isbn)}));return console.log(n),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Game of Thrones Books"}),Object(a.jsx)("h2",{children:"Fetch a list from an API and display it"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:s,className:"fetch-button",children:"Fetch Data"}),Object(a.jsx)("br",{})]}),Object(a.jsx)(p,{data:i})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),f()}},[[45,1,2]]]);
//# sourceMappingURL=main.91367613.chunk.js.map