(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{20:function(e,t,a){e.exports=a(36)},25:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(17),i=a.n(c),r=(a(25),a(4)),o=a(6),s=a(7),m=function(e){var t=e.type;console.log("Activity",e);var a=Object(n.useState)(null),c=Object(r.a)(a,2),i=c[0],o=c[1];Object(n.useEffect)((function(){var e="https://www.boredapi.com/api/activity";console.log(t),t&&(e+="?type=".concat(t),console.log(e)),fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),o(e)}))}),[]);return l.a.createElement("div",null,i?function(){var e=i.activity,t=i.type,a=i.participants;return l.a.createElement("ul",{className:"activity"},l.a.createElement("li",null,"Activity: ",e),l.a.createElement("li",null,"Type: ",t),l.a.createElement("li",null,"Participants: ",a))}():l.a.createElement("div",null,"Loading"))},u=function(e){return console.log("Activities",e),l.a.createElement("div",null,"Activities",l.a.createElement(s.a,{path:"".concat(e.match.url,"/recreational"),render:function(e){return l.a.createElement(m,Object.assign({},e,{type:"recreational"}))}}),l.a.createElement(s.a,{path:"".concat(e.match.url,"/cooking"),render:function(e){return l.a.createElement(m,Object.assign({},e,{type:"cooking"}))}}))},E=a(9),f=a(11),p=(a(31),function(e){var t=e.userInfo,a=e.setInfo,c=t.firstName,i=t.lastName,o=t.email,s=Object(n.useState)({firstName:null,lastName:null,email:null}),m=Object(r.a)(s,2),u=m[0],p=m[1],v=function(e){var t=Object(f.a)({},u,Object(E.a)({},e.target.name,e.target.value));p(t)};return l.a.createElement("div",{className:"form-container"},l.a.createElement("form",{className:"user-form",onSubmit:function(e){e.preventDefault(),console.log(u),a(u)}},l.a.createElement("label",{htmlFor:"firstNameInput"},"First Name"),l.a.createElement("input",{id:"firstNameInput",type:"text",name:"firstName",placeholder:c,"aria-label":"First Name",onChange:v}),l.a.createElement("label",{htmlFor:"lastNameInput"},"Last Name"),l.a.createElement("input",{id:"lastNameInput",type:"text",name:"lastName",placeholder:i,"aria-label":"Last Name",onChange:v}),l.a.createElement("label",{htmlFor:"emailInput"},"Email"),l.a.createElement("input",{label:"emailInput",type:"email",name:"email",placeholder:o,"aria-label":"Email",onChange:v}),l.a.createElement("input",{type:"submit",value:"Save"})))}),v=function(e){console.log(e);var t=e.userInfo,a=t.firstName,n=t.lastName,c=t.email;return l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,"First Name: ",a," "),l.a.createElement("li",null,"Last Name: ",n),l.a.createElement("li",null,"Email: ",c," ")))},d=function(e){var t=e.userInfo,a=e.setInfo,c=e.isLoggedIn;console.log(e);var i=Object(n.useState)(null),o=Object(r.a)(i,2),m=(o[0],o[1]);return c?l.a.createElement("div",null,l.a.createElement(s.a,{path:"".concat(e.match.url,"/profile"),render:function(e){return l.a.createElement(v,Object.assign({},e,{userInfo:t}))}}),l.a.createElement(s.a,{path:"".concat(e.match.url,"/settings"),render:function(e){return l.a.createElement(p,Object.assign({},e,{userInfo:t,setInfo:a}))}})):l.a.createElement("div",null,"You gotta sign in",l.a.createElement("form",{className:"signin-form",onSubmit:function(e){e.preventDefault()}},l.a.createElement("input",{type:"email",onChange:function(e){console.log(e.target.value),m(e.target.value)}}),l.a.createElement("input",{type:"submit",value:"Submit"})))},g=(a(32),a(33),function(e){var t=e.title,a=e.children,n=e.isOpen,c=e.name,i=e.onClick;return l.a.createElement("div",{className:"accordion-container"},l.a.createElement("div",{className:"title",onClick:function(){return i(c)}},t),l.a.createElement("div",{className:n?"open":"closed"},l.a.createElement("div",{className:"collapsable-content"},a)))}),b=Object(n.memo)((function(e){console.log(e);var t=e.accordionStatus,a=e.setAccordionStatus,n=t.activities,c=t.account,i=function(e){var n=Object(f.a)({},t,Object(E.a)({},e,!t[e]));a(n)};return l.a.createElement("div",{className:"navbar"},l.a.createElement("ul",{className:"nav-section-list"},l.a.createElement("li",{className:"section-item"},l.a.createElement(g,{name:"activities",isOpen:n,onClick:i,title:"Activities"},l.a.createElement(o.b,{to:"/Untitled-Test/activities/recreational"},"Recreational"),l.a.createElement(o.b,{to:"/Untitled-Test/activities/cooking"},"Cooking"))),l.a.createElement("li",{className:"section-item"},l.a.createElement(g,{name:"account",isOpen:c,onClick:i,title:"Account"},l.a.createElement(o.b,{to:"/Untitled-Test/account/profile"},"Profile"),l.a.createElement(o.b,{to:"/Untitled-Test/account/settings"},"Settings")))))})),h=a(2);a(34),a(35);var N=function(e){var t=Object(n.useState)({firstName:null,lastName:null,email:null}),a=Object(r.a)(t,2),c=a[0],i=a[1],m=Object(n.useState)(!1),E=Object(r.a)(m,2),f=E[0],p=(E[1],Object(n.useState)({activities:!1,account:!1})),v=Object(r.a)(p,2),g=v[0],N=v[1],O=Object(h.a)();return console.log(O),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"logo"},l.a.createElement("a",{href:"/Untitled-Test"},"BORED LOGO"))),l.a.createElement("div",{className:"body"},l.a.createElement(o.a,null,l.a.createElement(b,Object.assign({},e,{accordionStatus:g,setAccordionStatus:N})),l.a.createElement("div",{className:"app-content"},l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/Untitled-Test/activities",component:u}),l.a.createElement(s.a,{path:"/Untitled-Test/account",render:function(e){return l.a.createElement(d,Object.assign({},e,{isLoggedIn:f,userInfo:c,setInfo:i}))}}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.ca54bd22.chunk.js.map