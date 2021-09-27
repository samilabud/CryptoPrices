(this.webpackJsonpcryptoprices=this.webpackJsonpcryptoprices||[]).push([[0],{107:function(e,c,t){},119:function(e,c,t){},120:function(e,c,t){},121:function(e,c,t){},123:function(e,c,t){},124:function(e,c,t){},125:function(e,c,t){"use strict";t.r(c);var n=t(0),r=t.n(n),s=t(12),a=t.n(s),i=t(5),l=function(){return Object(i.jsx)("nav",{className:"navbar navbar-default navbar-fixed-top",role:"navigation",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"navbar-header page-scroll",children:[Object(i.jsxs)("button",{type:"button",className:"navbar-toggle",datatoggle:"collapse",datatarget:".navbar-ex1-collapse",children:[Object(i.jsx)("span",{className:"sr-only",children:"Toggle menu"}),Object(i.jsx)("span",{className:"icon-bar"}),Object(i.jsx)("span",{className:"icon-bar"}),Object(i.jsx)("span",{className:"icon-bar"})]}),Object(i.jsx)("a",{className:"navbar-brand page-scroll",href:"#page-top",children:"Welcome"})]}),Object(i.jsx)("div",{className:"collapse navbar-collapse navbar-ex1-collapse",children:Object(i.jsxs)("ul",{className:"nav navbar-nav",children:[Object(i.jsx)("li",{className:"hidden",children:Object(i.jsx)("a",{className:"page-scroll",href:"#page-top",children:"Top"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"page-scroll",href:"#prices",children:"Prices"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"page-scroll",href:"#currencies",children:"Currencies"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"page-scroll",href:"#login",children:"Login"})})]})})]})})},o=t(33),j=t.n(o),u=t(42),d=t(21),b=t(165),h=t(41),p=t(9),O=(t(107),function(){var e=Object(n.useState)([{currencyID:"Loading",currencyName:"Loading",sellPrice:"Loading"}]),c=Object(d.a)(e,2),t=c[0],r=c[1];Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.pro.coinbase.com/currencies");case 2:return t=e.sent,e.next=5,t.json();case 5:return t=e.sent,e.next=8,t.filter((function(e){return"crypto"===e.details.type}));case 8:return t=e.sent,e.next=11,c(t);case 11:t=e.sent,r(t);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(u.a)(j.a.mark((function e(c){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return[],t=Promise.all(c.filter((function(e){return e.id.toUpperCase().indexOf("")>=0})).map((function(e){var c=[];return fetch("https://api.coinbase.com/v2/prices/"+e.id+"-USD/sell").then((function(e){return e.json()})).then((function(t){var n=t.data;try{c=void 0!==typeof n.amount?{currencyID:e.id,currencyName:e.name,sellPrice:"$"+n.amount}:{currencyID:e.id,currencyName:e.name,sellPrice:"Not Found"}}catch(r){c={currencyID:e.id,currencyName:e.name,sellPrice:"Not Found"}}return c})).catch((function(){console.log("Error not handled")}))}))),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}();e()}),[]);var s=Object(n.useState)([{columnName:"sellPrice",filteringEnabled:!1}]),a=Object(d.a)(s,1)[0];try{t.done((function(){console.log("finished")}))}catch(l){}return Object(i.jsx)("div",{children:Object(i.jsx)(b.a,{children:Object(i.jsxs)(h.a,{rows:t,columns:[{name:"currencyID",title:"Currency ID"},{name:"currencyName",title:"Currency Name"},{name:"sellPrice",title:"Dollar Sell Price"}],children:[Object(i.jsx)(p.l,{defaultCurrentPage:0,pageSize:6}),Object(i.jsx)(p.n,{defaultSorting:[{columnName:"currencyID",direction:"asc"}]}),Object(i.jsx)(p.j,{}),Object(i.jsx)(p.d,{defaultFilters:[],columnExtensions:a}),Object(i.jsx)(p.h,{}),Object(i.jsx)(p.i,{}),Object(i.jsx)(h.c,{}),Object(i.jsx)(h.e,{showSortingControls:!0}),Object(i.jsx)(h.d,{}),Object(i.jsx)(h.b,{})]})})})}),m=t(82),f=t.n(m),x=(t(119),t(120),t(121),function(){var e=Object(n.useState)([]),c=Object(d.a)(e,2),t=c[0],r=c[1],s=Object(n.useState)([]),a=Object(d.a)(s,2),l=a[0],o=a[1],j=Object(n.useState)(""),u=Object(d.a)(j,2),b=u[0],h=u[1];Object(n.useEffect)((function(){fetch("https://api.pro.coinbase.com/currencies").then((function(e){return e.json()})).then((function(e){e=e.filter((function(e){return"crypto"===e.details.type})),r(e),o(e)}))}),[]);return Object(i.jsxs)("div",{id:"currencyList",children:[Object(i.jsxs)("div",{className:"searchCurrency",children:[Object(i.jsx)("label",{htmlFor:"inputCurrencies",children:"Filter by currency: "}),Object(i.jsx)("input",{className:"inputSearch",type:"text",value:b,id:"inputCurrencies",onChange:function(e){e.preventDefault(),h(e.target.value);var c=t;e.target.value?(c=l.filter((function(c){return c.id.toUpperCase().indexOf(e.target.value.toUpperCase())>=0||c.name.toUpperCase().indexOf(e.target.value.toUpperCase())>=0})),r(c)):r(l)}})]}),Object(i.jsx)(f.a,{className:"layout",cols:1,rowHeight:15,width:300,children:t.map((function(e){return Object(i.jsx)("div",{"data-grid":{x:0,y:0,w:1,h:2},children:e.name+" - "+e.id+" "+e.details.symbol},e.id)}))})]})}),g=r.a.memo(x),v=(t(122),t(123),function(){var e=Object(n.useState)("containerlogin"),c=Object(d.a)(e,2),t=c[0],s=c[1],a=Object(n.useState)(""),l=Object(d.a)(a,2),o=l[0],b=l[1],h=Object(n.useState)(""),p=Object(d.a)(h,2),O=p[0],m=p[1],f=Object(n.useState)((function(){return localStorage.getItem("user")||JSON.stringify({name:"",email:""})})),x=Object(d.a)(f,2),g=x[0],v=x[1];Object(n.useEffect)((function(){localStorage.setItem("user",g)}),[g]);var y=r.a.createRef(),N=r.a.createRef(),S=r.a.createRef(),w=r.a.createRef(),C=r.a.createRef();var P=function(){var e=Object(u.a)(j.a.mark((function e(c){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/profile/"+c);case 3:return t=e.sent,e.next=6,t.json();case 6:return t=e.sent,e.abrupt("return",{name:t.name,email:t.email});case 10:return e.prev=10,e.t0=e.catch(0),console.log("Error trying to get user profile",e.t0),e.abrupt("return",{name:"",email:""});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(c){return e.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"bodycontainer",children:JSON.parse(g).name?Object(i.jsxs)("div",{className:"profileContainer",children:[Object(i.jsx)("h5",{children:"Welcome"}),Object(i.jsx)("div",{children:Object(i.jsxs)("span",{children:[Object(i.jsx)("strong",{children:"Name:"})," ",JSON.parse(g).name]})}),Object(i.jsx)("div",{children:Object(i.jsxs)("span",{children:[Object(i.jsx)("strong",{children:"Email:"})," ",JSON.parse(g).email]})}),Object(i.jsx)("div",{children:Object(i.jsxs)("span",{children:[Object(i.jsx)("button",{onClick:function(){localStorage.removeItem("user"),v(JSON.stringify({name:"",email:""}))},children:"Logout"})," "]})})]}):Object(i.jsxs)("div",{className:t,id:"container",children:[Object(i.jsx)("div",{className:"form-container sign-up-container",children:Object(i.jsxs)("form",{action:"#",children:[Object(i.jsx)("h1",{children:"Create Account"}),Object(i.jsx)("span",{children:"use your email for registration"}),Object(i.jsx)("input",{type:"text",placeholder:"Name",ref:S}),Object(i.jsx)("input",{type:"email",placeholder:"Email",ref:w}),Object(i.jsx)("input",{type:"password",placeholder:"Password",ref:C}),Object(i.jsx)("button",{onClick:function(e){e.preventDefault();try{fetch("/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:S.current.value,email:w.current.value,password:C.current.value})}).then((function(e){return e.json()})).then((function(e){e.id?(m("User register successful"),v(JSON.stringify({name:e.name,email:e.email}))):m("User register unsuccessful")})).catch((function(e){console.log("un error ha ocurrido",e)}))}catch(c){console.log("Error trying to register the user.",c)}},children:"Sign Up"}),Object(i.jsx)("span",{className:"error",children:O})]})}),Object(i.jsx)("div",{className:"form-container sign-in-container",children:Object(i.jsxs)("form",{action:"#",children:[Object(i.jsx)("h1",{children:"Sign in"}),Object(i.jsx)("span",{children:"use your account"}),Object(i.jsx)("input",{type:"email",placeholder:"Email",ref:y}),Object(i.jsx)("input",{type:"password",placeholder:"Password",ref:N}),Object(i.jsx)("button",{onClick:function(e){e.preventDefault(),fetch("/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:y.current.value,password:N.current.value})}).then((function(e){return e.json()})).then((function(e){e.id?(b("User login successful"),Promise.resolve(P(e.id)).then((function(e){v(JSON.stringify(e))}))):b("User or password are wrong")})).catch((function(e){console.log("Error when trying to auth the user.",e)}))},children:"Sign In"}),Object(i.jsx)("span",{className:"error",children:o})]})}),Object(i.jsx)("div",{className:"overlay-container",children:Object(i.jsxs)("div",{className:"overlay",children:[Object(i.jsxs)("div",{className:"overlay-panel overlay-left",children:[Object(i.jsx)("h1",{children:"Welcome Back!"}),Object(i.jsx)("p",{children:"To keep connected with us please login with your personal info"}),Object(i.jsx)("button",{className:"ghost",id:"signIn",onClick:function(e){e.preventDefault(),s("containerlogin")},children:"Sign In"})]}),Object(i.jsxs)("div",{className:"overlay-panel overlay-right",children:[Object(i.jsx)("h1",{children:"Hello, Friend!"}),Object(i.jsx)("p",{children:"Enter your personal details and start journey with us"}),Object(i.jsx)("button",{className:"ghost",id:"signUp",onClick:function(e){e.preventDefault(),s("right-panel-active containerlogin")},children:"Sign Up"})]})]})})]})})});var y=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)("section",{id:"welcome",className:"welcome-section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col-lg-12",children:[Object(i.jsx)("h1",{children:"Crypto Prices \ud83d\udcb0"}),Object(i.jsx)("p",{children:"This is a responsive one-page scrolling that show you the current sell prices of CryptoCurrencies \ud83d\udcb1."}),Object(i.jsxs)("p",{children:["This webpage was created by ",Object(i.jsx)("a",{href:"https://samilabud.netlify.com",target:"_blank",rel:"noreferrer",children:" Samil Abud"}),"."]}),Object(i.jsx)("p",{children:"\xa0"}),Object(i.jsx)("a",{className:"btn btn-primary page-scroll",href:"#prices",children:"Click To See Prices!"})]})})})}),Object(i.jsx)("section",{id:"prices",className:"sellprice-section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col-lg-12",children:[Object(i.jsx)("h1",{children:"Sell Prices"}),Object(i.jsx)(O,{})]})})})}),Object(i.jsx)("section",{id:"currencies",className:"currencies-section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col-lg-12",children:[Object(i.jsx)("h1",{children:"Currencies List"}),Object(i.jsx)(g,{})]})})})}),Object(i.jsx)("section",{id:"login",className:"login-section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-lg-12",children:Object(i.jsx)(v,{})})})})})]})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,167)).then((function(c){var t=c.getCLS,n=c.getFID,r=c.getFCP,s=c.getLCP,a=c.getTTFB;t(e),n(e),r(e),s(e),a(e)}))};t(124);a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root")),N()}},[[125,1,2]]]);
//# sourceMappingURL=main.b863f775.chunk.js.map