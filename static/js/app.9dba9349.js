(function(t){function e(e){for(var r,o,l=e[0],a=e[1],i=e[2],b=0,d=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);s&&s(e);while(d.length)d.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,l=1;l<n.length;l++){var a=n[l];0!==c[a]&&(r=!1)}r&&(u.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},c={app:0},u=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var s=a;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=n("cf05"),u=n.n(c),o=Object(r["d"])("img",{alt:"Vue logo",src:u.a},null,-1);function l(t,e,n,c,u,l){var a=Object(r["k"])("Translator"),i=Object(r["k"])("HelloWorld");return Object(r["g"])(),Object(r["c"])(r["a"],null,[o,Object(r["f"])(i,null,{default:Object(r["n"])((function(){return[Object(r["f"])(a)]})),_:1})],64)}var a=function(t){return Object(r["i"])("data-v-333f62b8"),t=t(),Object(r["h"])(),t},i={class:"hello"},s=a((function(){return Object(r["d"])("h1",null,"FizzBuzz as a Service",-1)})),b=a((function(){return Object(r["d"])("h2",null,"Call the API directly:",-1)})),d=a((function(){return Object(r["d"])("p",null,[Object(r["e"])(" where "),Object(r["d"])("code",null,":number"),Object(r["e"])(" is the numerical value to translate. ")],-1)})),f=a((function(){return Object(r["d"])("p",{class:"powered"},"Powered by Vue and Serverless Cloud",-1)}));function p(t,e,n,c,u,o){return Object(r["g"])(),Object(r["c"])("div",i,[s,Object(r["j"])(t.$slots,"default",{},void 0,!0),Object(r["d"])("div",null,[b,Object(r["d"])("p",null,[Object(r["d"])("code",null,Object(r["l"])(u.route)+"/api/:number",1)]),d]),f])}var h=n("bc3a"),O=n.n(h),j={name:"HelloWorld",props:{msg:String},data:function(){return{loading:!0,number:3,result:"",route:""}},methods:{fetchResult:function(t){var e=this;this.loading=!0,O.a.get("/api/".concat(t)).then((function(t){e.result=t.data.result,e.loading=!1})).catch((function(t){console.log(t),e.loading=!1}))}},created:function(){this.fetchResult(this.number),this.route=window.location.host},watch:{number:function(t){this.fetchResult(t)}}},v=(n("93fb"),n("6b0d")),g=n.n(v);const m=g()(j,[["render",p],["__scopeId","data-v-333f62b8"]]);var y=m,w=function(t){return Object(r["i"])("data-v-792c0ca2"),t=t(),Object(r["h"])(),t},z=w((function(){return Object(r["d"])("h2",null,"Use this app:",-1)})),_=Object(r["e"])(" Choose a number to get the FizzBuzz result: "),P={key:0},S=w((function(){return Object(r["d"])("p",null,"Loading FizzBuzz...",-1)})),k=[S],x={key:1};function R(t,e,n,c,u,o){return Object(r["g"])(),Object(r["c"])("div",null,[z,Object(r["d"])("label",null,[_,Object(r["o"])(Object(r["d"])("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=function(t){return u.number=t})},null,512),[[r["m"],u.number,void 0,{number:!0}]])]),u.loading?(Object(r["g"])(),Object(r["c"])("div",P,k)):(Object(r["g"])(),Object(r["c"])("div",x,[Object(r["d"])("p",null,"The number "+Object(r["l"])(u.number)+" translates to "+Object(r["l"])(u.result),1)]))])}var T={name:"Translator",data:function(){return{loading:!0,number:3,result:""}},methods:{fetchResult:function(t){var e=this;this.loading=!0,O.a.get("/api/".concat(t)).then((function(t){e.result=t.data.result,e.loading=!1})).catch((function(t){console.log(t),e.loading=!1}))}},created:function(){this.fetchResult(this.number)},watch:{number:function(t){this.fetchResult(t)}}};n("93c7");const M=g()(T,[["render",R],["__scopeId","data-v-792c0ca2"]]);var B=M,C={name:"App",components:{HelloWorld:y,Translator:B}};n("8db7");const F=g()(C,[["render",l]]);var H=F;O.a.defaults.baseURL="",Object(r["b"])(H).mount("#app")},"8db7":function(t,e,n){"use strict";n("fc09")},"93c7":function(t,e,n){"use strict";n("b022")},"93fb":function(t,e,n){"use strict";n("9af8")},"9af8":function(t,e,n){},b022:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.848f4bb9.png"},fc09:function(t,e,n){}});
//# sourceMappingURL=app.9dba9349.js.map