(function(t){function e(e){for(var o,a,l=e[0],i=e[1],c=e[2],p=0,g=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&g.push(n[a][0]),n[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);u&&u(e);while(g.length)g.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],o=!0,l=1;l<s.length;l++){var i=s[l];0!==n[i]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=s[0]))}return t}var o={},n={app:0},r=[];function a(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=o,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(s,o,function(e){return t[e]}.bind(null,o));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("99af"),s("ac1f"),s("5319"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],a=(s("4de4"),s("d81d"),s("4fad"),{mounted:function(){var t=this;firebase.database().ref("posts").once("value").then((function(e){if(e.val()){var s=Object.entries(e.val());t.$store.commit("posts",s.map((function(t){return t[1]})).filter((function(t){return!t.draft})).sort((function(t,e){return t.id<e.id?1:e.id<t.id?-1:0}))),t.$store.commit("loading",!1)}}))}}),l=a,i=(s("5c0b"),s("2877")),c=Object(i["a"])(l,n,r,!1,null,null,null),u=c.exports,p=s("8c4f"),g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row h-100"},[s("header",{staticClass:"col-12 col-lg order-lg-last d-block d-lg-flex align-items-center site-header"},[s("SiteHeader")],1),s("main",{staticClass:"col cgx-bg-white post-wrapper h-100"},[s("div",{staticClass:"pt-5 pb-5 px-4 px-lg-5"},[t.$store.state.posts.length?[t.tag&&!t.errorPage?s("p",{staticClass:"cgx-max-width mb-5"},[t._v("Tag: "+t._s(t.tag))]):t._e(),t.slug?t._e():s("AllPosts",{attrs:{posts:t.posts}}),t.slug&&t.post?s("SinglePost",{attrs:{post:t.post}}):t._e()]:s("div",{staticClass:"text-center loading"},[t._v(" Loading... ")]),t.errorPage?s("div",{staticClass:"cgx-max-width"},[t.tag?s("p",[t._v('Sorry, no posts for the tag "'+t._s(t.tag)+'".')]):t._e(),t.slug?s("p",[t._v("Sorry, that post doesn't exist.")]):t._e(),s("router-link",{staticClass:"d-block mb-5 cgx-grey text-decoration-none",attrs:{to:"/"}},[s("span",{staticClass:"fa fa-angle-left"}),t._v(" "),s("small",[t._v("All posts")])])],1):t._e()],2)]),s("footer",{staticClass:"col-12 d-lg-none text-center py-3"},[s("div",{staticClass:"mb-3"},[s("Profiles")],1),s("Projects")],1)])},d=[],f=(s("4160"),s("159b"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"d-none d-lg-block col-12 text-center"},[s("Projects")],1),s("div",{staticClass:"col-12"},[s("CorguxLogo")],1),s("div",{staticClass:"d-none d-lg-block col-12 text-center"},[s("Profiles")],1)])}),h=[],m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo text-center my-2 my-lg-5"},[s("router-link",{attrs:{to:"/"}},[s("span",{staticClass:"cgx-blue"},[t._v("<")]),s("span",{staticClass:"cgx-white"},[t._v("corg")]),s("span",{staticClass:"cgx-grey"},[t._v("ux")]),s("span",{staticClass:"cgx-blue"},[t._v(">")])])],1)},v=[],_={name:"CorguxLogo"},x=_,b=Object(i["a"])(x,m,v,!1,null,null,null),y=b.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"projects m-auto"},t._l(t.projects,(function(e){return s("span",{key:e.text},[s("a",{attrs:{href:e.url}},[t._v(" "+t._s(e.text)+" ")]),e.bullet?s("span",[t._v("•")]):t._e()])})),0)},w=[],$={name:"Projects",computed:{projects:function(){return this.$store.state.projects}}},P=$,j=Object(i["a"])(P,C,w,!1,null,null,null),S=j.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profiles m-auto"},t._l(t.profiles,(function(e){return s("span",{key:e.text},[s("a",{staticClass:"mx-3",attrs:{href:e.url}},[s("span",{class:"fa fa-"+e.icon}),s("span",{staticClass:"sr-only"},[t._v(t._s(e.text))])])])})),0)},k=[],T={name:"Profiles",computed:{profiles:function(){return this.$store.state.profiles}}},D=T,E=Object(i["a"])(D,O,k,!1,null,null,null),L=E.exports,q={name:"SiteHeader",components:{CorguxLogo:y,Projects:S,Profiles:L}},A=q,H=Object(i["a"])(A,f,h,!1,null,null,null),M=H.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._l(t.posts,(function(e){return s("div",{key:e.id,staticClass:"post"},[s("span",{staticClass:"date"},[t._v(t._s(t.$date(e.date)))]),s("h2",{staticClass:"mt-1 mb-4"},[s("router-link",{attrs:{to:"/post/"+t.$hyphenate(e.title)}},[t._v(t._s(e.title))])],1),e.tags?s("Tags",{attrs:{tags:e.tags}}):t._e()],1)})),t.posts?t._e():s("div",[t._v(" Nothing to see here yet... ")])],2)},U=[],F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.tags,(function(e,o){return s("router-link",{key:o,staticClass:"cgx-bg-light-grey tag p-1 px-2 rounded-pill me-2 mb-2 d-inline-block",attrs:{to:"/tag/"+t.$hyphenate(e)}},[t._v(" "+t._s(e)+" ")])})),1)},W=[],Y={props:{tags:{type:Array,required:!0}}},G=Y,I=Object(i["a"])(G,F,W,!1,null,null,null),J=I.exports,X={name:"AllPosts",components:{Tags:J},props:{posts:{type:Array,required:!0}}},z=X,N=Object(i["a"])(z,B,U,!1,null,null,null),V=N.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post"},[s("router-link",{staticClass:"d-block mb-5 cgx-grey text-decoration-none",attrs:{to:"/"}},[s("span",{staticClass:"fa fa-angle-left"}),t._v(" "),s("small",[t._v("All posts")])]),s("span",{staticClass:"date"},[t._v(t._s(t.$date(t.post.date)))]),s("h2",{staticClass:"cgx-blue mt-1 mb-4"},[t._v(t._s(t.post.title))]),t.post.tags?s("Tags",{attrs:{tags:t.post.tags}}):t._e(),s("div",{staticClass:"mt-5 pb-5 border-bottom border-secondary",domProps:{innerHTML:t._s(t.formattedContent)}})],1)},Q=[],R={name:"SinglePost",components:{Tags:J},props:{post:{type:[Object,Boolean],required:!0}},computed:{formattedContent:function(){var t=this.post.content.replace(/\[image/g,"<img").replace(/][/image]/g,">").replace(/\[code]/g,'<code class="inline">').replace(/\[\/code]/g,"</code > ");return this.$sanitise(t)}}},Z=R,tt=Object(i["a"])(Z,K,Q,!1,null,null,null),et=tt.exports,st={name:"Blog",components:{SiteHeader:M,AllPosts:V,SinglePost:et,Projects:S,Profiles:L},props:{slug:{type:String,required:!1},tag:{type:String,required:!1}},computed:{posts:function(){var t=this;return this.tag?this.$store.state.posts.filter((function(e){var s=!1;return e.tags.forEach((function(e){e.toLowerCase()==t.$unhyphenate(t.tag)&&(s=!0)})),s})):this.$store.state.posts},post:function(){var t=this;if(!this.$store.state.posts.length)return!1;var e=this.$store.state.posts.filter((function(e){return t.$hyphenate(e.title)==t.slug}));return!!e.length&&e[0]},date:function(){if(!this.post)return"";var t=new Date(this.post.date),e=t.getDate()<10?"0".concat(t.getDate()):t.getDate(),s=t.toLocaleString("default",{month:"short"});return"".concat(e," ").concat(s," ").concat(t.getFullYear())},errorPage:function(){return!this.$store.state.loading&&(this.tag&&!this.posts.length||this.slug&&!this.post)}},methods:{setup:function(){var t="Corgux | UI, UX, web design";this.slug&&(document.title="".concat(this.post.title," | ").concat(t)),this.tag&&(document.title="Tag: ".concat(this.$unhyphenate(this.tag)," | ").concat(t))}},watch:{tag:function(){this.setup()},slug:function(){this.setup()},posts:function(){this.setup()}}},ot=st,nt=Object(i["a"])(ot,g,d,!1,null,null,null),rt=nt.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row h-100"},[s("header",{staticClass:"col-12 col-lg order-lg-last d-block d-lg-flex align-items-center site-header"},[s("SiteHeader")],1),t._m(0),s("footer",{staticClass:"col-12 d-lg-none text-center py-3"},[s("div",{staticClass:"mb-3"},[s("Profiles")],1),s("Projects")],1)])},lt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"col cgx-bg-white post-wrapper h-100"},[s("div",{staticClass:"pt-5 pb-5 px-4 px-lg-5"},[s("h1",[t._v("404")]),s("p",[t._v(" Page not found. ")])])])}],it={name:"Blog",components:{SiteHeader:M,Projects:S,Profiles:L},props:{slug:{type:String,required:!1},tag:{type:String,required:!1}},computed:{posts:function(){return this.$store.state.posts},post:function(){var t=this;if(!this.$store.state.posts.length)return!1;var e=this.$store.state.posts.filter((function(e){return t.$hyphenate(e.title)==t.slug}));return!!e.length&&e[0]},date:function(){if(!this.post)return"";var t=new Date(this.post.date),e=t.getDate()<10?"0".concat(t.getDate()):t.getDate(),s=t.toLocaleString("default",{month:"short"});return"".concat(e," ").concat(s," ").concat(t.getFullYear())}},methods:{setup:function(){(this.tag&&!this.posts.length||this.slug&&!this.post)&&this.$router.push({path:"/"});var t="Corgux | UI, UX, web design";this.slug&&(document.title="".concat(this.post.title," | ").concat(t)),this.tag&&(document.title="Tag: ".concat(this.$unhyphenate(this.tag)," | ").concat(t))}},watch:{tag:function(){this.setup()},slug:function(){this.setup()},posts:function(){this.setup()}}},ct=it,ut=Object(i["a"])(ct,at,lt,!1,null,null,null),pt=ut.exports;o["a"].use(p["a"]);var gt=[{path:"/",name:"Blog",component:rt},{path:"/post/:slug",name:"SinglePost",component:rt,props:!0},{path:"/tag/:tag",name:"Tag",component:rt,props:!0},{path:"*",name:"404",component:pt,props:!0}],dt=new p["a"]({routes:gt}),ft=dt,ht=s("2f62");o["a"].use(ht["a"]);var mt=new ht["a"].Store({state:{loading:!0,posts:[],projects:[{text:"WordMap",url:"/word-map",bullet:!0},{text:"Safe Plants for Cats",url:"/safe-plants-for-cats",bullet:!0},{text:"Gifstori",url:"/gifstori"},{text:"PhotoViewer",url:"/photos",bullet:!0},{text:"WordPress plugins",url:"//profiles.wordpress.org/corgux/#content-plugins"}],profiles:[{text:"Twitter",url:"//twitter.com/corgux",icon:"twitter"},{text:"GitHub",url:"//github.com/corgux",icon:"github"},{text:"SoundCloud",url:"//soundcloud.com/corgux",icon:"soundcloud"},{text:"WordPress",url:"//profiles.wordpress.org/corgux",icon:"wordpress"},{text:"CodePen",url:"//codepen.io/corgux/",icon:"codepen"}]},mutations:{posts:function(t,e){t.posts=e},loading:function(t,e){t.loading=e}},actions:{},modules:{}}),vt=s("c0c4"),_t=s.n(vt);function xt(t){return t.replace(/ /g,"-").replace(/'/g,"").toLowerCase()}function bt(t){return t.replace(/-/g," ").toLowerCase()}function yt(t){var e=new Date(t),s=e.getDate()<10?"0".concat(e.getDate()):e.getDate(),o=e.toLocaleString("default",{month:"short"});return"".concat(s," ").concat(o," ").concat(e.getFullYear())}o["a"].config.productionTip=!1,o["a"].prototype.$hyphenate=xt,o["a"].prototype.$unhyphenate=bt,o["a"].prototype.$date=yt,o["a"].prototype.$sanitise=_t.a.sanitize,new o["a"]({router:ft,store:mt,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"9c0c":function(t,e,s){}});
//# sourceMappingURL=app.681cd3cc.js.map