_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[48],{"7SZd":function(e,t,n){"use strict";var i=n("wx14"),a=n("Ff2n"),s=n("q1tI"),o=n("iuhU"),r=n("ofer"),c=n("H2TA"),l=n("4hqb"),d=s.forwardRef((function(e,t){var n=e.children,c=e.classes,d=e.className,u=e.component,m=void 0===u?"div":u,b=e.disablePointerEvents,h=void 0!==b&&b,j=e.disableTypography,x=void 0!==j&&j,v=e.position,p=e.variant,f=Object(a.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),g=Object(l.b)()||{},O=p;return p&&g.variant,g&&!O&&(O=g.variant),s.createElement(l.a.Provider,{value:null},s.createElement(m,Object(i.a)({className:Object(o.a)(c.root,d,"end"===v?c.positionEnd:c.positionStart,h&&c.disablePointerEvents,g.hiddenLabel&&c.hiddenLabel,"filled"===O&&c.filled,"dense"===g.margin&&c.marginDense),ref:t},f),"string"!==typeof n||x?n:s.createElement(r.a,{color:"textSecondary"},n)))}));t.a=Object(c.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(d)},DotO:function(e,t,n){"use strict";n.r(t);var i=n("nKUr"),a=n("kKAo"),s=n("ofer"),o=n("Z3vd"),r=n("vJKn"),c=n.n(r),l=n("rg98"),d=n("q1tI"),u=n("csfp"),m=n("iae6"),b=n("tRbT"),h=n("cVXz"),j=n("jjAL"),x=n("r9w1"),v=n("7SZd"),p=n("kB5k"),f=n.n(p),g=n("XIw9"),O=n.n(g),_=n("bSwy"),C=n.n(_),N=n("Fu3s"),w=n("hOaT"),S=n("kMCw");function y(){var e=Object(d.useState)(null),t=e[0],n=e[1],r=Object(d.useState)(!1),p=r[0],g=r[1],_=Object(d.useState)(!1),y=_[0],E=_[1],W=Object(d.useState)(""),T=W[0],I=W[1],k=Object(d.useState)(null),A=k[0],L=k[1],R=Object(d.useState)([]),D=R[0],F=R[1],H=Object(d.useState)(null),U=H[0],P=H[1],z=Object(d.useState)(null),M=z[0],B=z[1];Object(d.useEffect)((function(){var e=function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L(t),g(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E(!1);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){B(N.a.stableSwapStore.getStore("veToken"));var e=N.a.stableSwapStore.getStore("vestNFTs");F(e),e&&e.length>0&&P(e[0])},a=function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.accountStore.getWeb3Provider();case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){E(!1)};return N.a.emitter.on(w.a.ERROR,s),N.a.emitter.on(w.a.UPDATED,i),N.a.emitter.on(w.a.ACCOUNT_CHANGED,a),N.a.emitter.on(w.a.ACCOUNT_CONFIGURED,a),N.a.emitter.on(w.a.SEARCH_WHITELIST_RETURNED,e),N.a.emitter.on(w.a.WHITELIST_TOKEN_RETURNED,t),a(),function(){N.a.emitter.removeListener(w.a.ERROR,s),N.a.emitter.removeListener(w.a.UPDATED,i),N.a.emitter.removeListener(w.a.ACCOUNT_CHANGED,a),N.a.emitter.removeListener(w.a.ACCOUNT_CONFIGURED,a),N.a.emitter.removeListener(w.a.SEARCH_WHITELIST_RETURNED,e),N.a.emitter.removeListener(w.a.WHITELIST_TOKEN_RETURNED,t)}}),[]);var G,V,q=function(){E(!0),N.a.dispatcher.dispatch({type:w.a.WHITELIST_TOKEN,content:{token:A,nft:U}})},K=function(e){P(e.target.value)};return Object(i.jsxs)("div",{className:O.a.container,children:[Object(i.jsx)("div",{className:O.a.searchBar,children:Object(i.jsxs)(b.a,{container:!0,spacing:2,children:[Object(i.jsx)(b.a,{item:!0,lg:7,md:7,sm:12,xs:12,children:Object(i.jsx)(x.a,{className:O.a.searchContainer,variant:"outlined",fullWidth:!0,placeholder:"0x...",value:T,onChange:function(e){I(e.target.value),t&&t.utils.isAddress(e.target.value)&&(g(!0),N.a.dispatcher.dispatch({type:w.a.SEARCH_WHITELIST,content:{search:e.target.value}}))},InputProps:{startAdornment:Object(i.jsx)(v.a,{position:"start",children:Object(i.jsx)(C.a,{})})}})}),Object(i.jsx)(b.a,{item:!0,lg:5,md:5,sm:12,xs:12,children:(G=U,V=D,Object(i.jsx)("div",{className:O.a.textField,children:Object(i.jsx)("div",{className:O.a.mediumInputContainer,children:Object(i.jsxs)(b.a,{container:!0,children:[Object(i.jsx)(b.a,{item:!0,lg:"auto",md:"auto",sm:12,xs:12,children:Object(i.jsx)(s.a,{variant:"body2",className:O.a.smallText,children:"Please select your veNFT:"})}),Object(i.jsx)(b.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:Object(i.jsx)("div",{className:O.a.mediumInputAmount,children:Object(i.jsx)(h.a,{fullWidth:!0,value:G,onChange:K,InputProps:{className:O.a.mediumInput},children:V&&V.map((function(e){return Object(i.jsx)(j.a,{value:e,children:Object(i.jsxs)("div",{className:O.a.menuOption,children:[Object(i.jsxs)(s.a,{children:["Token #",e.id]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(s.a,{align:"right",className:O.a.smallerText,children:Object(S.b)(e.lockValue)}),Object(i.jsx)(s.a,{color:"textSecondary",className:O.a.smallerText,children:null===M||void 0===M?void 0:M.symbol})]})]})},e.id)}))})})})]})})}))})]})}),Object(i.jsxs)("div",{className:O.a.results,children:[p&&Object(i.jsx)(m.a,{}),A&&A.address&&Object(i.jsxs)(a.a,{className:O.a.tokenContainer,children:[Object(i.jsxs)("div",{className:O.a.inline,children:[Object(i.jsx)("img",{src:A.logoURI,alt:"",width:"70",height:"70",className:O.a.tokenLogo}),Object(i.jsxs)("div",{children:[Object(i.jsx)(s.a,{className:O.a.tokenName,variant:"h2",children:A.name}),Object(i.jsx)(u.a,{title:"View in explorer",children:Object(i.jsx)(s.a,{className:O.a.tokenAddress,color:"textSecondary",onClick:function(){var e;e=A.address,window.open("".concat(w.c,"token/").concat(e),"_blank")},children:Object(S.a)(A.address)})})]})]}),Object(i.jsxs)("div",{className:O.a.whitelistStatus,children:[Object(i.jsxs)("div",{className:O.a.whitelistContainer,children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(s.a,{className:O.a.listingFee,color:"textSecondary",children:"Whitelist Status"}),A.isWhitelisted&&Object(i.jsx)(s.a,{className:O.a.isWhitelist,children:"Whitelisted"}),!A.isWhitelisted&&Object(i.jsx)(s.a,{className:O.a.notWhitelist,children:"Not Whitelisted"})]}),!A.isWhitelisted&&Object(i.jsx)(u.a,{title:"Listing fee either needs to be locked in your veToken NFT or be paid and burnt on list",children:Object(i.jsxs)("div",{children:[Object(i.jsx)(s.a,{className:O.a.listingFee,color:"textSecondary",children:"Listing Fee"}),Object(i.jsxs)(s.a,{className:O.a.listingFee,children:[Object(S.b)(A.listingFee)," ",null===M||void 0===M?void 0:M.symbol]})]})})]}),Object(i.jsxs)("div",{children:[!A.isWhitelisted&&U&&f()(U.lockValue).gt(A.listingFee)&&Object(i.jsxs)(o.a,{variant:"contained",size:"large",color:"primary",onClick:q,className:O.a.buttonOverride,disabled:y,children:[Object(i.jsx)(s.a,{className:O.a.actionButtonText,children:y?"Whitelisting":"Whitelist"}),y&&Object(i.jsx)(m.a,{size:10,className:O.a.loadingCircle})]}),!A.isWhitelisted&&(!U||f()(U.lockValue).lt(A.listingFee))&&Object(i.jsx)(o.a,{variant:"contained",size:"large",color:"primary",className:O.a.buttonOverride,disabled:!0,children:Object(i.jsx)(s.a,{className:O.a.actionButtonText,children:"Vest value < Fee"})})]})]})]})]})]})}var E=n("20a2"),W=n("siHL"),T=n("qCYy"),I=n.n(T);t.default=function(e){e.changeTheme;var t=N.a.accountStore.getStore("account"),n=(Object(E.useRouter)(),Object(d.useState)(t)),r=n[0],c=n[1],l=Object(d.useState)(!1),u=l[0],m=l[1];Object(d.useEffect)((function(){var e=function(){var e=N.a.accountStore.getStore("account");c(e),h()},t=function(){b()};return N.a.emitter.on(w.a.ACCOUNT_CONFIGURED,e),N.a.emitter.on(w.a.CONNECT_WALLET,t),function(){N.a.emitter.removeListener(w.a.ACCOUNT_CONFIGURED,e),N.a.emitter.removeListener(w.a.CONNECT_WALLET,t)}}),[]);var b=function(){m(!0)},h=function(){m(!1)};return Object(i.jsxs)("div",{className:I.a.ffContainer,children:[r&&r.address?Object(i.jsx)("div",{className:I.a.connected,children:Object(i.jsx)(y,{})}):Object(i.jsxs)(a.a,{className:I.a.notConnectedContent,children:[Object(i.jsx)("div",{className:I.a.sphere}),Object(i.jsxs)("div",{className:I.a.contentFloat,children:[Object(i.jsx)(s.a,{className:I.a.mainHeadingNC,variant:"h1",children:"Whitelist Tokens"}),Object(i.jsx)(s.a,{className:I.a.mainDescNC,variant:"body2",children:"Whitelist tokens to be used in Sandy Swap Gauges."}),Object(i.jsxs)(o.a,{disableElevation:!0,className:I.a.buttonConnect,variant:"contained",onClick:b,children:[r&&r.address&&Object(i.jsx)("div",{className:"".concat(I.a.accountIcon," ").concat(I.a.metamask)}),Object(i.jsx)(s.a,{children:"Connect Wallet to Continue"})]})]})]}),u&&Object(i.jsx)(W.a,{modalOpen:u,closeModal:h})]})}},QEzW:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/whitelist",function(){return n("DotO")}])},XIw9:function(e,t,n){e.exports={container:"ssWhitelist_container__2UE2H",results:"ssWhitelist_results__1F2hj",tokenContainer:"ssWhitelist_tokenContainer__1Kv4S",tokenName:"ssWhitelist_tokenName__ps9AR",tokenAddress:"ssWhitelist_tokenAddress__PDg9E",tokenSymbol:"ssWhitelist_tokenSymbol__Ba1kA",tokenLogo:"ssWhitelist_tokenLogo__17Oe6",inline:"ssWhitelist_inline__2Aziv",isWhitelist:"ssWhitelist_isWhitelist__aLT9R",notWhitelist:"ssWhitelist_notWhitelist__vn99r",whitelistStatus:"ssWhitelist_whitelistStatus__1gQTL",whitelistContainer:"ssWhitelist_whitelistContainer__JSsZF",buttonOverride:"ssWhitelist_buttonOverride__2czYe",loadingCircle:"ssWhitelist_loadingCircle__2rQD8",mediumInputContainer:"ssWhitelist_mediumInputContainer__3D7AV",mediumInputAmount:"ssWhitelist_mediumInputAmount__3mtYb",mediumInput:"ssWhitelist_mediumInput__1hTId",menuOption:"ssWhitelist_menuOption__aBYce",smallerText:"ssWhitelist_smallerText__3DpkF",smallText:"ssWhitelist_smallText__22_OJ",searchBar:"ssWhitelist_searchBar__1zsIn"}},bSwy:function(e,t,n){"use strict";var i=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(n("q1tI")),o=(0,i(n("8/g6")).default)(s.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=o},jjAL:function(e,t,n){"use strict";var i=n("Ff2n"),a=n("rePB"),s=n("wx14"),o=n("q1tI"),r=n("iuhU"),c=n("H2TA"),l=n("VD++"),d=n("ucBr"),u=n("bfFb"),m=n("MquD"),b=n("i8i4"),h="undefined"===typeof window?o.useEffect:o.useLayoutEffect,j=o.forwardRef((function(e,t){var n=e.alignItems,a=void 0===n?"center":n,c=e.autoFocus,j=void 0!==c&&c,x=e.button,v=void 0!==x&&x,p=e.children,f=e.classes,g=e.className,O=e.component,_=e.ContainerComponent,C=void 0===_?"li":_,N=e.ContainerProps,w=(N=void 0===N?{}:N).className,S=Object(i.a)(N,["className"]),y=e.dense,E=void 0!==y&&y,W=e.disabled,T=void 0!==W&&W,I=e.disableGutters,k=void 0!==I&&I,A=e.divider,L=void 0!==A&&A,R=e.focusVisibleClassName,D=e.selected,F=void 0!==D&&D,H=Object(i.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),U=o.useContext(m.a),P={dense:E||U.dense||!1,alignItems:a},z=o.useRef(null);h((function(){j&&z.current&&z.current.focus()}),[j]);var M=o.Children.toArray(p),B=M.length&&Object(d.a)(M[M.length-1],["ListItemSecondaryAction"]),G=o.useCallback((function(e){z.current=b.findDOMNode(e)}),[]),V=Object(u.a)(G,t),q=Object(s.a)({className:Object(r.a)(f.root,g,P.dense&&f.dense,!k&&f.gutters,L&&f.divider,T&&f.disabled,v&&f.button,"center"!==a&&f.alignItemsFlexStart,B&&f.secondaryAction,F&&f.selected),disabled:T},H),K=O||"li";return v&&(q.component=O||"div",q.focusVisibleClassName=Object(r.a)(f.focusVisible,R),K=l.a),B?(K=q.component||O?K:"div","li"===C&&("li"===K?K="div":"li"===q.component&&(q.component="div")),o.createElement(m.a.Provider,{value:P},o.createElement(C,Object(s.a)({className:Object(r.a)(f.container,w),ref:V},S),o.createElement(K,q,M),M.pop()))):o.createElement(m.a.Provider,{value:P},o.createElement(K,Object(s.a)({ref:V},q),M))})),x=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(j),v=o.forwardRef((function(e,t){var n,a=e.classes,c=e.className,l=e.component,d=void 0===l?"li":l,u=e.disableGutters,m=void 0!==u&&u,b=e.ListItemClasses,h=e.role,j=void 0===h?"menuitem":h,v=e.selected,p=e.tabIndex,f=Object(i.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==p?p:-1),o.createElement(x,Object(s.a)({button:!0,role:j,tabIndex:n,component:d,selected:v,disableGutters:m,classes:Object(s.a)({dense:a.dense},b),className:Object(r.a)(a.root,c,v&&a.selected,!m&&a.gutters),ref:t},f))}));t.a=Object(c.a)((function(e){return{root:Object(s.a)({},e.typography.body1,Object(a.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(s.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(v)},qCYy:function(e,t,n){e.exports={ffContainer:"whitelist_ffContainer__3so3y",gridWrapper:"whitelist_gridWrapper__3TKrZ",xxx:"whitelist_xxx__6w_-c",title:"whitelist_title__2Wfor",notConnectedContent:"whitelist_notConnectedContent__2AAV4",contentFloat:"whitelist_contentFloat__227nJ",sphere:"whitelist_sphere__2cbK3",overviewIcon:"whitelist_overviewIcon__S9a2M",mainHeading:"whitelist_mainHeading__2Gkqy",mainDesc:"whitelist_mainDesc__3MpIu",mainHeadingNC:"whitelist_mainHeadingNC__3hCFu",mainDescNC:"whitelist_mainDescNC__QKcvb",buttonConnect:"whitelist_buttonConnect__3s5Wd"}},tRbT:function(e,t,n){"use strict";var i=n("Ff2n"),a=n("wx14"),s=n("q1tI"),o=n("iuhU"),r=n("H2TA"),c=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=s.forwardRef((function(e,t){var n=e.alignContent,r=void 0===n?"stretch":n,c=e.alignItems,l=void 0===c?"stretch":c,d=e.classes,u=e.className,m=e.component,b=void 0===m?"div":m,h=e.container,j=void 0!==h&&h,x=e.direction,v=void 0===x?"row":x,p=e.item,f=void 0!==p&&p,g=e.justify,O=e.justifyContent,_=void 0===O?"flex-start":O,C=e.lg,N=void 0!==C&&C,w=e.md,S=void 0!==w&&w,y=e.sm,E=void 0!==y&&y,W=e.spacing,T=void 0===W?0:W,I=e.wrap,k=void 0===I?"wrap":I,A=e.xl,L=void 0!==A&&A,R=e.xs,D=void 0!==R&&R,F=e.zeroMinWidth,H=void 0!==F&&F,U=Object(i.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),P=Object(o.a)(d.root,u,j&&[d.container,0!==T&&d["spacing-xs-".concat(String(T))]],f&&d.item,H&&d.zeroMinWidth,"row"!==v&&d["direction-xs-".concat(String(v))],"wrap"!==k&&d["wrap-xs-".concat(String(k))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==r&&d["align-content-xs-".concat(String(r))],"flex-start"!==(g||_)&&d["justify-content-xs-".concat(String(g||_))],!1!==D&&d["grid-xs-".concat(String(D))],!1!==E&&d["grid-sm-".concat(String(E))],!1!==S&&d["grid-md-".concat(String(S))],!1!==N&&d["grid-lg-".concat(String(N))],!1!==L&&d["grid-xl-".concat(String(L))]);return s.createElement(b,Object(a.a)({className:P,ref:t},U))})),m=Object(r.a)((function(e){return Object(a.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(i){var a=e.spacing(i);0!==a&&(n["spacing-".concat(t,"-").concat(i)]={margin:"-".concat(d(a,2)),width:"calc(100% + ".concat(d(a),")"),"& > $item":{padding:d(a,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var i={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");i[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else i[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else i[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(a.a)(e,i):e[t.breakpoints.up(n)]=i}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.a=m}},[["QEzW",0,1,5,6,7,3,2,4,8,9,10,11,12,13]]]);