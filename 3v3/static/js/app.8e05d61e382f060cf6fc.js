webpackJsonp([8],{"34KM":function(t,e){},"Htf+":function(t,e,n){!function(e){for(var n=[],i=0;i<=15;i++)n[i]=i.toString(16);var o=function(){for(var t="",e=1;e<=36;e++)t+=9===e||14===e||19===e||24===e?"-":15===e?4:20===e?n[4*Math.random()|8]:n[15*Math.random()|0];return t};t.exports=o}()},"Kf/3":function(t,e,n){"use strict";e.f=function(t,e){var n=o.a.get(t,[]);return i=n,a=e,r=function(t){return t.id===e.id},s=i.findIndex(r),0!==s&&(s>0&&i.splice(s,1),i.push(a),u&&i.length>u&&i.pop()),o.a.set(t,n),n;var i,a,r,u,s},e.d=function(t,e){return o.a.get(t,e)},e.k=function(t,e){return o.a.set(t,e)},e.c=function(t,e){var n=o.a.get(t,[]);return a(n,function(t){return t.id===e.id}),o.a.set(t,n),n},e.a=function(t,e){var n=o.a.get(t,[]);return i=n,a=e,r=function(t){return t.id===e.id},u=i.findIndex(r),u>-1&&(i[u]=a),o.a.set(t,n),n;var i,a,r,u},e.j=function(t,e){return o.a.set(t,e),e},e.e=function(t){return o.a.set("matchStartMatch",t),t},e.i=function(t,e){var n=o.a.get("matchTime",{});return n.section=t,n.time=e,o.a.set("matchTime",n),n},e.h=function(t){return o.a.set("section",t),t},e.g=function(t){var e=o.a.get("operationRec",[]);return n=e,i=t,a=function(e){return t.id===e.id},r=n.findIndex(a),r>-1&&n.splice(r,1),n.push(i),o.a.set("operationRec",e),e;var n,i,a,r},e.b=function(t){var e=o.a.get("operationRec",[]);return a(e,function(e){return t.id===e.id}),o.a.set("operationRec",e),e};var i=n("IZoK"),o=n.n(i);function a(t,e){var n=t.findIndex(e);t.splice(n,1)}},MX9l:function(t,e,n){"use strict";var i=n("ExSH"),o=(i.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[i.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]};var r=n("Z0/y")(o,a,!1,function(t){n("h22B")},null,null);e.a=r.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};n.d(i,"addPlayerAct",function(){return w}),n.d(i,"addPlayerAct2",function(){return E}),n.d(i,"changeItem",function(){return y}),n.d(i,"deleItem",function(){return b}),n.d(i,"saveMatchTime",function(){return g}),n.d(i,"savOperRec",function(){return S}),n.d(i,"deleOneOperRec",function(){return _});var o={};n.d(o,"itemPlayer1",function(){return M}),n.d(o,"itemPlayer2",function(){return x}),n.d(o,"radio1",function(){return P}),n.d(o,"radio2",function(){return R}),n.d(o,"ID",function(){return O}),n.d(o,"matchTime",function(){return j}),n.d(o,"section",function(){return I}),n.d(o,"matchStatus",function(){return A}),n.d(o,"operationRec",function(){return C}),n.d(o,"itemName",function(){return L}),n.d(o,"player_data",function(){return B}),n.d(o,"matchStartTime",function(){return k});var a=n("MVMM"),r={name:"App",created:function(){var t,e,n,i,o;t=document,e=window,n=t.documentElement,i="orientationchange"in window?"orientationchange":"resize",o=function(){var t=n.clientWidth;t&&(t>850&&(t=850),n.style.fontSize=t/750*100+"px")},t.addEventListener&&(e.addEventListener(i,o,!1),t.addEventListener("DOMContentLoaded",o,!1))},methods:{}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("Z0/y")(r,u,!1,function(t){n("tXw0")},null,null).exports,c=n("zO6J");a.a.use(c.a);var h=new c.a({mode:"history",routes:[{path:"/",redirect:"/matchsett"},{path:"/vuetest",component:function(t){n.e(5).then(n.bind(null,"Ydzr")).then(function(e){t(e)})}},{path:"/matchsett",component:function(t){Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"gLWd")).then(function(e){t(e)})},children:[{path:"standard",component:function(t){Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"hjx3")).then(function(e){t(e)})},children:[{path:"operRec",component:function(t){Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"OKEA")).then(function(e){t(e)})}}]},{path:"major",component:function(t){Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"UBfS")).then(function(e){t(e)})},children:[{path:"majorRec",component:function(t){Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"5WJz")).then(function(e){t(e)})}}]}]}]}),d=n("iDdd"),f=n.n(d),l=n("9rMa"),m=n("Kf/3"),p=n("Htf+"),v=n.n(p);var T,w=function(t,e){var n=t.commit,i=(t.state,v()());e.id=i,n("SET_ITEMPLAYER1",Object(m.f)("itemPlayer1",e))},E=function(t,e){var n=t.commit,i=(t.state,v()());e.id=i,n("SET_ITEMPLAYER2",Object(m.f)("itemPlayer2",e))},y=function(t,e){var n=t.commit,i=(t.state,e.player);1==e.itemType?n("SET_ITEMPLAYER1",Object(m.a)("itemPlayer1",i)):n("SET_ITEMPLAYER2",Object(m.a)("itemPlayer2",i))},b=function(t,e){var n=t.commit,i=(t.state,e.player);1==e.itemType?n("SET_ITEMPLAYER1",Object(m.c)("itemPlayer1",i)):n("SET_ITEMPLAYER2",Object(m.c)("itemPlayer2",i))},g=function(t,e){var n=t.commit,i=(t.state,e.section),o=e.time;n("SET_MATCHTIME",Object(m.i)(i,o))},S=function(t,e){var n=t.commit,i=(t.state,v()());e.id=i,n("SET_OPERREC",Object(m.g)(e))},_=function(t,e){var n=t.commit;t.state;n("SET_OPERREC",Object(m.b)(e))},M=function(t){return t.itemPlayer1},x=function(t){return t.itemPlayer2},P=function(t){return t.radio1},R=function(t){return t.radio2},O=function(t){return t.ID},j=function(t){return t.matchTime},I=function(t){return t.section},A=function(t){return t.matchStatus},C=function(t){return t.operationRec},L=function(t){return t.itemName},B=function(t){return t.player_data},k=function(t){return t.matchStartTime},N={itemPlayer1:[],itemPlayer2:[],radio1:0,radio2:0,ID:"",matchTime:{},section:1,matchStatus:0,operationRec:[],itemName:[],player_data:{},matchStartTime:""},Y=n("a3Yh"),D=n.n(Y),H=(T={},D()(T,"SET_ITEMPLAYER1",function(t,e){t.itemPlayer1=e}),D()(T,"SET_ITEMPLAYER2",function(t,e){t.itemPlayer2=e}),D()(T,"SET_RADIO",function(t,e){var n=e.radio;1==e.itemType?(t.radio1=n,Object(m.j)("radio1",n)):(t.radio2=n,Object(m.j)("radio2",n))}),D()(T,"SET_ID",function(t,e){t.ID=e}),D()(T,"SET_MATCHTIME",function(t,e){t.matchTime=e}),D()(T,"SET_MATCHSTATUS",function(t,e){t.matchStatus=e}),D()(T,"SET_OPERREC",function(t,e){t.operationRec=e}),D()(T,"SET_ITEMNAME",function(t,e){t.itemName=e}),D()(T,"SET_PLAYER_DATA",function(t,e){t.player_data=e}),D()(T,"SET_MATCH_START_TIME",function(t,e){Object(m.e)(e),t.matchStartTime=e}),D()(T,"SET_SECTION",function(t,e){Object(m.h)(e),t.section=e}),T);n("6LYt");a.a.use(l.a);var K=new l.a.Store({state:N,getters:o,mutations:H,actions:i,strict:!1,plugins:[]}),$=(n("34KM"),n("hRKE")),z=n.n($);function X(t,e,n){var i=this;this.obj=t,this.binding=e,this.touchType=n,this.vueTouches={x:0,y:0},this.vueMoves=!0,this.vueLeave=!0,this.longTouch=!0,this.vueCallBack="object"==z()(e.value)?e.value.fn:e.value,this.obj.addEventListener("touchstart",function(t){i.start(t)},!1),this.obj.addEventListener("touchend",function(t){i.end(t)},!1),this.obj.addEventListener("touchmove",function(t){i.move(t)},!1)}X.prototype={start:function(t){this.vueMoves=!0,this.vueLeave=!0,this.longTouch=!0,this.vueTouches={x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY};var e=this;this.time=setTimeout(function(){this.vueLeave&&this.vueMoves&&("longtap"==this.touchType&&this.vueCallBack(this.binding.value,t),this.longTouch=!1),e.obj.addEventListener("contextmenu",function(t){t.preventDefault()},!1)}.bind(this),500)},end:function(t){var e=t.changedTouches[0].pageX-this.vueTouches.x,n=t.changedTouches[0].pageY-this.vueTouches.y;clearTimeout(this.time),Math.abs(e)>10||Math.abs(n)>100?("swipe"==this.touchType&&this.vueCallBack(this.binding.value,t),Math.abs(e)>Math.abs(n)?(e>10&&"swiperight"==this.touchType&&this.vueCallBack(this.binding.value,t),e<-10&&"swipeleft"==this.touchType&&this.vueCallBack(this.binding.value,t)):(n>10&&"swipedown"==this.touchType&&this.vueCallBack(this.binding.value,t),n<-10&&"swipeup"==this.touchType&&this.vueCallBack(this.binding.value,t))):this.longTouch&&this.vueMoves&&("tap"==this.touchType&&this.vueCallBack(this.binding.value,t),this.vueLeave=!1)},move:function(t){this.vueMoves=!1}},a.a.directive("tap",{bind:function(t,e){new X(t,e,"tap")}}),a.a.directive("swipe",{bind:function(t,e){new X(t,e,"swipe")}}),a.a.directive("swipeleft",{bind:function(t,e){new X(t,e,"swipeleft")}}),a.a.directive("swiperight",{bind:function(t,e){new X(t,e,"swiperight")}}),a.a.directive("swipedown",{bind:function(t,e){new X(t,e,"swipedown")}}),a.a.directive("swipeup",{bind:function(t,e){new X(t,e,"swipeup")}}),a.a.directive("longtap",{bind:function(t,e){new X(t,e,"longtap")}});var J=n("N1Pi");a.a.use(J.a,{position:"middle",time:1e3}),a.a.config.productionTip=!1,f.a.attach(document.body),new a.a({el:"#app",router:h,store:K,components:{App:s},template:"<App/>"})},h22B:function(t,e){},tXw0:function(t,e){}},["NHnr"]);