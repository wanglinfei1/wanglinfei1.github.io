webpackJsonp([5],{546:function(t,e,i){function n(t){i(584)}var s=i(8)(i(565),i(596),n,"data-v-1370c7e4",null);t.exports=s.exports},560:function(t,e,i){"use strict";function n(){var t=p.b+"/api/getRankList",e=l()({},p.c,{uin:0,platform:"h5",needNewCode:1,format:"json"});return c.a.get(t,{params:e}).then(function(t){return a.a.resolve(t.data)})}e.a=n;var s=i(46),a=i.n(s),o=i(66),l=i.n(o),r=i(125),c=i.n(r),p=i(45);c.a.defaults.withCredentials=!0},565:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(64),s=i.n(n),a=i(560),o=i(45),l=i(65),r=i.n(l),c=i(188),p=i.n(c),d=i(63),f=i(55);e.default={mixins:[d.e],data:function(){return{topList:[]}},created:function(){this._getRankList()},methods:s()({handlePlayList:function(t){var e=t.length>0?"60px":"";this.$refs.rank.style.bottom=e,this.$refs.topList.refresh()},_getRankList:function(){var t=this;i.i(a.a)().then(function(e){console.log(e),e.code===o.a&&(t.topList=e.data.topList)})},selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setTopList(t)}},i.i(f.b)({setTopList:"SET_TOPLIST"})),components:{Scroll:r.a,Loading:p.a}}},574:function(t,e,i){e=t.exports=i(543)(!1),e.push([t.i,".rank[data-v-1370c7e4]{position:fixed;width:100%;top:88px;bottom:0}.rank .toplist[data-v-1370c7e4]{height:100%;overflow:hidden}.rank .toplist .item[data-v-1370c7e4]{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 20px;padding-top:20px;height:100px}.rank .toplist .item[data-v-1370c7e4]:last-child{padding-bottom:20px}.rank .toplist .item .icon[data-v-1370c7e4]{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;width:100px;height:100px}.rank .toplist .item .songlist[data-v-1370c7e4]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 20px;height:100px;overflow:hidden;background:#333;color:hsla(0,0%,100%,.3);font-size:12px}.rank .toplist .item .songlist .song[data-v-1370c7e4]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:26px}.rank .toplist .loading-container[data-v-1370c7e4]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}",""])},584:function(t,e,i){var n=i(574);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(544)("04998c5a",n,!0)},596:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"rank",staticClass:"rank"},[i("Scroll",{ref:"topList",staticClass:"toplist",attrs:{data:t.topList}},[i("ul",t._l(t.topList,function(e,n){return i("li",{key:n,staticClass:"item",on:{click:function(i){t.selectItem(e)}}},[i("div",{staticClass:"icon"},[i("img",{attrs:{src:e.picUrl.replace(/https:\/\/|http:\/\//g,"//"),alt:"",width:"100",height:"100"}})]),t._v(" "),i("ul",{staticClass:"songlist"},t._l(e.songList,function(e,n){return i("li",{key:n+"-1",staticClass:"song"},[i("span",[t._v(t._s(e.singername))]),t._v(" "),i("span",[t._v(t._s(e.songname))])])}))])})),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.topList.length,expression:"!topList.length"}],staticClass:"loading-container"},[i("loading")],1)]),t._v(" "),i("router-view")],1)},staticRenderFns:[]}}});