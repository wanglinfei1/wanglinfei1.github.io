webpackJsonp([4],{547:function(e,t,i){function n(e){i(590)}var o=i(8)(i(566),i(602),n,"data-v-9b035d20",null);e.exports=o.exports},558:function(e,t,i){"use strict";function n(){var e={toplist:{module:"music.web_toplist_svr",method:"get_toplist_index",param:{}},focus:{module:"QQMusic.MusichallServer",method:"GetFocus",param:{}}},t=m()({},{callback:"recom4014678690649598",g_tk:1714213237,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0,data:l()(e)});return i.i(f.a)("https://u.y.qq.com/cgi-bin/musicu.fcg",t,{param:"callback",prefix:"recom4014678690649598"})}function o(){var e=h.b+"/api/getPlaylist",t=m()({},{rnd:Math.random(),g_tk:1117229495,jsonpCallback:"getPlaylist",loginUin:0,hostUin:0,format:"json",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0,categoryId:136,sortId:5,sin:0,ein:29});return p.a.get(e,{params:t}).then(function(e){return a.a.resolve(e.data)})}function s(e){var t=h.b+"/api/getDiscList",i=m()({},h.c,{type:1,json:1,utf8:1,onlysong:0,disstid:e,loginUin:0,hostUin:0,format:"json",platform:"yqq",needNewCode:0});return p.a.get(t,{params:i}).then(function(e){return a.a.resolve(e.data)})}t.b=n,t.c=o,t.a=s;var r=i(46),a=i.n(r),d=i(126),l=i.n(d),c=i(66),m=i.n(c),u=i(125),p=i.n(u),h=i(45),f=i(123)},563:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(193),o=i.n(n),s=i(124);t.default={data:function(){return{dots:[],currentPageIndex:0}},props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:3e3}},mounted:function(){var e=this;this._setSliderWidth(),setTimeout(function(){e._initDots(),e._initSlider(),e.autoPlay&&(clearTimeout(e.timer),e._play())},20),window.addEventListener("resize",function(){e.slider&&(e._setSliderWidth(!0),e.slider.refresh())})},methods:{_setSliderWidth:function(e){this.children=this.$refs.sliderGroup.children;for(var t=0,n=this.$refs.slider.clientWidth,o=0;o<this.children.length;o++){var r=this.children[o];i.i(s.c)(r,"slider-item"),r.style.width=n+"px",t+=n}this.loop&&!e&&(t+=2*n),this.$refs.sliderGroup.style.width=t+"px"},_initSlider:function(){var e=this;this.slider=new o.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:.3,snapSpeed:400}),this.slider.on("scrollEnd",function(){var t=e.slider.getCurrentPage().pageX;e.loop&&(t-=1),e.currentPageIndex=t,e.autoPlay&&(clearTimeout(e.timer),e._play())})},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var e=this,t=this.currentPageIndex+1;this.loop&&(t+=1),this.timer=setTimeout(function(){e.slider.goToPage(t,0,400)},this.interval)}},destroyed:function(){clearTimeout(this.timer)}}},566:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(64),o=i.n(n),s=i(593),r=i.n(s),a=i(65),d=i.n(a),l=i(189),c=i.n(l),m=i(558),u=i(45),p=i(63),h=i(55);t.default={mixins:[p.e],data:function(){return{recommendList:[],discList:[]}},created:function(){this._getRecommend(),this._getPlayList()},methods:o()({getJumpUrl:function(e){return 10012===e.type?"https://y.qq.com/n/yqq/mv/v/"+e.jump_info.url+".html":10002===e.type?"https://y.qq.com/n/yqq/album/"+e.jump_info.url+".html#stat=y_new.index.focus.click":e.jump_info.url}},i.i(h.b)({setDisc:"SET_DISC"}),{selectItem:function(e){this.$router.push({path:"/recommend/"+e.dissid}),this.setDisc(e)},handlePlayList:function(e){var t=e.length>0?"60px":"";this.$refs.recommend.style.bottom=t,this.$refs.scroll.refresh()},_getRecommend:function(){var e=this;i.i(m.b)().then(function(t){console.log(t),t.code===u.a&&(e.recommendList=t.focus.data.content)})},_getPlayList:function(){var e=this;i.i(m.c)().then(function(t){t.code===u.a&&(e.discList=t.data.list)})},loadImage:function(){this.checkLoaded||(this.$refs.scroll.refresh(),this.checkLoaded=!0)}}),components:{Slider:r.a,Scroll:d.a,Loading:c.a}}},577:function(e,t,i){t=e.exports=i(543)(!1),t.push([e.i,".slider[data-v-569e98e8]{min-height:1px}.slider .slider-group[data-v-569e98e8]{position:relative;overflow:hidden;white-space:nowrap}.slider .slider-group .slider-item[data-v-569e98e8]{float:left;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;text-align:center}.slider .slider-group .slider-item a[data-v-569e98e8]{display:block;width:100%;overflow:hidden;text-decoration:none}.slider .slider-group .slider-item img[data-v-569e98e8]{display:block;width:100%}.slider .dots[data-v-569e98e8]{position:absolute;right:0;left:0;bottom:12px;text-align:center;font-size:0}.slider .dots .dot[data-v-569e98e8]{display:inline-block;margin:0 4px;width:8px;height:8px;border-radius:50%;background:hsla(0,0%,100%,.5)}.slider .dots .dot.active[data-v-569e98e8]{width:20px;border-radius:5px;background:hsla(0,0%,100%,.8)}",""])},580:function(e,t,i){t=e.exports=i(543)(!1),t.push([e.i,".recommend[data-v-9b035d20]{position:fixed;width:100%;top:88px;bottom:0}.recommend .recommend-content[data-v-9b035d20]{height:100%;overflow:hidden}.recommend .recommend-content .slider-wrapper[data-v-9b035d20]{position:relative;width:100%;overflow:hidden}.recommend .recommend-content .recommend-list .list-title[data-v-9b035d20]{height:65px;line-height:65px;text-align:center;font-size:14px;color:#ffcd32}.recommend .recommend-content .recommend-list .item[data-v-9b035d20]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 20px 20px}.recommend .recommend-content .recommend-list .item .icon[data-v-9b035d20]{-webkit-box-flex:0;-ms-flex:0 0 60px;flex:0 0 60px;width:60px;padding-right:20px}.recommend .recommend-content .recommend-list .item .text[data-v-9b035d20]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1;line-height:20px;overflow:hidden;font-size:14px}.recommend .recommend-content .recommend-list .item .text .name[data-v-9b035d20]{margin-bottom:10px;color:#fff}.recommend .recommend-content .recommend-list .item .text .desc[data-v-9b035d20]{color:hsla(0,0%,100%,.3)}.recommend .recommend-content .loading-container[data-v-9b035d20]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}",""])},587:function(e,t,i){var n=i(577);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(544)("6707407b",n,!0)},590:function(e,t,i){var n=i(580);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(544)("1313dd55",n,!0)},593:function(e,t,i){function n(e){i(587)}var o=i(8)(i(563),i(599),n,"data-v-569e98e8",null);e.exports=o.exports},599:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"slider",staticClass:"slider"},[i("div",{ref:"sliderGroup",staticClass:"slider-group"},[e._t("default")],2),e._v(" "),i("div",{staticClass:"dots"},e._l(e.dots,function(t,n){return i("span",{key:t,staticClass:"dot",class:{active:e.currentPageIndex===n}})}))])},staticRenderFns:[]}},602:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"recommend",staticClass:"recommend"},[i("Scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:e.discList}},[i("div",[e.recommendList.length?i("div",{staticClass:"slider-wrapper"},[i("slider",e._l(e.recommendList,function(t){return i("div",{key:t.key},[i("a",{attrs:{href:e.getJumpUrl(t)}},[i("img",{staticClass:"needsclick",attrs:{src:t.pic_info.url.replace(/https:\/\/|http:\/\//g,"//")},on:{load:e.loadImage}})])])}))],1):e._e(),e._v(" "),i("div",{staticClass:"recommend-list"},[i("h1",{staticClass:"list-title"},[e._v("热门歌单推荐")]),e._v(" "),i("ul",e._l(e.discList,function(t){return i("li",{key:t.key,staticClass:"item needsclick",on:{click:function(i){e.selectItem(t)}}},[i("div",{staticClass:"icon"},[i("img",{attrs:{src:t.imgurl.replace(/https:\/\/|http:\/\//g,"//"),width:"60",height:"60",alt:""}})]),e._v(" "),i("div",{staticClass:"text"},[i("h2",{staticClass:"name",domProps:{innerHTML:e._s(t.creator.name)}}),e._v(" "),i("p",{staticClass:"desc",domProps:{innerHTML:e._s(t.dissname)}})])])}))])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.discList.length,expression:"!discList.length"}],staticClass:"loading-container"},[i("Loading")],1)]),e._v(" "),i("router-view")],1)},staticRenderFns:[]}}});