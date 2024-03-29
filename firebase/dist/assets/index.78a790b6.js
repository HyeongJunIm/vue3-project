import{g as S,o as we,i as je,q as w,j as b,c as H,aF as ce,a as le,aG as xe}from"./index.5ba5d6ce.js";import{Q as Se}from"./QPage.248f7cac.js";import"./QChip.da229628.js";import"./PostIcon.7d2fd7c0.js";import{_ as Ce}from"./PostList.04464214.js";import"./post.342e5965.js";var Te=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},fe={exports:{}};/*! algoliasearch-lite.umd.js | 4.22.1 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */(function(B,G){(function(J,j){B.exports=j()})(Te,function(){function J(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?j(Object(r),!0).forEach(function(n){J(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function L(e,t){if(e==null)return{};var r,n,a=function(i,o){if(i==null)return{};var c,d,l={},g=Object.keys(i);for(d=0;d<g.length;d++)c=g[d],o.indexOf(c)>=0||(l[c]=i[c]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function _(e,t){return function(r){if(Array.isArray(r))return r}(e)||function(r,n){if(Symbol.iterator in Object(r)||Object.prototype.toString.call(r)==="[object Arguments]"){var a=[],s=!0,i=!1,o=void 0;try{for(var c,d=r[Symbol.iterator]();!(s=(c=d.next()).done)&&(a.push(c.value),!n||a.length!==n);s=!0);}catch(l){i=!0,o=l}finally{try{s||d.return==null||d.return()}finally{if(i)throw o}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function C(e){return function(t){if(Array.isArray(t)){for(var r=0,n=new Array(t.length);r<t.length;r++)n[r]=t[r];return n}}(e)||function(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function M(e){var t,r="algoliasearch-client-js-".concat(e.key),n=function(){return t===void 0&&(t=e.localStorage||window.localStorage),t},a=function(){return JSON.parse(n().getItem(r)||"{}")},s=function(o){n().setItem(r,JSON.stringify(o))},i=function(){var o=e.timeToLive?1e3*e.timeToLive:null,c=a(),d=Object.fromEntries(Object.entries(c).filter(function(g){return _(g,2)[1].timestamp!==void 0}));if(s(d),o){var l=Object.fromEntries(Object.entries(d).filter(function(g){var h=_(g,2)[1],y=new Date().getTime();return!(h.timestamp+o<y)}));s(l)}};return{get:function(o,c){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then(function(){i();var l=JSON.stringify(o);return a()[l]}).then(function(l){return Promise.all([l?l.value:c(),l!==void 0])}).then(function(l){var g=_(l,2),h=g[0],y=g[1];return Promise.all([h,y||d.miss(h)])}).then(function(l){return _(l,1)[0]})},set:function(o,c){return Promise.resolve().then(function(){var d=a();return d[JSON.stringify(o)]={timestamp:new Date().getTime(),value:c},n().setItem(r,JSON.stringify(d)),c})},delete:function(o){return Promise.resolve().then(function(){var c=a();delete c[JSON.stringify(o)],n().setItem(r,JSON.stringify(c))})},clear:function(){return Promise.resolve().then(function(){n().removeItem(r)})}}}function T(e){var t=C(e.caches),r=t.shift();return r===void 0?{get:function(n,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}},i=a();return i.then(function(o){return Promise.all([o,s.miss(o)])}).then(function(o){return _(o,1)[0]})},set:function(n,a){return Promise.resolve(a)},delete:function(n){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(n,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return r.get(n,a,s).catch(function(){return T({caches:t}).get(n,a,s)})},set:function(n,a){return r.set(n,a).catch(function(){return T({caches:t}).set(n,a)})},delete:function(n){return r.delete(n).catch(function(){return T({caches:t}).delete(n)})},clear:function(){return r.clear().catch(function(){return T({caches:t}).clear()})}}}function I(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{serializable:!0},t={};return{get:function(r,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}},s=JSON.stringify(r);if(s in t)return Promise.resolve(e.serializable?JSON.parse(t[s]):t[s]);var i=n(),o=a&&a.miss||function(){return Promise.resolve()};return i.then(function(c){return o(c)}).then(function(){return i})},set:function(r,n){return t[JSON.stringify(r)]=e.serializable?JSON.stringify(n):n,Promise.resolve(n)},delete:function(r){return delete t[JSON.stringify(r)],Promise.resolve()},clear:function(){return t={},Promise.resolve()}}}function V(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}function F(e,t){return t&&Object.keys(t).forEach(function(r){e[r]=t[r](e)}),e}function A(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=0;return e.replace(/%s/g,function(){return encodeURIComponent(r[a++])})}var R={WithinQueryParameters:0,WithinHeaders:1};function K(e,t){var r=e||{},n=r.data||{};return Object.keys(r).forEach(function(a){["timeout","headers","queryParameters","data","cacheable"].indexOf(a)===-1&&(n[a]=r[a])}),{data:Object.entries(n).length>0?n:void 0,timeout:r.timeout||t,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}var N={Read:1,Write:2,Any:3},X=1,me=2,$=3;function Y(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X;return u(u({},e),{},{status:t,lastUpdate:Date.now()})}function Z(e){return typeof e=="string"?{protocol:"https",url:e,accept:N.Any}:{protocol:e.protocol||"https",url:e.url,accept:e.accept||N.Any}}var z="GET",D="POST";function de(e,t){return Promise.all(t.map(function(r){return e.get(r,function(){return Promise.resolve(Y(r))})})).then(function(r){var n=r.filter(function(i){return function(o){return o.status===X||Date.now()-o.lastUpdate>12e4}(i)}),a=r.filter(function(i){return function(o){return o.status===$&&Date.now()-o.lastUpdate<=12e4}(i)}),s=[].concat(C(n),C(a));return{getTimeout:function(i,o){return(a.length===0&&i===0?1:a.length+3+i)*o},statelessHosts:s.length>0?s.map(function(i){return Z(i)}):t}})}function ee(e,t,r,n){var a=[],s=function(h,y){if(!(h.method===z||h.data===void 0&&y.data===void 0)){var m=Array.isArray(h.data)?h.data:u(u({},h.data),y.data);return JSON.stringify(m)}}(r,n),i=function(h,y){var m=u(u({},h.headers),y.headers),v={};return Object.keys(m).forEach(function(q){var O=m[q];v[q.toLowerCase()]=O}),v}(e,n),o=r.method,c=r.method!==z?{}:u(u({},r.data),n.data),d=u(u(u({"x-algolia-agent":e.userAgent.value},e.queryParameters),c),n.queryParameters),l=0,g=function h(y,m){var v=y.pop();if(v===void 0)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:re(a)};var q={data:s,headers:i,method:o,url:pe(v,r.path,d),connectTimeout:m(l,e.timeouts.connect),responseTimeout:m(l,n.timeout)},O=function(p){var f={request:q,response:p,host:v,triesLeft:y.length};return a.push(f),f},Q={onSuccess:function(p){return function(f){try{return JSON.parse(f.content)}catch(P){throw function(x,k){return{name:"DeserializationError",message:x,response:k}}(P.message,f)}}(p)},onRetry:function(p){var f=O(p);return p.isTimedOut&&l++,Promise.all([e.logger.info("Retryable failure",ne(f)),e.hostsCache.set(v,Y(v,p.isTimedOut?$:me))]).then(function(){return h(y,m)})},onFail:function(p){throw O(p),function(f,P){var x=f.content,k=f.status,E=x;try{E=JSON.parse(x).message}catch{}return function(W,U,qe){return{name:"ApiError",message:W,status:U,transporterStackTrace:qe}}(E,k,P)}(p,re(a))}};return e.requester.send(q).then(function(p){return function(f,P){return function(x){var k=x.status;return x.isTimedOut||function(E){var W=E.isTimedOut,U=E.status;return!W&&~~U==0}(x)||~~(k/100)!=2&&~~(k/100)!=4}(f)?P.onRetry(f):~~(f.status/100)==2?P.onSuccess(f):P.onFail(f)}(p,Q)})};return de(e.hostsCache,t).then(function(h){return g(C(h.statelessHosts).reverse(),h.getTimeout)})}function he(e){var t={value:"Algolia for JavaScript (".concat(e,")"),add:function(r){var n="; ".concat(r.segment).concat(r.version!==void 0?" (".concat(r.version,")"):"");return t.value.indexOf(n)===-1&&(t.value="".concat(t.value).concat(n)),t}};return t}function pe(e,t,r){var n=te(r),a="".concat(e.protocol,"://").concat(e.url,"/").concat(t.charAt(0)==="/"?t.substr(1):t);return n.length&&(a+="?".concat(n)),a}function te(e){return Object.keys(e).map(function(t){return A("%s=%s",t,(r=e[t],Object.prototype.toString.call(r)==="[object Object]"||Object.prototype.toString.call(r)==="[object Array]"?JSON.stringify(e[t]):e[t]));var r}).join("&")}function re(e){return e.map(function(t){return ne(t)})}function ne(e){var t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return u(u({},e),{},{request:u(u({},e.request),{},{headers:u(u({},e.request.headers),t)})})}var ge=function(e){var t=e.appId,r=function(a,s,i){var o={"x-algolia-api-key":i,"x-algolia-application-id":s};return{headers:function(){return a===R.WithinHeaders?o:{}},queryParameters:function(){return a===R.WithinQueryParameters?o:{}}}}(e.authMode!==void 0?e.authMode:R.WithinHeaders,t,e.apiKey),n=function(a){var s=a.hostsCache,i=a.logger,o=a.requester,c=a.requestsCache,d=a.responsesCache,l=a.timeouts,g=a.userAgent,h=a.hosts,y=a.queryParameters,m={hostsCache:s,logger:i,requester:o,requestsCache:c,responsesCache:d,timeouts:l,userAgent:g,headers:a.headers,queryParameters:y,hosts:h.map(function(v){return Z(v)}),read:function(v,q){var O=K(q,m.timeouts.read),Q=function(){return ee(m,m.hosts.filter(function(f){return(f.accept&N.Read)!=0}),v,O)};if((O.cacheable!==void 0?O.cacheable:v.cacheable)!==!0)return Q();var p={request:v,mappedRequestOptions:O,transporter:{queryParameters:m.queryParameters,headers:m.headers}};return m.responsesCache.get(p,function(){return m.requestsCache.get(p,function(){return m.requestsCache.set(p,Q()).then(function(f){return Promise.all([m.requestsCache.delete(p),f])},function(f){return Promise.all([m.requestsCache.delete(p),Promise.reject(f)])}).then(function(f){var P=_(f,2);return P[0],P[1]})})},{miss:function(f){return m.responsesCache.set(p,f)}})},write:function(v,q){return ee(m,m.hosts.filter(function(O){return(O.accept&N.Write)!=0}),v,K(q,m.timeouts.write))}};return m}(u(u({hosts:[{url:"".concat(t,"-dsn.algolia.net"),accept:N.Read},{url:"".concat(t,".algolia.net"),accept:N.Write}].concat(V([{url:"".concat(t,"-1.algolianet.com")},{url:"".concat(t,"-2.algolianet.com")},{url:"".concat(t,"-3.algolianet.com")}]))},e),{},{headers:u(u(u({},r.headers()),{"content-type":"application/x-www-form-urlencoded"}),e.headers),queryParameters:u(u({},r.queryParameters()),e.queryParameters)}));return F({transporter:n,appId:t,addAlgoliaAgent:function(a,s){n.userAgent.add({segment:a,version:s})},clearCache:function(){return Promise.all([n.requestsCache.clear(),n.responsesCache.clear()]).then(function(){})}},e.methods)},ve=function(e){return function(t,r){return t.method===z?e.transporter.read(t,r):e.transporter.write(t,r)}},ae=function(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n={transporter:e.transporter,appId:e.appId,indexName:t};return F(n,r.methods)}},oe=function(e){return function(t,r){var n=t.map(function(a){return u(u({},a),{},{params:te(a.params||{})})});return e.transporter.read({method:D,path:"1/indexes/*/queries",data:{requests:n},cacheable:!0},r)}},se=function(e){return function(t,r){return Promise.all(t.map(function(n){var a=n.params,s=a.facetName,i=a.facetQuery,o=L(a,["facetName","facetQuery"]);return ae(e)(n.indexName,{methods:{searchForFacetValues:ue}}).searchForFacetValues(s,i,u(u({},r),o))}))}},ye=function(e){return function(t,r,n){return e.transporter.read({method:D,path:A("1/answers/%s/prediction",e.indexName),data:{query:t,queryLanguages:r},cacheable:!0},n)}},be=function(e){return function(t,r){return e.transporter.read({method:D,path:A("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},r)}},ue=function(e){return function(t,r,n){return e.transporter.read({method:D,path:A("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:r},cacheable:!0},n)}},Oe=1,Pe=2,_e=3;function ie(e,t,r){var n,a={appId:e,apiKey:t,timeouts:{connect:1,read:2,write:30},requester:{send:function(s){return new Promise(function(i){var o=new XMLHttpRequest;o.open(s.method,s.url,!0),Object.keys(s.headers).forEach(function(g){return o.setRequestHeader(g,s.headers[g])});var c,d=function(g,h){return setTimeout(function(){o.abort(),i({status:0,content:h,isTimedOut:!0})},1e3*g)},l=d(s.connectTimeout,"Connection timeout");o.onreadystatechange=function(){o.readyState>o.OPENED&&c===void 0&&(clearTimeout(l),c=d(s.responseTimeout,"Socket timeout"))},o.onerror=function(){o.status===0&&(clearTimeout(l),clearTimeout(c),i({content:o.responseText||"Network request failed",status:o.status,isTimedOut:!1}))},o.onload=function(){clearTimeout(l),clearTimeout(c),i({content:o.responseText,status:o.status,isTimedOut:!1})},o.send(s.data)})}},logger:(n=_e,{debug:function(s,i){return Oe>=n&&console.debug(s,i),Promise.resolve()},info:function(s,i){return Pe>=n&&console.info(s,i),Promise.resolve()},error:function(s,i){return console.error(s,i),Promise.resolve()}}),responsesCache:I(),requestsCache:I({serializable:!1}),hostsCache:T({caches:[M({key:"".concat("4.22.1","-").concat(e)}),I()]}),userAgent:he("4.22.1").add({segment:"Browser",version:"lite"}),authMode:R.WithinQueryParameters};return ge(u(u(u({},a),r),{},{methods:{search:oe,searchForFacetValues:se,multipleQueries:oe,multipleSearchForFacetValues:se,customRequest:ve,initIndex:function(s){return function(i){return ae(s)(i,{methods:{search:be,searchForFacetValues:ue,findAnswers:ye}})}}}}))}return ie.version="4.22.1",ie})})(fe);var Ae=fe.exports;const Ne={class:"row q-col-gutter-x-lg"},ke={class:"col-3"},Ie={class:"col-9"},Ee={class:"pagination flex flex-center q-mt-md"},He={__name:"index",setup(B){const G=Ae("8LSKX8M2P1","2c153a3420d172330dd13d51623e9fca"),J=j=>(console.log(j),j.map(u=>({id:u.objectID,title:u.title,content:u._snippetResult.content.value,category:u.category,tags:u.tags,createdAt:u.createdAt,readCount:u.readCount,likeCount:u.likeCount,bookmarkCount:u.bookmarkCount,commentCount:u.commentCount,uid:u.uid})));return(j,u)=>{const L=S("ais-configure"),_=S("ais-refinement-list"),C=S("ais-panel"),M=S("ais-search-box"),T=S("q-seperator"),I=S("ais-hits"),V=S("ais-pagination"),F=S("ais-instant-search");return we(),je(Se,{padding:""},{default:w(()=>[b(F,{"search-client":xe(G),"index-name":"dev_posts"},{default:w(()=>[b(L,{hitsPerPage:8}),H("div",Ne,[H("section",ke,[b(ce,{flat:"",bordered:"",class:"q-pa-md"},{default:w(()=>[b(C,null,{header:w(()=>[le("\uCE74\uD14C\uACE0\uB9AC")]),default:w(()=>[b(_,{attribute:"category"})]),_:1})]),_:1}),b(ce,{flat:"",bordered:"",class:"q-pa-md q-mt-md"},{default:w(()=>[b(C,null,{header:w(()=>[le("\uD0DC\uADF8")]),default:w(()=>[b(_,{attribute:"tags"})]),_:1})]),_:1})]),H("section",Ie,[b(M),b(T,{spaced:""}),b(I,{"transform-items":J},{default:w(({items:A})=>[b(Ce,{items:A},null,8,["items"])]),_:1}),H("div",Ee,[b(V)])])])]),_:1},8,["search-client"])]),_:1})}}};export{He as default};
