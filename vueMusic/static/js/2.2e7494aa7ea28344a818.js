webpackJsonp([2],{550:function(t,i,e){function s(t){e(591)}var n=e(8)(e(569),e(603),s,null,null);t.exports=n.exports},559:function(t,i,e){"use strict";function s(){var t=o()({},{channel:"singer",page:"list",key:"all_all_all",pagesize:"00",pagenum:"1",g_tk:"5381",loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0});return e.i(a.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,l.d)}function n(t){var i=o()({},{g_tk:5381,loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",singermid:t,notice:0,platform:"yqq",needNewCode:0,order:"listen",begin:0,num:60,songstatus:1});return e.i(a.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",i,l.d)}i.b=s,i.a=n;var r=e(66),o=e.n(r),l=e(45),a=e(123)},562:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(65),n=e.n(s),r=e(189),o=e.n(r),l=e(124);i.default={data:function(){return{currentIndex:0,scrollY:-1,diff:-2}},props:{data:{type:Array,default:[]}},components:{Scroll:n.a,loading:o.a},created:function(){this.listHeight=[],this.touch={},this.listenScroll=!0,this.probeType=3},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixedTitle:function(){return this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},watch:{data:function(){var t=this;setTimeout(function(){t.calcHeight()},20)},scrollY:function(t){if(t>0)return void(this.currentIndex=0);for(var i=this.listHeight,e=0;e<i.length-1;e++){var s=i[e],n=i[e+1];if(-t>=s&&-t<n)return this.currentIndex=e,void(this.diff=n+t)}-t>i[i.length-1]&&(this.currentIndex=i.length-2)},diff:function(t){var i=t>0&&t<30?t-30:0;this.fixTop!==i&&(this.fixTop=i,this.$refs.fixed.style.transform="translate3d(0, "+i+"px, 0)")}},methods:{refresh:function(){this.$refs.listView.refresh()},onShortcutTouchStart:function(t){var i=t.touches[0];this.touch.y1=i.pageY;var s=e.i(l.b)(t.target,"index");this.touch.anchorIndex=s,this._scrollTo(s)},onShortcutTouchMove:function(t){var i=t.touches[0];this.touch.y2=i.pageY;var e=(this.touch.y2-this.touch.y1)/18|0,s=parseInt(this.touch.anchorIndex)+e;this._scrollTo(s)},_scrollTo:function(t){(t||0===t)&&(t<0?t=0:t>this.listHeight.length-2&&(t=this.listHeight.length-2),this.scrollY=-this.listHeight[t],this.$refs.listView.scrollToElement(this.$refs.groupList[t],0))},scroll:function(t){this.scrollY=t.y},calcHeight:function(){this.listHeight=[];var t=this.$refs.groupList,i=0;this.listHeight.push(i);for(var e=0;e<t.length;e++){i+=t[e].clientHeight,this.listHeight.push(i)}},selectItem:function(t){this.$emit("select",t)}}}},569:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(64),n=e.n(s),r=e(592),o=e.n(r),l=e(559),a=e(45),c=e(191),u=e(55),h=e(63);i.default={mixins:[h.e],data:function(){return{singer:[]}},mounted:function(){this._getSigerList()},methods:n()({handlePlayList:function(t){var i=t.length>0?"60px":"";this.$refs.singer.style.bottom=i,this.$refs.singerList.refresh()},_getSigerList:function(){var t=this;e.i(l.b)().then(function(i){i.code===a.a&&(t.singer=t.initData(i.data.list))})},initData:function(t){for(var i={hot:{title:"热门",list:[]}},e=0;e<t.length;e++){e<20&&i.hot.list.push(new c.a({name:t[e].Fsinger_name,id:t[e].Fsinger_mid}));var s=t[e].Findex;i[s]||(i[s]={title:s,list:[]}),i[s].list.push(new c.a({name:t[e].Fsinger_name,id:t[e].Fsinger_mid}))}var n=[],r=[];for(var o in i)"热门"===i[o].title?n.push(i[o]):i[o].title.match(/[a-z|A-Z]/)&&r.push(i[o]);return r.sort(function(t,i){return t.title.charCodeAt(0)-i.title.charCodeAt(0)}),n.concat(r)},selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)}},e.i(u.b)({setSinger:"SET_SINGER"})),components:{SingerList:o.a}}},579:function(t,i,e){i=t.exports=e(543)(!1),i.push([t.i,".list-view{position:relative;width:100%;height:100%;overflow:hidden;background:#222}.list-view .list-group{padding-bottom:30px}.list-view .list-group .list-group-title{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.list-view .list-group .list-group-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:20px 0 0 30px}.list-view .list-group .list-group-item .avatar{width:50px;height:50px;border-radius:50%}.list-view .list-group .list-group-item .name{margin-left:20px;color:hsla(0,0%,100%,.5);font-size:14px}.list-view .list-shortcut{position:absolute;z-index:30;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:20px;padding:20px 0;border-radius:10px;text-align:center;background:rgba(0,0,0,.3);font-family:Helvetica}.list-view .list-shortcut .item{padding:3px;line-height:1;color:hsla(0,0%,100%,.5);font-size:12px}.list-view .list-shortcut .item.current{color:#ffcd32}.list-view .list-fixed{position:absolute;top:0;left:0;width:100%}.list-view .list-fixed .fixed-title{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.list-view .loading-container{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}",""])},581:function(t,i,e){i=t.exports=e(543)(!1),i.push([t.i,".singer{position:fixed;top:88px;bottom:0;width:100%}",""])},589:function(t,i,e){var s=e(579);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(544)("3c2a7a93",s,!0)},591:function(t,i,e){var s=e(581);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(544)("5128b9b0",s,!0)},592:function(t,i,e){function s(t){e(589)}var n=e(8)(e(562),e(601),s,null,null);t.exports=n.exports},601:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("Scroll",{ref:"listView",staticClass:"list-view",attrs:{data:t.data,listenScroll:t.listenScroll,probeType:t.probeType},on:{scroll:t.scroll}},[e("ul",t._l(t.data,function(i){return e("li",{key:i.key,ref:"groupList",refInFor:!0,staticClass:"list-group"},[e("h2",{staticClass:"list-group-title"},[t._v(t._s(i.title))]),t._v(" "),e("ul",t._l(i.list,function(i){return e("li",{key:i.key,staticClass:"list-group-item",on:{click:function(e){t.selectItem(i)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.imgUrl,expression:"list.imgUrl"}],staticClass:"avatar",attrs:{alt:""}}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(i.name))])])}))])})),t._v(" "),e("div",{staticClass:"list-shortcut"},[e("ul",t._l(t.shortcutList,function(i,s){return e("li",{staticClass:"item",class:{current:t.currentIndex===s},attrs:{"data-index":s},on:{touchstart:t.onShortcutTouchStart,touchmove:function(i){i.stopPropagation(),i.preventDefault(),t.onShortcutTouchMove(i)}}},[t._v("\n        "+t._s(i)+"\n      ")])}))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fixed",staticClass:"list-fixed"},[e("h1",{staticClass:"fixed-title"},[t._v(" "+t._s(t.fixedTitle)+" ")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"loading-container"},[e("loading")],1)])},staticRenderFns:[]}},603:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"singer",staticClass:"singer"},[e("singer-list",{ref:"singerList",attrs:{data:t.singer},on:{select:t.selectSinger}}),t._v(" "),e("router-view")],1)},staticRenderFns:[]}}});