(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[16],{5957:function(e,a,t){"use strict";t.d(a,"b",(function(){return m})),t.d(a,"a",(function(){return u})),t.d(a,"c",(function(){return g}));var n=t(32),r=t(42),c=t(6092),i=t(0),l=t.n(i),o=t(5955),s=t(50),m=function(e){var a=e.mode,t=e.contentKey,n=e.original,i=e.originalProps,o=e.translatedProps,m=e.assetTOptions,u=Object(s.b)().assetT;switch(a){case"original":return l.a.createElement(r.a,i,n);case"translated":return l.a.createElement(r.a,o,u(t,n,m));case"both":return l.a.createElement(c.a,{container:!0,direction:"column"},l.a.createElement(r.a,Object.assign({},i,{color:"textPrimary"}),n),l.a.createElement(r.a,Object.assign({},o,{color:"textSecondary"}),u(t,n,m)))}},u=function(e){var a=e.mode,t=e.characterId,m=e.originalProps,u=e.translatedProps,g=e.assetTOptions,d=Object(o.b)("gameCharacters"),h=Object(n.a)(d,1)[0],E=Object(s.b)(),p=E.assetT,f=E.assetI18n,b=Object(i.useState)(),v=Object(n.a)(b,2),y=v[0],k=v[1];if(Object(i.useEffect)((function(){h.length&&k(h.find((function(e){return e.id===t})))}),[h,t]),!y)return l.a.createElement(r.a,null);switch(a){case"original":return l.a.createElement(r.a,m,y.firstName," ",y.givenName);case"translated":return["zh-CN","zh-TW","ko","ja"].includes(f.language)?l.a.createElement(r.a,u,y.firstName?p("character_name:".concat(t,".firstName"),y.firstName,g):""," ",p("character_name:".concat(t,".givenName"),y.givenName,g)):l.a.createElement(r.a,null,p("character_name:".concat(t,".givenName"),y.givenName,g)," ",y.firstName?p("character_name:".concat(t,".firstName"),y.firstName,g):"");case"both":return l.a.createElement(c.a,{container:!0,direction:"column"},l.a.createElement(r.a,m,y.firstName," ",y.givenName),["zh-CN","zh-TW","ko","ja"].includes(f.language)?l.a.createElement(r.a,Object.assign({color:"textSecondary"},u),y.firstName?p("character_name:".concat(t,".firstName"),y.firstName,g):""," ",p("character_name:".concat(t,".givenName"),y.givenName,g)):l.a.createElement(r.a,Object.assign({color:"textSecondary"},u),p("character_name:".concat(t,".givenName"),y.givenName,g)," ",y.firstName?p("character_name:".concat(t,".firstName"),y.firstName,g):""))}},g=function(e){var a=e.mode,t=e.releaseCondId,r=e.originalProps,c=e.translatedProps,s=e.assetTOptions,u=Object(o.b)("releaseConditions"),g=Object(n.a)(u,1)[0],d=Object(i.useState)(),h=Object(n.a)(d,2),E=h[0],p=h[1];if(Object(i.useEffect)((function(){g.length&&p(g.find((function(e){return e.id===t})))}),[t,g]),E){var f="";switch(E.releaseConditionType){case"none":f="release_cond:none_".concat(E.id);break;case"card_level":f="release_cond:card_level",s=Object.assign({},s,{level:E.releaseConditionTypeLevel});break;default:f="release_cond:".concat(E.releaseConditionType)}return l.a.createElement(m,{mode:a,contentKey:f,original:E.sentence,originalProps:r,translatedProps:c,assetTOptions:s})}return l.a.createElement("div",null)}},5965:function(e,a){e.exports="data:image/png;base64,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"},5968:function(e,a){e.exports="data:image/png;base64,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"},5969:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(5910),r=Object(n.a)((function(){return{svg:{display:"block",width:"100%",height:"100%",pointerEvents:"none"},skeleton:{width:"100%",paddingTop:"100%"}}}))},5970:function(e,a,t){"use strict";t.d(a,"a",(function(){return E})),t.d(a,"b",(function(){return p})),t.d(a,"c",(function(){return f}));var n=t(32),r=t(6092),c=t(6032),i=t(0),l=t.n(i),o=t(5955),s=t(5965),m=t.n(s),u=t(5968),g=t.n(u),d=t(5969),h=t(5960),E=function(e){var a=e.id,t=e.trained,r=void 0!==t&&t,c=p({}),s=Object(d.a)(),u=Object(o.b)("cards"),E=Object(n.a)(u,1)[0],f=Object(i.useState)(),b=Object(n.a)(f,2),v=b[0],y=b[1];Object(i.useEffect)((function(){E.length&&y(E.find((function(e){return e.id===a})))}),[E,a]);var k=r?g.a:m.a;return v?l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 156 156",className:s.svg},l.a.createElement("image",{href:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/thumbnail/chara_rip/").concat(v.assetbundleName,"_").concat(r?"after_training":"normal",".webp"),x:"8",y:"8",height:"140",width:"140"}),l.a.createElement("image",{href:h.e[String(v.rarity)],x:"0",y:"0",height:"156",width:"156"}),l.a.createElement("image",{href:h.c[v.attr],x:"0",y:"0",width:"35",height:"35"}),Array.from({length:v.rarity}).map((function(e,a){return l.a.createElement("image",{key:"card-rarity-".concat(a),href:k,x:22*a+8,y:"124",width:"22",height:"22"})}))):c},p=function(){var e=Object(d.a)();return l.a.createElement(c.a,{variant:"rect",className:e.skeleton})},f=function(e){var a=e.cardIds;return l.a.createElement(r.a,{container:!0,direction:"row",spacing:2,justify:"center",alignItems:"center"},a.map((function(e,a){return l.a.createElement(r.a,{key:a,item:!0,xs:4,sm:2},l.a.createElement(E,{id:e}))})))}},6031:function(e,a,t){"use strict";var n=t(1),r=t(2),c=t(0),i=(t(4),t(3)),l=t(5),o=["video","audio","picture","iframe","img"],s=c.forwardRef((function(e,a){var t=e.children,l=e.classes,s=e.className,m=e.component,u=void 0===m?"div":m,g=e.image,d=e.src,h=e.style,E=Object(r.a)(e,["children","classes","className","component","image","src","style"]),p=-1!==o.indexOf(u),f=!p&&g?Object(n.a)({backgroundImage:'url("'.concat(g,'")')},h):h;return c.createElement(u,Object(n.a)({className:Object(i.a)(l.root,s,p&&l.media,-1!=="picture img".indexOf(u)&&l.img),ref:a,style:f,src:p?g||d:void 0},E),t)}));a.a=Object(l.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(s)},6032:function(e,a,t){"use strict";var n=t(1),r=t(2),c=t(0),i=t(3),l=(t(4),t(12)),o=t(5),s=c.forwardRef((function(e,a){var t=e.animation,l=void 0===t?"pulse":t,o=e.classes,s=e.className,m=e.component,u=void 0===m?"span":m,g=e.height,d=e.variant,h=void 0===d?"text":d,E=e.width,p=Object(r.a)(e,["animation","classes","className","component","height","variant","width"]),f=Boolean(p.children);return c.createElement(u,Object(n.a)({ref:a,className:Object(i.a)(o.root,o[h],s,f&&[o.withChildren,!E&&o.fitContent,!g&&o.heightAuto],!1!==l&&o[l])},p,{style:Object(n.a)({width:E,height:g},p.style)}))}));a.a=Object(o.a)((function(e){return{root:{display:"block",backgroundColor:Object(l.c)(e.palette.text.primary,"light"===e.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}}),{name:"MuiSkeleton"})(s)},6033:function(e,a,t){"use strict";var n=t(1),r=t(2),c=t(0),i=(t(4),t(3)),l=t(112),o=t(5),s=c.forwardRef((function(e,a){var t=e.classes,o=e.className,s=e.raised,m=void 0!==s&&s,u=Object(r.a)(e,["classes","className","raised"]);return c.createElement(l.a,Object(n.a)({className:Object(i.a)(t.root,o),elevation:m?8:1,ref:a},u))}));a.a=Object(o.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},6043:function(e,a,t){"use strict";var n=t(1),r=t(2),c=t(0),i=(t(4),t(3)),l=t(5),o=c.forwardRef((function(e,a){var t=e.classes,l=e.className,o=e.component,s=void 0===o?"div":o,m=Object(r.a)(e,["classes","className","component"]);return c.createElement(s,Object(n.a)({className:Object(i.a)(t.root,l),ref:a},m))}));a.a=Object(l.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(o)},6048:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"d",(function(){return i})),t.d(a,"b",(function(){return l})),t.d(a,"c",(function(){return o}));var n=t(0),r=(t(4),n.createContext(null));function c(e){var a=e.children,t=e.value,c=function(){var e=n.useState(null),a=e[0],t=e[1];return n.useEffect((function(){t("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),a}(),i=n.useMemo((function(){return{idPrefix:c,value:t}}),[c,t]);return n.createElement(r.Provider,{value:i},a)}function i(){return n.useContext(r)}function l(e,a){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(a)}function o(e,a){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(a)}},6049:function(e,a,t){"use strict";var n=t(1),r=t(2),c=t(0),i=(t(4),t(3)),l=t(5),o=t(6048),s=c.forwardRef((function(e,a){var t=e.children,l=e.className,s=e.classes,m=e.value,u=Object(r.a)(e,["children","className","classes","value"]),g=Object(o.d)();if(null===g)throw new TypeError("No TabContext provided");var d=Object(o.b)(g,m),h=Object(o.c)(g,m);return c.createElement("div",Object(n.a)({"aria-labelledby":h,className:Object(i.a)(s.root,l),hidden:m!==g.value,id:d,ref:a,role:"tabpanel"},u),m===g.value&&t)}));a.a=Object(l.a)((function(e){return{root:{padding:e.spacing(3)}}}),{name:"MuiTabPanel"})(s)},6196:function(e,a,t){"use strict";t.r(a);var n=t(32),r=t(5910),c=t(42),i=t(5938),l=t(112),o=t(6206),s=t(6192),m=t(6033),u=t(6031),g=t(6043),d=t(6092),h=t(5949),E=t(5925),p=t(5956),f=t(6048),b=t(6049),v=t(0),y=t.n(v),k=t(11),j=t(52),O=t(6034),I=t.n(O),x=t(5955),w=t(5970),A=t(5965),C=t.n(A),S=t(5883),J=t(50),F=t(51),B=t(5957),R={1:{bg:"bg_gacha1",feature:"img_gacha1_1"},2:{bg:"bg_gacha_rare3_ticket_2020"},3:{bg:"bg_gacha_virtualsinger_2020"},7:{bg:"bg_gacha6",feature:"img_gacha6"},8:{bg:"bg_gacha8"}},K=Object(r.a)((function(e){return{media:{paddingTop:"56.25%",cursor:"pointer"},card:{margin:e.spacing(.5)},tabpanel:{padding:e.spacing("1%",0,0,0)},subheader:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis","max-width":"260px"},gachaBtn:{margin:e.spacing(0,1)}}}));function U(e){var a=[];return R[e.id]?(R[e.id].bg&&a.push({src:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/gacha/").concat(e.assetbundleName,"/screen_rip/texture/").concat(R[e.id].bg,".webp"),alt:"background",downloadUrl:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/gacha/").concat(e.assetbundleName,"/screen_rip/texture/").concat(R[e.id].bg,".webp")}),R[e.id].feature&&a.push({src:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/gacha/").concat(e.assetbundleName,"/screen_rip/texture/").concat(R[e.id].feature,".webp"),alt:"feature",downloadUrl:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/gacha/").concat(e.assetbundleName,"/screen_rip/texture/").concat(R[e.id].feature,".webp")})):(a.push({src:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/gacha/").concat(e.assetbundleName,"/screen_rip/texture/bg_gacha").concat(e.id,".webp"),alt:"background",downloadUrl:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/gacha/").concat(e.assetbundleName,"/screen_rip/texture/bg_gacha").concat(e.id,".webp")}),a.push({src:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/gacha/").concat(e.assetbundleName,"/screen_rip/texture/img_gacha").concat(e.id,".webp"),alt:"feature",downloadUrl:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/gacha/").concat(e.assetbundleName,"/screen_rip/texture/img_gacha").concat(e.id,".webp")})),a}var N=function(e){var a=e.num;return y.a.createElement(v.Fragment,null,Array.from({length:a}).map((function(e,a){return y.a.createElement("img",{key:a,src:C.a,alt:"star",height:"24px"})})))};a.default=function(){var e=K(),a=Object(p.a)(),t=Object(k.g)().gachaId,r=Object(S.a)().t,O=Object(J.b)().getTranslated,A=Object(v.useContext)(F.a).contentTransMode,C=Object(v.useState)(),Q=Object(n.a)(C,2),M=Q[0],T=Q[1],L=Object(x.b)("gachas"),G=Object(n.a)(L,1)[0],W=Object(v.useState)(!1),Z=Object(n.a)(W,2),V=Z[0],Y=Z[1],D=Object(v.useState)("4"),P=Object(n.a)(D,2),q=P[0],H=P[1],X=Object(v.useState)(0),z=Object(n.a)(X,2),_=z[0],$=z[1],ee=Object(v.useState)({total:0,rarity1:0,rarity2:0,rarity3:0,rarity4:0}),ae=Object(n.a)(ee,2),te=ae[0],ne=ae[1],re=Object(v.useState)([]),ce=Object(n.a)(re,2),ie=ce[0],le=ce[1],oe=Object(x.e)(!1),se=Object(n.a)(oe,3),me=se[1],ue=se[2],ge=Object(x.b)("cards"),de=Object(n.a)(ge,1)[0],he=Object(v.useCallback)((function(e){for(var a=e,t=[null===M||void 0===M?void 0:M.rarity1Rate,(null===M||void 0===M?void 0:M.rarity1Rate)+(null===M||void 0===M?void 0:M.rarity2Rate),(null===M||void 0===M?void 0:M.rarity1Rate)+(null===M||void 0===M?void 0:M.rarity2Rate)+(null===M||void 0===M?void 0:M.rarity3Rate),(null===M||void 0===M?void 0:M.rarity1Rate)+(null===M||void 0===M?void 0:M.rarity2Rate)+(null===M||void 0===M?void 0:M.rarity3Rate)+(null===M||void 0===M?void 0:M.rarity4Rate)],n=[100-(null===M||void 0===M?void 0:M.rarity4Rate),100],r=[null===M||void 0===M?void 0:M.gachaDetails.filter((function(e){var a;return 1===(null===(a=de.find((function(a){return a.id===e.cardId})))||void 0===a?void 0:a.rarity)})),null===M||void 0===M?void 0:M.gachaDetails.filter((function(e){var a;return 2===(null===(a=de.find((function(a){return a.id===e.cardId})))||void 0===a?void 0:a.rarity)})),null===M||void 0===M?void 0:M.gachaDetails.filter((function(e){var a;return 3===(null===(a=de.find((function(a){return a.id===e.cardId})))||void 0===a?void 0:a.rarity)})),null===M||void 0===M?void 0:M.gachaDetails.filter((function(e){var a;return 4===(null===(a=de.find((function(a){return a.id===e.cardId})))||void 0===a?void 0:a.rarity)}))],c=[],i=0,l=0;l<a;l++)if(l%10!==9||9!==i){l%10===0&&(i=0);var o,s=100*Math.random();if(s<=t[0])ne((function(e){return Object.assign({},e,{total:e.total+1,rarity1:e.rarity1+1})})),c.push(r[0][Math.floor(Math.random()*(null===(o=r[0])||void 0===o?void 0:o.length))]),i++;else if(s<=t[1]){var m;ne((function(e){return Object.assign({},e,{total:e.total+1,rarity2:e.rarity2+1})})),c.push(r[1][Math.floor(Math.random()*(null===(m=r[1])||void 0===m?void 0:m.length))]),i++}else if(s<=t[2]){var u;ne((function(e){return Object.assign({},e,{total:e.total+1,rarity3:e.rarity3+1})})),c.push(r[2][Math.floor(Math.random()*(null===(u=r[2])||void 0===u?void 0:u.length))])}else if(s<=t[3]){var g;ne((function(e){return Object.assign({},e,{total:e.total+1,rarity4:e.rarity4+1})})),c.push(r[3][Math.floor(Math.random()*(null===(g=r[3])||void 0===g?void 0:g.length))])}else console.log(s,t)}else{var d,h=100*Math.random();if(h<n[0])ne((function(e){return Object.assign({},e,{total:e.total+1,rarity3:e.rarity3+1})})),c.push(r[2][Math.floor(Math.random()*(null===(d=r[2])||void 0===d?void 0:d.length))]);else if(h<n[1]){var E;ne((function(e){return Object.assign({},e,{total:e.total+1,rarity4:e.rarity4+1})})),c.push(r[3][Math.floor(Math.random()*(null===(E=r[3])||void 0===E?void 0:E.length))])}else console.log(h,n);i=0}le(c.slice(-10))}),[de,M]),Ee=Object(v.useCallback)((function(){ne({total:0,rarity1:0,rarity2:0,rarity3:0,rarity4:0}),le([])}),[ne,le]);Object(v.useEffect)((function(){ue(Boolean(G.length)),Boolean(G.length)&&T(G.find((function(e){return e.id===Number(t)})))}),[ue,t,G]),Object(v.useEffect)((function(){if(M){var e=O(A,"gacha_name:".concat(t),M.name);document.title=r("title:gachaDetail",{name:e})}}),[M,A,t,O,r]);return me&&M?y.a.createElement(v.Fragment,null,y.a.createElement(c.a,{variant:"h6",className:a.header},O(A,"gacha_name:".concat(t),M.name)),y.a.createElement(i.a,{className:a.content,maxWidth:"sm"},y.a.createElement(f.a,{value:q},y.a.createElement(l.a,null,y.a.createElement(o.a,{value:q,onChange:function(e,a){H(a)},variant:"scrollable",scrollButtons:"desktop"},y.a.createElement(s.a,{label:r("gacha:tab.title[0]"),value:"2"}),y.a.createElement(s.a,{label:r("gacha:tab.title[1]"),value:"3"}),y.a.createElement(s.a,{label:r("gacha:tab.title[2]"),value:"4"}),y.a.createElement(s.a,{label:r("gacha:tab.title[3]"),value:"0"}),R[M.id]?R[M.id].feature?y.a.createElement(s.a,{label:r("gacha:tab.title[4]"),value:"1"}):null:M.id>=4?y.a.createElement(s.a,{label:r("gacha:tab.title[4]"),value:"1"}):null),y.a.createElement(b.a,{value:"0",classes:{root:e.tabpanel}},y.a.createElement(m.a,{onClick:function(){$(0),Y(!0)}},y.a.createElement(u.a,{className:e.media,image:M?"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/gacha/").concat(M.assetbundleName,"/screen_rip/texture/").concat(R[M.id]?R[M.id].bg:"bg_gacha".concat(t),".webp"):""}))),y.a.createElement(b.a,{value:"1",classes:{root:e.tabpanel}},y.a.createElement(m.a,{onClick:function(){$(1),Y(!0)}},y.a.createElement(u.a,{className:e.media,image:M?"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/gacha/").concat(M.assetbundleName,"/screen_rip/texture/").concat(R[M.id]?R[M.id].feature:"img_gacha".concat(t),".webp"):""}))),y.a.createElement(b.a,{value:"2",classes:{root:e.tabpanel}},y.a.createElement(m.a,null,y.a.createElement(g.a,null,M.gachaInformation.description.split("\n").map((function(e,a){return y.a.createElement(c.a,{paragraph:!0,variant:"body2",key:"desc-".concat(a)},e)}))))),y.a.createElement(b.a,{value:"3",classes:{root:e.tabpanel}},y.a.createElement(m.a,null,y.a.createElement(g.a,null,M.gachaInformation.summary.split("\n").map((function(e,a){return y.a.createElement(c.a,{paragraph:!0,variant:"body2",key:"summary-".concat(a)},e)}))))),y.a.createElement(b.a,{value:"4",classes:{root:e.tabpanel}},y.a.createElement(m.a,null,y.a.createElement(g.a,null,y.a.createElement(d.a,{container:!0,spacing:1,justify:"center"},y.a.createElement(d.a,{item:!0},y.a.createElement(h.a,{variant:"contained",className:e.gachaBtn,color:"secondary",onClick:function(){return he(1)}},"Gacha!")),y.a.createElement(d.a,{item:!0},y.a.createElement(h.a,{variant:"contained",className:e.gachaBtn,color:"primary",onClick:function(){return he(10)}},"Gacha * 10")),y.a.createElement(d.a,{item:!0},y.a.createElement(h.a,{variant:"contained",className:e.gachaBtn,color:"primary",onClick:function(){return Ee()}},"Reset"))),y.a.createElement(d.a,{container:!0,spacing:1,justify:"center"},y.a.createElement(d.a,{item:!0},y.a.createElement(c.a,null,"Total: ",te.total," Cost: ",300*te.total)),y.a.createElement(d.a,{item:!0,container:!0,spacing:1,justify:"center"},y.a.createElement(d.a,{item:!0},y.a.createElement(c.a,null,y.a.createElement(N,{num:2}),te.rarity2," ",te.total?(te.rarity2/te.total*100).toFixed(2):0," ","%")),y.a.createElement(d.a,{item:!0},y.a.createElement(c.a,null,y.a.createElement(N,{num:3}),te.rarity3," ",te.total?(te.rarity3/te.total*100).toFixed(2):0," ","%")),y.a.createElement(d.a,{item:!0},y.a.createElement(c.a,null,y.a.createElement(N,{num:4}),te.rarity4," ",te.total?(te.rarity4/te.total*100).toFixed(2):0," ","%"))))),y.a.createElement(g.a,null,y.a.createElement(w.c,{cardIds:ie.map((function(e){return e.cardId}))})))))),y.a.createElement(d.a,{container:!0,direction:"column"},y.a.createElement(d.a,{item:!0,container:!0,direction:"row",justify:"space-between",alignItems:"center"},y.a.createElement(c.a,{variant:"subtitle1",style:{fontWeight:600}},r("common:id")),y.a.createElement(c.a,null,M.id)),y.a.createElement(E.a,{style:{margin:"1% 0"}}),y.a.createElement(d.a,{item:!0,container:!0,direction:"row",justify:"space-between",alignItems:"center"},y.a.createElement(c.a,{variant:"subtitle1",style:{fontWeight:600}},r("common:title")),y.a.createElement(c.a,null,y.a.createElement(B.b,{mode:A,contentKey:"gacha_name:".concat(t),original:M.name,originalProps:{align:"right"},translatedProps:{align:"right"}}))),y.a.createElement(E.a,{style:{margin:"1% 0"}}),y.a.createElement(d.a,{item:!0,container:!0,direction:"row",justify:"space-between",alignItems:"center"},y.a.createElement(c.a,{variant:"subtitle1",style:{fontWeight:600}},r("common:icon")),y.a.createElement("img",{style:{maxWidth:"50%"},src:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/gacha/").concat(M.assetbundleName,"/logo_rip/logo.webp"),alt:"logo icon"})),y.a.createElement(E.a,{style:{margin:"1% 0"}}),y.a.createElement(d.a,{item:!0,container:!0,direction:"row",justify:"space-between",alignItems:"center"},y.a.createElement(c.a,{variant:"subtitle1",style:{fontWeight:600}},r("common:startAt")),y.a.createElement(c.a,null,new Date(M.startAt).toLocaleString())),y.a.createElement(E.a,{style:{margin:"1% 0"}}),y.a.createElement(d.a,{item:!0,container:!0,direction:"row",justify:"space-between",alignItems:"center"},y.a.createElement(c.a,{variant:"subtitle1",style:{fontWeight:600}},r("common:endAt")),y.a.createElement(c.a,null,new Date(M.endAt).toLocaleString())),y.a.createElement(E.a,{style:{margin:"1% 0"}}),y.a.createElement(d.a,{item:!0,container:!0,direction:"row",justify:"space-between",alignItems:"center"},y.a.createElement(c.a,{variant:"subtitle1",style:{fontWeight:600}},r("common:type")),y.a.createElement(c.a,null,r("gacha:gachaType.".concat(M.gachaType)))),y.a.createElement(E.a,{style:{margin:"1% 0"}}),M.gachaBehaviors.find((function(e){return"normal"===e.gachaBehaviorType}))?y.a.createElement(v.Fragment,null,y.a.createElement(d.a,{item:!0,container:!0,direction:"row",justify:"space-between",alignItems:"center"},y.a.createElement(d.a,{item:!0,xs:2,md:4},y.a.createElement(c.a,{variant:"subtitle1",style:{fontWeight:600}},r("gacha:normalRate"))),y.a.createElement(d.a,{item:!0,xs:9,md:4,container:!0,direction:"column",alignItems:"flex-end"},y.a.createElement(d.a,{item:!0,container:!0,alignItems:"center"},y.a.createElement(d.a,{item:!0,xs:7,style:{textAlign:"right"}},y.a.createElement(N,{num:2})),y.a.createElement(d.a,{item:!0,xs:5,style:{textAlign:"right"}},M.rarity2Rate," %")),y.a.createElement(d.a,{item:!0,container:!0,alignItems:"center"},y.a.createElement(d.a,{item:!0,xs:7,style:{textAlign:"right"}},y.a.createElement(N,{num:3})),y.a.createElement(d.a,{item:!0,xs:5,style:{textAlign:"right"}},M.rarity3Rate," %")),y.a.createElement(d.a,{item:!0,container:!0,alignItems:"center"},y.a.createElement(d.a,{item:!0,xs:7,style:{textAlign:"right"}},y.a.createElement(N,{num:4})),y.a.createElement(d.a,{item:!0,xs:5,style:{textAlign:"right"}},M.rarity4Rate," %")))),y.a.createElement(E.a,{style:{margin:"1% 0"}})):null,M.gachaBehaviors.find((function(e){return"over_rarity_3_once"===e.gachaBehaviorType}))?y.a.createElement(v.Fragment,null,y.a.createElement(d.a,{item:!0,container:!0,direction:"row",justify:"space-between",alignItems:"center"},y.a.createElement(d.a,{item:!0,xs:2,md:4},y.a.createElement(c.a,{variant:"subtitle1",style:{fontWeight:600}},r("gacha:guaranteedRate"))),y.a.createElement(d.a,{item:!0,xs:9,md:4,container:!0,direction:"column",alignItems:"flex-end"},y.a.createElement(d.a,{item:!0,container:!0,alignItems:"center"},y.a.createElement(d.a,{item:!0,xs:7,style:{textAlign:"right"}},y.a.createElement(N,{num:2})),y.a.createElement(d.a,{item:!0,xs:5,style:{textAlign:"right"}},"0 %")),y.a.createElement(d.a,{item:!0,container:!0,alignItems:"center"},y.a.createElement(d.a,{item:!0,xs:7,style:{textAlign:"right"}},y.a.createElement(N,{num:3})),y.a.createElement(d.a,{item:!0,xs:5,style:{textAlign:"right"}},100-M.rarity4Rate," %")),y.a.createElement(d.a,{item:!0,container:!0,alignItems:"center"},y.a.createElement(d.a,{item:!0,xs:7,style:{textAlign:"right"}},y.a.createElement(N,{num:4})),y.a.createElement(d.a,{item:!0,xs:5,style:{textAlign:"right"}},M.rarity4Rate," %")))),y.a.createElement(E.a,{style:{margin:"1% 0"}})):null,y.a.createElement(d.a,{container:!0,wrap:"nowrap",justify:"space-between",alignItems:"center"},y.a.createElement(c.a,{variant:"subtitle1",style:{fontWeight:600}},r("gacha:pickupMember",{count:M.gachaPickups.length})),y.a.createElement(d.a,{item:!0,container:!0,direction:"row",xs:6,spacing:1,justify:"flex-end"},M.gachaPickups.map((function(e){return y.a.createElement(d.a,{key:"pickup-".concat(e.id),item:!0,xs:8,md:4},y.a.createElement(j.b,{to:"/card/"+e.cardId,style:{textDecoration:"none"}},y.a.createElement(w.a,{id:e.cardId})))})))),y.a.createElement(E.a,{style:{margin:"1% 0"}}))),y.a.createElement(I.a,{visible:V,onClose:function(){return Y(!1)},images:U(M),zIndex:2e3,activeIndex:_,downloadable:!0,downloadInNewWindow:!0,onMaskClick:function(){return Y(!1)},zoomSpeed:.25,onChange:function(e,a){return $(a)}})):y.a.createElement("div",null,"Loading... If you saw this for a while, gacha ",t," does not exist.")}}}]);
//# sourceMappingURL=16.fe27a408.chunk.js.map