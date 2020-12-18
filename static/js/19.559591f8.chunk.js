(this.webpackJsonp=this.webpackJsonp||[]).push([[19],{1198:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(25),o=n(43),c=n(64),s=n(80);t.a=function(e){var t=Object(c.a)(),n=Object(o.a)(),a=n.textDark,i=n.textLight,u=n.placeholder;return r.a.createElement(s.a,{style:{fontSize:l.d?28:20,marginBottom:l.g.normal,color:e.disabled?u:e.amount?a:i}},e.disabled?t("n/a"):e.amount?e.amount+" "+(e.suffix||""):t("fetching"))}},1201:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(64),o=n(316);t.a=function(e){var t=e.symbol,n=Object(l.a)();return r.a.createElement(o.a,{title:t?n("insufficient-",{symbol:t}):n("insufficient-balance"),disabled:!0})}},1206:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(4),o=n(25),c=n(43),s=n(405),i=n(316),u=n(80);t.a=function(e){var t=Object(c.a)().textLight,n=(0,Object(s.a)().border)({color:e.color}),a=e.color||t;return r.a.createElement(l.a,{style:[e.clear?{}:n,e.style]},r.a.createElement(u.a,{note:!0,style:{color:a}},e.text),e.buttonText&&e.onPressButton&&r.a.createElement(i.a,{title:e.buttonText,type:"clear",size:"small",fontWeight:"bold",onPress:e.onPressButton,titleStyle:{color:a},buttonStyle:{paddingHorizontal:0,paddingVertical:0},style:{alignSelf:"flex-end",marginTop:o.g.tiny}}))}},1208:function(e,t,n){"use strict";var a=n(2),r=n.n(a),l=n(18),o=n.n(l),c=n(0),s=n.n(c),i=n(4),u=n(25),d=n(56),m=n(64),b=n(316);t.a=function(e){var t,n=Object(m.a)(),a=Object(c.useContext)(d.b).approveToken,l=Object(c.useState)(!1),p=o()(l,2),f=p[0],k=p[1],O=Object(c.useCallback)((function(){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.token){n.next=19;break}return e.onError({}),k(!0),n.prev=3,n.next=6,r.a.awrap(a(e.token.address,e.spender));case 6:if(!(t=n.sent)){n.next=11;break}return n.next=10,r.a.awrap(t.wait());case 10:e.onSuccess();case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),e.onError(n.t0);case 16:return n.prev=16,k(!1),n.finish(16);case 19:case"end":return n.stop()}}),null,null,[[3,13,16,19]],Promise)}),[e.token]);return e.hidden?s.a.createElement(i.a,null):s.a.createElement(b.a,{title:n("approve")+" "+((null==(t=e.token)?void 0:t.symbol)||""),onPress:O,loading:f,containerStyle:{marginBottom:u.g.tiny}})}},1223:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var a=n(0),r=n.n(a),l=n(236),o=n(4),c=n(25),s=n(43),i=n(21),u=n(1214),d=n(1210),m=n(121),b=n(1195),p=n(1205),f=n(1197),k=n(1215),O=n(80),y=n(1194),j=function(e){var t=e.state,n=e.emptyText,o=e.Item,c=Object(a.useCallback)((function(e){var n=e.item;return r.a.createElement(o,{key:n.symbol,token:n,selected:!1,onSelectToken:t.setSelectedLPToken})}),[t.setSelectedLPToken]),s=t.lpTokens.sort((function(e,t){var n=e.multiplier||0,a=t.multiplier||0;return n===a?(t.apy||0)-(e.apy||0):a-n}));return t.loading?r.a.createElement(p.a,null):0===s.length?r.a.createElement(g,{text:n}):r.a.createElement(l.a,{keyExtractor:function(e){return e.symbol},data:s,renderItem:c})},g=function(e){var t=e.text;return r.a.createElement(o.a,{style:{margin:c.g.normal}},r.a.createElement(O.a,{disabled:!0,style:{textAlign:"center",width:"100%"}},t))},P=function(e){var t=Object(s.a)().textMedium,n=Object(i.d)(e.token.balance,e.token.decimals,6),l=Object(a.useCallback)((function(){e.onSelectToken(e.token)}),[e.onSelectToken,e.token]);return r.a.createElement(f.a,{selected:e.selected,onPress:l,containerStyle:{marginBottom:b.a}},r.a.createElement(m.a,{style:{alignItems:"center"}},r.a.createElement(y.a,{token:e.token.tokenA,small:!0,replaceWETH:!0}),r.a.createElement(y.a,{token:e.token.tokenB,small:!0,replaceWETH:!0,style:{marginLeft:4}}),r.a.createElement(O.a,{medium:!0,caption:!0,style:{marginLeft:c.g.tiny}},e.token.tokenA.symbol,"-",e.token.tokenB.symbol),r.a.createElement(o.a,{style:{flex:1,marginLeft:c.g.tiny}},r.a.createElement(O.a,{caption:!0,light:!0,style:{textAlign:"right",color:t}},n)),e.selected?r.a.createElement(u.a,null):r.a.createElement(k.a,null)))};t.b=function(e){return r.a.createElement(o.a,{style:e.style},r.a.createElement(d.a,{title:e.title,expanded:!e.state.selectedLPToken,onExpand:function(){return e.state.setSelectedLPToken()}},r.a.createElement(j,{state:e.state,emptyText:e.emptyText,Item:e.Item})),e.state.selectedLPToken&&r.a.createElement(e.Item,{token:e.state.selectedLPToken,selected:!0,onSelectToken:function(){return e.state.setSelectedLPToken()}}))}},1224:function(e,t,n){"use strict";var a=n(10),r=n.n(a),l=n(2),o=n.n(l),c=n(18),s=n.n(c),i=n(0),u=n(137),d=n.n(u),m=n(56),b=n(317),p=n(1225),f=n(412),k=n(1228);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=!1;t.a=function(e){var t=Object(k.a)(),n=Object(i.useContext)(m.b),a=n.provider,r=n.address,l=n.tokens,c=Object(i.useState)(0),u=s()(c,2),O=u[0],g=u[1],P=Object(i.useState)(!0),T=s()(P,2),v=T[0],E=T[1],x=Object(i.useState)([]),L=s()(x,2),w=L[0],h=L[1],S=Object(i.useState)(),A=s()(S,2),C=A[0],D=A[1],B=Object(i.useState)(!1),I=s()(B,2),F=I[0],H=I[1],R=Object(i.useState)(),W=s()(R,2),q=W[0],M=W[1],V=Object(i.useState)(""),z=s()(V,2),Y=z[0],G=z[1],J=Object(f.a)().getPair,N=function(){var t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r&&a&&l.length>0)||j){n.next=11;break}return n.prev=1,j=!0,n.next=5,o.a.awrap("my-pools"===e?Object(b.d)(r,l,a):"pools"===e?Object(b.f)(r,l,a):"my-lp-tokens"===e?Object(b.b)(r,l,a):Object(b.e)(r,l,a));case 5:(t=n.sent)&&h(t);case 7:return n.prev=7,j=!1,E(!1),n.finish(7);case 11:case"end":return n.stop()}}),null,null,[[1,,7,11]],Promise)};return Object(i.useEffect)((function(){C||G("")}),[C]),d()((function(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(E(!0),M(void 0),!C||!a){e.next=18;break}return e.prev=3,e.t0=M,e.next=7,o.a.awrap(J(C.tokenA,C.tokenB,a));case 7:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 11:e.prev=11,e.t2=e.catch(3);case 13:return e.prev=13,E(!1),e.finish(13);case 16:e.next=19;break;case 18:E(!1);case 19:case"end":return e.stop()}}),null,null,[[3,11,13,16]],Promise)}),[C,a]),Object(p.a)((function(t){return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r||!("pools"===e||l.length>0)){n.next=4;break}return t||E(!0),n.next=4,o.a.awrap(N());case 4:case"end":return n.stop()}}),null,null,null,Promise)}),(function(){return"updateLPTokens()"}),[l.length,r,O],0),y(y({},t),{},{fromToken:t.fromToken||(null==C?void 0:C.tokenA),toToken:t.toToken||(null==C?void 0:C.tokenB),updateLPTokens:N,loading:t.loading||v,lastTimeRefreshed:O,updateLastTimeRefreshed:function(){g(Date.now())},lpTokens:w,selectedLPToken:C,setSelectedLPToken:D,selectedLPTokenAllowed:F,setSelectedLPTokenAllowed:H,pair:q,amount:Y,setAmount:G})}},1377:function(e,t,n){"use strict";var a=n(10),r=n.n(a),l=n(2),o=n.n(l),c=n(18),s=n.n(c),i=n(0),u=n(35),d=n(31),m=n(137),b=n.n(m),p=n(54),f=n(56),k=n(21),O=n(1224),y=n(97),j=function(){return{deposit:Object(i.useCallback)((function(e,t,n){var a,r,l;return o.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return a=Object(k.g)("MasterChef",p.e,n),c.next=3,o.a.awrap(a.estimateGas.deposit(e,t));case 3:return r=c.sent,c.next=6,o.a.awrap(a.deposit(e,t,{gasLimit:r.mul(120).div(100)}));case 6:return l=c.sent,c.abrupt("return",Object(y.a)(l,"MasterChef.deposit()",e,t.toString()));case 8:case"end":return c.stop()}}),null,null,null,Promise)}),[]),withdraw:Object(i.useCallback)((function(e,t,n){var a,r,l;return o.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return a=Object(k.g)("MasterChef",p.e,n),c.next=3,o.a.awrap(a.estimateGas.withdraw(e,t));case 3:return r=c.sent,c.next=6,o.a.awrap(a.withdraw(e,t,{gasLimit:r.mul(120).div(100)}));case 6:return l=c.sent,c.abrupt("return",Object(y.a)(l,"MasterChef.withdraw()",e,t.toString()));case 8:case"end":return c.stop()}}),null,null,null,Promise)}),[])}};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(O.a)(e?"my-pools":"pools"),n=Object(i.useContext)(f.b),a=n.signer,r=n.getTokenAllowance,l=j(),c=l.deposit,m=l.withdraw,y=Object(i.useState)(!1),g=s()(y,2),T=g[0],v=g[1],E=Object(i.useState)(!1),x=s()(E,2),L=x[0],w=x[1],h=Object(i.useState)(!1),S=s()(h,2),A=S[0],C=S[1];Object(i.useEffect)((function(){v(!1),w(!1),C(!1),t.setFromAmount(""),t.setToAmount("")}),[t.selectedLPToken]),b()((function(){var e,n;return o.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(!a||!t.selectedLPToken){l.next=12;break}return v(!0),t.setSelectedLPTokenAllowed(!1),l.prev=3,e=d.ethers.BigNumber.from(2).pow(96).sub(1),l.next=7,o.a.awrap(r(t.selectedLPToken.address,p.e));case 7:n=l.sent,t.setSelectedLPTokenAllowed(d.ethers.BigNumber.from(n).gte(e));case 9:return l.prev=9,v(!1),l.finish(9);case 12:case"end":return l.stop()}}),null,null,[[3,,9,12]],Promise)}),[a,t.selectedLPToken]),b()((function(){if(t.pair&&t.selectedLPToken&&t.selectedLPToken.totalSupply&&t.selectedLPToken.amountDeposited){var e=Object(k.b)(t.selectedLPToken),n=Object(k.b)(t.selectedLPToken.tokenA),a=Object(k.b)(t.selectedLPToken.tokenB),r=new u.j(e,t.selectedLPToken.totalSupply.toString()),l=new u.j(e,t.selectedLPToken.amountDeposited.toString()),o=t.pair.involvesToken(n)?t.pair.getLiquidityValue(n,r,l):null;t.setFromAmount((null==o?void 0:o.toFixed())||"");var c=t.pair.involvesToken(n)?t.pair.getLiquidityValue(a,r,l):null;t.setToAmount((null==c?void 0:c.toFixed())||"")}}),[t.pair,t.selectedLPToken]);var D=Object(i.useCallback)((function(){var e,n,r;return o.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(!(null!=(e=t.selectedLPToken)&&e.id&&t.amount&&a)){l.next=15;break}return w(!0),l.prev=2,n=Object(k.l)(t.amount,t.selectedLPToken.decimals),l.next=6,o.a.awrap(c(t.selectedLPToken.id,n,a));case 6:return r=l.sent,l.next=9,o.a.awrap(r.wait());case 9:return t.setSelectedLPToken(void 0),l.next=12,o.a.awrap(t.updateLastTimeRefreshed());case 12:return l.prev=12,w(!1),l.finish(12);case 15:case"end":return l.stop()}}),null,null,[[2,,12,15]],Promise)}),[t.selectedLPToken,t.amount,a]),B=Object(i.useCallback)((function(){var e,n,r;return o.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(!(null!=(e=t.selectedLPToken)&&e.id&&t.amount&&a)){l.next=15;break}return C(!0),l.prev=2,n=Object(k.l)(t.amount,t.selectedLPToken.decimals),l.next=6,o.a.awrap(m(t.selectedLPToken.id,n,a));case 6:return r=l.sent,l.next=9,o.a.awrap(r.wait());case 9:return t.setSelectedLPToken(void 0),l.next=12,o.a.awrap(t.updateLastTimeRefreshed());case 12:return l.prev=12,C(!1),l.finish(12);case 15:case"end":return l.stop()}}),null,null,[[2,,12,15]],Promise)}),[t.selectedLPToken,t.amount,a]);return P(P({},t),{},{loading:t.loading||T,onDeposit:D,depositing:L,onWithdraw:B,withdrawing:A})}},1379:function(e,t,n){"use strict";n.r(t);var a=n(18),r=n.n(a),l=n(0),o=n.n(l),c=n(11),s=n(4),i=n(137),u=n.n(i),d=n(1198),m=n(1208),b=n(409),p=n(1196),f=n(316),k=n(1214),O=n(406),y=n(407),j=n(1199),g=n(1209),P=n(121),T=n(1192),v=n(1200),E=n(1201),x=n(1195),L=n(1223),w=n(1211),h=n(1206),S=n(1197),A=n(1215),C=n(80),D=n(408),B=n(1212),I=n(1194),F=n(1193),H=n(411),R=n(54),W=n(25),q=n(43),M=n(1377),V=n(404),z=n(64),Y=n(21),G=n(410),J=function(){var e=Object(z.a)(),t=Object(M.a)(!1);return o.a.createElement(s.a,{style:{marginTop:W.g.large}},o.a.createElement(L.b,{state:t,title:e("active-farms"),emptyText:e("unable-to-load-farms"),Item:N}),o.a.createElement(p.a,null),o.a.createElement(Z,{state:t}),o.a.createElement(K,{state:t}),o.a.createElement(h.a,{text:e("standardHashrate-vested-notice"),clear:!0,style:{marginTop:W.g.normal}}))},N=function(e){var t=e.token.apy||0,n=e.token.multiplier||0,a=Object(l.useCallback)((function(){e.onSelectToken(e.token)}),[e.onSelectToken,e.token]);return o.a.createElement(S.a,{selected:e.selected,onPress:a,containerStyle:{marginBottom:x.a}},o.a.createElement(P.a,{style:{alignItems:"center"}},o.a.createElement(I.a,{token:e.token.tokenA,small:!0,replaceWETH:!0}),o.a.createElement(I.a,{token:e.token.tokenB,small:!0,replaceWETH:!0,style:{marginLeft:4}}),o.a.createElement(C.a,{medium:!0,caption:!0,style:{marginLeft:W.g.tiny}},e.token.tokenA.symbol,"-",e.token.tokenB.symbol),o.a.createElement(s.a,{style:{flex:1,alignItems:"flex-end",marginRight:4}},o.a.createElement(C.a,{note:!0},n>1?"\u2728":"",n.toFixed(2)||"1.00","x APY"),o.a.createElement(C.a,{caption:W.d,medium:!0},Object(Y.e)(t),"%")),e.selected?o.a.createElement(k.a,null):o.a.createElement(A.a,null)))},Z=function(e){var t=e.state,n=Object(z.a)();return t.selectedLPToken?o.a.createElement(s.a,null,o.a.createElement(T.a,{text:t.selectedLPToken.symbol+" "+n("amount")}),t.selectedLPToken.balance.isZero()?o.a.createElement(U,{state:t}):o.a.createElement(B.a,{token:t.selectedLPToken,amount:t.amount,onAmountChanged:t.setAmount,autoFocus:W.d})):o.a.createElement(T.a,{text:n("amount"),disabled:!0})},U=function(e){var t=e.state,n=Object(z.a)(),a=Object(q.a)().green,r=Object(V.a)("/liquidity","Liquidity");return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{color:a,text:n("tokens-needed-for-farming-notice",{symbol:t.selectedLPToken.symbol})}),o.a.createElement(f.a,{color:a,title:"Add Liquidity",containerStyle:{marginTop:W.g.normal},onPress:r}))},K=function(e){var t,n,a,r,l=e.state,c=Object(z.a)(),s=Object(Y.j)(l.amount)||!(null!=(t=l.selectedLPToken)&&t.sushiRewardedPerYear),i=s?0:Object(Y.l)(l.amount).mul(l.selectedLPToken.sushiRewardedPerYear).div(Object(Y.n)(18));return o.a.createElement(v.a,null,o.a.createElement(d.a,{amount:Object(Y.d)(i,18,8),suffix:c("standardHashrate-per-year"),disabled:s}),o.a.createElement(w.a,{label:c("my-balance"),text:Object(Y.d)((null==(n=l.selectedLPToken)?void 0:n.balance)||0),disabled:!l.selectedLPToken}),o.a.createElement(w.a,{label:c("total-value-locked"),text:Object(Y.f)((null==(a=l.selectedLPToken)?void 0:a.totalValueUSD)||0),disabled:!l.selectedLPToken}),o.a.createElement(w.a,{label:c("annual-percentage-yield"),text:Object(Y.e)((null==(r=l.selectedLPToken)?void 0:r.apy)||0),suffix:"%",disabled:!l.selectedLPToken}),o.a.createElement(Q,{state:l}))},Q=function(e){var t=e.state,n=Object(l.useState)({}),a=r()(n,2),c=a[0],i=a[1];u()((function(){return i({})}),[t.selectedLPToken]);var d=!t.selectedLPTokenAllowed,b=d||Object(Y.j)(t.amount);return o.a.createElement(s.a,{style:{marginTop:W.g.normal}},!t.selectedLPToken||t.selectedLPToken.balance.isZero()?o.a.createElement(X,{state:t,onError:i,disabled:!0}):Object(Y.l)(t.amount,t.selectedLPToken.decimals).gt(t.selectedLPToken.balance)?o.a.createElement(E.a,{symbol:t.selectedLPToken.symbol}):t.loading?o.a.createElement(g.a,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{token:t.selectedLPToken,spender:R.e,onSuccess:function(){return t.setSelectedLPTokenAllowed(!0)},onError:i,hidden:Object(Y.j)(t.amount)||!d}),o.a.createElement(X,{state:t,onError:i,disabled:b})),c.message&&4001!==c.code&&o.a.createElement(j.a,{error:c}))},X=function(e){var t=e.state,n=e.onError,a=e.disabled,r=Object(z.a)(),c=Object(l.useCallback)((function(){n({}),t.onDeposit().catch(n)}),[t.onDeposit,n]);return o.a.createElement(f.a,{title:r("deposit"),disabled:a,loading:t.depositing,onPress:c})};t.default=function(){var e=Object(z.a)();return o.a.createElement(G.a,null,o.a.createElement(O.a,null,o.a.createElement(b.a,null),o.a.createElement(y.a,null,o.a.createElement(D.a,{text:e("plant-lp-tokens")}),o.a.createElement(C.a,{light:!0},e("plant-lp-tokens-desc")),o.a.createElement(J,null)),"web"===c.a.OS&&o.a.createElement(F.a,null)),o.a.createElement(H.a,null))}}}]);
//# sourceMappingURL=19.559591f8.chunk.js.map