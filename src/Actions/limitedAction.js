"use strict";
// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
var P = {
  param(a){
    let s = [];
    for(let i in a){
      s[s.length] = encodeURIComponent(i) + '=' + encodeURIComponent(a[i]);
    }
    return s.join('&').replace(/%20/g,'+');
  }
}
export function request(page) {
  // alert(page);
  // alert("请求数据的方法");
  return dispatch => {
    dispatch(isLoding());
    let n = {username:'15801257983',password:'123456'};
    let url = 'http://www.duikouxiao.com:9000/doLoginPhone';
    // alert(url);
    fetch(url,{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: P.param(n)
        })
          .then((response) => response.json())
          .then((responseData) => {


              dispatch(requestSuccess(true, responseData.applications));

          }).catch((error)=>{
            dispatch(requestError(false));

          });
  };
}
function isLoding() {
  return {
    type: "loading"
  };
}
function requestSuccess(isSuccess, data) {
  return {
    type: "success",
    data: data
  };
}

function requestError(isSuccess) {
  console.log("error");
  return {
    type: "error"
  };
}
