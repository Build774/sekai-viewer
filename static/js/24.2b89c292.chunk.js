(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[24],{5956:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(5910),r=Object(n.a)((function(e){return{header:{fontWeight:"bold"},content:{marginTop:e.spacing(3),marginBottom:e.spacing(3),marginLeft:"auto",marginRight:"auto"}}}))},6044:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),l=(a(4),a(3)),i=a(6),c=a(5),s=a(80),u=a(10),m=a(42),d=o.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.color,p=void 0===d?"primary":d,f=e.component,g=void 0===f?"a":f,h=e.onBlur,b=e.onFocus,E=e.TypographyClasses,v=e.underline,y=void 0===v?"hover":v,O=e.variant,j=void 0===O?"inherit":O,C=Object(r.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),w=Object(s.a)(),k=w.isFocusVisible,S=w.onBlurVisible,z=w.ref,M=o.useState(!1),N=M[0],x=M[1],A=Object(u.a)(t,z);return o.createElement(m.a,Object(n.a)({className:Object(l.a)(a.root,a["underline".concat(Object(i.a)(y))],c,N&&a.focusVisible,"button"===g&&a.button),classes:E,color:p,component:g,onBlur:function(e){N&&(S(),x(!1)),h&&h(e)},onFocus:function(e){k(e)&&x(!0),b&&b(e)},ref:A,variant:j},C))}));t.a=Object(c.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(d)},6053:function(e,t,a){"use strict";var n=a(2),r=a(1),o=a(0),l=(a(4),a(3)),i=a(12),c=a(5),s=a(112),u=a(53),m=Object(u.a)(o.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),d=Object(u.a)(o.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),p=Object(u.a)(o.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),f=Object(u.a)(o.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),g=Object(u.a)(o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),h=a(5885),b=a(6),E={success:o.createElement(m,{fontSize:"inherit"}),warning:o.createElement(d,{fontSize:"inherit"}),error:o.createElement(p,{fontSize:"inherit"}),info:o.createElement(f,{fontSize:"inherit"})},v=o.createElement(g,{fontSize:"small"}),y=o.forwardRef((function(e,t){var a=e.action,i=e.children,c=e.classes,u=e.className,m=e.closeText,d=void 0===m?"Close":m,p=e.color,f=e.icon,g=e.iconMapping,y=void 0===g?E:g,O=e.onClose,j=e.role,C=void 0===j?"alert":j,w=e.severity,k=void 0===w?"success":w,S=e.variant,z=void 0===S?"standard":S,M=Object(n.a)(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return o.createElement(s.a,Object(r.a)({role:C,square:!0,elevation:0,className:Object(l.a)(c.root,c["".concat(z).concat(Object(b.a)(p||k))],u),ref:t},M),!1!==f?o.createElement("div",{className:c.icon},f||y[k]||E[k]):null,o.createElement("div",{className:c.message},i),null!=a?o.createElement("div",{className:c.action},a):null,null==a&&O?o.createElement("div",{className:c.action},o.createElement(h.a,{size:"small","aria-label":d,title:d,color:"inherit",onClick:O},v)):null)}));t.a=Object(c.a)((function(e){var t="light"===e.palette.type?i.a:i.e,a="light"===e.palette.type?i.e:i.a;return{root:Object(r.a)({},e.typography.body2,{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:t(e.palette.success.main,.6),backgroundColor:a(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:t(e.palette.info.main,.6),backgroundColor:a(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:t(e.palette.warning.main,.6),backgroundColor:a(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:t(e.palette.error.main,.6),backgroundColor:a(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:t(e.palette.success.main,.6),border:"1px solid ".concat(e.palette.success.main),"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:t(e.palette.info.main,.6),border:"1px solid ".concat(e.palette.info.main),"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:t(e.palette.warning.main,.6),border:"1px solid ".concat(e.palette.warning.main),"& $icon":{color:e.palette.warning.main}},outlinedError:{color:t(e.palette.error.main,.6),border:"1px solid ".concat(e.palette.error.main),"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(y)},6066:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(7);t.a=Object(o.a)(r.a.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"GitHub")},6103:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),l=(a(4),a(5)),i=a(42),c=a(3),s=o.forwardRef((function(e,t){var a=e.classes,l=e.className,s=Object(r.a)(e,["classes","className"]);return o.createElement(i.a,Object(n.a)({gutterBottom:!0,component:"div",ref:t,className:Object(c.a)(a.root,l)},s))}));t.a=Object(l.a)((function(e){return{root:{fontWeight:e.typography.fontWeightMedium,marginTop:-2}}}),{name:"MuiAlertTitle"})(s)},6201:function(e,t,a){"use strict";a.r(t);var n=a(5910),r=a(42),o=a(5938),l=a(6044),i=a(6066),c=a(6053),s=a(6103),u=a(0),m=a.n(u),d=a(5883),p=a(5956),f=Object(n.a)((function(e){return{alert:{margin:e.spacing(2,0)}}}));t.default=function(){var e=f(),t=Object(p.a)(),a=Object(d.a)().t;return Object(u.useEffect)((function(){document.title=a("title:about")}),[a]),m.a.createElement(u.Fragment,null,m.a.createElement(r.a,{variant:"h6",className:t.header},a("common:about")),m.a.createElement(o.a,null,m.a.createElement(c.a,{className:e.alert,severity:"info"},m.a.createElement(s.a,null,a("about:about_me.title")),m.a.createElement("ul",{style:{marginBlockEnd:0}},m.a.createElement("li",null,m.a.createElement(l.a,{href:"https://blog.dnaroma.eu/",target:"_blanl",rel:"noopener"},"Blog")),m.a.createElement("li",null,m.a.createElement(l.a,{href:"https://www.github.com/dnaroma",target:"_blanl",rel:"noopener"},m.a.createElement(i.a,{fontSize:"inherit"}),"GitHub")))),m.a.createElement(c.a,{className:e.alert,severity:"info"},m.a.createElement(s.a,null,a("home:alert_contributor.title")),m.a.createElement("ul",{style:{marginBlockEnd:0}},m.a.createElement("li",null,m.a.createElement(l.a,{href:"https://github.com/NonSpicyBurrito",target:"_blank",rel:"noopener noreferrer"},m.a.createElement(i.a,{fontSize:"inherit"}),"Burrito")),m.a.createElement("li",null,m.a.createElement(l.a,{href:"https://github.com/iSwanGit",target:"_blank",rel:"noopener noreferrer"},m.a.createElement(i.a,{fontSize:"inherit"}),"iSwanGit (EleMas*)")),m.a.createElement("li",null,m.a.createElement(l.a,{href:"https://github.com/Build774",target:"_blank",rel:"noopener noreferrer"},m.a.createElement(i.a,{fontSize:"inherit"}),"Build774")))),m.a.createElement(c.a,{className:e.alert,severity:"info"},m.a.createElement(s.a,null,a("home:alert_translate.title")),m.a.createElement("ul",null,m.a.createElement("li",null,"\u7b80\uff1aStargazing Koishi, Nightwheel"),m.a.createElement("li",null,"\u7e41\uff1aNatsuzawa, ch ko, tofutofuo"),m.a.createElement("li",null,"\u65e5\uff1aPassion, Cee, k0tayan, Natsuzawa, Build774"),m.a.createElement("li",null,"\ud55c\uff1ahodubidu3095, omitooshi, EleMas39, PJSEKAI, \uc544\uc810"),m.a.createElement("li",null,"Pt-BR: mid"),m.a.createElement("li",null,"\u0440\u0443\u0441\u0441\u043a\u0438\u0439: Spyrohat"),m.a.createElement("li",null,"Es: ruiemu, maravillas"),m.a.createElement("li",null,"It: SeaPu"),m.a.createElement("li",null,"Pl: sousie"),m.a.createElement("li",null,"En: watatomo"),m.a.createElement("li",null,"Fr: Yasito")))))}}}]);
//# sourceMappingURL=24.2b89c292.chunk.js.map