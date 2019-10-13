webpackJsonp([1],{549:function(t,e,i){function s(t){i(588)}var a=i(8)(i(568),i(600),s,"data-v-5f1b8b13",null);t.exports=a.exports},553:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(64),a=i.n(s),n=i(65),o=i.n(n),r=i(189),l=i.n(r),c=i(124),d=i(188),g=i.n(d),f=i(55),p=i(63),u=i.i(c.a)("transform");e.default={mixins:[p.e],data:function(){return{scrollY:0}},props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.clientHeight=this.$refs.bgImage.clientHeight,this.translateY=40-this.clientHeight,this.$refs.list.$el.style.top=this.clientHeight+"px"},methods:a()({handlePlayList:function(t){var e=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=e,this.$refs.list.refresh()},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.go(-1)},selectItem:function(t,e){this.selectPlay({list:this.songs,index:e})},random:function(){this.randomPlay({list:this.songs})}},i.i(f.c)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var e=1;this.zindex=0;var i=Math.max(t,this.translateY);this.$refs.layer.style[u]="translate3d(0,"+i+"px,0)";var s=Math.abs(t/this.clientHeight);t>0&&(e=1+s,this.zindex=10),t<this.translateY?(this.zindex=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style.zIndex=this.zindex,this.$refs.bgImage.style[u]="scale("+e+")"}},components:{Scroll:o.a,SongList:l.a,loading:g.a}}},554:function(t,e,i){e=t.exports=i(543)(!1),e.push([t.i,".music-list[data-v-2fdecef3]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back[data-v-2fdecef3]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-2fdecef3]{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title[data-v-2fdecef3]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-2fdecef3]{position:relative;width:100%;height:0;padding-top:70%;-webkit-transform-origin:top;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-2fdecef3]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-2fdecef3]{-webkit-box-sizing:border-box;box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-2fdecef3]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-2fdecef3]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-2fdecef3]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-2fdecef3]{position:relative;height:100%;background:#222}.music-list .list[data-v-2fdecef3]{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper[data-v-2fdecef3]{padding:20px 30px}.music-list .list .loading-container[data-v-2fdecef3]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}",""])},555:function(t,e,i){var s=i(554);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(544)("5b5b10dc",s,!0)},556:function(t,e,i){function s(t){i(555)}var a=i(8)(i(553),i(557),s,"data-v-2fdecef3",null);t.exports=a.exports},557:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"music-list"},[i("div",{staticClass:"back",on:{click:t.back}},[i("i",{staticClass:"icon-back"})]),t._v(" "),i("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),i("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[i("div",{staticClass:"play-wrapper"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[i("i",{staticClass:"icon-play"}),t._v(" "),i("span",{staticClass:"text"},[t._v("随机播放全部")])])])]),t._v(" "),i("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),i("Scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"probe-type":t.probeType,"listen-scroll":t.listenScroll},on:{scroll:t.scroll}},[i("div",{staticClass:"song-list-wrapper"},[i("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[i("loading")],1)])],1)},staticRenderFns:[]}},559:function(t,e,i){"use strict";function s(){var t=o()({},{channel:"singer",page:"list",key:"all_all_all",pagesize:"00",pagenum:"1",g_tk:"5381",loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0});return i.i(l.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,r.d)}function a(t){var e=o()({},{g_tk:5381,loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",singermid:t,notice:0,platform:"yqq",needNewCode:0,order:"listen",begin:0,num:60,songstatus:1});return i.i(l.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",e,r.d)}e.b=s,e.a=a;var n=i(66),o=i.n(n),r=i(45),l=i(123)},568:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(64),a=i.n(s),n=i(556),o=i.n(n),r=i(55),l=i(559),c=i(84),d=i(190),g=i(63),f=i(45);e.default={data:function(){return{songs:[],singer2:{},title2:"",bgImage2:""}},mixins:[g.d],computed:a()({title:function(){return this.singer.name},bgImage:function(){return this.singer.imgUrl}},i.i(r.a)(["singer"])),created:function(){var t=this.$route.params.id;this._getSingerDetails(t)},methods:{_getSingerDetails:function(t){var e=this.singer.id||t;if(!e)return void this.$router.push({path:"/singer"});var s=this;i.i(l.a)(e).then(function(e){e.code===f.a&&(s.songs=s._normalizeSong(e.data.list),s.singer2=new d.a({name:e.data.singer_name,id:t}),s.titles=s.singer2.name,s.bgImage2=s.singer2.imgUrl)})},_normalizeSong:function(t){var e=[],s=[],a=[];return t.forEach(function(t){var n=t.musicData;n.songid&&n.albummid&&(s.push(n.songmid),a.push(n.type),e.push(i.i(c.a)(n)))}),this._CgiGetVkey(s,a,t),e}},components:{MusicList:o.a}}},578:function(t,e,i){e=t.exports=i(543)(!1),e.push([t.i,".singer-details[data-v-5f1b8b13]{position:fixed;z-index:100;top:0;left:0;right:0;bottom:0;background:#222}.slide-enter-active[data-v-5f1b8b13],.slide-leave-active[data-v-5f1b8b13]{-webkit-transition:all .3s;transition:all .3s}.slide-enter[data-v-5f1b8b13],.slide-leave-to[data-v-5f1b8b13]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}",""])},588:function(t,e,i){var s=i(578);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(544)("106c4107",s,!0)},600:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide"}},[i("music-list",{attrs:{title:t.title2,songs:t.songs,bgImage:t.bgImage2}})],1)},staticRenderFns:[]}}});