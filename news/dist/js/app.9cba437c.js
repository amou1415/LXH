(function(t){function e(e){for(var r,a,c=e[0],l=e[1],u=e[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);i&&i(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var i=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2395:function(t,e,n){},"335a":function(t,e,n){},"54cc":function(t,e,n){"use strict";var r=n("f745"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],a=(n("7c55"),n("2877")),c={},l=Object(a["a"])(c,o,s,!1,null,null,null),u=l.exports,i=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" 这里是首页内容 "),n("router-link",{attrs:{to:"/login"}},[t._v("登录页")])],1)},p=[],d={},h=d,v=Object(a["a"])(h,f,p,!1,null,null,null),g=v.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._m(1),n("AuthInput",{attrs:{type:"text",placeholder:"请输入用户名",rule:"^.{3,10}$",errMsg:"请输入正确的用户名"},on:{valueChange:t.setUserName}}),n("AuthInput",{attrs:{type:"password",placeholder:"请输入密码",rule:"^.{6}$",errMsg:"请输入正确密码"},on:{valueChange:t.setPassword}}),n("AuthBtn",{attrs:{btnText:"登录"},on:{clickBtn:t.login}})],1)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"closeBtn"},[n("span",{staticClass:"iconfont iconicon-test"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("span",{staticClass:"iconfont iconnew"})])}],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-wrapper"},[n("input",{class:{err:!t.isValid,success:t.isValid},attrs:{type:t.type,placeholder:t.placeholder},on:{input:t.checkValue,blur:t.showAlert}})])},w=[],y=(n("4d63"),n("ac1f"),n("25f0"),{data:function(){return{isValid:!1}},props:["type","placeholder","rule","errMsg"],methods:{checkValue:function(t){var e=new RegExp(this.rule);this.isValid=e.test(t.target.value),this.$emit("valueChange",t.target.value)},showAlert:function(){this.isValid||alert(this.errMsg)}}}),x=y,O=(n("6f6f"),Object(a["a"])(x,_,w,!1,null,"f386339c",null)),j=O.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"btn",on:{click:t.sendClick}},[t._v(" "+t._s(t.btnText)+" ")])])},k=[],C={props:["btnText"],methods:{sendClick:function(){console.log("子组件被点击"),this.$emit("clickBtn")}}},P=C,E=(n("ffed"),Object(a["a"])(P,$,k,!1,null,"50a488f1",null)),M=E.exports,A={data:function(){return{username:"",password:""}},components:{AuthInput:j,AuthBtn:M},methods:{setPassword:function(t){this.password=t},setUserName:function(t){this.username=t},login:function(){console.log("登录按钮被点击"),console.log("用户名是"+this.username),console.log("密码是"+this.password)}}},V=A,T=(n("54cc"),Object(a["a"])(V,m,b,!1,null,"5d390059",null)),B=T.exports;r["a"].use(i["a"]);var S=[{path:"/",name:"Home",component:g},{path:"/login",component:B}],I=new i["a"]({routes:S}),J=I;r["a"].config.productionTip=!1,new r["a"]({router:J,render:function(t){return t(u)}}).$mount("#app")},"6f6f":function(t,e,n){"use strict";var r=n("c5c9"),o=n.n(r);o.a},"7c55":function(t,e,n){"use strict";var r=n("2395"),o=n.n(r);o.a},c5c9:function(t,e,n){},f745:function(t,e,n){},ffed:function(t,e,n){"use strict";var r=n("335a"),o=n.n(r);o.a}});
//# sourceMappingURL=app.9cba437c.js.map