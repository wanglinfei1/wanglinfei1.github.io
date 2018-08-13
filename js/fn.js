/**
 * Created by wanglinfei on 2017/8/30.
 */
/*获取地址栏的参数*/
function GetQueryString(name) {
    /*定义正则，用于获取相应参数*/
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    /*字符串截取，获取匹配参数值*/
    var r = window.location.search.substr(1).match(reg);
    /*但会参数值*/
    if (r != null)return unescape(r[2]);
    return null;
}
const Ajax =function(url,method,data){
    return new Promise((resolve,reject) => {
        $.ajax({
            url: url,
            data:data,
            type: method,
            success: function (data) {
                resolve(data)
            },
            error: function (err) {
                reject(err);
            }
        })
    })
}
const _Ajax = {
    post: function(url,data){
        return Ajax(url,'post',data)
    },
    get: function(url,data){
        return Ajax(url,'get',data)
    }
}
