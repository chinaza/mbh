(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{182:function(t,e,r){"use strict";var n=r(3),o=r(16),c=r(22),l=r(109),f=r(56),d=r(10),v=r(41).f,h=r(57).f,m=r(9).f,w=r(183).trim,y=n.Number,_=y,x=y.prototype,E="Number"==c(r(73)(x)),O="trim"in String.prototype,N=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=O?e.trim():w(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof y&&(E?d((function(){x.valueOf.call(r)})):"Number"!=c(r))?l(new _(N(e)),r,y):N(e)};for(var k,C=r(8)?v(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;C.length>I;I++)o(_,k=C[I])&&!o(y,k)&&m(y,k,h(_,k));y.prototype=x,x.constructor=y,r(11)(n,"Number",y)}},183:function(t,e,r){var n=r(7),o=r(21),c=r(10),l=r(184),f="["+l+"]",d=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),h=function(t,e,r){var o={},f=c((function(){return!!l[t]()||"​"!="​"[t]()})),d=o[t]=f?e(m):l[t];r&&(o[r]=d),n(n.P+n.F*f,"String",o)},m=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(v,"")),t};t.exports=h},184:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},186:function(t,e,r){var content=r(192);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("2219b9c9",content,!0,{sourceMap:!1})},187:function(t,e,r){var content=r(194);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("d17bb196",content,!0,{sourceMap:!1})},188:function(t,e,r){"use strict";r(182),r(30);var n=r(5);function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,r){return e&&c(t.prototype,e),r&&c(t,r),t}r(74),r(31),r(23),r(13),r(58);var f=r(51),d=r(39),v=r.n(d);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(source,!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=function(){function t(e,r){o(this,t),this.http=v.a.create({baseURL:"https://gigs.chinaza.dev".concat(e),headers:r})}var e;return l(t,[{key:"makeRequest",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,o,data,c,l,d,v,h,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.url,n=void 0===r?"":r,o=e.data,data=void 0===o?{}:o,c=e.method,l=void 0===c?"get":c,d=e.headers,v=void 0===d?{}:d,t.prev=1,h=Object(f.a)({},"get"===l?"params":"data",data),t.next=5,this.http.request(m({url:n,method:l,headers:v},h));case 5:return w=t.sent,t.abrupt("return",{response:w.data,status:w.status});case 9:if(t.prev=9,t.t0=t.catch(1),!t.t0.response){t.next=15;break}throw new Error(t.t0.response.data?t.t0.response.data.message:t.t0.response.data);case 15:throw new Error(t.t0.message||"A network/ timeout error has occured.");case 16:case"end":return t.stop()}}),t,this,[[1,9]])}))),function(t){return e.apply(this,arguments)})}]),t}();r.d(e,"a",(function(){return y}));var y=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;o(this,t),this.pos=e||{},this.http=new w("/api/gigs-twitter")}var e,r;return l(t,[{key:"loadData",value:(r=Object(n.a)(regeneratorRuntime.mark((function t(){var q,e,r,n,o,c,l,f=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return q=f.length>0&&void 0!==f[0]?f[0]:"",t.prev=1,e=this.pos,r=e.latitude,n=e.longitude,o=!!r&&{latitude:Number(r),longitude:Number(n)},t.next=6,this.http.makeRequest({url:"/gigs",method:"post",data:{q:q,pos:o}});case 6:return c=t.sent,l=c.response,t.abrupt("return",l.data.tweets);case 11:throw t.prev=11,t.t0=t.catch(1),t.t0;case 14:case"end":return t.stop()}}),t,this,[[1,11]])}))),function(){return r.apply(this,arguments)})},{key:"logTweet",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.http.makeRequest({url:"/log/gigclick",method:"post",data:{twId:e}});case 3:return r=t.sent,n=r.response,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,this,[[0,8]])}))),function(t){return e.apply(this,arguments)})}]),t}()},191:function(t,e,r){"use strict";var n=r(186);r.n(n).a},192:function(t,e,r){(t.exports=r(19)(!1)).push([t.i,".box[data-v-89f2d9c2]{margin-bottom:10px}",""])},193:function(t,e,r){"use strict";var n=r(187);r.n(n).a},194:function(t,e,r){(t.exports=r(19)(!1)).push([t.i,".box[data-v-2f7f0bfb]{margin-bottom:10px}",""])},196:function(t,e,r){"use strict";r.r(e);var n=r(188),o={name:"Gig",props:["tweet"],data:function(){return{twitter:new n.a}},methods:{openGig:function(link,t){window&&window.gtag&&window.gtag("event","view_item",{event_category:"engagement",event_label:link}),window.open(link,"_blank");try{this.twitter.logTweet(t)}catch(t){}}}},c=(r(191),r(24)),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box constrained-box tw-card"},[r("article",{staticClass:"media"},[r("div",{staticClass:"media-left"},[r("figure",{staticClass:"image is-64x64"},[r("img",{staticClass:"rounded",attrs:{src:t.tweet.user.profile_image_url,alt:"Image"}})])]),t._v(" "),r("div",{staticClass:"media-content"},[r("div",{staticClass:"content"},[r("p",{staticClass:"no-margin"},[r("span",[r("strong",[t._v(t._s(t.tweet.user.name))])]),t._v(" "),r("small",{staticStyle:{float:"right"}},[t._v("31m ago")])]),t._v(" "),r("p",[t._v("\n          "+t._s(t.tweet.text)+"\n        ")])]),t._v(" "),r("div",{staticClass:"buttons"},[t.tweet.entities.urls.length>0?r("button",{staticClass:"button is-primary",on:{click:function(e){return t.openGig(t.tweet.entities.urls[0].url,t.tweet.id_str)}}},[t._v("\n          Apply\n        ")]):t._e(),t._v(" "),r("button",{staticClass:"button is-secondary",on:{click:function(e){return t.openGig("https://twitter.com/"+t.tweet.user.screen_name+"/status/"+t.tweet.id_str,t.tweet.id_str)}}},[t._v("\n          View Tweet\n        ")])])])])])}),[],!1,null,"89f2d9c2",null).exports,f={name:"Adsense",mounted:function(){var t=document.createElement("script");t.innerHTML="\n    (adsbygoogle = window.adsbygoogle || []).push({});\n    ",document.getElementById("adsense-scripts").appendChild(t)}},d=(r(193),{name:"Home",components:{Gig:l,Adsense:Object(c.a)(f,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box constrained-box tw-card",staticStyle:{width:"100%"}},[e("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-format":"fluid","data-ad-layout-key":"-gg-2m-29-3h+ys","data-ad-client":"ca-pub-8522455793322408","data-ad-slot":"2134179299"}})])}],!1,null,"2f7f0bfb",null).exports},computed:{tweets:function(){return this.$store.state.twitter.tweets}},head:function(){return{title:"#GigsTwitter - Curated job vacancies from twitter"}}}),v=Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("h6",{staticStyle:{margin:"0 auto","margin-bottom":"5px"}},[t._v("RECENT TWEETS")]),t._v(" "),t._l(t.tweets,(function(e,i){return r("div",{key:i},[r("Gig",{attrs:{tweet:e}}),t._v(" "),i%4==0&&0!==i?r("Adsense"):t._e()],1)}))],2)}),[],!1,null,null,null);e.default=v.exports}}]);