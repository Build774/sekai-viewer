(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[6],{6048:function(n,r,t){"use strict";t.d(r,"a",(function(){return i})),t.d(r,"d",(function(){return o})),t.d(r,"b",(function(){return c})),t.d(r,"c",(function(){return a}));var e=t(0),u=(t(4),e.createContext(null));function i(n){var r=n.children,t=n.value,i=function(){var n=e.useState(null),r=n[0],t=n[1];return e.useEffect((function(){t("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),r}(),o=e.useMemo((function(){return{idPrefix:i,value:t}}),[i,t]);return e.createElement(u.Provider,{value:o},r)}function o(){return e.useContext(u)}function c(n,r){return null===n.idPrefix?null:"".concat(n.idPrefix,"-P-").concat(r)}function a(n,r){return null===n.idPrefix?null:"".concat(n.idPrefix,"-T-").concat(r)}},6049:function(n,r,t){"use strict";var e=t(1),u=t(2),i=t(0),o=(t(4),t(3)),c=t(5),a=t(6048),s=i.forwardRef((function(n,r){var t=n.children,c=n.className,s=n.classes,m=n.value,f=Object(u.a)(n,["children","className","classes","value"]),d=Object(a.d)();if(null===d)throw new TypeError("No TabContext provided");var l=Object(a.b)(d,m),p=Object(a.c)(d,m);return i.createElement("div",Object(e.a)({"aria-labelledby":p,className:Object(o.a)(s.root,c),hidden:m!==d.value,id:l,ref:r,role:"tabpanel"},f),m===d.value&&t)}));r.a=Object(c.a)((function(n){return{root:{padding:n.spacing(3)}}}),{name:"MuiTabPanel"})(s)},6052:function(n,r,t){"use strict";var e=t(33),u=t(1),i=(t(4),t(55));var o=function(n){var r=function(r){var t=n(r);return r.css?Object(u.a)(Object(u.a)({},Object(i.a)(t,n(Object(u.a)({theme:r.theme},r.css)))),function(n,r){var t={};return Object.keys(n).forEach((function(e){-1===r.indexOf(e)&&(t[e]=n[e])})),t}(r.css,[n.filterProps])):t};return r.propTypes={},r.filterProps=["css"].concat(Object(e.a)(n.filterProps)),r};var c=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];var e=function(n){return r.reduce((function(r,t){var e=t(n);return e?Object(i.a)(r,e):r}),{})};return e.propTypes={},e.filterProps=r.reduce((function(n,r){return n.concat(r.filterProps)}),[]),e},a=t(8),s=t(82);function m(n,r){return r&&"string"===typeof r?r.split(".").reduce((function(n,r){return n&&n[r]?n[r]:null}),n):null}var f=function(n){var r=n.prop,t=n.cssProperty,e=void 0===t?n.prop:t,u=n.themeKey,i=n.transform,o=function(n){if(null==n[r])return null;var t=n[r],o=m(n.theme,u)||{};return Object(s.a)(n,t,(function(n){var r;return"function"===typeof o?r=o(n):Array.isArray(o)?r=o[n]||n:(r=m(o,n)||n,i&&(r=i(r))),!1===e?r:Object(a.a)({},e,r)}))};return o.propTypes={},o.filterProps=[r],o};function d(n){return"number"!==typeof n?n:"".concat(n,"px solid")}var l=c(f({prop:"border",themeKey:"borders",transform:d}),f({prop:"borderTop",themeKey:"borders",transform:d}),f({prop:"borderRight",themeKey:"borders",transform:d}),f({prop:"borderBottom",themeKey:"borders",transform:d}),f({prop:"borderLeft",themeKey:"borders",transform:d}),f({prop:"borderColor",themeKey:"palette"}),f({prop:"borderRadius",themeKey:"shape"})),p=c(f({prop:"displayPrint",cssProperty:!1,transform:function(n){return{"@media print":{display:n}}}}),f({prop:"display"}),f({prop:"overflow"}),f({prop:"textOverflow"}),f({prop:"visibility"}),f({prop:"whiteSpace"})),h=c(f({prop:"flexBasis"}),f({prop:"flexDirection"}),f({prop:"flexWrap"}),f({prop:"justifyContent"}),f({prop:"alignItems"}),f({prop:"alignContent"}),f({prop:"order"}),f({prop:"flex"}),f({prop:"flexGrow"}),f({prop:"flexShrink"}),f({prop:"alignSelf"}),f({prop:"justifyItems"}),f({prop:"justifySelf"})),y=c(f({prop:"gridGap"}),f({prop:"gridColumnGap"}),f({prop:"gridRowGap"}),f({prop:"gridColumn"}),f({prop:"gridRow"}),f({prop:"gridAutoFlow"}),f({prop:"gridAutoColumns"}),f({prop:"gridAutoRows"}),f({prop:"gridTemplateColumns"}),f({prop:"gridTemplateRows"}),f({prop:"gridTemplateAreas"}),f({prop:"gridArea"})),k=c(f({prop:"position"}),f({prop:"zIndex",themeKey:"zIndex"}),f({prop:"top"}),f({prop:"right"}),f({prop:"bottom"}),f({prop:"left"})),g=c(f({prop:"color",themeKey:"palette"}),f({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),v=f({prop:"boxShadow",themeKey:"shadows"});function w(n){return n<=1?"".concat(100*n,"%"):n}var b=f({prop:"width",transform:w}),j=f({prop:"maxWidth",transform:w}),O=f({prop:"minWidth",transform:w}),x=f({prop:"height",transform:w}),P=f({prop:"maxHeight",transform:w}),C=f({prop:"minHeight",transform:w}),M=(f({prop:"size",cssProperty:"width",transform:w}),f({prop:"size",cssProperty:"height",transform:w}),c(b,j,O,x,P,C,f({prop:"boxSizing"}))),z=t(5954),N=c(f({prop:"fontFamily",themeKey:"typography"}),f({prop:"fontSize",themeKey:"typography"}),f({prop:"fontStyle",themeKey:"typography"}),f({prop:"fontWeight",themeKey:"typography"}),f({prop:"letterSpacing"}),f({prop:"lineHeight"}),f({prop:"textAlign"})),T=t(2),K=t(0),S=t.n(K),A=t(3),E=t(36),R=t.n(E),W=t(5887);function D(n,r){var t={};return Object.keys(n).forEach((function(e){-1===r.indexOf(e)&&(t[e]=n[e])})),t}var F=t(35),G=function(n){var r=function(n){return function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.name,i=Object(T.a)(t,["name"]);var o,c=e,a="function"===typeof r?function(n){return{root:function(t){return r(Object(u.a)({theme:n},t))}}}:{root:r},s=Object(W.a)(a,Object(u.a)({Component:n,name:e||n.displayName,classNamePrefix:c},i));r.filterProps&&(o=r.filterProps,delete r.filterProps),r.propTypes&&(r.propTypes,delete r.propTypes);var m=S.a.forwardRef((function(r,t){var e=r.children,i=r.className,c=r.clone,a=r.component,m=Object(T.a)(r,["children","className","clone","component"]),f=s(r),d=Object(A.a)(f.root,i),l=m;if(o&&(l=D(l,o)),c)return S.a.cloneElement(e,Object(u.a)({className:Object(A.a)(e.props.className,d)},l));if("function"===typeof e)return e(Object(u.a)({className:d},l));var p=a||n;return S.a.createElement(p,Object(u.a)({ref:t,className:d},l),e)}));return R()(m,n),m}}(n);return function(n,t){return r(n,Object(u.a)({defaultTheme:F.a},t))}},I=o(c(l,p,h,y,k,g,v,M,z.b,N)),B=G("div")(I,{name:"MuiBox"});r.a=B},6067:function(n,r,t){var e;!function(){var u={y:function(n){return 1===n?"\u03c7\u03c1\u03cc\u03bd\u03bf\u03c2":"\u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"},mo:function(n){return 1===n?"\u03bc\u03ae\u03bd\u03b1\u03c2":"\u03bc\u03ae\u03bd\u03b5\u03c2"},w:function(n){return 1===n?"\u03b5\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b1":"\u03b5\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b5\u03c2"},d:function(n){return 1===n?"\u03bc\u03ad\u03c1\u03b1":"\u03bc\u03ad\u03c1\u03b5\u03c2"},h:function(n){return 1===n?"\u03ce\u03c1\u03b1":"\u03ce\u03c1\u03b5\u03c2"},m:function(n){return 1===n?"\u03bb\u03b5\u03c0\u03c4\u03cc":"\u03bb\u03b5\u03c0\u03c4\u03ac"},s:function(n){return 1===n?"\u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03bf":"\u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1"},ms:function(n){return 1===n?"\u03c7\u03b9\u03bb\u03b9\u03bf\u03c3\u03c4\u03cc \u03c4\u03bf\u03c5 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03bf\u03bb\u03ad\u03c0\u03c4\u03bf\u03c5":"\u03c7\u03b9\u03bb\u03b9\u03bf\u03c3\u03c4\u03ac \u03c4\u03bf\u03c5 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03bf\u03bb\u03ad\u03c0\u03c4\u03bf\u03c5"},decimal:","},i={ar:{y:function(n){return 1===n?"\u0633\u0646\u0629":"\u0633\u0646\u0648\u0627\u062a"},mo:function(n){return 1===n?"\u0634\u0647\u0631":"\u0623\u0634\u0647\u0631"},w:function(n){return 1===n?"\u0623\u0633\u0628\u0648\u0639":"\u0623\u0633\u0627\u0628\u064a\u0639"},d:function(n){return 1===n?"\u064a\u0648\u0645":"\u0623\u064a\u0627\u0645"},h:function(n){return 1===n?"\u0633\u0627\u0639\u0629":"\u0633\u0627\u0639\u0627\u062a"},m:function(n){return n>2&&n<11?"\u062f\u0642\u0627\u0626\u0642":"\u062f\u0642\u064a\u0642\u0629"},s:function(n){return 1===n?"\u062b\u0627\u0646\u064a\u0629":"\u062b\u0648\u0627\u0646\u064a"},ms:function(n){return 1===n?"\u062c\u0632\u0621 \u0645\u0646 \u0627\u0644\u062b\u0627\u0646\u064a\u0629":"\u0623\u062c\u0632\u0627\u0621 \u0645\u0646 \u0627\u0644\u062b\u0627\u0646\u064a\u0629"},decimal:","},bg:{y:function(n){return["\u0433\u043e\u0434\u0438\u043d\u0438","\u0433\u043e\u0434\u0438\u043d\u0430","\u0433\u043e\u0434\u0438\u043d\u0438"][f(n)]},mo:function(n){return["\u043c\u0435\u0441\u0435\u0446\u0430","\u043c\u0435\u0441\u0435\u0446","\u043c\u0435\u0441\u0435\u0446\u0430"][f(n)]},w:function(n){return["\u0441\u0435\u0434\u043c\u0438\u0446\u0438","\u0441\u0435\u0434\u043c\u0438\u0446\u0430","\u0441\u0435\u0434\u043c\u0438\u0446\u0438"][f(n)]},d:function(n){return["\u0434\u043d\u0438","\u0434\u0435\u043d","\u0434\u043d\u0438"][f(n)]},h:function(n){return["\u0447\u0430\u0441\u0430","\u0447\u0430\u0441","\u0447\u0430\u0441\u0430"][f(n)]},m:function(n){return["\u043c\u0438\u043d\u0443\u0442\u0438","\u043c\u0438\u043d\u0443\u0442\u0430","\u043c\u0438\u043d\u0443\u0442\u0438"][f(n)]},s:function(n){return["\u0441\u0435\u043a\u0443\u043d\u0434\u0438","\u0441\u0435\u043a\u0443\u043d\u0434\u0430","\u0441\u0435\u043a\u0443\u043d\u0434\u0438"][f(n)]},ms:function(n){return["\u043c\u0438\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u0438","\u043c\u0438\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u0430","\u043c\u0438\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u0438"][f(n)]},decimal:","},ca:{y:function(n){return"any"+(1===n?"":"s")},mo:function(n){return"mes"+(1===n?"":"os")},w:function(n){return"setman"+(1===n?"a":"es")},d:function(n){return"di"+(1===n?"a":"es")},h:function(n){return"hor"+(1===n?"a":"es")},m:function(n){return"minut"+(1===n?"":"s")},s:function(n){return"segon"+(1===n?"":"s")},ms:function(n){return"milisegon"+(1===n?"":"s")},decimal:","},cs:{y:function(n){return["rok","roku","roky","let"][d(n)]},mo:function(n){return["m\u011bs\xedc","m\u011bs\xedce","m\u011bs\xedce","m\u011bs\xedc\u016f"][d(n)]},w:function(n){return["t\xfdden","t\xfddne","t\xfddny","t\xfddn\u016f"][d(n)]},d:function(n){return["den","dne","dny","dn\xed"][d(n)]},h:function(n){return["hodina","hodiny","hodiny","hodin"][d(n)]},m:function(n){return["minuta","minuty","minuty","minut"][d(n)]},s:function(n){return["sekunda","sekundy","sekundy","sekund"][d(n)]},ms:function(n){return["milisekunda","milisekundy","milisekundy","milisekund"][d(n)]},decimal:","},da:{y:"\xe5r",mo:function(n){return"m\xe5ned"+(1===n?"":"er")},w:function(n){return"uge"+(1===n?"":"r")},d:function(n){return"dag"+(1===n?"":"e")},h:function(n){return"time"+(1===n?"":"r")},m:function(n){return"minut"+(1===n?"":"ter")},s:function(n){return"sekund"+(1===n?"":"er")},ms:function(n){return"millisekund"+(1===n?"":"er")},decimal:","},de:{y:function(n){return"Jahr"+(1===n?"":"e")},mo:function(n){return"Monat"+(1===n?"":"e")},w:function(n){return"Woche"+(1===n?"":"n")},d:function(n){return"Tag"+(1===n?"":"e")},h:function(n){return"Stunde"+(1===n?"":"n")},m:function(n){return"Minute"+(1===n?"":"n")},s:function(n){return"Sekunde"+(1===n?"":"n")},ms:function(n){return"Millisekunde"+(1===n?"":"n")},decimal:","},el:u,en:{y:function(n){return"year"+(1===n?"":"s")},mo:function(n){return"month"+(1===n?"":"s")},w:function(n){return"week"+(1===n?"":"s")},d:function(n){return"day"+(1===n?"":"s")},h:function(n){return"hour"+(1===n?"":"s")},m:function(n){return"minute"+(1===n?"":"s")},s:function(n){return"second"+(1===n?"":"s")},ms:function(n){return"millisecond"+(1===n?"":"s")},decimal:"."},es:{y:function(n){return"a\xf1o"+(1===n?"":"s")},mo:function(n){return"mes"+(1===n?"":"es")},w:function(n){return"semana"+(1===n?"":"s")},d:function(n){return"d\xeda"+(1===n?"":"s")},h:function(n){return"hora"+(1===n?"":"s")},m:function(n){return"minuto"+(1===n?"":"s")},s:function(n){return"segundo"+(1===n?"":"s")},ms:function(n){return"milisegundo"+(1===n?"":"s")},decimal:","},et:{y:function(n){return"aasta"+(1===n?"":"t")},mo:function(n){return"kuu"+(1===n?"":"d")},w:function(n){return"n\xe4dal"+(1===n?"":"at")},d:function(n){return"p\xe4ev"+(1===n?"":"a")},h:function(n){return"tund"+(1===n?"":"i")},m:function(n){return"minut"+(1===n?"":"it")},s:function(n){return"sekund"+(1===n?"":"it")},ms:function(n){return"millisekund"+(1===n?"":"it")},decimal:","},fa:{y:"\u0633\u0627\u0644",mo:"\u0645\u0627\u0647",w:"\u0647\u0641\u062a\u0647",d:"\u0631\u0648\u0632",h:"\u0633\u0627\u0639\u062a",m:"\u062f\u0642\u06cc\u0642\u0647",s:"\u062b\u0627\u0646\u06cc\u0647",ms:"\u0645\u06cc\u0644\u06cc \u062b\u0627\u0646\u06cc\u0647",decimal:"."},fi:{y:function(n){return 1===n?"vuosi":"vuotta"},mo:function(n){return 1===n?"kuukausi":"kuukautta"},w:function(n){return"viikko"+(1===n?"":"a")},d:function(n){return"p\xe4iv\xe4"+(1===n?"":"\xe4")},h:function(n){return"tunti"+(1===n?"":"a")},m:function(n){return"minuutti"+(1===n?"":"a")},s:function(n){return"sekunti"+(1===n?"":"a")},ms:function(n){return"millisekunti"+(1===n?"":"a")},decimal:","},fo:{y:"\xe1r",mo:function(n){return 1===n?"m\xe1na\xf0ur":"m\xe1na\xf0ir"},w:function(n){return 1===n?"vika":"vikur"},d:function(n){return 1===n?"dagur":"dagar"},h:function(n){return 1===n?"t\xedmi":"t\xedmar"},m:function(n){return 1===n?"minuttur":"minuttir"},s:"sekund",ms:"millisekund",decimal:","},fr:{y:function(n){return"an"+(n>=2?"s":"")},mo:"mois",w:function(n){return"semaine"+(n>=2?"s":"")},d:function(n){return"jour"+(n>=2?"s":"")},h:function(n){return"heure"+(n>=2?"s":"")},m:function(n){return"minute"+(n>=2?"s":"")},s:function(n){return"seconde"+(n>=2?"s":"")},ms:function(n){return"milliseconde"+(n>=2?"s":"")},decimal:","},gr:u,he:{y:function(n){return 1===n?"\u05e9\u05e0\u05d4":"\u05e9\u05e0\u05d9\u05dd"},mo:function(n){return 1===n?"\u05d7\u05d5\u05d3\u05e9":"\u05d7\u05d5\u05d3\u05e9\u05d9\u05dd"},w:function(n){return 1===n?"\u05e9\u05d1\u05d5\u05e2":"\u05e9\u05d1\u05d5\u05e2\u05d5\u05ea"},d:function(n){return 1===n?"\u05d9\u05d5\u05dd":"\u05d9\u05de\u05d9\u05dd"},h:function(n){return 1===n?"\u05e9\u05e2\u05d4":"\u05e9\u05e2\u05d5\u05ea"},m:function(n){return 1===n?"\u05d3\u05e7\u05d4":"\u05d3\u05e7\u05d5\u05ea"},s:function(n){return 1===n?"\u05e9\u05e0\u05d9\u05d4":"\u05e9\u05e0\u05d9\u05d5\u05ea"},ms:function(n){return 1===n?"\u05de\u05d9\u05dc\u05d9\u05e9\u05e0\u05d9\u05d9\u05d4":"\u05de\u05d9\u05dc\u05d9\u05e9\u05e0\u05d9\u05d5\u05ea"},decimal:"."},hr:{y:function(n){return n%10===2||n%10===3||n%10===4?"godine":"godina"},mo:function(n){return 1===n?"mjesec":2===n||3===n||4===n?"mjeseca":"mjeseci"},w:function(n){return n%10===1&&11!==n?"tjedan":"tjedna"},d:function(n){return 1===n?"dan":"dana"},h:function(n){return 1===n?"sat":2===n||3===n||4===n?"sata":"sati"},m:function(n){var r=n%10;return 2!==r&&3!==r&&4!==r||!(n<10||n>14)?"minuta":"minute"},s:function(n){return 10===n||11===n||12===n||13===n||14===n||16===n||17===n||18===n||19===n||n%10===5?"sekundi":n%10===1?"sekunda":n%10===2||n%10===3||n%10===4?"sekunde":"sekundi"},ms:function(n){return 1===n?"milisekunda":n%10===2||n%10===3||n%10===4?"milisekunde":"milisekundi"},decimal:","},hi:{y:"\u0938\u093e\u0932",mo:function(n){return 1===n?"\u092e\u0939\u0940\u0928\u093e":"\u092e\u0939\u0940\u0928\u0947"},w:function(n){return 1===n?"\u0939\u095e\u094d\u0924\u093e":"\u0939\u092b\u094d\u0924\u0947"},d:"\u0926\u093f\u0928",h:function(n){return 1===n?"\u0918\u0902\u091f\u093e":"\u0918\u0902\u091f\u0947"},m:"\u092e\u093f\u0928\u091f",s:"\u0938\u0947\u0915\u0902\u0921",ms:"\u092e\u093f\u0932\u0940\u0938\u0947\u0915\u0902\u0921",decimal:"."},hu:{y:"\xe9v",mo:"h\xf3nap",w:"h\xe9t",d:"nap",h:"\xf3ra",m:"perc",s:"m\xe1sodperc",ms:"ezredm\xe1sodperc",decimal:","},id:{y:"tahun",mo:"bulan",w:"minggu",d:"hari",h:"jam",m:"menit",s:"detik",ms:"milidetik",decimal:"."},is:{y:"\xe1r",mo:function(n){return"m\xe1nu\xf0"+(1===n?"ur":"ir")},w:function(n){return"vik"+(1===n?"a":"ur")},d:function(n){return"dag"+(1===n?"ur":"ar")},h:function(n){return"klukkut\xedm"+(1===n?"i":"ar")},m:function(n){return"m\xedn\xfat"+(1===n?"a":"ur")},s:function(n){return"sek\xfand"+(1===n?"a":"ur")},ms:function(n){return"millisek\xfand"+(1===n?"a":"ur")},decimal:"."},it:{y:function(n){return"ann"+(1===n?"o":"i")},mo:function(n){return"mes"+(1===n?"e":"i")},w:function(n){return"settiman"+(1===n?"a":"e")},d:function(n){return"giorn"+(1===n?"o":"i")},h:function(n){return"or"+(1===n?"a":"e")},m:function(n){return"minut"+(1===n?"o":"i")},s:function(n){return"second"+(1===n?"o":"i")},ms:function(n){return"millisecond"+(1===n?"o":"i")},decimal:","},ja:{y:"\u5e74",mo:"\u6708",w:"\u9031",d:"\u65e5",h:"\u6642\u9593",m:"\u5206",s:"\u79d2",ms:"\u30df\u30ea\u79d2",decimal:"."},ko:{y:"\ub144",mo:"\uac1c\uc6d4",w:"\uc8fc\uc77c",d:"\uc77c",h:"\uc2dc\uac04",m:"\ubd84",s:"\ucd08",ms:"\ubc00\ub9ac \ucd08",decimal:"."},lo:{y:"\u0e9b\u0eb5",mo:"\u0ec0\u0e94\u0eb7\u0ead\u0e99",w:"\u0ead\u0eb2\u0e97\u0eb4\u0e94",d:"\u0ea1\u0eb7\u0ec9",h:"\u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",m:"\u0e99\u0eb2\u0e97\u0eb5",s:"\u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",ms:"\u0ea1\u0eb4\u0e99\u0ea5\u0eb4\u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",decimal:","},lt:{y:function(n){return n%10===0||n%100>=10&&n%100<=20?"met\u0173":"metai"},mo:function(n){return["m\u0117nuo","m\u0117nesiai","m\u0117nesi\u0173"][l(n)]},w:function(n){return["savait\u0117","savait\u0117s","savai\u010di\u0173"][l(n)]},d:function(n){return["diena","dienos","dien\u0173"][l(n)]},h:function(n){return["valanda","valandos","valand\u0173"][l(n)]},m:function(n){return["minut\u0117","minut\u0117s","minu\u010di\u0173"][l(n)]},s:function(n){return["sekund\u0117","sekund\u0117s","sekund\u017ei\u0173"][l(n)]},ms:function(n){return["milisekund\u0117","milisekund\u0117s","milisekund\u017ei\u0173"][l(n)]},decimal:","},lv:{y:function(n){return p(n)?"gads":"gadi"},mo:function(n){return p(n)?"m\u0113nesis":"m\u0113ne\u0161i"},w:function(n){return p(n)?"ned\u0113\u013ca":"ned\u0113\u013cas"},d:function(n){return p(n)?"diena":"dienas"},h:function(n){return p(n)?"stunda":"stundas"},m:function(n){return p(n)?"min\u016bte":"min\u016btes"},s:function(n){return p(n)?"sekunde":"sekundes"},ms:function(n){return p(n)?"milisekunde":"milisekundes"},decimal:","},ms:{y:"tahun",mo:"bulan",w:"minggu",d:"hari",h:"jam",m:"minit",s:"saat",ms:"milisaat",decimal:"."},nl:{y:"jaar",mo:function(n){return 1===n?"maand":"maanden"},w:function(n){return 1===n?"week":"weken"},d:function(n){return 1===n?"dag":"dagen"},h:"uur",m:function(n){return 1===n?"minuut":"minuten"},s:function(n){return 1===n?"seconde":"seconden"},ms:function(n){return 1===n?"milliseconde":"milliseconden"},decimal:","},no:{y:"\xe5r",mo:function(n){return"m\xe5ned"+(1===n?"":"er")},w:function(n){return"uke"+(1===n?"":"r")},d:function(n){return"dag"+(1===n?"":"er")},h:function(n){return"time"+(1===n?"":"r")},m:function(n){return"minutt"+(1===n?"":"er")},s:function(n){return"sekund"+(1===n?"":"er")},ms:function(n){return"millisekund"+(1===n?"":"er")},decimal:","},pl:{y:function(n){return["rok","roku","lata","lat"][m(n)]},mo:function(n){return["miesi\u0105c","miesi\u0105ca","miesi\u0105ce","miesi\u0119cy"][m(n)]},w:function(n){return["tydzie\u0144","tygodnia","tygodnie","tygodni"][m(n)]},d:function(n){return["dzie\u0144","dnia","dni","dni"][m(n)]},h:function(n){return["godzina","godziny","godziny","godzin"][m(n)]},m:function(n){return["minuta","minuty","minuty","minut"][m(n)]},s:function(n){return["sekunda","sekundy","sekundy","sekund"][m(n)]},ms:function(n){return["milisekunda","milisekundy","milisekundy","milisekund"][m(n)]},decimal:","},pt:{y:function(n){return"ano"+(1===n?"":"s")},mo:function(n){return 1===n?"m\xeas":"meses"},w:function(n){return"semana"+(1===n?"":"s")},d:function(n){return"dia"+(1===n?"":"s")},h:function(n){return"hora"+(1===n?"":"s")},m:function(n){return"minuto"+(1===n?"":"s")},s:function(n){return"segundo"+(1===n?"":"s")},ms:function(n){return"milissegundo"+(1===n?"":"s")},decimal:","},ro:{y:function(n){return 1===n?"an":"ani"},mo:function(n){return 1===n?"lun\u0103":"luni"},w:function(n){return 1===n?"s\u0103pt\u0103m\xe2n\u0103":"s\u0103pt\u0103m\xe2ni"},d:function(n){return 1===n?"zi":"zile"},h:function(n){return 1===n?"or\u0103":"ore"},m:function(n){return 1===n?"minut":"minute"},s:function(n){return 1===n?"secund\u0103":"secunde"},ms:function(n){return 1===n?"milisecund\u0103":"milisecunde"},decimal:","},ru:{y:function(n){return["\u043b\u0435\u0442","\u0433\u043e\u0434","\u0433\u043e\u0434\u0430"][f(n)]},mo:function(n){return["\u043c\u0435\u0441\u044f\u0446\u0435\u0432","\u043c\u0435\u0441\u044f\u0446","\u043c\u0435\u0441\u044f\u0446\u0430"][f(n)]},w:function(n){return["\u043d\u0435\u0434\u0435\u043b\u044c","\u043d\u0435\u0434\u0435\u043b\u044f","\u043d\u0435\u0434\u0435\u043b\u0438"][f(n)]},d:function(n){return["\u0434\u043d\u0435\u0439","\u0434\u0435\u043d\u044c","\u0434\u043d\u044f"][f(n)]},h:function(n){return["\u0447\u0430\u0441\u043e\u0432","\u0447\u0430\u0441","\u0447\u0430\u0441\u0430"][f(n)]},m:function(n){return["\u043c\u0438\u043d\u0443\u0442","\u043c\u0438\u043d\u0443\u0442\u0430","\u043c\u0438\u043d\u0443\u0442\u044b"][f(n)]},s:function(n){return["\u0441\u0435\u043a\u0443\u043d\u0434","\u0441\u0435\u043a\u0443\u043d\u0434\u0430","\u0441\u0435\u043a\u0443\u043d\u0434\u044b"][f(n)]},ms:function(n){return["\u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434","\u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u0430","\u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u044b"][f(n)]},decimal:","},uk:{y:function(n){return["\u0440\u043e\u043a\u0456\u0432","\u0440\u0456\u043a","\u0440\u043e\u043a\u0438"][f(n)]},mo:function(n){return["\u043c\u0456\u0441\u044f\u0446\u0456\u0432","\u043c\u0456\u0441\u044f\u0446\u044c","\u043c\u0456\u0441\u044f\u0446\u0456"][f(n)]},w:function(n){return["\u0442\u0438\u0436\u043d\u0456\u0432","\u0442\u0438\u0436\u0434\u0435\u043d\u044c","\u0442\u0438\u0436\u043d\u0456"][f(n)]},d:function(n){return["\u0434\u043d\u0456\u0432","\u0434\u0435\u043d\u044c","\u0434\u043d\u0456"][f(n)]},h:function(n){return["\u0433\u043e\u0434\u0438\u043d","\u0433\u043e\u0434\u0438\u043d\u0430","\u0433\u043e\u0434\u0438\u043d\u0438"][f(n)]},m:function(n){return["\u0445\u0432\u0438\u043b\u0438\u043d","\u0445\u0432\u0438\u043b\u0438\u043d\u0430","\u0445\u0432\u0438\u043b\u0438\u043d\u0438"][f(n)]},s:function(n){return["\u0441\u0435\u043a\u0443\u043d\u0434","\u0441\u0435\u043a\u0443\u043d\u0434\u0430","\u0441\u0435\u043a\u0443\u043d\u0434\u0438"][f(n)]},ms:function(n){return["\u043c\u0456\u043b\u0456\u0441\u0435\u043a\u0443\u043d\u0434","\u043c\u0456\u043b\u0456\u0441\u0435\u043a\u0443\u043d\u0434\u0430","\u043c\u0456\u043b\u0456\u0441\u0435\u043a\u0443\u043d\u0434\u0438"][f(n)]},decimal:","},ur:{y:"\u0633\u0627\u0644",mo:function(n){return 1===n?"\u0645\u06c1\u06cc\u0646\u06c1":"\u0645\u06c1\u06cc\u0646\u06d2"},w:function(n){return 1===n?"\u06c1\u0641\u062a\u06c1":"\u06c1\u0641\u062a\u06d2"},d:"\u062f\u0646",h:function(n){return 1===n?"\u06af\u06be\u0646\u0679\u06c1":"\u06af\u06be\u0646\u0679\u06d2"},m:"\u0645\u0646\u0679",s:"\u0633\u06cc\u06a9\u0646\u0688",ms:"\u0645\u0644\u06cc \u0633\u06cc\u06a9\u0646\u0688",decimal:"."},sk:{y:function(n){return["rok","roky","roky","rokov"][d(n)]},mo:function(n){return["mesiac","mesiace","mesiace","mesiacov"][d(n)]},w:function(n){return["t\xfd\u017ede\u0148","t\xfd\u017edne","t\xfd\u017edne","t\xfd\u017ed\u0148ov"][d(n)]},d:function(n){return["de\u0148","dni","dni","dn\xed"][d(n)]},h:function(n){return["hodina","hodiny","hodiny","hod\xedn"][d(n)]},m:function(n){return["min\xfata","min\xfaty","min\xfaty","min\xfat"][d(n)]},s:function(n){return["sekunda","sekundy","sekundy","sek\xfand"][d(n)]},ms:function(n){return["milisekunda","milisekundy","milisekundy","milisek\xfand"][d(n)]},decimal:","},sv:{y:"\xe5r",mo:function(n){return"m\xe5nad"+(1===n?"":"er")},w:function(n){return"veck"+(1===n?"a":"or")},d:function(n){return"dag"+(1===n?"":"ar")},h:function(n){return"timm"+(1===n?"e":"ar")},m:function(n){return"minut"+(1===n?"":"er")},s:function(n){return"sekund"+(1===n?"":"er")},ms:function(n){return"millisekund"+(1===n?"":"er")},decimal:","},sw:{y:function(n){return 1===n?"mwaka":"miaka"},mo:function(n){return 1===n?"mwezi":"miezi"},w:"wiki",d:function(n){return 1===n?"siku":"masiku"},h:function(n){return 1===n?"saa":"masaa"},m:"dakika",s:"sekunde",ms:"milisekunde",decimal:"."},tr:{y:"y\u0131l",mo:"ay",w:"hafta",d:"g\xfcn",h:"saat",m:"dakika",s:"saniye",ms:"milisaniye",decimal:","},th:{y:"\u0e1b\u0e35",mo:"\u0e40\u0e14\u0e37\u0e2d\u0e19",w:"\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c",d:"\u0e27\u0e31\u0e19",h:"\u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",m:"\u0e19\u0e32\u0e17\u0e35",s:"\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",ms:"\u0e21\u0e34\u0e25\u0e25\u0e34\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",decimal:"."},vi:{y:"n\u0103m",mo:"th\xe1ng",w:"tu\u1ea7n",d:"ng\xe0y",h:"gi\u1edd",m:"ph\xfat",s:"gi\xe2y",ms:"mili gi\xe2y",decimal:","},zh_CN:{y:"\u5e74",mo:"\u4e2a\u6708",w:"\u5468",d:"\u5929",h:"\u5c0f\u65f6",m:"\u5206\u949f",s:"\u79d2",ms:"\u6beb\u79d2",decimal:"."},zh_TW:{y:"\u5e74",mo:"\u500b\u6708",w:"\u5468",d:"\u5929",h:"\u5c0f\u6642",m:"\u5206\u9418",s:"\u79d2",ms:"\u6beb\u79d2",decimal:"."}};function o(n){var r=function(n,t){return function(n,r){var t,e,u;n=Math.abs(n);var o,c,s,m=function(n){var r=[n.language];if(y(n,"fallbacks")){if(!h(n.fallbacks)||!n.fallbacks.length)throw new Error("fallbacks must be an array with at least one element");r=r.concat(n.fallbacks)}for(var t=0;t<r.length;t++){var e=r[t];if(y(n.languages,e))return n.languages[e];if(y(i,e))return i[e]}throw new Error("No language found.")}(r),f=[];for(t=0,e=r.units.length;t<e;t++){if(o=r.units[t],c=r.unitMeasures[o],t+1===e)if(y(r,"maxDecimalPoints")){var d=Math.pow(10,r.maxDecimalPoints),l=n/c;s=parseFloat((Math.floor(d*l)/d).toFixed(r.maxDecimalPoints))}else s=n/c;else s=Math.floor(n/c);f.push({unitCount:s,unitName:o}),n-=s*c}var p,k,g=0;for(t=0;t<f.length;t++)if(f[t].unitCount){g=t;break}if(r.round)for(t=f.length-1;t>=0&&((u=f[t]).unitCount=Math.round(u.unitCount),0!==t);t--)k=f[t-1],p=r.unitMeasures[k.unitName]/r.unitMeasures[u.unitName],(u.unitCount%p===0||r.largest&&r.largest-1<t-g)&&(k.unitCount+=u.unitCount/p,u.unitCount=0);var v=[];for(t=0,f.length;t<e&&((u=f[t]).unitCount&&v.push(a(u.unitCount,u.unitName,m,r)),v.length!==r.largest);t++);if(!v.length)return a(0,r.units[r.units.length-1],m,r);if(!r.conjunction||1===v.length)return v.join(r.delimiter);if(2===v.length)return v.join(r.conjunction);if(v.length>2)return v.slice(0,-1).join(r.delimiter)+(r.serialComma?",":"")+r.conjunction+v.slice(-1)}(n,s({},r,t||{}))};return s(r,{language:"en",delimiter:", ",spacer:" ",conjunction:"",serialComma:!0,units:["y","mo","w","d","h","m","s"],languages:{},round:!1,unitMeasures:{y:315576e5,mo:26298e5,w:6048e5,d:864e5,h:36e5,m:6e4,s:1e3,ms:1}},n)}var c=o({});function a(n,r,t,e){var u;u=y(e,"decimal")?e.decimal:y(t,"decimal")?t.decimal:".";var i,o=n.toString().replace(".",u),c=t[r];return i="function"===typeof c?c(n):c,o+e.spacer+i}function s(n){for(var r,t=1;t<arguments.length;t++)for(var e in r=arguments[t])y(r,e)&&(n[e]=r[e]);return n}function m(n){return 1===n?0:Math.floor(n)!==n?1:n%10>=2&&n%10<=4&&!(n%100>10&&n%100<20)?2:3}function f(n){return Math.floor(n)!==n?2:n%100>=5&&n%100<=20||n%10>=5&&n%10<=9||n%10===0?0:n%10===1?1:n>1?2:0}function d(n){return 1===n?0:Math.floor(n)!==n?1:n%10>=2&&n%10<=4&&n%100<10?2:3}function l(n){return 1===n||n%10===1&&n%100>20?0:Math.floor(n)!==n||n%10>=2&&n%100>20||n%10>=2&&n%100<10?1:2}function p(n){return n%10===1&&n%100!==11}var h=Array.isArray||function(n){return"[object Array]"===Object.prototype.toString.call(n)};function y(n,r){return Object.prototype.hasOwnProperty.call(n,r)}c.getSupportedLanguages=function(){var n=[];for(var r in i)y(i,r)&&"gr"!==r&&n.push(r);return n},c.humanizer=o,void 0===(e=function(){return c}.call(r,t,r,n))||(n.exports=e)}()}}]);
//# sourceMappingURL=6.3a6a21ee.chunk.js.map