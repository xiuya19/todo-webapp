(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,,function(t,e,n){"use strict";var a=n(3);n.n(a).a},function(t,e,n){"use strict";var a=n(4);n.n(a).a},function(t,e,n){"use strict";var a=n(5);n.n(a).a},function(t,e,n){},,,,function(t,e,n){"use strict";n.r(e);var a=n(7),o=n(6),r=n(0),s={name:"Head"},u=(n(8),n(1)),i=Object(u.a)(s,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"main-header"},[e("h1",[this._v("JTodo")])])}],!1,null,"7455917d",null).exports,c={name:"Foot",data:()=>({author:"Jocky"})},l=(n(9),{components:{Header:i,Footer:Object(u.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"footer"}},[e("span",[this._v("Wrritten by "+this._s(this.author))])])}),[],!1,null,"21aa75f7",null).exports},mounted(){let t=0;setInterval(()=>{this.updateCount(t++)},1e3)},methods:{...Object(r.b)(["updateCountAsync"]),...Object(r.d)(["updateCount"])},computed:{...Object(r.e)({counter:t=>t.count}),...Object(r.c)({fullName:"fullName"})}}),m=(n(10),Object(u.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"cover"}}),t._v(" "),n("Header"),t._v(" "),n("p",[t._v("counter "+t._s(t.counter))]),t._v(" "),n("p",[t._v("fullName "+t._s(t.fullName))]),t._v(" "),n("router-link",{attrs:{to:{name:"app"}}},[t._v("app")]),t._v(" "),n("router-link",{attrs:{to:{name:"login"}}},[t._v("login")]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("router-view")],1),t._v(" "),n("Footer")],1)}),[],!1,null,"95f05928",null).exports),p=(n(11),[{path:"/",redirect:"/app"},{path:"/app",name:"app",component:()=>n.e(3).then(n.bind(null,22)),meta:{},children:[]},{path:"/login",name:"login",component:()=>n.e(1).then(n.bind(null,23))}]),d={count:0,firstName:"jocky",lastName:"long"},h={updateCount(t,e){t.count=e}},v={fullName:t=>`${t.firstName} ${t.lastName}`},f={updateCountAsync(t,e){setTimeout(()=>{t.commit("updateCount",e.num)},e.time)}};a.a.use(o.a),a.a.use(r.a);const _=(()=>new o.a({routes:p,mode:"history",scrollBehavior:(t,e,n)=>n||{x:0,y:0}}))(),b=new r.a.Store({strict:!1,state:d,mutations:h,getters:v,actions:f});new a.a({router:_,store:b,render:t=>t(m)}).$mount("#root")}],[[15,2,4]]]);