(this["webpackJsonplost-in-translation"]=this["webpackJsonplost-in-translation"]||[]).push([[0],{172:function(e,t,n){},173:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(26),o=n.n(i),s=(n(159),n(139)),c=n(119),l=n(10),u=n(188),d=n(185),h=n(144),g=n.p+"static/media/logo.f965e8f7.png",j=n(192),b=n(4),p=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.a,{as:"h1",children:"About Lost in Translation"}),Object(b.jsxs)("p",{children:['Lost in Translation explores the information that is lost in the inherent act of translation. It automates the popular internet trend that creates "bad English" versions of existing texts by translating them over and over on Google Translate, cycling through different languages before going back into English. The end result is usually something comedic, and there has been a lot of entertainment derived from trying to decipher the original text based on the bad translation (e.g., Tasty made a ',Object(b.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/watch?v=pLJo7jWJQj0",children:"video"})," where a pastry chef attempted to follow a recipe that's been translated 20 times), but it is also illustrative of how much information is lost in translation. While it might be difficult to notice discrepancy in each step, the difference between the final version and the original text forces us to confront the fact that we are always losing some aspect of the original text every time we translate. "]}),Object(b.jsx)("p",{children:"Whether you're using Lost in Translation to get a good laugh (I highly encourage you pass in your favorite passages/speeches/recipes) or to gain some appreciation of the cold hard truth that translation can never be lossless and unambiguous, I appreciate you for checking it out."}),Object(b.jsx)(j.a,{as:"h2",children:"I love this! How can I show my appreciation \ud83c\udf89?"}),Object(b.jsx)("p",{children:"Allow me to redirect your attention to the Source button located at the bottom right of the web page, where there is a link to the GitHub repository of this project. Star the project, open issues, and send in pull requests to help improve the project!"})]})},f=n(194),O=n(191),x=n(80),m=function(){return Object(b.jsxs)(f.a,{style:{display:"flex",flexDirection:"row",alignItems:"center",marginTop:"auto"},children:[Object(b.jsxs)("span",{children:["Made with \u2764\ufe0f by ",Object(b.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://alexander-ding.github.io/",children:"Alex Ding"}),", 2021"]}),Object(b.jsxs)(O.a,{secondary:!0,color:"black",as:"a",target:"_blank",rel:"noopener noreferrer",href:"https://www.github.com/alexander-ding/lost-in-translation",style:{marginLeft:"auto",minWidth:108},children:[Object(b.jsx)(x.a,{name:"github"})," Source"]})]})},v=n(25),y=n(142),w=n(127),L=n(186),k=n(187),T=n(195),S=n(184),C=n(108),I=n(190),D=function(e){var t=e.language,n=e.otherLanguage,a=e.setShow;return Object(b.jsxs)(I.a,{negative:!0,style:{position:"fixed",top:"2em",width:"80vw",zIndex:1e4,left:"10vw",right:"10vw"},onDismiss:function(){return a(!1)},children:[Object(b.jsxs)(I.a.Header,{children:["Cannot complete operation on ",t]}),Object(b.jsxs)("p",{children:["Doing so would create a back-to-back translation with the same language ",n]})]})},E=n(31),F=n(120),P=n(189),R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object.keys(e);if(0===n.length||1===n.length&&n[0]===t)throw new Error("Invalid input");for(;;){var a=n[Math.floor(Math.random()*n.length)];if(a!==t)return a}},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8;if(n<1)return[];for(var a=new Array(n),r=0;r<n-1;r++){var i=0===r?t:a[r-1];a[r]=R(e,i)}for(;;){var o=R(e,1===n?t:a[n-2]);if(o!==t)return a[n-1]=o,a}},M=function(e){return Object.keys(e).map((function(t){return{key:t,value:t,text:e[t].name}}))},A=n(193),z=document.createElement("div");document.body.appendChild(z);var J=function(e){var t=e.value,n=e.updateValue,a=e.languages,r=e.previousLanguage,i=e.nextLanguage,s=e.deleteSelf,c=e.provided,l=e.snapshot,u=e.style,d=Object.fromEntries(Object.keys(a).filter((function(e){return![r,i].includes(e)})).map((function(e){return[e,a[e]]}))),h=l.isDragging,g=Object(b.jsx)(A.a,Object(E.a)(Object(E.a)(Object(E.a)({innerRef:c.innerRef},c.draggableProps),c.dragHandleProps),{},{style:u,children:Object(b.jsx)(f.a,{children:Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(b.jsx)(L.a,{inline:!0,search:!0,options:M(d),value:t,onChange:function(e,t){return n(t.value)}}),Object(b.jsx)(x.a,{name:"delete",style:{marginLeft:"auto",cursor:"pointer"},onClick:s})]})})}));return h?o.a.createPortal(g,z):g},W=function(e){var t=e.isOpen,n=e.setIsOpen,a=e.hops,r=e.currentLanguage,i=e.languages,o=e.updateLanguage,s=e.deleteLanguage,c=e.addRandomLanguage,l=e.handleOnDragEnd;return Object(b.jsxs)(P.a,{open:t,onClose:function(){return n(!1)},size:"large",centered:!1,children:[Object(b.jsxs)(P.a.Header,{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:["Intermediate Languages",Object(b.jsx)(O.a,{primary:!0,onClick:c,style:{marginLeft:"auto"},disabled:20===a.length,children:"Add"})]}),Object(b.jsx)(P.a.Content,{children:Object(b.jsx)(F.a,{onDragEnd:l,children:Object(b.jsx)(F.c,{droppableId:"languages",children:function(e){return Object(b.jsxs)("div",Object(E.a)(Object(E.a)({ref:e.innerRef},e.droppableProps),{},{children:[a.map((function(e,t){return Object(b.jsx)(F.b,{draggableId:t.toString(),index:t,children:function(n,c){return Object(b.jsx)(J,{languages:i,value:e,updateValue:function(e){return o(t,e)},deleteSelf:function(){return s(t)},previousLanguage:0===t?r:a[t-1],nextLanguage:t===a.length-1?r:a[t+1],provided:n,snapshot:c,style:(l=n.draggableProps.style,u=c,u.isDropAnimating?Object(E.a)(Object(E.a)({},l),{},{transitionDuration:"0.01s"}):l)},t);var l,u}},t)})),e.placeholder]}))}})})}),Object(b.jsx)(P.a.Actions,{children:Object(b.jsx)(O.a,{content:"Save",labelPosition:"right",icon:"save",onClick:function(){return n(!1)},primary:!0})})]})},B=function(e){var t=e.currentLanguage,n=e.languages,r=e.hops,i=e.updateHops,o=e.isOpen,s=e.setIsOpen,c=Object(a.useState)(!1),l=Object(v.a)(c,2),u=l[0],d=l[1],h=Object(a.useState)(""),g=Object(v.a)(h,2),j=g[0],p=g[1],f=Object(a.useState)(""),O=Object(v.a)(f,2),x=O[0],m=O[1],y=function(e,t){p(n[e].name),m(n[t].name),d(!0),setTimeout((function(){d(!1)}),4e3)};return Object(b.jsxs)(b.Fragment,{children:[u?Object(b.jsx)(D,{setShow:d,language:j,otherLanguage:x}):null,Object(b.jsx)(W,{isOpen:o,setIsOpen:s,hops:r,currentLanguage:t,languages:n,updateLanguage:function(e,t){i(r.map((function(n,a){return e===a?t:n})))},deleteLanguage:function(e){var n=0===e?t:r[e-1];n!==(e===r.length-1?t:r[e+1])?i(r.filter((function(t,n){return e!==n}))):y(r[e],n)},addRandomLanguage:function(){if(!(r.length>=20))for(;;){var e=R(n,r[r.length-1]);if(e!==t)return void i([].concat(Object(C.a)(r),[e]))}},handleOnDragEnd:function(e){if(e.destination){var t=function(e,t,n){var a=Array.from(e),r=a.splice(t,1),i=Object(v.a)(r,1)[0];return a.splice(n,0,i),a}(r,e.source.index,e.destination.index),n=function(e){for(var t=1;t<e.length;t++){var n=e[t-1];if(n===e[t])return[!1,n]}return[!0,null]}(t),a=Object(v.a)(n,2),o=a[0],s=a[1];o?i(t):y(r[e.source.index],s)}}})]})},G=function(e){var t=e.translate,n=e.inputText,a=e.updateText,r=e.translatedText,i=e.languages,o=e.currentLanguage,s=e.updateLanguage,c=e.hops,l=e.updateHops,u=e.isModalOpen,d=e.setIsModalOpen,h=e.isLoading,g=e.copy,j=Object(y.useMediaQuery)({query:"(min-width: 768px)"});return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(B,{hops:c,updateHops:l,isOpen:u,setIsOpen:d,languages:i,currentLanguage:o}),Object(b.jsxs)(f.a,{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(b.jsxs)("div",{style:{display:"inline-block",marginRight:"1em"},children:[Object(b.jsx)(L.a,{inline:!0,search:!0,options:M(i),value:o,onChange:function(e,t){return s(t.value)}}),Object(b.jsxs)("span",{children:[" sent through ",Object(b.jsx)("b",{style:{cursor:"pointer",textDecoration:"underline",color:"#2185d0"},onClick:function(e){return d(!0)},children:c.length})," different languages"]})]}),Object(b.jsx)(O.a,{primary:!0,style:{marginLeft:"auto"},onClick:function(e){return t()},children:"Translate"})]}),Object(b.jsx)(k.a,{style:{fontSize:"1.5em",marginBottom:"1em"},children:Object(b.jsxs)(T.a,{stackable:!0,columns:2,style:{margin:0},children:[Object(b.jsx)(T.a.Column,{id:"input",children:Object(b.jsx)(w.a,{autoFocus:!0,minRows:4,maxRows:15,placeholder:"Enter text",style:{resize:"none"},value:n,onChange:function(e){return a(e.target.value)}})}),Object(b.jsxs)(T.a.Column,{id:"translation",children:[Object(b.jsx)(S.a,{content:"Translating...",active:h}),j?Object(b.jsx)("textarea",{disabled:!0,rows:4,placeholder:"Translation",style:{backgroundColor:"#F5F5F5",resize:"none",height:"100%"},value:h?" ":r}):Object(b.jsx)(w.a,{disabled:!0,minRows:4,placeholder:"Translation",style:{backgroundColor:"#F5F5F5",resize:"none"},value:h?" ":r}),Object(b.jsx)(x.a,{name:"copy",style:{cursor:"pointer",position:"absolute",bottom:10,right:10},onClick:g})]})]})})]})},_="https://lost-in-translation-gh.herokuapp.com",q=function(){var e=Object(a.useState)("en"),t=Object(v.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)({}),o=Object(v.a)(i,2),s=o[0],c=o[1],l=Object(a.useState)([]),u=Object(v.a)(l,2),d=u[0],h=u[1],g=Object(a.useState)(""),j=Object(v.a)(g,2),p=j[0],f=j[1],O=Object(a.useState)(""),x=Object(v.a)(O,2),m=x[0],y=x[1],w=Object(a.useState)(!1),L=Object(v.a)(w,2),k=L[0],T=L[1],S=Object(a.useState)(!1),I=Object(v.a)(S,2),D=I[0],E=I[1];Object(a.useEffect)((function(){fetch(_+"/api/languages",{method:"GET"}).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(e){return Object.fromEntries(e.map((function(e){return[e.code,e]})))})).then((function(e){c(e),h(H(e,"en"))}))}),[]);var F=Object(a.useCallback)((function(){p?(E(!0),function(e,t,n){var a=[t].concat(Object(C.a)(n),[t]),r=new URLSearchParams({hops:a.join(","),from:t});return fetch(_+"/api/translate?"+r.toString(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:e})}).then((function(e){if(!e.ok)throw e;return e.json()}))}(p,n,d).then((function(e){E(!1),y(e.translatedText)})).catch((function(e){E(!1),y("Error: failed to translate")}))):y("")}),[p,n,d,y]);return Object(b.jsx)(G,{translate:F,inputText:p,updateText:f,translatedText:m,languages:s,currentLanguage:n,updateLanguage:function(e){n!==e&&(r(e),0!==Object.keys(s).length&&h(H(s,n,d.length?d.length:8)))},hops:d,updateHops:h,isModalOpen:k,setIsModalOpen:T,isLoading:D,copy:function(){navigator.clipboard.writeText(m)}})},Q=function(){var e=Object(s.a)();return Object(b.jsxs)(c.a,{basename:"/lost-in-translation",children:[Object(b.jsx)(u.a,{borderless:!0,fixed:"top",style:{backgroundColor:"#fff",border:"1px solid #ddd",boxShadow:"0px 3px 5px rgba(0, 0, 0, 0.2)"},children:Object(b.jsxs)(d.a,{children:[Object(b.jsxs)(u.a.Item,{header:!0,as:c.b,to:"/",children:[Object(b.jsx)(h.a,{size:"mini",src:g}),Object(b.jsx)("span",{style:{marginLeft:"1em"},children:"Lost in Translation"})]}),Object(b.jsx)(u.a.Item,{position:"right",as:c.b,to:"about",children:"What is This?"})]})}),Object(b.jsxs)(d.a,{style:{paddingTop:"6em",paddingBottom:"1em",display:"flex",flexDirection:"column",height:e},children:[Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{path:"/",exact:!0,children:Object(b.jsx)(q,{})}),Object(b.jsx)(l.b,{path:"/about",children:Object(b.jsx)(p,{})}),Object(b.jsx)(l.b,{path:"*",children:Object(b.jsx)(l.a,{to:"/"})})]}),Object(b.jsx)(m,{})]})]})},V=(n(172),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,197)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),i(e),o(e)}))});o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(Q,{})}),document.getElementById("root")),V()}},[[173,1,2]]]);
//# sourceMappingURL=main.ea9d2624.chunk.js.map