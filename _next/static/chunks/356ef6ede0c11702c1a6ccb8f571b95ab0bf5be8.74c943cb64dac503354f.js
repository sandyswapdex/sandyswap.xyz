(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{ar9a:function(e,t,a){e.exports={ffContainer:"vote_ffContainer__1kIWW",notConnectedContent:"vote_notConnectedContent__1W6vM",contentFloat:"vote_contentFloat__3rEjO",overviewIcon:"vote_overviewIcon__1PLxj",mainHeading:"vote_mainHeading__2yS-N",mainDesc:"vote_mainDesc__2DLYr",mainHeadingNC:"vote_mainHeadingNC__qqBuS",mainDescNC:"vote_mainDescNC__3lt7Q",sphere:"vote_sphere__3A9K1",buttonConnect:"vote_buttonConnect__2H8KF"}},"bf/I":function(e,t,a){e.exports={container:"ssVotes_container__1yhn2",smallText:"ssVotes_smallText__3r8M_",tableContainer:"ssVotes_tableContainer__bbC3C",actionButtons:"ssVotes_actionButtons__Rzts5",actionButton:"ssVotes_actionButton__YoDYs",actionButtonText:"ssVotes_actionButtonText__U6Czp",loadingCircle:"ssVotes_loadingCircle__vyhD9",infoSection:"ssVotes_infoSection__cLIw6",helpText:"ssVotes_helpText__1dDOs",errorText:"ssVotes_errorText__2tv2j",buttonOverride:"ssVotes_buttonOverride__2wpzh",buttonOverrideFixed:"ssVotes_buttonOverrideFixed__6iVmw",tokenIDContainer:"ssVotes_tokenIDContainer__35WFe",searchContainer:"ssVotes_searchContainer__3L7pn",topBarContainer:"ssVotes_topBarContainer__2Au7Z",mediumInputContainer:"ssVotes_mediumInputContainer__2CnHt",mediumInputAssetSelect:"ssVotes_mediumInputAssetSelect__3Klwj",mediumInputAmount:"ssVotes_mediumInputAmount__3Ooyy",mediumInputAddress:"ssVotes_mediumInputAddress__29-sj",mediumInput:"ssVotes_mediumInput__1aY0V",menuOption:"ssVotes_menuOption__3ZLSe",smallerText:"ssVotes_smallerText__1WS4E"}},z4Sw:function(e,t,a){"use strict";a.r(t);var n=a("nKUr"),i=a("q1tI"),o=a("kKAo"),r=a("ofer"),l=a("Z3vd"),s=a("cpVT"),c=a("tRbT"),d=a("cVXz"),u=a("jjAL"),v=a("r9w1"),b=a("7SZd"),m=a("iae6"),h=a("kB5k"),g=a.n(h),p=a("bSwy"),x=a.n(p),j=a("20a2"),f=a("bf/I"),O=a.n(f),y=a("kMCw"),N=a("z7pX"),S=a("H2TA"),_=a("R/WZ"),C=a("SpDg"),w=a("KQm4"),k=a("ODXe"),E=a("Ff2n"),T=a("wx14"),L=a("iuhU"),V=a("tr08"),I=a("ye/S"),R=a("G7As"),A=a("gk1O"),D=a("Ovef"),P=a("bfFb"),B=a("NqtD"),F=a("yCxk");var U=Object(S.a)((function(e){return{thumb:{"&$open":{"& $offset":{transform:"scale(1) translateY(-10px)"}}},open:{},offset:Object(T.a)({zIndex:1},e.typography.body2,{fontSize:e.typography.pxToRem(12),lineHeight:1.2,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),top:-34,transformOrigin:"bottom center",transform:"scale(0)",position:"absolute"}),circle:{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,borderRadius:"50% 50% 50% 0",backgroundColor:"currentColor",transform:"rotate(-45deg)"},label:{color:e.palette.primary.contrastText,transform:"rotate(45deg)"}}}),{name:"PrivateValueLabel"})((function(e){var t=e.children,a=e.classes,n=e.className,o=e.open,r=e.value,l=e.valueLabelDisplay;return"off"===l?t:i.cloneElement(t,{className:Object(L.a)(t.props.className,(o||"on"===l)&&a.open,a.thumb)},i.createElement("span",{className:Object(L.a)(a.offset,n)},i.createElement("span",{className:a.circle},i.createElement("span",{className:a.label},r))))}));function M(e,t){return e-t}function z(e,t,a){return Math.min(Math.max(t,e),a)}function $(e,t){return e.reduce((function(e,a,n){var i=Math.abs(t-a);return null===e||i<e.distance||i===e.distance?{distance:i,index:n}:e}),null).index}function H(e,t){if(void 0!==t.current&&e.changedTouches){for(var a=0;a<e.changedTouches.length;a+=1){var n=e.changedTouches[a];if(n.identifier===t.current)return{x:n.clientX,y:n.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function W(e,t,a){return 100*(e-t)/(a-t)}function q(e,t,a){var n=Math.round((e-a)/t)*t+a;return Number(n.toFixed(function(e){if(Math.abs(e)<1){var t=e.toExponential().split("e-"),a=t[0].split(".")[1];return(a?a.length:0)+parseInt(t[1],10)}var n=e.toString().split(".")[1];return n?n.length:0}(t)))}function G(e){var t=e.values,a=e.source,n=e.newValue,i=e.index;if(t[i]===n)return a;var o=t.slice();return o[i]=n,o}function Y(e){var t=e.sliderRef,a=e.activeIndex,n=e.setActive;t.current.contains(document.activeElement)&&Number(document.activeElement.getAttribute("data-index"))===a||t.current.querySelector('[role="slider"][data-index="'.concat(a,'"]')).focus(),n&&n(a)}var K={horizontal:{offset:function(e){return{left:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},"horizontal-reverse":{offset:function(e){return{right:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},vertical:{offset:function(e){return{bottom:"".concat(e,"%")}},leap:function(e){return{height:"".concat(e,"%")}}}},X=function(e){return e},Z=i.forwardRef((function(e,t){var a=e["aria-label"],n=e["aria-labelledby"],o=e["aria-valuetext"],r=e.classes,l=e.className,s=e.color,c=void 0===s?"primary":s,d=e.component,u=void 0===d?"span":d,v=e.defaultValue,b=e.disabled,m=void 0!==b&&b,h=e.getAriaLabel,g=e.getAriaValueText,p=e.marks,x=void 0!==p&&p,j=e.max,f=void 0===j?100:j,O=e.min,y=void 0===O?0:O,N=e.name,S=e.onChange,_=e.onChangeCommitted,C=e.onMouseDown,I=e.orientation,Z=void 0===I?"horizontal":I,J=e.scale,Q=void 0===J?X:J,ee=e.step,te=void 0===ee?1:ee,ae=e.ThumbComponent,ne=void 0===ae?"span":ae,ie=e.track,oe=void 0===ie?"normal":ie,re=e.value,le=e.ValueLabelComponent,se=void 0===le?U:le,ce=e.valueLabelDisplay,de=void 0===ce?"off":ce,ue=e.valueLabelFormat,ve=void 0===ue?X:ue,be=Object(E.a)(e,["aria-label","aria-labelledby","aria-valuetext","classes","className","color","component","defaultValue","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","onMouseDown","orientation","scale","step","ThumbComponent","track","value","ValueLabelComponent","valueLabelDisplay","valueLabelFormat"]),me=Object(V.a)(),he=i.useRef(),ge=i.useState(-1),pe=ge[0],xe=ge[1],je=i.useState(-1),fe=je[0],Oe=je[1],ye=Object(F.a)({controlled:re,default:v,name:"Slider"}),Ne=Object(k.a)(ye,2),Se=Ne[0],_e=Ne[1],Ce=Array.isArray(Se),we=Ce?Se.slice().sort(M):[Se];we=we.map((function(e){return z(e,y,f)}));var ke=!0===x&&null!==te?Object(w.a)(Array(Math.floor((f-y)/te)+1)).map((function(e,t){return{value:y+te*t}})):x||[],Ee=Object(R.a)(),Te=Ee.isFocusVisible,Le=Ee.onBlurVisible,Ve=Ee.ref,Ie=i.useState(-1),Re=Ie[0],Ae=Ie[1],De=i.useRef(),Pe=Object(P.a)(Ve,De),Be=Object(P.a)(t,Pe),Fe=Object(D.a)((function(e){var t=Number(e.currentTarget.getAttribute("data-index"));Te(e)&&Ae(t),Oe(t)})),Ue=Object(D.a)((function(){-1!==Re&&(Ae(-1),Le()),Oe(-1)})),Me=Object(D.a)((function(e){var t=Number(e.currentTarget.getAttribute("data-index"));Oe(t)})),ze=Object(D.a)((function(){Oe(-1)})),$e="rtl"===me.direction,He=Object(D.a)((function(e){var t,a=Number(e.currentTarget.getAttribute("data-index")),n=we[a],i=(f-y)/10,o=ke.map((function(e){return e.value})),r=o.indexOf(n),l=$e?"ArrowLeft":"ArrowRight",s=$e?"ArrowRight":"ArrowLeft";switch(e.key){case"Home":t=y;break;case"End":t=f;break;case"PageUp":te&&(t=n+i);break;case"PageDown":te&&(t=n-i);break;case l:case"ArrowUp":t=te?n+te:o[r+1]||o[o.length-1];break;case s:case"ArrowDown":t=te?n-te:o[r-1]||o[0];break;default:return}if(e.preventDefault(),te&&(t=q(t,te,y)),t=z(t,y,f),Ce){var c=t;t=G({values:we,source:Se,newValue:t,index:a}).sort(M),Y({sliderRef:De,activeIndex:t.indexOf(c)})}_e(t),Ae(a),S&&S(e,t),_&&_(e,t)})),We=i.useRef(),qe=Z;$e&&"vertical"!==Z&&(qe+="-reverse");var Ge=function(e){var t,a,n=e.finger,i=e.move,o=void 0!==i&&i,r=e.values,l=e.source,s=De.current.getBoundingClientRect(),c=s.width,d=s.height,u=s.bottom,v=s.left;if(t=0===qe.indexOf("vertical")?(u-n.y)/d:(n.x-v)/c,-1!==qe.indexOf("-reverse")&&(t=1-t),a=function(e,t,a){return(a-t)*e+t}(t,y,f),te)a=q(a,te,y);else{var b=ke.map((function(e){return e.value}));a=b[$(b,a)]}a=z(a,y,f);var m=0;if(Ce){var h=a;m=(a=G({values:r,source:l,newValue:a,index:m=o?We.current:$(r,a)}).sort(M)).indexOf(h),We.current=m}return{newValue:a,activeIndex:m}},Ye=Object(D.a)((function(e){var t=H(e,he);if(t){var a=Ge({finger:t,move:!0,values:we,source:Se}),n=a.newValue,i=a.activeIndex;Y({sliderRef:De,activeIndex:i,setActive:xe}),_e(n),S&&S(e,n)}})),Ke=Object(D.a)((function(e){var t=H(e,he);if(t){var a=Ge({finger:t,values:we,source:Se}).newValue;xe(-1),"touchend"===e.type&&Oe(-1),_&&_(e,a),he.current=void 0;var n=Object(A.a)(De.current);n.removeEventListener("mousemove",Ye),n.removeEventListener("mouseup",Ke),n.removeEventListener("touchmove",Ye),n.removeEventListener("touchend",Ke)}})),Xe=Object(D.a)((function(e){e.preventDefault();var t=e.changedTouches[0];null!=t&&(he.current=t.identifier);var a=H(e,he),n=Ge({finger:a,values:we,source:Se}),i=n.newValue,o=n.activeIndex;Y({sliderRef:De,activeIndex:o,setActive:xe}),_e(i),S&&S(e,i);var r=Object(A.a)(De.current);r.addEventListener("touchmove",Ye),r.addEventListener("touchend",Ke)}));i.useEffect((function(){var e=De.current;e.addEventListener("touchstart",Xe);var t=Object(A.a)(e);return function(){e.removeEventListener("touchstart",Xe),t.removeEventListener("mousemove",Ye),t.removeEventListener("mouseup",Ke),t.removeEventListener("touchmove",Ye),t.removeEventListener("touchend",Ke)}}),[Ke,Ye,Xe]);var Ze=Object(D.a)((function(e){C&&C(e),e.preventDefault();var t=H(e,he),a=Ge({finger:t,values:we,source:Se}),n=a.newValue,i=a.activeIndex;Y({sliderRef:De,activeIndex:i,setActive:xe}),_e(n),S&&S(e,n);var o=Object(A.a)(De.current);o.addEventListener("mousemove",Ye),o.addEventListener("mouseup",Ke)})),Je=W(Ce?we[0]:y,y,f),Qe=W(we[we.length-1],y,f)-Je,et=Object(T.a)({},K[qe].offset(Je),K[qe].leap(Qe));return i.createElement(u,Object(T.a)({ref:Be,className:Object(L.a)(r.root,r["color".concat(Object(B.a)(c))],l,m&&r.disabled,ke.length>0&&ke.some((function(e){return e.label}))&&r.marked,!1===oe&&r.trackFalse,"vertical"===Z&&r.vertical,"inverted"===oe&&r.trackInverted),onMouseDown:Ze},be),i.createElement("span",{className:r.rail}),i.createElement("span",{className:r.track,style:et}),i.createElement("input",{value:we.join(","),name:N,type:"hidden"}),ke.map((function(e,t){var a,n=W(e.value,y,f),o=K[qe].offset(n);return a=!1===oe?-1!==we.indexOf(e.value):"normal"===oe&&(Ce?e.value>=we[0]&&e.value<=we[we.length-1]:e.value<=we[0])||"inverted"===oe&&(Ce?e.value<=we[0]||e.value>=we[we.length-1]:e.value>=we[0]),i.createElement(i.Fragment,{key:e.value},i.createElement("span",{style:o,"data-index":t,className:Object(L.a)(r.mark,a&&r.markActive)}),null!=e.label?i.createElement("span",{"aria-hidden":!0,"data-index":t,style:o,className:Object(L.a)(r.markLabel,a&&r.markLabelActive)},e.label):null)})),we.map((function(e,t){var l=W(e,y,f),s=K[qe].offset(l);return i.createElement(se,{key:t,valueLabelFormat:ve,valueLabelDisplay:de,className:r.valueLabel,value:"function"===typeof ve?ve(Q(e),t):ve,index:t,open:fe===t||pe===t||"on"===de,disabled:m},i.createElement(ne,{className:Object(L.a)(r.thumb,r["thumbColor".concat(Object(B.a)(c))],pe===t&&r.active,m&&r.disabled,Re===t&&r.focusVisible),tabIndex:m?null:0,role:"slider",style:s,"data-index":t,"aria-label":h?h(t):a,"aria-labelledby":n,"aria-orientation":Z,"aria-valuemax":Q(f),"aria-valuemin":Q(y),"aria-valuenow":Q(e),"aria-valuetext":g?g(Q(e),t):o,onKeyDown:He,onFocus:Fe,onBlur:Ue,onMouseOver:Me,onMouseLeave:ze}))})))})),J=Object(S.a)((function(e){return{root:{height:2,width:"100%",boxSizing:"content-box",padding:"13px 0",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:e.palette.primary.main,WebkitTapHighlightColor:"transparent","&$disabled":{pointerEvents:"none",cursor:"default",color:e.palette.grey[400]},"&$vertical":{width:2,height:"100%",padding:"0 13px"},"@media (pointer: coarse)":{padding:"20px 0","&$vertical":{padding:"0 20px"}},"@media print":{colorAdjust:"exact"}},colorPrimary:{},colorSecondary:{color:e.palette.secondary.main},marked:{marginBottom:20,"&$vertical":{marginBottom:"auto",marginRight:20}},vertical:{},disabled:{},rail:{display:"block",position:"absolute",width:"100%",height:2,borderRadius:1,backgroundColor:"currentColor",opacity:.38,"$vertical &":{height:"100%",width:2}},track:{display:"block",position:"absolute",height:2,borderRadius:1,backgroundColor:"currentColor","$vertical &":{width:2}},trackFalse:{"& $track":{display:"none"}},trackInverted:{"& $track":{backgroundColor:"light"===e.palette.type?Object(I.e)(e.palette.primary.main,.62):Object(I.b)(e.palette.primary.main,.5)},"& $rail":{opacity:1}},thumb:{position:"absolute",width:12,height:12,marginLeft:-6,marginTop:-5,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow"],{duration:e.transitions.duration.shortest}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",left:-15,top:-15,right:-15,bottom:-15},"&$focusVisible,&:hover":{boxShadow:"0px 0px 0px 8px ".concat(Object(I.a)(e.palette.primary.main,.16)),"@media (hover: none)":{boxShadow:"none"}},"&$active":{boxShadow:"0px 0px 0px 14px ".concat(Object(I.a)(e.palette.primary.main,.16))},"&$disabled":{width:8,height:8,marginLeft:-4,marginTop:-3,"&:hover":{boxShadow:"none"}},"$vertical &":{marginLeft:-5,marginBottom:-6},"$vertical &$disabled":{marginLeft:-3,marginBottom:-4}},thumbColorPrimary:{},thumbColorSecondary:{"&$focusVisible,&:hover":{boxShadow:"0px 0px 0px 8px ".concat(Object(I.a)(e.palette.secondary.main,.16))},"&$active":{boxShadow:"0px 0px 0px 14px ".concat(Object(I.a)(e.palette.secondary.main,.16))}},active:{},focusVisible:{},valueLabel:{left:"calc(-50% - 4px)"},mark:{position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},markActive:{backgroundColor:e.palette.background.paper,opacity:.8},markLabel:Object(T.a)({},e.typography.body2,{color:e.palette.text.secondary,position:"absolute",top:26,transform:"translateX(-50%)",whiteSpace:"nowrap","$vertical &":{top:"auto",left:26,transform:"translateY(50%)"},"@media (pointer: coarse)":{top:40,"$vertical &":{left:31}}}),markLabelActive:{color:e.palette.text.primary}}}),{name:"MuiSlider"})(Z),Q=a("Imu7"),ee=a("sRsu"),te=a("3PeG"),ae=a("wzcM"),ne=a("nCZa"),ie=a("/EAt"),oe=a("Uf6+"),re=a("ELmG"),le=Object(S.a)({root:{color:"#9b9b9b",height:8},thumb:{height:24,width:24,backgroundColor:"#9b9b9b",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8},rail:{height:8}})(J);function se(e,t,a){var n,i,o,r,l,s,c,d,u,v,b,m,h,p,x,j;if(!e||!t)return 0;switch(a){case"balance":return g()(null===t||void 0===t||null===(n=t.gauge)||void 0===n?void 0:n.balance).lt(null===e||void 0===e||null===(i=e.gauge)||void 0===i?void 0:i.balance)?-1:g()(null===t||void 0===t||null===(o=t.gauge)||void 0===o?void 0:o.balance).gt(null===e||void 0===e||null===(r=e.gauge)||void 0===r?void 0:r.balance)?1:0;case"liquidity":var f=g()(null===e||void 0===e?void 0:e.reserve0).plus(null===e||void 0===e?void 0:e.reserve1).toNumber(),O=g()(null===t||void 0===t?void 0:t.reserve0).plus(null===t||void 0===t?void 0:t.reserve1).toNumber();return g()(O).lt(f)?-1:g()(O).gt(f)?1:0;case"totalVotes":return g()(null===t||void 0===t||null===(l=t.gauge)||void 0===l?void 0:l.weightPercent).lt(null===e||void 0===e||null===(s=e.gauge)||void 0===s?void 0:s.weightPercent)?-1:g()(null===t||void 0===t||null===(c=t.gauge)||void 0===c?void 0:c.weightPercent).gt(null===e||void 0===e||null===(d=e.gauge)||void 0===d?void 0:d.weightPercent)?1:0;case"apy":return g()(null===t||void 0===t||null===(u=t.gauge)||void 0===u?void 0:u.bribes.length).lt(null===e||void 0===e||null===(v=e.gauge)||void 0===v?void 0:v.bribes.length)?-1:g()(null===t||void 0===t||null===(b=t.gauge)||void 0===b?void 0:b.bribes.length).gt(null===e||void 0===e||null===(m=e.gauge)||void 0===m?void 0:m.bribes.length)?1:0;case"myVotes":case"mvp":return g()(null===t||void 0===t||null===(h=t.gauge)||void 0===h?void 0:h.bribes.length).lt(null===e||void 0===e||null===(p=e.gauge)||void 0===p?void 0:p.bribes.length)?-1:g()(null===t||void 0===t||null===(x=t.gauge)||void 0===x?void 0:x.bribes.length).gt(null===e||void 0===e||null===(j=e.gauge)||void 0===j?void 0:j.bribes.length)?1:0;default:return 0}}function ce(e,t){return"desc"===e?function(e,a){return se(e,a,t)}:function(e,a){return-se(e,a,t)}}function de(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}var ue=[{id:"asset",numeric:!1,disablePadding:!1,label:"Asset"},{id:"balance",numeric:!0,disablePadding:!1,label:"My Stake"},{id:"liquidity",numeric:!0,disablePadding:!1,label:"Total Liquidity"},{id:"totalVotes",numeric:!0,disablePadding:!1,label:"Total Votes"},{id:"apy",numeric:!0,disablePadding:!1,label:"Bribes"},{id:"myVotes",numeric:!0,disablePadding:!1,label:"My Votes"},{id:"mvp",numeric:!0,disablePadding:!1,label:"My Vote %"}];function ve(e){var t=e.classes,a=e.order,i=e.orderBy,o=e.onRequestSort;return Object(n.jsx)(Q.a,{children:Object(n.jsx)(ee.a,{children:ue.map((function(e){return Object(n.jsx)(te.a,{className:t.overrideTableHead,align:e.numeric?"right":"left",padding:"normal",sortDirection:i===e.id&&a,children:Object(n.jsxs)(ae.a,{active:i===e.id,direction:i===e.id?a:"asc",onClick:(l=e.id,function(e){o(e,l)}),children:[Object(n.jsx)(r.a,{variant:"h5",className:t.headerText,children:e.label}),i===e.id?Object(n.jsx)("span",{className:t.visuallyHidden,children:"desc"===a?"sorted descending":"sorted ascending"}):null]})},e.id);var l}))})})}var be=Object(_.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},inline:{display:"flex",alignItems:"center"},inlineBetween:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 0px"},icon:{marginRight:"12px"},textSpaced:{lineHeight:"1.5",fontWeight:"200",fontSize:"12px"},textSpacedFloat:{lineHeight:"1.5",fontWeight:"200",fontSize:"12px",float:"right"},cell:{},cellSuccess:{color:"#4eaf0a"},cellAddress:{cursor:"pointer"},aligntRight:{display:"flex",flexDirection:"column",alignItems:"flex-end"},skelly:{marginBottom:"12px",marginTop:"12px"},skelly1:{marginBottom:"12px",marginTop:"24px"},skelly2:{margin:"12px 6px"},tableBottomSkelly:{display:"flex",justifyContent:"flex-end"},assetInfo:{display:"flex",alignItems:"center",justifyContent:"space-between",flex:1,padding:"24px",width:"100%",flexWrap:"wrap",borderBottom:"1px solid rgba(128, 128, 128, 0.32)",background:"radial-gradient(circle, rgba(63,94,251,0.7) 0%, rgba(47,128,237,0.7) 48%) rgba(63,94,251,0.7) 100%"},assetInfoError:{display:"flex",alignItems:"center",justifyContent:"space-between",flex:1,padding:"24px",width:"100%",flexWrap:"wrap",borderBottom:"1px solid rgba(128, 128, 128, 0.32)",background:"#dc3545"},infoField:{flex:1},flexy:{padding:"6px 0px"},overrideCell:{padding:"0px"},hoverRow:{cursor:"pointer"},statusLiquid:{color:"#dc3545"},statusWarning:{color:"#FF9029"},statusSafe:{color:"green"},imgLogo:{marginRight:"12px"},tableContainer:{overflowX:"hidden"},overrideTableHead:{borderBottom:"1px solid rgba(104,108,122,0.2) !important"},headerText:{fontWeight:"200",fontSize:"12px"},tooltipContainer:{minWidth:"240px",padding:"0px 15px"},infoIcon:{color:"#9b9b9b",fontSize:"16px",float:"right",marginLeft:"10px"},doubleImages:{display:"flex",position:"relative",width:"70px",height:"35px"},img1Logo:{position:"absolute",left:"0px",top:"0px",border:"3px solid rgb(41, 41, 41)",borderRadius:"30px"},img2Logo:{position:"absolute",left:"23px",zIndex:"1",top:"0px",border:"3px solid rgb(41, 41, 41)",borderRadius:"30px"},inlineEnd:{display:"flex",alignItems:"center",justifyContent:"flex-end"}}}));function me(e){var t=e.gauges,a=e.setParentSliderValues,o=e.defaultVotes,l=(e.veToken,e.token),s=be(),c=Object(i.useState)("desc"),d=c[0],u=c[1],v=Object(i.useState)("totalVotes"),b=v[0],m=v[1],h=Object(i.useState)(o),p=h[0],x=h[1],j=Object(i.useState)(10),f=j[0],O=j[1],S=Object(i.useState)(0),_=S[0],w=S[1];Object(i.useEffect)((function(){x(o)}),[o]);if(!t)return Object(n.jsxs)("div",{className:s.root,children:[Object(n.jsx)(C.a,{variant:"rect",width:"100%",height:40,className:s.skelly1}),Object(n.jsx)(C.a,{variant:"rect",width:"100%",height:70,className:s.skelly}),Object(n.jsx)(C.a,{variant:"rect",width:"100%",height:70,className:s.skelly}),Object(n.jsx)(C.a,{variant:"rect",width:"100%",height:70,className:s.skelly}),Object(n.jsx)(C.a,{variant:"rect",width:"100%",height:70,className:s.skelly}),Object(n.jsx)(C.a,{variant:"rect",width:"100%",height:70,className:s.skelly})]});var k=f-Math.min(f,t.length-_*f);return Object(n.jsxs)("div",{className:s.root,children:[Object(n.jsx)(ne.a,{className:s.tableContainer,children:Object(n.jsxs)(ie.a,{className:s.table,"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table",children:[Object(n.jsx)(ve,{classes:s,order:d,orderBy:b,onRequestSort:function(e,t){u(b===t&&"asc"===d?"desc":"asc"),m(t)}}),Object(n.jsxs)(oe.a,{children:[de(t,ce(d,b)).slice(_*f,_*f+f).map((function(e,t){var i,o,c,d,u,v,b,m,h,x,j,f,O;if(!e)return null;var S=null===(i=p.find((function(t){return t.address===(null===e||void 0===e?void 0:e.address)})))||void 0===i?void 0:i.value;return S=S?g()(S).toNumber(0):0,Object(n.jsxs)(ee.a,{children:[Object(n.jsx)(te.a,{className:s.cell,children:Object(n.jsxs)("div",{className:s.inline,children:[Object(n.jsxs)("div",{className:s.doubleImages,children:[Object(n.jsx)("img",{className:s.img1Logo,src:e&&e.token0&&e.token0.logoURI?e.token0.logoURI:"",width:"37",height:"37",alt:"",onError:function(e){e.target.onerror=null,e.target.src="/tokens/unknown-logo.png"}}),Object(n.jsx)("img",{className:s.img2Logo,src:e&&e.token1&&e.token1.logoURI?e.token1.logoURI:"",width:"37",height:"37",alt:"",onError:function(e){e.target.onerror=null,e.target.src="/tokens/unknown-logo.png"}})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(r.a,{variant:"h2",className:s.textSpaced,children:null===e||void 0===e?void 0:e.symbol}),Object(n.jsx)(r.a,{variant:"h5",className:s.textSpaced,color:"textSecondary",children:null!==e&&void 0!==e&&e.isStable?"Stable Pool":"Volatile Pool"})]})]})}),Object(n.jsxs)(te.a,{className:s.cell,align:"right",children:[Object(n.jsxs)("div",{className:s.inlineEnd,children:[Object(n.jsx)(r.a,{variant:"h2",className:s.textSpaced,children:Object(y.b)(g()(null===e||void 0===e||null===(c=e.gauge)||void 0===c?void 0:c.balance).div(null===e||void 0===e||null===(d=e.gauge)||void 0===d?void 0:d.totalSupply).times(null===e||void 0===e?void 0:e.reserve0))}),Object(n.jsx)(r.a,{variant:"h5",className:s.textSpaced,color:"textSecondary",children:null===e||void 0===e||null===(u=e.token0)||void 0===u?void 0:u.symbol})]}),Object(n.jsxs)("div",{className:s.inlineEnd,children:[Object(n.jsx)(r.a,{variant:"h5",className:s.textSpaced,children:Object(y.b)(g()(null===e||void 0===e||null===(v=e.gauge)||void 0===v?void 0:v.balance).div(null===e||void 0===e||null===(b=e.gauge)||void 0===b?void 0:b.totalSupply).times(null===e||void 0===e?void 0:e.reserve1))}),Object(n.jsx)(r.a,{variant:"h5",className:s.textSpaced,color:"textSecondary",children:null===e||void 0===e||null===(m=e.token1)||void 0===m?void 0:m.symbol})]})]}),Object(n.jsxs)(te.a,{className:s.cell,align:"right",children:[Object(n.jsxs)("div",{className:s.inlineEnd,children:[Object(n.jsx)(r.a,{variant:"h2",className:s.textSpaced,children:Object(y.b)(g()(null===e||void 0===e?void 0:e.reserve0))}),Object(n.jsx)(r.a,{variant:"h5",className:s.textSpaced,color:"textSecondary",children:null===e||void 0===e||null===(h=e.token0)||void 0===h?void 0:h.symbol})]}),Object(n.jsxs)("div",{className:s.inlineEnd,children:[Object(n.jsx)(r.a,{variant:"h5",className:s.textSpaced,children:Object(y.b)(g()(null===e||void 0===e?void 0:e.reserve1))}),Object(n.jsx)(r.a,{variant:"h5",className:s.textSpaced,color:"textSecondary",children:null===e||void 0===e||null===(x=e.token1)||void 0===x?void 0:x.symbol})]})]}),Object(n.jsxs)(te.a,{className:s.cell,align:"right",children:[Object(n.jsx)(r.a,{variant:"h2",className:s.textSpaced,children:Object(y.b)(null===e||void 0===e||null===(j=e.gauge)||void 0===j?void 0:j.weight)}),Object(n.jsxs)(r.a,{variant:"h5",className:s.textSpaced,color:"textSecondary",children:[Object(y.b)(null===e||void 0===e||null===(f=e.gauge)||void 0===f?void 0:f.weightPercent)," %"]})]}),Object(n.jsx)(te.a,{className:s.cell,align:"right",children:null===e||void 0===e||null===(O=e.gauge)||void 0===O?void 0:O.bribes.map((function(e,t){return Object(n.jsxs)("div",{className:s.inlineEnd,children:[Object(n.jsx)(r.a,{variant:"h2",className:s.textSpaced,children:Object(y.b)(e.rewardAmount)}),Object(n.jsx)(r.a,{variant:"h5",className:s.textSpaced,color:"textSecondary",children:e.token.symbol})]})}))}),Object(n.jsxs)(te.a,{className:s.cell,align:"right",children:[Object(n.jsx)(r.a,{variant:"h2",className:s.textSpaced,children:Object(y.b)(g()(S).div(100).times(null===l||void 0===l?void 0:l.lockValue))}),Object(n.jsxs)(r.a,{variant:"h5",className:s.textSpaced,color:"textSecondary",children:[Object(y.b)(S)," %"]})]}),Object(n.jsx)(te.a,{className:s.cell,align:"right",children:Object(n.jsx)(le,{valueLabelDisplay:"auto",value:S,onChange:function(t,n){!function(e,t,n){var i=Object(N.a)(p);i=i.map((function(e){return(null===n||void 0===n?void 0:n.address)===e.address&&(e.value=t),e})),a(i)}(0,n,e)},min:-100,max:100,marks:!0})})]},null===e||void 0===e||null===(o=e.gauge)||void 0===o?void 0:o.address)})),k>0&&Object(n.jsx)(ee.a,{style:{height:61*k},children:Object(n.jsx)(te.a,{colSpan:7})})]})]})}),Object(n.jsx)(re.a,{rowsPerPageOptions:[5,10,25],component:"div",count:t.length,rowsPerPage:f,page:_,onPageChange:function(e,t){w(t)},onRowsPerPageChange:function(e){O(parseInt(e.target.value,10)),w(0)}})]})}var he=a("Fu3s"),ge=a("hOaT");function pe(){Object(j.useRouter)();var e,t,a=Object(i.useState)()[1],h=Object(i.useCallback)((function(){return a({})}),[]),p=Object(i.useState)([]),f=p[0],N=p[1],S=Object(i.useState)(!1),_=S[0],C=S[1],w=Object(i.useState)([]),k=w[0],E=w[1],T=Object(i.useState)(null),L=T[0],V=T[1],I=Object(i.useState)(null),R=I[0],A=I[1],D=Object(i.useState)([]),P=D[0],B=D[1],F=Object(i.useState)(""),U=F[0],M=F[1],z=function(){V(he.a.stableSwapStore.getStore("veToken"));var e=he.a.stableSwapStore.getStore("pairs").filter((function(e){return e.gauge&&e.gauge.address}));N(e);var t=he.a.stableSwapStore.getStore("vestNFTs");B(t),t&&t.length>0&&A(t[0]),t&&t.length>0&&e&&e.length>0&&(he.a.dispatcher.dispatch({type:ge.a.GET_VEST_VOTES,content:{tokenID:t[0].id}}),he.a.dispatcher.dispatch({type:ge.a.GET_VEST_BALANCES,content:{tokenID:t[0].id}})),h()};Object(i.useEffect)((function(){var e=function(e){E(e.map((function(e){return{address:null===e||void 0===e?void 0:e.address,value:g()(e&&e.votePercent?e.votePercent:0).toNumber(0)}}))),h()},t=function(e){N(e),h()},a=function(){z()},n=function(){C(!1)};return z(),he.a.emitter.on(ge.a.UPDATED,a),he.a.emitter.on(ge.a.VOTE_RETURNED,n),he.a.emitter.on(ge.a.ERROR,n),he.a.emitter.on(ge.a.VEST_VOTES_RETURNED,e),he.a.emitter.on(ge.a.VEST_BALANCES_RETURNED,t),function(){he.a.emitter.removeListener(ge.a.UPDATED,a),he.a.emitter.removeListener(ge.a.VOTE_RETURNED,n),he.a.emitter.removeListener(ge.a.ERROR,n),he.a.emitter.removeListener(ge.a.VEST_VOTES_RETURNED,e),he.a.emitter.removeListener(ge.a.VEST_BALANCES_RETURNED,t)}}),[]);var $,H,W=k.reduce((function(e,t){return g()(e).plus(g()(t.value).lt(0)?-1*t.value:t.value).toNumber()}),0),q=function(e){A(e.target.value),he.a.dispatcher.dispatch({type:ge.a.GET_VEST_VOTES,content:{tokenID:e.target.value.id}})};return Object(n.jsxs)("div",{className:O.a.container,children:[Object(n.jsx)("div",{className:O.a.topBarContainer,children:Object(n.jsxs)(c.a,{container:!0,spacing:1,children:[Object(n.jsx)(c.a,(e={item:!0,lg:"auto"},Object(s.a)(e,"lg","auto"),Object(s.a)(e,"sm",12),Object(s.a)(e,"xs",12),e)),Object(n.jsx)(c.a,{item:!0,lg:!0,md:!0,sm:12,xs:12,children:Object(n.jsx)(v.a,{className:O.a.searchContainer,variant:"outlined",fullWidth:!0,placeholder:"ETH, MIM, 0x...",value:U,onChange:function(e){M(e.target.value)},InputProps:{startAdornment:Object(n.jsx)(b.a,{position:"start",children:Object(n.jsx)(x.a,{})})}})}),Object(n.jsx)(c.a,(t={item:!0,lg:"auto"},Object(s.a)(t,"lg","auto"),Object(s.a)(t,"sm",12),Object(s.a)(t,"xs",12),Object(s.a)(t,"children",Object(n.jsx)("div",{className:O.a.tokenIDContainer,children:($=R,H=P,Object(n.jsx)("div",{className:O.a.textField,children:Object(n.jsx)("div",{className:O.a.mediumInputContainer,children:Object(n.jsxs)(c.a,{container:!0,children:[Object(n.jsx)(c.a,{item:!0,lg:"auto",md:"auto",sm:12,xs:12,children:Object(n.jsx)(r.a,{variant:"body2",className:O.a.smallText,children:"Please select your veNFT:"})}),Object(n.jsx)(c.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:Object(n.jsx)("div",{className:O.a.mediumInputAmount,children:Object(n.jsx)(d.a,{fullWidth:!0,value:$,onChange:q,InputProps:{className:O.a.mediumInput},children:H&&H.map((function(e){return Object(n.jsx)(u.a,{value:e,children:Object(n.jsxs)("div",{className:O.a.menuOption,children:[Object(n.jsxs)(r.a,{children:["Token #",e.id]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(r.a,{align:"right",className:O.a.smallerText,children:Object(y.b)(e.lockValue)}),Object(n.jsx)(r.a,{color:"textSecondary",className:O.a.smallerText,children:null===L||void 0===L?void 0:L.symbol})]})]})},e.id)}))})})})]})})}))})),t))]})}),Object(n.jsx)(o.a,{elevation:0,className:O.a.tableContainer,children:Object(n.jsx)(me,{gauges:f.filter((function(e){if(!U||""===U)return!0;var t=U.toLowerCase();return!!(e.symbol.toLowerCase().includes(t)||e.address.toLowerCase().includes(t)||e.token0.symbol.toLowerCase().includes(t)||e.token0.address.toLowerCase().includes(t)||e.token0.name.toLowerCase().includes(t)||e.token1.symbol.toLowerCase().includes(t)||e.token1.address.toLowerCase().includes(t)||e.token1.name.toLowerCase().includes(t))})),setParentSliderValues:E,defaultVotes:k,veToken:L,token:R})}),Object(n.jsx)(o.a,{elevation:10,className:O.a.actionButtons,children:Object(n.jsxs)(c.a,{container:!0,spacing:2,children:[Object(n.jsx)(c.a,{item:!0,lg:6,children:Object(n.jsxs)("div",{className:O.a.infoSection,children:[Object(n.jsx)(r.a,{children:"Voting Power Used: "}),Object(n.jsxs)(r.a,{className:"".concat(g()(W).gt(100)?O.a.errorText:O.a.helpText),children:[W," %"]})]})}),Object(n.jsx)(c.a,{item:!0,lg:6,children:Object(n.jsxs)(l.a,{className:O.a.buttonOverrideFixed,variant:"contained",size:"large",color:"primary",disabled:_||g()(W).eq(0)||g()(W).gt(100),onClick:function(){C(!0),he.a.dispatcher.dispatch({type:ge.a.VOTE,content:{votes:k,tokenID:R.id}})},children:[Object(n.jsx)(r.a,{className:O.a.actionButtonText,children:_?"Casting Votes":"Cast Votes"}),_&&Object(n.jsx)(m.a,{size:10,className:O.a.loadingCircle})]})})]})})]})}var xe=a("siHL"),je=a("ar9a"),fe=a.n(je);t.default=function(e){e.changeTheme;var t=he.a.accountStore.getStore("account"),a=Object(i.useState)(t),s=a[0],c=a[1],d=Object(i.useState)(!1),u=d[0],v=d[1];Object(i.useEffect)((function(){var e=function(){var e=he.a.accountStore.getStore("account");c(e),m()},t=function(){b()};return he.a.emitter.on(ge.a.ACCOUNT_CONFIGURED,e),he.a.emitter.on(ge.a.CONNECT_WALLET,t),function(){he.a.emitter.removeListener(ge.a.ACCOUNT_CONFIGURED,e),he.a.emitter.removeListener(ge.a.CONNECT_WALLET,t)}}),[]);var b=function(){v(!0)},m=function(){v(!1)};return Object(n.jsxs)("div",{className:fe.a.ffContainer,children:[s&&s.address?Object(n.jsx)("div",{className:fe.a.connected,children:Object(n.jsx)(pe,{})}):Object(n.jsxs)(o.a,{className:fe.a.notConnectedContent,children:[Object(n.jsx)("div",{className:fe.a.sphere}),Object(n.jsxs)("div",{className:fe.a.contentFloat,children:[Object(n.jsx)(r.a,{className:fe.a.mainHeadingNC,variant:"h1",children:"Vote"}),Object(n.jsx)(r.a,{className:fe.a.mainDescNC,variant:"body2",children:"Use your veSolid to vote for your selected liquidity pair\u2019s rewards distribution or create a bribe to encourage others to do the same."}),Object(n.jsxs)(l.a,{disableElevation:!0,className:fe.a.buttonConnect,variant:"contained",onClick:b,children:[s&&s.address&&Object(n.jsx)("div",{className:"".concat(fe.a.accountIcon," ").concat(fe.a.metamask)}),Object(n.jsx)(r.a,{children:"Connect Wallet to Continue"})]})]})]}),u&&Object(n.jsx)(xe.a,{modalOpen:u,closeModal:m})]})}}}]);