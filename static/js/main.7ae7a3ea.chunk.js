(this["webpackJsonpcontact-list2"]=this["webpackJsonpcontact-list2"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(5),i=n.n(s),r=(n(13),n(14),n(15),n(0));var o=function(){return Object(r.jsx)("div",{className:"nav",children:"Contacts"})},l=n(2),j=n(8),u=(n(17),n.p+"static/media/loupe.803521ca.svg"),d=Object(j.a)({inputValue:""}).useGlobalState;var b=function(){var e=d("inputValue"),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)("div",{className:"input",children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:u,alt:""})}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},value:n,placeholder:"Search Contacts"})})]})},O=d,h=n(4),m=n.n(h),f=n(6),v=n(7),x=n.n(v);n(19);var p=function(){var e=O("inputValue"),t=Object(l.a)(e,1)[0],n=Object(c.useState)([]),a=Object(l.a)(n,2),s=a[0],i=a[1],o=Object(c.useState)([]),j=Object(l.a)(o,1)[0],u=Object(c.useState)(!1),d=Object(l.a)(u,2),b=d[0],h=d[1],v=Object(c.useState)(!1),p=Object(l.a)(v,2),g=p[0],C=p[1];Object(c.useEffect)((function(){C(!0),_()}),[]);var _=function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json");case 2:return t=e.sent,e.t0=i,e.next=6,t.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1),200===t.status?console.log("API OK"):console.log("API ERR"),C(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();s.sort((function(e,t){return e.last_name>t.last_name?1:t.last_name>e.last_name?-1:0}));var w=function(e){h(!b),!0===j.some((function(t){return t===e}))?j.indexOf(e)>-1&&j.splice(j.indexOf(e),1):j.push(e),console.log(j)},N=function(e){return!0===j.some((function(t){return t===e}))};return Object(r.jsx)("div",{children:g?Object(r.jsx)("div",{className:"loader",children:Object(r.jsx)(x.a,{color:"#3faca4",loading:g,size:15})}):Object(r.jsx)("div",{className:"contactList",children:s.filter((function(e){return""===t?e:e.first_name.toLowerCase().includes(t.toLowerCase())||e.last_name.toLowerCase().includes(t.toLowerCase())||e.email.toLowerCase().includes(t.toLowerCase())})).map((function(e){return null===e.avatar?Object(r.jsxs)("div",{className:"contact",onClick:function(){w(e.id)},children:[Object(r.jsxs)("div",{className:"myContact",children:[Object(r.jsx)("div",{className:"initials",children:e.first_name.charAt(0)+e.last_name.charAt(0)}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"name",children:e.first_name+" "+e.last_name}),Object(r.jsx)("div",{children:e.email})]})]}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"checkbox",checked:N(e.id),readOnly:!0})})]}):Object(r.jsxs)("div",{className:"contact",onClick:function(){w(e.id)},children:[Object(r.jsxs)("div",{className:"myContact",children:[Object(r.jsx)("img",{alt:"",src:e.avatar}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"name",children:e.first_name+" "+e.last_name}),Object(r.jsx)("div",{children:e.email})]})]}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"checkbox",checked:N(e.id),readOnly:!0})})]})}))})})};var g=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(o,{}),Object(r.jsx)(b,{}),Object(r.jsx)(p,{})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),C()}},[[26,1,2]]]);
//# sourceMappingURL=main.7ae7a3ea.chunk.js.map