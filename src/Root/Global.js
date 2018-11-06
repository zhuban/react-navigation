//用户登录数据  
global.user = {  
    loginState:'',//登录状态  
    // userData:'',//用户数据  
};  
// //刷新的时候重新获得用户数据    
// storage.load({  
//     key: 'loginState',  
// }).then(ret => {  
//     global.user.loginState = true;  
//     global.user.userData = ret;  
// }).catch(err => {  
//     global.user.loginState = false;  
//     global.user.userData = '';  
// })  



storage.load({
    key: 'loginState',
  }).then(ret => {
    // 如果找到数据，则在then方法中返回
    // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
    // 你只能在then这个方法内继续处理ret数据
    // 而不能在then以外处理
    // 也没有办法“变成”同步返回
    // 你也可以使用“看似”同步的async/await语法
    global.user.loginState = true;  
    // global.user.userData = ret;  
    // alert(JSON.stringify(ret));
    // this.setState({ user: ret });
  }).catch(err => {
    //如果没有找到数据且没有sync方法，
    //或者有其他异常，则在catch中返回
  })