(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[17],{5957:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return d}));var n=a(32),r=a(42),c=a(6092),i=a(0),o=a.n(i),l=a(5955),s=a(50),m=function(e){var t=e.mode,a=e.contentKey,n=e.original,i=e.originalProps,l=e.translatedProps,m=e.assetTOptions,u=Object(s.b)().assetT;switch(t){case"original":return o.a.createElement(r.a,i,n);case"translated":return o.a.createElement(r.a,l,u(a,n,m));case"both":return o.a.createElement(c.a,{container:!0,direction:"column"},o.a.createElement(r.a,Object.assign({},i,{color:"textPrimary"}),n),o.a.createElement(r.a,Object.assign({},l,{color:"textSecondary"}),u(a,n,m)))}},u=function(e){var t=e.mode,a=e.characterId,m=e.originalProps,u=e.translatedProps,d=e.assetTOptions,g=Object(l.b)("gameCharacters"),E=Object(n.a)(g,1)[0],h=Object(s.b)(),p=h.assetT,b=h.assetI18n,f=Object(i.useState)(),v=Object(n.a)(f,2),O=v[0],j=v[1];if(Object(i.useEffect)((function(){E.length&&j(E.find((function(e){return e.id===a})))}),[E,a]),!O)return o.a.createElement(r.a,null);switch(t){case"original":return o.a.createElement(r.a,m,O.firstName," ",O.givenName);case"translated":return["zh-CN","zh-TW","ko","ja"].includes(b.language)?o.a.createElement(r.a,u,O.firstName?p("character_name:".concat(a,".firstName"),O.firstName,d):""," ",p("character_name:".concat(a,".givenName"),O.givenName,d)):o.a.createElement(r.a,null,p("character_name:".concat(a,".givenName"),O.givenName,d)," ",O.firstName?p("character_name:".concat(a,".firstName"),O.firstName,d):"");case"both":return o.a.createElement(c.a,{container:!0,direction:"column"},o.a.createElement(r.a,m,O.firstName," ",O.givenName),["zh-CN","zh-TW","ko","ja"].includes(b.language)?o.a.createElement(r.a,Object.assign({color:"textSecondary"},u),O.firstName?p("character_name:".concat(a,".firstName"),O.firstName,d):""," ",p("character_name:".concat(a,".givenName"),O.givenName,d)):o.a.createElement(r.a,Object.assign({color:"textSecondary"},u),p("character_name:".concat(a,".givenName"),O.givenName,d)," ",O.firstName?p("character_name:".concat(a,".firstName"),O.firstName,d):""))}},d=function(e){var t=e.mode,a=e.releaseCondId,r=e.originalProps,c=e.translatedProps,s=e.assetTOptions,u=Object(l.b)("releaseConditions"),d=Object(n.a)(u,1)[0],g=Object(i.useState)(),E=Object(n.a)(g,2),h=E[0],p=E[1];if(Object(i.useEffect)((function(){d.length&&p(d.find((function(e){return e.id===a})))}),[a,d]),h){var b="";switch(h.releaseConditionType){case"none":b="release_cond:none_".concat(h.id);break;case"card_level":b="release_cond:card_level",s=Object.assign({},s,{level:h.releaseConditionTypeLevel});break;default:b="release_cond:".concat(h.releaseConditionType)}return o.a.createElement(m,{mode:t,contentKey:b,original:h.sentence,originalProps:r,translatedProps:c,assetTOptions:s})}return o.a.createElement("div",null)}},5965:function(e,t){e.exports="data:image/png;base64,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"},5968:function(e,t){e.exports="data:image/png;base64,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"},5969:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(5910),r=Object(n.a)((function(){return{svg:{display:"block",width:"100%",height:"100%",pointerEvents:"none"},skeleton:{width:"100%",paddingTop:"100%"}}}))},5970:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return p})),a.d(t,"c",(function(){return b}));var n=a(32),r=a(6092),c=a(6032),i=a(0),o=a.n(i),l=a(5955),s=a(5965),m=a.n(s),u=a(5968),d=a.n(u),g=a(5969),E=a(5960),h=function(e){var t=e.id,a=e.trained,r=void 0!==a&&a,c=p({}),s=Object(g.a)(),u=Object(l.b)("cards"),h=Object(n.a)(u,1)[0],b=Object(i.useState)(),f=Object(n.a)(b,2),v=f[0],O=f[1];Object(i.useEffect)((function(){h.length&&O(h.find((function(e){return e.id===t})))}),[h,t]);var j=r?d.a:m.a;return v?o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 156 156",className:s.svg},o.a.createElement("image",{href:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/thumbnail/chara_rip/").concat(v.assetbundleName,"_").concat(r?"after_training":"normal",".webp"),x:"8",y:"8",height:"140",width:"140"}),o.a.createElement("image",{href:E.e[String(v.rarity)],x:"0",y:"0",height:"156",width:"156"}),o.a.createElement("image",{href:E.c[v.attr],x:"0",y:"0",width:"35",height:"35"}),Array.from({length:v.rarity}).map((function(e,t){return o.a.createElement("image",{key:"card-rarity-".concat(t),href:j,x:22*t+8,y:"124",width:"22",height:"22"})}))):c},p=function(){var e=Object(g.a)();return o.a.createElement(c.a,{variant:"rect",className:e.skeleton})},b=function(e){var t=e.cardIds;return o.a.createElement(r.a,{container:!0,direction:"row",spacing:2,justify:"center",alignItems:"center"},t.map((function(e,t){return o.a.createElement(r.a,{key:t,item:!0,xs:4,sm:2},o.a.createElement(h,{id:e}))})))}},6031:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(0),i=(a(4),a(3)),o=a(5),l=["video","audio","picture","iframe","img"],s=c.forwardRef((function(e,t){var a=e.children,o=e.classes,s=e.className,m=e.component,u=void 0===m?"div":m,d=e.image,g=e.src,E=e.style,h=Object(r.a)(e,["children","classes","className","component","image","src","style"]),p=-1!==l.indexOf(u),b=!p&&d?Object(n.a)({backgroundImage:'url("'.concat(d,'")')},E):E;return c.createElement(u,Object(n.a)({className:Object(i.a)(o.root,s,p&&o.media,-1!=="picture img".indexOf(u)&&o.img),ref:t,style:b,src:p?d||g:void 0},h),a)}));t.a=Object(o.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(s)},6032:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(0),i=a(3),o=(a(4),a(12)),l=a(5),s=c.forwardRef((function(e,t){var a=e.animation,o=void 0===a?"pulse":a,l=e.classes,s=e.className,m=e.component,u=void 0===m?"span":m,d=e.height,g=e.variant,E=void 0===g?"text":g,h=e.width,p=Object(r.a)(e,["animation","classes","className","component","height","variant","width"]),b=Boolean(p.children);return c.createElement(u,Object(n.a)({ref:t,className:Object(i.a)(l.root,l[E],s,b&&[l.withChildren,!h&&l.fitContent,!d&&l.heightAuto],!1!==o&&l[o])},p,{style:Object(n.a)({width:h,height:d},p.style)}))}));t.a=Object(l.a)((function(e){return{root:{display:"block",backgroundColor:Object(o.c)(e.palette.text.primary,"light"===e.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}}),{name:"MuiSkeleton"})(s)},6033:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(0),i=(a(4),a(3)),o=a(112),l=a(5),s=c.forwardRef((function(e,t){var a=e.classes,l=e.className,s=e.raised,m=void 0!==s&&s,u=Object(r.a)(e,["classes","className","raised"]);return c.createElement(o.a,Object(n.a)({className:Object(i.a)(a.root,l),elevation:m?8:1,ref:t},u))}));t.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},6048:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return l}));var n=a(0),r=(a(4),n.createContext(null));function c(e){var t=e.children,a=e.value,c=function(){var e=n.useState(null),t=e[0],a=e[1];return n.useEffect((function(){a("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),t}(),i=n.useMemo((function(){return{idPrefix:c,value:a}}),[c,a]);return n.createElement(r.Provider,{value:i},t)}function i(){return n.useContext(r)}function o(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(t)}function l(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(t)}},6049:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(0),i=(a(4),a(3)),o=a(5),l=a(6048),s=c.forwardRef((function(e,t){var a=e.children,o=e.className,s=e.classes,m=e.value,u=Object(r.a)(e,["children","className","classes","value"]),d=Object(l.d)();if(null===d)throw new TypeError("No TabContext provided");var g=Object(l.b)(d,m),E=Object(l.c)(d,m);return c.createElement("div",Object(n.a)({"aria-labelledby":E,className:Object(i.a)(s.root,o),hidden:m!==d.value,id:g,ref:t,role:"tabpanel"},u),m===d.value&&a)}));t.a=Object(o.a)((function(e){return{root:{padding:e.spacing(3)}}}),{name:"MuiTabPanel"})(s)},6051:function(e,t,a){"use strict";var n=a(5924),r=a(0),c=a.n(r);t.a=function(e){var t=e.colorCode,a=localStorage.getItem("display-mode")||"auto",r=Object(n.a)("(prefers-color-scheme: dark)");return c.a.createElement("div",{style:{height:"26px",width:"26px",border:"solid 2px "+("auto"===a?r?"white":"black":"dark"===a?"white":"black"),backgroundColor:t}})}},6198:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a(5910),c=a(42),i=a(5938),o=a(112),l=a(6206),s=a(6192),m=a(6033),u=a(6031),d=a(6092),g=a(5925),E=a(6048),h=a(6049),p=a(0),b=a.n(p),f=a(5883),v=a(11),O=a(52),j=a(6034),k=a.n(j),y=a(5956),I=a(5955),C=a(5960),w=a(5970),S=a(6051),J=a(51),A=a(5957),x=Object(r.a)((function(e){return{tabpanel:{padding:e.spacing("1%",0,0,0)},media:{paddingTop:"70%",cursor:"pointer"},nameLabel:{paddingTop:"30%",backgroundSize:"contain"},nameVerticalLabel:{paddingTop:"45%",backgroundSize:"contain"},"grid-out":{padding:e.spacing("1%","0")},"unit-logo-img":{maxHeight:"64px"},"unit-logo-large":{maxHeight:"64px",maxWidth:"100%"}}}));t.default=function(){var e=Object(v.g)().charaId,t=x(),a=Object(y.a)(),r=Object(f.a)().t,j=Object(p.useContext)(J.a).contentTransMode,F=Object(I.c)(j),K=Object(I.b)("cards"),U=Object(n.a)(K,1)[0],B=Object(I.b)("gameCharacters"),N=Object(n.a)(B,1)[0],Q=Object(I.b)("gameCharacterUnits"),R=Object(n.a)(Q,1)[0],T=Object(I.b)("characterProfiles"),L=Object(n.a)(T,1)[0],M=Object(I.b)("unitProfiles"),G=Object(n.a)(M,1)[0],W=Object(p.useState)(),Z=Object(n.a)(W,2),V=Z[0],Y=Z[1],P=Object(p.useState)(),D=Object(n.a)(P,2),H=D[0],q=D[1],X=Object(p.useState)([]),z=Object(n.a)(X,2),_=z[0],$=z[1],ee=Object(p.useState)(),te=Object(n.a)(ee,2),ae=te[0],ne=te[1],re=Object(p.useState)([]),ce=Object(n.a)(re,2),ie=ce[0],oe=ce[1],le=Object(p.useState)("0"),se=Object(n.a)(le,2),me=se[0],ue=se[1],de=Object(p.useState)(!1),ge=Object(n.a)(de,2),Ee=ge[0],he=ge[1],pe=Object(p.useState)(0),be=Object(n.a)(pe,2),fe=be[0],ve=be[1];Object(p.useEffect)((function(){if(N.length&&R.length&&L.length&&U.length&&G.length){var t=N.find((function(t){return t.id===Number(e)})),a=U.filter((function(e){return e.characterId===(null===t||void 0===t?void 0:t.id)}));Y(t),q(R.find((function(e){return e.gameCharacterId===(null===t||void 0===t?void 0:t.id)&&e.unit===(null===t||void 0===t?void 0:t.unit)}))),"piapro"===(null===t||void 0===t?void 0:t.unit)&&$(R.filter((function(e){return e.gameCharacterId===t.id&&"piapro"!==e.unit})).filter((function(e){return a.some((function(t){return t.supportUnit===e.unit}))})).map((function(e){return Object.assign({},e,G.find((function(t){return t.unit===e.unit})))}))),ne(L.find((function(e){return e.characterId===(null===t||void 0===t?void 0:t.id)}))),oe(a)}}),[N,Y,e,R,L,U,G]),Object(p.useEffect)((function(){document.title=r("title:memberDetail",{name:F(Number(e))})}),[r,e,F]);return V&&H&&ae&&ie.length?b.a.createElement(p.Fragment,null,b.a.createElement(c.a,{variant:"h6",className:a.header},F(Number(e))),b.a.createElement(i.a,{className:a.content,maxWidth:"sm"},b.a.createElement(E.a,{value:me},b.a.createElement(o.a,null,b.a.createElement(l.a,{value:me,onChange:function(e,t){ue(t)},variant:"scrollable",scrollButtons:"desktop"},b.a.createElement(s.a,{label:r("member:tab.title[0]"),value:"0"}),b.a.createElement(s.a,{label:r("member:tab.title[1]"),value:"1"}),b.a.createElement(s.a,{label:r("member:tab.title[2]"),value:"2"})),b.a.createElement(h.a,{value:"0",classes:{root:t.tabpanel}},b.a.createElement(m.a,{onClick:function(){ve(0),he(!0)}},b.a.createElement(u.a,{classes:{root:t.media},image:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/character/trim_rip/chr_trim_").concat(e,".webp")}))),b.a.createElement(h.a,{value:"1",classes:{root:t.tabpanel}},b.a.createElement(m.a,null,b.a.createElement(u.a,{classes:{root:t.nameLabel},image:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/character/label_rip/chr_h_lb_").concat(e,".webp")}))),b.a.createElement(h.a,{value:"2",classes:{root:t.tabpanel}},b.a.createElement(m.a,null,b.a.createElement(u.a,{classes:{root:t.nameVerticalLabel},image:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/character/label_vertical_rip/chr_v_lb_").concat(e,".webp")}))))),b.a.createElement(d.a,{className:t["grid-out"],container:!0,direction:"column"},b.a.createElement(d.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center"},b.a.createElement(c.a,{variant:"subtitle1",style:{fontWeight:600}},r("common:id")),b.a.createElement(c.a,null,V.id)),b.a.createElement(g.a,{style:{margin:"1% 0"}}),b.a.createElement(d.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center"},b.a.createElement(d.a,{item:!0},b.a.createElement(c.a,{variant:"subtitle1",style:{fontWeight:600}},r("member:name"))),b.a.createElement(d.a,{item:!0},b.a.createElement(A.a,{mode:j,characterId:Number(e),originalProps:{align:"right"},translatedProps:{align:"right"}}))),b.a.createElement(g.a,{style:{margin:"1% 0"}}),b.a.createElement(d.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center"},b.a.createElement(c.a,{variant:"subtitle1",style:{fontWeight:600}},r("member:hiragana")),b.a.createElement(c.a,null,V.firstNameRuby," ",V.givenNameRuby)),b.a.createElement(g.a,{style:{margin:"1% 0"}}),b.a.createElement(d.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center"},b.a.createElement(c.a,{variant:"subtitle1",style:{fontWeight:600}},r("member:gender.caption")),b.a.createElement(c.a,null,r("member:gender.".concat(V.gender)))),b.a.createElement(g.a,{style:{margin:"1% 0"}}),b.a.createElement(d.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center"},b.a.createElement(c.a,{variant:"subtitle1",style:{fontWeight:600}},r("common:unit")),b.a.createElement(O.b,{to:"/unit/"+V.unit},b.a.createElement("img",{className:t["unit-logo-img"],src:C.a[V.unit],alt:V.unit}))),b.a.createElement(g.a,{style:{margin:"1% 0"}}),["colorCode","skinColorCode","skinShadowColorCode1","skinShadowColorCode2"].map((function(e){return b.a.createElement(p.Fragment,{key:e},b.a.createElement(d.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center"},b.a.createElement(d.a,{item:!0},b.a.createElement(c.a,{variant:"subtitle1",style:{fontWeight:600}},r("member:"+e))),b.a.createElement(d.a,{item:!0},b.a.createElement(d.a,{container:!0,spacing:1},b.a.createElement(d.a,{item:!0},b.a.createElement(c.a,null,H[e])),b.a.createElement(d.a,{item:!0},b.a.createElement(S.a,{colorCode:H[e]}))))),b.a.createElement(g.a,{style:{margin:"1% 0"}}))})))),b.a.createElement(c.a,{variant:"h6",className:a.header},r("common:profile")),b.a.createElement(i.a,{className:a.content,maxWidth:"sm"},b.a.createElement(d.a,{className:t["grid-out"],container:!0,direction:"column"},Object.keys(ae).filter((function(e){return!["characterId","scenarioId"].includes(e)})).map((function(t){return b.a.createElement(p.Fragment,{key:t},b.a.createElement(d.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center"},b.a.createElement(d.a,{item:!0,xs:2},b.a.createElement(c.a,{variant:"subtitle1",style:{fontWeight:600}},r("member:"+t))),b.a.createElement(d.a,{item:!0,xs:6,md:8},b.a.createElement(d.a,{container:!0,justify:"flex-end"},b.a.createElement(d.a,{item:!0},b.a.createElement(A.b,{mode:j,contentKey:"character_profile:".concat(e,".").concat(t),original:ae[t],originalProps:{align:"right"},translatedProps:{align:"right"}}))))),b.a.createElement(g.a,{style:{margin:"1% 0"}}))})))),_.length?b.a.createElement(p.Fragment,null,b.a.createElement(c.a,{variant:"h6",className:a.header},r("common:support_unit")),b.a.createElement(i.a,{className:a.content},b.a.createElement(d.a,{className:t["grid-out"],container:!0,direction:"row",justify:"center",spacing:2},_.map((function(e){return b.a.createElement(p.Fragment,{key:"support-unit-"+e.id},b.a.createElement(d.a,{item:!0,xs:6,md:4},b.a.createElement(O.b,{to:"/unit/"+e.unit,style:{textDecoration:"none"}},b.a.createElement(o.a,null,b.a.createElement(d.a,{container:!0,direction:"column",wrap:"nowrap",alignItems:"center"},b.a.createElement("img",{className:t["unit-logo-large"],src:C.a[e.unit],alt:e.unit}),b.a.createElement(c.a,{variant:"subtitle1",style:{fontWeight:600},color:"textPrimary",align:"center"},e.unitName))))))}))))):null,b.a.createElement(c.a,{variant:"h6",className:a.header},r("common:card")),b.a.createElement(i.a,{className:a.content,maxWidth:"lg"},b.a.createElement(d.a,{className:t["grid-out"],container:!0,direction:"row",spacing:2},ie.map((function(e){return b.a.createElement(d.a,{item:!0,xs:4,md:2,lg:1,key:"card-"+e.id},b.a.createElement(O.b,{to:"/card/"+e.id,style:{textDecoration:"none"}},b.a.createElement(w.a,{id:e.id})))})))),b.a.createElement(k.a,{visible:Ee,onClose:function(){return he(!1)},images:[{src:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/character/trim_rip/chr_trim_").concat(e,".webp"),alt:r("member:tab.title[0]")}],zIndex:2e3,activeIndex:fe,downloadable:!0,downloadInNewWindow:!0,onMaskClick:function(){return he(!1)},onChange:function(e,t){return ve(t)},zoomSpeed:.25,noNavbar:!0})):b.a.createElement("div",null,"Loading... If you saw this for a while, member ",e," does not exist.")}}}]);
//# sourceMappingURL=17.feac68b8.chunk.js.map