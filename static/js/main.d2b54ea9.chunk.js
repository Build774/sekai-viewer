/*! For license information please see main.d2b54ea9.chunk.js.LICENSE.txt */
(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[7],{50:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return m}));var n=t(73),l=t(38),o=t(69),r=t(70),c=t(0);function i(){return n.a.use(l.e).use(o.a).use(r.a).init({supportedLngs:["en","zh-CN","zh-TW","ja","ko","es","de","pt-BR","ru","it","pl","fr"],ns:["common","home","card","music","gacha","event","unit","member","filter","music","title","member","unit","about","support"],fallbackLng:{default:["en"],pt:["pt-BR","en"]},fallbackNS:"common",backend:{loadPath:"/sekai-viewer/locales/{{lng}}/{{ns}}.json"},returnEmptyString:!1})}var u=n.a.createInstance();function m(){var e=Object(c.useCallback)((function(e,a,t){var n=u.t(e,t);return Number.isNaN(Number(n))?n:a}),[]),a=Object(c.useCallback)((function(a,t,n,l){switch(a){case"original":return n;case"translated":return e(t,n,l);case"both":return"".concat(n," | ").concat(e(t,n,l))}}),[e]);return{assetT:e,assetI18n:u,getTranslated:a}}u.use(o.a).use(r.a).init({supportedLngs:["en","zh-CN","zh-TW","ja","ko","es","de","pt-BR","ru","it","pl","fr"],ns:["music_titles","card_prefix","card_skill_name","event_name","gacha_name","character_name","skill_desc","character_profile","unit_profile","stamp_name","comic_title","release_cond","card_episode_title","music_vocal"],fallbackLng:{default:["ja"],pt:["pt-BR","ja"]},backend:{loadPath:"/sekai-viewer/locales/{{lng}}/{{ns}}.json"},returnEmptyString:!1})},51:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return u}));var n=t(32),l=t(0),o=t.n(l),r=t(5883),c=t(50),i=Object(l.createContext)(void 0),u=function(e){var a=e.children,t=Object(r.a)().i18n,u=Object(c.b)().assetI18n,m=Object(l.useState)(t.language),s=Object(n.a)(m,2),d=s[0],A=s[1],b=Object(l.useState)(localStorage.getItem("display-mode")||"auto"),p=Object(n.a)(b,2),E=p[0],f=p[1],h=Object(l.useState)(localStorage.getItem("content-translation-mode")||"translated"),g=Object(n.a)(h,2),v=g[0],w=g[1];return o.a.createElement(i.Provider,{value:{lang:d,updateLang:function(e){A(e),t.changeLanguage(e),u.changeLanguage(e)},displayMode:E,updateDisplayMode:function(e){f(e),localStorage.setItem("display-mode",e)},contentTransMode:v,updateContentTransMode:function(e){w(e),localStorage.setItem("content-translation-mode",e)}}},a)}},5863:function(e,a,t){e.exports=t(5882)},5880:function(e,a){!function(e,a,t){function n(e,a){return typeof e===a}function l(e){var a=s.className,t=u._config.classPrefix||"";if(d&&(a=a.baseVal),u._config.enableJSClass){var n=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");a=a.replace(n,"$1"+t+"js$2")}u._config.enableClasses&&(a+=" "+t+e.join(" "+t),d?s.className.baseVal=a:s.className=a)}function o(e,a){if("object"==typeof e)for(var t in e)m(e,t)&&o(t,e[t]);else{var n=(e=e.toLowerCase()).split("."),r=u[n[0]];if(2==n.length&&(r=r[n[1]]),"undefined"!=typeof r)return u;a="function"==typeof a?a():a,1==n.length?u[n[0]]=a:(!u[n[0]]||u[n[0]]instanceof Boolean||(u[n[0]]=new Boolean(u[n[0]])),u[n[0]][n[1]]=a),l([(a&&0!=a?"":"no-")+n.join("-")]),u._trigger(e,a)}return u}var r=[],c=[],i={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,a){var t=this;setTimeout((function(){a(t[e])}),0)},addTest:function(e,a,t){c.push({name:e,fn:a,options:t})},addAsyncTest:function(e){c.push({name:null,fn:e})}},u=function(){};u.prototype=i,u=new u;var m,s=a.documentElement,d="svg"===s.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;m=n(e,"undefined")||n(e.call,"undefined")?function(e,a){return a in e&&n(e.constructor.prototype[a],"undefined")}:function(a,t){return e.call(a,t)}}(),i._l={},i.on=function(e,a){this._l[e]||(this._l[e]=[]),this._l[e].push(a),u.hasOwnProperty(e)&&setTimeout((function(){u._trigger(e,u[e])}),0)},i._trigger=function(e,a){if(this._l[e]){var t=this._l[e];setTimeout((function(){var e;for(e=0;e<t.length;e++)(0,t[e])(a)}),0),delete this._l[e]}},u._q.push((function(){i.addTest=o})),u.addAsyncTest((function(){var e=new Image;e.onerror=function(){o("webplossless",!1)},e.onload=function(){o("webplossless",1==e.width)},e.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="})),u.addAsyncTest((function(){function e(e,a,t){function n(a){var n=!(!a||"load"!==a.type)&&1==l.width;o(e,"webp"===e&&n?new Boolean(n):n),t&&t(a)}var l=new Image;l.onerror=n,l.onload=n,l.src=a}var a=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=a.shift();e(t.name,t.uri,(function(t){if(t&&"load"===t.type)for(var n=0;n<a.length;n++)e(a[n].name,a[n].uri)}))})),u.addAsyncTest((function(){var e=new Image;e.onerror=function(){o("webpalpha",!1)},e.onload=function(){o("webpalpha",1==e.width)},e.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="})),function(){var e,a,t,l,o,i;for(var m in c)if(c.hasOwnProperty(m)){if(e=[],(a=c[m]).name&&(e.push(a.name.toLowerCase()),a.options&&a.options.aliases&&a.options.aliases.length))for(t=0;t<a.options.aliases.length;t++)e.push(a.options.aliases[t].toLowerCase());for(l=n(a.fn,"function")?a.fn():a.fn,o=0;o<e.length;o++)1===(i=e[o].split(".")).length?u[i[0]]=l:(!u[i[0]]||u[i[0]]instanceof Boolean||(u[i[0]]=new Boolean(u[i[0]])),u[i[0]][i[1]]=l),r.push((l?"":"no-")+i.join("-"))}}(),l(r),delete i.addTest,delete i.addAsyncTest;for(var A=0;A<u._q.length;A++)u._q[A]();e.Modernizr=u}(window,document)},5881:function(e,a,t){},5882:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(13),r=t.n(o),c=t(104),i=t.n(c),u=t(54),m=t(32),s=t(34),d=t(65),A=t(5910),b=t(5912),p=t(5913),E=t(5914),f=t(5924),h=t(111),g=t(42),v=t(5925),w=t(5926),y=t(5929),j=t(5930),x=t(5931),O=t(5932),k=t(5933),B=t(5885),_=t(5951),C=t(5952),P=t(5938),Q=t(5939),T=t(5940),S=t(5941),R=t(5942),z=t(5943),I=t(5953),D=t(5944),M=t(5950),N=t(5948),U=t(5949),J=t(5915),L=t(5916),G=t(5917),W=t(5918),V=t(5919),X=t(5920),q=t(5921),$=t(5922),F=t(5923),K=t(5927),Y=t(5928),H=t(5934),Z=t(5935),ee=t(5936),ae=t(5945),te=t(5946),ne=t(5947),le=t(44),oe=t(5883),re=t(11),ce=t(52),ie=t(51),ue=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(5),t.e(4),t.e(1),t.e(15)]).then(t.bind(null,6209))})),me=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(2),t.e(5),t.e(13),t.e(26)]).then(t.bind(null,6189))})),se=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(5),t.e(4),t.e(21)]).then(t.bind(null,6193))})),de=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(19)]).then(t.bind(null,6194))})),Ae=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(18)]).then(t.bind(null,6195))})),be=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(3),t.e(2),t.e(1),t.e(16)]).then(t.bind(null,6196))})),pe=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(3),t.e(2),t.e(20),t.e(10)]).then(t.bind(null,6210))})),Ee=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(3),t.e(2),t.e(6),t.e(11)]).then(t.bind(null,6204))})),fe=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(3),t.e(2),t.e(6),t.e(12)]).then(t.bind(null,6211))})),he=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(3),t.e(22),t.e(25)]).then(t.bind(null,6197))})),ge=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(3),t.e(2),t.e(1),t.e(17)]).then(t.bind(null,6198))})),ve=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(29)]).then(t.bind(null,6199))})),we=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(4),t.e(1),t.e(23)]).then(t.bind(null,6205))})),ye=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(27)]).then(t.bind(null,6200))})),je=Object(n.lazy)((function(){return t.e(24).then(t.bind(null,6201))})),xe=Object(n.lazy)((function(){return Promise.all([t.e(14),t.e(28)]).then(t.bind(null,6202))})),Oe=Object(A.a)((function(e){return{toolbar:Object(d.a)(Object(d.a)({},e.mixins.toolbar),{},{display:"flex",alignItems:"center",padding:e.spacing(0,3)}),root:{display:"flex"},drawer:Object(s.a)({},e.breakpoints.up("md"),{width:240,flexShrink:0}),appBar:Object(s.a)({},e.breakpoints.up("md"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(s.a)({marginRight:e.spacing(2)},e.breakpoints.up("md"),{display:"none"}),title:{flexGrow:1},drawerPaper:{width:240},content:Object(s.a)({flexGrow:1,padding:e.spacing(3)},e.breakpoints.up("md"),{width:"calc(100% - ".concat(240,"px)")})}}));function ke(e){var a=e.icon,t=e.text,o=e.to,r=e.theme,c=Object(re.h)({path:o,exact:"/"===o}),i=Object(n.useMemo)((function(){return Object(n.forwardRef)((function(e,a){return l.a.createElement(ce.b,Object.assign({to:o,ref:a},e))}))}),[o]);return l.a.createElement("li",{style:{width:"100%"}},l.a.createElement(b.a,{component:i},l.a.createElement(p.a,{style:{color:c?r.palette.secondary.main:r.palette.text.primary}},a),l.a.createElement(E.a,{primary:t,style:{color:c?r.palette.secondary.main:r.palette.text.primary}})))}var Be=function(){var e=Object(oe.a)().t,a=[[{text:e("common:home"),icon:l.a.createElement(J.a,null),to:"/",disabled:!1},{text:e("common:card"),icon:l.a.createElement(L.a,null),to:"/card",disabled:!1},{text:e("common:music"),icon:l.a.createElement(G.a,null),to:"/music",disabled:!1},{text:e("common:gacha"),icon:l.a.createElement(W.a,null),to:"/gacha",disabled:!1},{text:e("common:event"),icon:l.a.createElement(le.c,null),to:"/event",disabled:!1},{text:e("common:stamp"),icon:l.a.createElement(le.h,null),to:"/stamp",disabled:!1},{text:e("common:comic"),icon:l.a.createElement(V.a,null),to:"/comic",disabled:!1},{text:e("common:character"),icon:l.a.createElement(le.a,null),to:"/chara",disabled:!1},{text:"Live2D",icon:l.a.createElement(X.a,null),to:"/live2d",disabled:!0}],[{text:e("common:musicMeta"),icon:l.a.createElement(q.a,null),to:"/music_meta",disabled:!0},{text:e("common:scoreCalculator"),icon:l.a.createElement(le.b,null),to:"/score_calc",disabled:!0}],[{text:e("common:support"),icon:l.a.createElement($.a,null),to:"/support",disabled:!1},{text:e("common:about"),icon:l.a.createElement(F.a,null),to:"/about",disabled:!1}]],t=Oe(),o=l.a.useState(!1),r=Object(m.a)(o,2),c=r[0],i=r[1],s=l.a.useState(!1),d=Object(m.a)(s,2),A=d[0],p=d[1],E=l.a.useState([!0,!0,!0]),ce=Object(m.a)(E,2),Be=ce[0],_e=ce[1],Ce=Object(n.useContext)(ie.a),Pe=Ce.lang,Qe=Ce.displayMode,Te=Ce.contentTransMode,Se=Ce.updateLang,Re=Ce.updateDisplayMode,ze=Ce.updateContentTransMode,Ie=Object(re.f)().goBack,De=Object(f.a)("(prefers-color-scheme: dark)"),Me=l.a.useMemo((function(){return Object(h.a)({palette:{type:"auto"===Qe?De?"dark":"light":Qe,primary:{main:"auto"===Qe?De?"#7986cb":"#3f51b5":"dark"===Qe?"#7986cb":"#3f51b5"}}})}),[Qe,De]),Ne=function(){i(!c)},Ue=l.a.createElement("div",null,l.a.createElement("div",{className:t.toolbar},l.a.createElement(g.a,{variant:"h6"},e("common:toolbar.title"))),l.a.createElement(v.a,null),l.a.createElement(w.a,null,l.a.createElement(b.a,{button:!0,onClick:function(){return _e((function(e){return[!e[0]].concat(Object(u.a)(e.slice(1)))}))}},l.a.createElement(g.a,{color:"textSecondary"},e("common:information")),Be[0]?l.a.createElement(K.a,null):l.a.createElement(Y.a,null)),l.a.createElement(y.a,{in:Be[0],timeout:"auto",unmountOnExit:!0},a[0].map((function(e){return l.a.createElement(b.a,{disabled:e.disabled,button:!0,key:e.to},l.a.createElement(ke,{to:e.to,text:e.text,icon:e.icon,disabled:e.disabled,theme:Me}))}))),l.a.createElement(b.a,{button:!0,onClick:function(){return _e((function(e){return[e[0],!e[1]].concat(Object(u.a)(e.slice(2)))}))}},l.a.createElement(g.a,{color:"textSecondary"},e("common:tools")),Be[1]?l.a.createElement(K.a,null):l.a.createElement(Y.a,null)),l.a.createElement(y.a,{in:Be[1],timeout:"auto",unmountOnExit:!0},a[1].map((function(e){return l.a.createElement(b.a,{disabled:e.disabled,button:!0,key:e.to},l.a.createElement(ke,{to:e.to,text:e.text,icon:e.icon,disabled:e.disabled,theme:Me}))}))),l.a.createElement(b.a,{button:!0,onClick:function(){return _e((function(e){return[e[0],e[1],!e[2]].concat(Object(u.a)(e.slice(3)))}))}},l.a.createElement(g.a,{color:"textSecondary"},e("common:about")),Be[1]?l.a.createElement(K.a,null):l.a.createElement(Y.a,null)),l.a.createElement(y.a,{in:Be[2],timeout:"auto",unmountOnExit:!0},a[2].map((function(e){return l.a.createElement(b.a,{disabled:e.disabled,button:!0,key:e.to},l.a.createElement(ke,{to:e.to,text:e.text,icon:e.icon,disabled:e.disabled,theme:Me}))}))))),Je=void 0!==window?function(){return window.document.body}:void 0;return l.a.createElement(j.a,{theme:Me},l.a.createElement("div",{className:t.root},l.a.createElement(x.a,null),l.a.createElement(O.a,{position:"fixed",className:t.appBar},l.a.createElement(k.a,null,l.a.createElement(B.a,{color:"inherit",edge:"start",onClick:Ne,className:t.menuButton},l.a.createElement(H.a,null)),l.a.createElement(g.a,{variant:"h6",noWrap:!0,classes:{root:t.title}},"Sekai Viewer"," ",l.a.createElement(g.a,{component:"span",variant:"body2"},"Open Beta")),l.a.createElement(B.a,{color:"inherit",onClick:function(){return Ie()},disableRipple:!0},l.a.createElement(Z.a,null)),l.a.createElement(B.a,{color:"inherit",onClick:function(){return p(!0)}},l.a.createElement(ee.a,null)))),l.a.createElement("nav",{className:t.drawer},l.a.createElement(_.a,{mdUp:!0,implementation:"css"},l.a.createElement(C.a,{container:Je,variant:"temporary",anchor:"rtl"===Me.direction?"right":"left",open:c,onClose:Ne,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},Ue)),l.a.createElement(_.a,{smDown:!0,implementation:"css"},l.a.createElement(C.a,{variant:"permanent",open:!0,classes:{paper:t.drawerPaper}},Ue))),l.a.createElement(P.a,{className:t.content},l.a.createElement("div",{className:t.toolbar}),l.a.createElement(re.c,null,l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null,"Loading...")},l.a.createElement(re.a,{path:"/",exact:!0},l.a.createElement(me,null)),l.a.createElement(re.a,{path:"/card",exact:!0},l.a.createElement(ue,null)),l.a.createElement(re.a,{path:"/card/:cardId(\\d+)"},l.a.createElement(pe,null)),l.a.createElement(re.a,{path:"/music",exact:!0},l.a.createElement(se,null)),l.a.createElement(re.a,{path:"/music/:musicId(\\d+)"},l.a.createElement(Ee,null)),l.a.createElement(re.a,{path:"/gacha",exact:!0},l.a.createElement(de,null)),l.a.createElement(re.a,{path:"/gacha/:gachaId"},l.a.createElement(be,null)),l.a.createElement(re.a,{path:"/event",exact:!0},l.a.createElement(Ae,null)),l.a.createElement(re.a,{path:"/event/:eventId"},l.a.createElement(fe,null)),l.a.createElement(re.a,{path:"/stamp"},l.a.createElement(we,null)),l.a.createElement(re.a,{path:"/comic"},l.a.createElement(he,null)),l.a.createElement(re.a,{path:"/chara",exact:!0},l.a.createElement(ve,null)),l.a.createElement(re.a,{path:"/chara/:charaId"},l.a.createElement(ge,null)),l.a.createElement(re.a,{path:"/unit/:unitId"},l.a.createElement(ye,null)),l.a.createElement(re.a,{path:"/about",exact:!0},l.a.createElement(je,null)),l.a.createElement(re.a,{path:"/support",exact:!0},l.a.createElement(xe,null))))),l.a.createElement(Q.a,{open:A,onClose:function(){return p(!1)}},l.a.createElement(T.a,null,e("common:settings.title")),l.a.createElement(S.a,null,l.a.createElement(R.a,{component:"fieldset",style:{margin:"1% 0"}},l.a.createElement(z.a,{component:"legend"},e("common:language")),l.a.createElement(I.a,{row:!0,"aria-label":"language",value:Pe,onChange:function(e,a){return Se(a)}},l.a.createElement(D.a,{value:"en",control:l.a.createElement(M.a,null),label:"EN"}),l.a.createElement(D.a,{value:"zh-CN",control:l.a.createElement(M.a,null),label:"\u7b80"}),l.a.createElement(D.a,{value:"zh-TW",control:l.a.createElement(M.a,null),label:"\u7e41"}),l.a.createElement(D.a,{value:"ja",control:l.a.createElement(M.a,null),label:"\u65e5"}),l.a.createElement(D.a,{value:"ko",control:l.a.createElement(M.a,null),label:"\ud55c"}),l.a.createElement(D.a,{value:"es",control:l.a.createElement(M.a,null),label:"Es"}),l.a.createElement(D.a,{value:"it",control:l.a.createElement(M.a,null),label:"It"}),l.a.createElement(D.a,{value:"pl",control:l.a.createElement(M.a,null),label:"pl"}),l.a.createElement(D.a,{value:"pt-BR",control:l.a.createElement(M.a,null),label:"Pt-BR"}),l.a.createElement(D.a,{value:"fr",control:l.a.createElement(M.a,null),label:"Fr"}),l.a.createElement(D.a,{value:"de",control:l.a.createElement(M.a,null),label:"De"}),l.a.createElement(D.a,{value:"ru",control:l.a.createElement(M.a,null),label:"\u0440\u0443\u0441\u0441\u043a\u0438\u0439"}))),l.a.createElement(R.a,{component:"fieldset",style:{margin:"1% 0"}},l.a.createElement(z.a,{component:"legend"},e("common:darkmode")),l.a.createElement(I.a,{row:!0,"aria-label":"dark mode",value:Qe,onChange:function(e,a){return Re(a)}},l.a.createElement(D.a,{value:"dark",control:l.a.createElement(M.a,null),label:l.a.createElement(ae.a,null)}),l.a.createElement(D.a,{value:"light",control:l.a.createElement(M.a,null),label:l.a.createElement(te.a,null)}),l.a.createElement(D.a,{value:"auto",control:l.a.createElement(M.a,null),label:l.a.createElement(ne.a,null)}))),l.a.createElement(R.a,{component:"fieldset",style:{margin:"1% 0"}},l.a.createElement(z.a,{component:"legend"},e("common:contentTranslationMode.title")),l.a.createElement(I.a,{row:!0,"aria-label":"show translated",value:Te,onChange:function(e,a){return ze(a)}},l.a.createElement(D.a,{value:"original",control:l.a.createElement(M.a,null),label:e("common:contentTranslationMode.original")}),l.a.createElement(D.a,{value:"translated",control:l.a.createElement(M.a,null),label:e("common:contentTranslationMode.translated")}),l.a.createElement(D.a,{value:"both",control:l.a.createElement(M.a,null),label:e("common:contentTranslationMode.both")})))),l.a.createElement(N.a,null,l.a.createElement(U.a,{onClick:function(){return p(!1)},color:"primary"},"Close")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(5880);var _e=t(50);t(5881);Object(_e.a)(),i.a.initialize({gtmId:"GTM-NFC6SW2"}),r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ce.a,null,l.a.createElement(n.Suspense,{fallback:"loading"},l.a.createElement(ie.b,null,l.a.createElement(Be,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[5863,8,9]]]);
//# sourceMappingURL=main.d2b54ea9.chunk.js.map