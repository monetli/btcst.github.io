(this.webpackJsonp=this.webpackJsonp||[]).push([[8],{1192:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(25),l=a(43),s=a(316),c=a(121),i=a(80);t.a=function(e){var t=Object(l.a)().accent;return r.a.createElement(c.a,{style:{alignItems:"flex-end",height:32,marginBottom:e.disabled?0:o.g.small}},r.a.createElement(i.a,{medium:!0,fontWeight:e.fontWeight||"bold",disabled:e.disabled,style:[{flex:1,fontSize:o.d?24:18,paddingBottom:o.g.tiny},e.style]},e.text),e.buttonText&&r.a.createElement(s.a,{type:"clear",size:"small",title:e.buttonText,onPress:e.onPressButton,color:t,buttonStyle:{paddingHorizontal:o.g.tiny}}))}},1193:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(42),l=a(57),s=a(4),c=a(52),i=a(413),u=a(25),d=a(404),b=a(9),m=a.n(b),f=a(11),p=function(e){return r.a.createElement(s.a,m()({},e,{style:[{width:"100%",marginTop:e.noTopMargin?0:"web"===f.a.OS?u.g.large:u.g.normal},e.style]}))},h=a(121),g=a(96),y=a(51),O=a(43),x=function(e){var t=Object(n.useContext)(y.a).darkMode,a=Object(O.a)(),o=a.background,l=a.textLight;return r.a.createElement(g.d,m()({},e,{light:!t,iconColor:t?"white":void 0,style:{backgroundColor:o,borderWidth:1,borderColor:t?"white":l}}))},j=function(){var e=Object(n.useContext)(y.a).darkMode,t=Object(O.a)(),a=t.background,o=t.textLight,l=Object(d.a)("https://twitter.com/standardhashrate","","_blank"),s=Object(d.a)("https://github.com/Standard-Hashrate-Group","","_blank"),c=Object(d.a)("https://discord.gg/standardhashrate","","_blank");return r.a.createElement(h.a,{style:{width:"100%",justifyContent:"center"}},r.a.createElement(x,{type:"github-alt",onPress:s}),r.a.createElement(x,{type:"twitter",onPress:l}),r.a.createElement(g.b,{type:"material-community",name:"discord",raised:!0,reverse:!0,color:a,reverseColor:e?"white":"#7289da",style:{backgroundColor:a},containerStyle:{borderWidth:1,borderColor:e?"white":o},onPress:c}))},E=a(80),v={us:a(1202),cn:a(1203),kr:a(1204)},S=function(e){var t=e.name,a=e.locale,n=Object(c.g)(),s=Object(c.h)();return r.a.createElement(l.a,{onPress:function(){n.push(s.pathname+"?locale="+a)},style:{marginHorizontal:4}},r.a.createElement(o.a,{source:v[t],style:{width:30,height:20}}))};t.a=function(){Object(d.a)("https://dashboard.alchemyapi.io/signup?referral=429fb682-0d85-40ab-ad88-daf847cf7c63","","_blank");return r.a.createElement(p,{noTopMargin:!0},r.a.createElement(s.a,{style:{width:"100%",padding:u.g.normal,alignItems:"center"}},r.a.createElement(j,null),r.a.createElement(E.a,{note:!0,style:{marginTop:u.g.tiny}},"Built with \u2764\ufe0f by StandardHashrate (v",i.a.manifest.version,")"),r.a.createElement(h.a,{style:{marginTop:u.g.small}},r.a.createElement(S,{name:"us",locale:"en"}),r.a.createElement(S,{name:"cn",locale:"zh"}),r.a.createElement(S,{name:"kr",locale:"ko"}))))}},1196:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),l=a(25),s=a(43);t.a=function(e){var t=Object(s.a)().border;return r.a.createElement(o.a,{style:{height:1,width:"100%",backgroundColor:t,marginTop:e.small?l.g.tiny:l.g.small,marginBottom:e.small?l.g.tiny:l.g.small+l.g.tiny}})}},1198:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(25),l=a(43),s=a(64),c=a(80);t.a=function(e){var t=Object(s.a)(),a=Object(l.a)(),n=a.textDark,i=a.textLight,u=a.placeholder;return r.a.createElement(c.a,{style:{fontSize:o.d?28:20,marginBottom:o.g.normal,color:e.disabled?u:e.amount?n:i}},e.disabled?t("n/a"):e.amount?e.amount+" "+(e.suffix||""):t("fetching"))}},1199:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),l=a(25),s=a(80);t.a=function(e){var t=e.error;return r.a.createElement(o.a,{style:{borderColor:"red",borderWidth:1,width:"100%",padding:l.g.tiny,marginTop:l.g.small}},t.code&&r.a.createElement(s.a,{fontWeight:"bold",style:{color:"red",fontSize:14}},"Error Code ",t.code),r.a.createElement(s.a,{note:!0,style:{color:"red",fontSize:14}},t.message))}},1200:function(e,t,a){"use strict";var n=a(9),r=a.n(n),o=a(10),l=a.n(o),s=a(0),c=a.n(s),i=a(4),u=a(25),d=a(51),b=a(43),m=a(405);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.a=function(e){var t=Object(s.useContext)(d.a).darkMode,a=Object(b.a)(),n=a.backgroundLight,o=a.borderDark,l=Object(m.a)().border;return c.a.createElement(i.a,r()({},e,{style:[p(p({},l({color:t?o:n})),{},{backgroundColor:n,marginTop:u.g.normal+u.g.small,padding:u.g.small+u.g.tiny}),e.style]}))}},1201:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(64),l=a(316);t.a=function(e){var t=e.symbol,a=Object(o.a)();return r.a.createElement(l.a,{title:t?a("insufficient-",{symbol:t}):a("insufficient-balance"),disabled:!0})}},1202:function(e,t,a){e.exports=a.p+"static/media/us.d367121f.png"},1203:function(e,t,a){e.exports=a.p+"static/media/cn.baedda5d.png"},1204:function(e,t,a){e.exports=a.p+"static/media/kr.146730ea.png"},1206:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),l=a(25),s=a(43),c=a(405),i=a(316),u=a(80);t.a=function(e){var t=Object(s.a)().textLight,a=(0,Object(c.a)().border)({color:e.color}),n=e.color||t;return r.a.createElement(o.a,{style:[e.clear?{}:a,e.style]},r.a.createElement(u.a,{note:!0,style:{color:n}},e.text),e.buttonText&&e.onPressButton&&r.a.createElement(i.a,{title:e.buttonText,type:"clear",size:"small",fontWeight:"bold",onPress:e.onPressButton,titleStyle:{color:n},buttonStyle:{paddingHorizontal:0,paddingVertical:0},style:{alignSelf:"flex-end",marginTop:l.g.tiny}}))}},1208:function(e,t,a){"use strict";var n=a(2),r=a.n(n),o=a(18),l=a.n(o),s=a(0),c=a.n(s),i=a(4),u=a(25),d=a(56),b=a(64),m=a(316);t.a=function(e){var t,a=Object(b.a)(),n=Object(s.useContext)(d.b).approveToken,o=Object(s.useState)(!1),f=l()(o,2),p=f[0],h=f[1],g=Object(s.useCallback)((function(){var t;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e.token){a.next=19;break}return e.onError({}),h(!0),a.prev=3,a.next=6,r.a.awrap(n(e.token.address,e.spender));case 6:if(!(t=a.sent)){a.next=11;break}return a.next=10,r.a.awrap(t.wait());case 10:e.onSuccess();case 11:a.next=16;break;case 13:a.prev=13,a.t0=a.catch(3),e.onError(a.t0);case 16:return a.prev=16,h(!1),a.finish(16);case 19:case"end":return a.stop()}}),null,null,[[3,13,16,19]],Promise)}),[e.token]);return e.hidden?c.a.createElement(i.a,null):c.a.createElement(m.a,{title:a("approve")+" "+((null==(t=e.token)?void 0:t.symbol)||""),onPress:g,loading:p,containerStyle:{marginBottom:u.g.tiny}})}},1209:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(64),l=a(316);t.a=function(){var e=Object(o.a)();return r.a.createElement(l.a,{title:e("fetching"),disabled:!0})}},1211:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(25),l=a(43),s=a(404),c=a(121),i=a(80);t.a=function(e){var t=Object(l.a)(),a=t.textMedium,n=t.textLight,u=t.placeholder,d=Object(s.a)(e.url||"","","_blank"),b=e.disabled?"N/A":e.text?e.text+(e.suffix?" "+e.suffix:""):"Fetching\u2026";return r.a.createElement(c.a,{style:{justifyContent:"space-between",marginTop:4}},r.a.createElement(i.a,{note:!o.d,fontWeight:"bold",style:{color:e.disabled?u:a}},e.label),r.a.createElement(i.a,{note:!o.d,onPress:e.url?d:void 0,style:{color:e.disabled?u:e.text?a:n,textDecorationLine:e.url?"underline":"none"}},b))}},1212:function(e,t,a){"use strict";var n=a(10),r=a.n(n),o=a(0),l=a.n(o),s=a(11),c=a(4),i=a(31),u=a(25),d=a(43),b=a(405),m=a(21),f=a(316),p=a(1192),h=a(1217);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=function(e){var t=Object(d.a)().accent,a=Object(o.useCallback)((function(){if(e.token){var t=e.token.balance;if(Object(m.h)(e.token)){var a=Object(m.n)(16);t=t.gt(a)?t.sub(a):i.ethers.constants.Zero}e.updateAmount(Object(m.d)(t,e.token.decimals))}}),[e.token,e.updateAmount]);return l.a.createElement(c.a,{style:{position:"absolute",right:12,bottom:"web"===s.a.OS?12:24}},l.a.createElement(f.a,{type:"clear",size:"small",color:t,title:e.maxButtonText||(u.d?"MAX "+e.token.symbol:"MAX"),fontWeight:"bold",onPress:a,buttonStyle:{paddingHorizontal:u.g.tiny}}))};t.a=function(e){var t,a,n=Object(b.a)().border,r=Object(o.useCallback)((function(t){if(e.token&&e.onAmountChanged)try{Object(m.l)(t,e.token.decimals),e.onAmountChanged(t)}catch(a){t.endsWith(".")&&t.indexOf(".")===t.length-1&&e.onAmountChanged(t)}}),[e.token,e.onAmountChanged]);return l.a.createElement(c.a,null,e.title&&l.a.createElement(p.a,{text:e.title}),l.a.createElement(c.a,null,l.a.createElement(h.a,{label:e.label,value:e.amount,onChangeText:r,placeholder:"0.0",keyboardType:"numeric",autoFocus:e.autoFocus||!1,inputStyle:{marginHorizontal:u.g.tiny},inputContainerStyle:{borderBottomWidth:0},labelStyle:{fontFamily:"light",height:e.label?"auto":0},containerStyle:y(y({},n()),{},{paddingHorizontal:u.g.tiny,paddingTop:15,paddingBottom:2})}),(null==(t=e.token)||null==(a=t.balance)?void 0:a.gt(0))&&!e.hideMaxButton&&l.a.createElement(O,{token:e.token,maxButtonText:e.maxButtonText,updateAmount:e.onAmountChanged})))}},1217:function(e,t,a){"use strict";var n=a(9),r=a.n(n),o=a(0),l=a.n(o),s=a(11),c=a(96),i=a(43);t.a=function(e){var t=Object(i.a)(),a=t.textDark,n=t.textMedium,u=t.textLight,d=e.size||"normal",b=e.color||a,m="small"===d?16:"large"===d?24:20,f=Object(o.useCallback)((function(t){null==e.onChangeText||e.onChangeText(t),null==e.onError||e.onError("");var a=[];""!==t&&e.forbidden&&e.forbidden.forEach((function(e){t.match(e.regexp)&&a.push(e.error)})),""!==t&&e.allowed&&e.allowed.forEach((function(e){t.match(e.regexp)||a.push(e.error)})),a.length>0&&(null==e.onError||e.onError(a.join("\n")))}),[e.onChangeText,e.onError,e.forbidden,e.allowed]);return l.a.createElement(c.c,r()({},e,{inputStyle:[{fontSize:m,fontFamily:"regular",paddingBottom:4,color:b,marginTop:0,minHeight:32},"web"===s.a.OS?{outline:"none"}:{},e.inputStyle],labelStyle:[{color:n},e.labelStyle],placeholderTextColor:e.placeholderTextColor||u,errorStyle:e.onError?{height:0}:e.errorStyle,containerStyle:[{paddingHorizontal:0},e.containerStyle],onChangeText:f}))}},1236:function(e,t,a){"use strict";var n=a(2),r=a.n(n),o=a(18),l=a.n(o),s=a(0),c=a(31),i=a(137),u=a.n(i),d=a(54),b=a(56),m=a(21),f=a(97),p=function(){return{enter:Object(s.useCallback)((function(e,t){var a,n,o;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return a=Object(m.g)("SushiBar",d.i,t),l.next=3,r.a.awrap(a.estimateGas.enter(e));case 3:return n=l.sent,l.next=6,r.a.awrap(a.enter(e,{gasLimit:n.mul(120).div(100)}));case 6:return o=l.sent,l.abrupt("return",Object(f.a)(o,"SushiBar.enter()",e.toString()));case 8:case"end":return l.stop()}}),null,null,null,Promise)}),[]),leave:Object(s.useCallback)((function(e,t){var a,n,o;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return a=Object(m.g)("SushiBar",d.i,t),l.next=3,r.a.awrap(a.estimateGas.leave(e));case 3:return n=l.sent,l.next=6,r.a.awrap(a.leave(e,{gasLimit:n.mul(120).div(100)}));case 6:return o=l.sent,l.abrupt("return",Object(f.a)(o,"SushiBar.leave()",e.toString()));case 8:case"end":return l.stop()}}),null,null,null,Promise)}),[])}};t.a=function(){var e=Object(s.useContext)(b.b),t=e.signer,a=e.address,n=e.getTokenAllowance,o=e.tokens,i=e.updateTokens,f=p(),h=f.enter,g=f.leave,y=Object(s.useState)(),O=l()(y,2),x=O[0],j=O[1],E=Object(s.useState)(),v=l()(E,2),S=v[0],k=v[1],w=Object(s.useState)(),C=l()(w,2),P=C[0],T=C[1],A=Object(s.useState)(""),B=l()(A,2),H=B[0],z=B[1],D=Object(s.useState)(!1),M=l()(D,2),L=M[0],W=M[1],F=Object(s.useState)(!1),I=l()(F,2),Z=I[0],_=I[1],N=Object(s.useState)(!1),U=l()(N,2),G=U[0],X=U[1],J=Object(s.useState)(!1),R=l()(J,2),V=R[0],q=R[1],K=Object(s.useState)(!1),Q=l()(K,2),Y=Q[0],$=Q[1],ee=Object(s.useMemo)((function(){return o.find((function(e){return"SUSHI"===e.symbol}))}),[o]),te=Object(s.useMemo)((function(){return o.find((function(e){return"xSUSHI"===e.symbol}))}),[o]);Object(s.useEffect)((function(){z("")}),[a]),u()((function(){var e,a,o,l,s;return r.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(!(ee&&te&&t)){i.next=34;break}return W(!1),_(!1),X(!0),i.prev=4,e=c.ethers.BigNumber.from(2).pow(96).sub(1),i.next=8,r.a.awrap(n(ee.address,d.i));case 8:return a=i.sent,W(c.ethers.BigNumber.from(a).gte(e)),i.next=12,r.a.awrap(n(te.address,d.i));case 12:return o=i.sent,_(c.ethers.BigNumber.from(o).gte(e)),l=Object(m.g)("ERC20",ee.address,t),i.t0=j,i.next=18,r.a.awrap(l.balanceOf(d.i));case 18:return i.t1=i.sent,(0,i.t0)(i.t1),i.t2=k,i.next=23,r.a.awrap(l.totalSupply());case 23:return i.t3=i.sent,(0,i.t2)(i.t3),s=Object(m.g)("ERC20",te.address,t),i.t4=T,i.next=29,r.a.awrap(s.totalSupply());case 29:i.t5=i.sent,(0,i.t4)(i.t5);case 31:return i.prev=31,X(!1),i.finish(31);case 34:case"end":return i.stop()}}),null,null,[[4,,31,34]],Promise)}),[ee,te,t]);var ae=Object(s.useCallback)((function(){var e,a;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(H&&ee&&t)){n.next=16;break}return q(!0),n.prev=2,e=Object(m.l)(H,ee.decimals),n.next=6,r.a.awrap(h(e,t));case 6:if(!(a=n.sent)){n.next=13;break}return n.next=10,r.a.awrap(a.wait());case 10:return n.next=12,r.a.awrap(i());case 12:z("");case 13:return n.prev=13,q(!1),n.finish(13);case 16:case"end":return n.stop()}}),null,null,[[2,,13,16]],Promise)}),[H,ee,t]),ne=Object(s.useCallback)((function(){var e,a;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(H&&te&&t)){n.next=16;break}return $(!0),n.prev=2,e=Object(m.l)(H,te.decimals),n.next=6,r.a.awrap(g(e,t));case 6:if(!(a=n.sent)){n.next=13;break}return n.next=10,r.a.awrap(a.wait());case 10:return n.next=12,r.a.awrap(i());case 12:z("");case 13:return n.prev=13,$(!1),n.finish(13);case 16:case"end":return n.stop()}}),null,null,[[2,,13,16]],Promise)}),[H,te,t]);return{sushi:ee,xSushi:te,sushiStaked:x,sushiSupply:S,xSushiSupply:P,amount:H,setAmount:z,sushiAllowed:L,setSushiAllowed:W,xSushiAllowed:Z,setXSushiAllowed:_,loading:G,onEnter:ae,entering:V,onLeave:ne,leaving:Y}}},1387:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(18),l=a.n(o),s=a(0),c=a.n(s),i=a(11),u=a(4),d=a(1198),b=a(1208),m=a(409),f=a(1196),p=a(316),h=a(406),g=a(407),y=a(1199),O=a(1209),x=a(1192),j=a(1200),E=a(1201),v=a(1211),S=a(1206),k=a(80),w=a(408),C=a(1212),P=a(1193),T=a(411),A=a(54),B=a(25),H=a(156),z=a(1236),D=a(64),M=a(21),L=a(410),W=function(){var e=Object(D.a)(),t=Object(z.a)();return c.a.createElement(u.a,{style:{marginTop:B.g.large}},c.a.createElement(F,{state:t}),c.a.createElement(f.a,null),c.a.createElement(I,{state:t}),t.sushi&&t.sushi.balance.isZero()&&c.a.createElement(S.a,{text:e("you-dont-have-standardHashrate"),color:"orange",style:{marginTop:B.g.small}}),c.a.createElement(Z,{state:t}))},F=function(e){var t=e.state,a=Object(D.a)();return c.a.createElement(u.a,null,c.a.createElement(x.a,{text:a("your-standardHashrate")}),c.a.createElement(d.a,{amount:t.sushi?Object(M.d)(t.sushi.balance,t.sushi.decimals):"",suffix:"SUSHI"}))},I=function(e){var t=e.state,a=Object(D.a)();return!t.sushi||t.sushi.balance.isZero()?c.a.createElement(x.a,{text:a("amount-to-stake"),disabled:!0}):c.a.createElement(u.a,null,c.a.createElement(x.a,{text:a("amount-to-stake")}),c.a.createElement(C.a,{token:t.sushi,amount:t.amount,onAmountChanged:t.setAmount,autoFocus:B.d}))},Z=function(e){var t=e.state,a=Object(D.a)(),n=!t.sushi||t.sushi.balance.isZero()||!t.xSushi||!t.sushiStaked||!t.xSushiSupply||Object(M.j)(t.amount),r=n?void 0:Object(M.l)(t.amount,t.sushi.decimals).mul(t.xSushiSupply).div(t.sushiStaked),o=n?void 0:Object(M.d)(t.xSushiSupply,t.xSushi.decimals,8),l=n?void 0:t.xSushi.balance.add(r),s=n?void 0:H.a.from(r.add(l),t.xSushiSupply).toString();return c.a.createElement(j.a,null,c.a.createElement(d.a,{amount:r?Object(M.d)(r,t.xSushi.decimals,8):"",suffix:"xSUSHI",disabled:n}),c.a.createElement(v.a,{label:a("xstandardHashrate-share"),text:s,suffix:"%",disabled:n}),c.a.createElement(v.a,{label:a("total-xstandardHashrate"),text:o,disabled:n}),c.a.createElement(_,{state:t}))},_=function(e){var t=e.state,a=Object(s.useState)({}),n=l()(a,2),r=n[0],o=n[1];return c.a.createElement(u.a,{style:{marginTop:B.g.normal}},!t.sushi||t.sushi.balance.isZero()||Object(M.j)(t.amount)?c.a.createElement(N,{state:t,onError:o,disabled:!0}):Object(M.l)(t.amount,t.sushi.decimals).gt(t.sushi.balance)?c.a.createElement(E.a,{symbol:t.sushi.symbol}):t.loading?c.a.createElement(O.a,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{token:t.sushi,spender:A.i,onSuccess:function(){return t.setSushiAllowed(!0)},onError:o,hidden:t.sushiAllowed}),c.a.createElement(N,{state:t,onError:o,disabled:!t.sushiAllowed})),r.message&&4001!==r.code&&c.a.createElement(y.a,{error:r}))},N=function(e){var t=e.state,a=e.onError,n=e.disabled,o=Object(D.a)();return c.a.createElement(p.a,{title:o("stake"),loading:t.entering,onPress:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return a({}),e.prev=1,e.next=4,r.a.awrap(t.onEnter());case 4:t.setAmount(""),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a(e.t0);case 10:case"end":return e.stop()}}),null,null,[[1,7]],Promise)},disabled:n})};t.default=function(){var e=Object(D.a)();return c.a.createElement(L.a,null,c.a.createElement(h.a,null,c.a.createElement(m.a,null),c.a.createElement(g.a,null,c.a.createElement(w.a,{text:e("stake")}),c.a.createElement(k.a,{light:!0},e("stake-desc")),c.a.createElement(W,null)),"web"===i.a.OS&&c.a.createElement(P.a,null)),c.a.createElement(T.d,null))}}}]);
//# sourceMappingURL=8.a2e7b79e.chunk.js.map