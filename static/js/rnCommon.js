var UA = function(){
  var ua = window.navigator.userAgent.toLowerCase(),
      uaArr=ua.split('___');
      return {
          ua: ua,
          andriodVersion:uaArr[2],
          isAndriod:uaArr[3]==='android',
          isIos:uaArr[3]==='iphone',
          isApp: uaArr[1]==='wlfapp',
          appVersion:uaArr[4]
      };
}();
var postNativeData = function(data){
  if(typeof(data) != 'string'){
    data =JSON.stringify(data)
  }
  if(UA.isApp){
    window.postMessage(data);
  }else{
    console.log(data);
  }
}
window.Alert = function(d){
  if(UA.isApp){
    postNativeData({type:'alert',data:d})
  }else{
    alert(d)
  }
}
