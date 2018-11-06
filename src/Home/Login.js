/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
// import Storage from '../Root/Storage';
type Props = {};
export default class Login extends Component<Props> {
  static navigationOptions = ({navigation}) => ({
         header:({state,setParams,goBack}) =>{
          //隐藏导航烂
        },
  });
  login() {
    storage.save({  
            key: 'loginState',  // 注意:请不要在key中使用_下划线符号!  
            data: {  
                userid: '1001',  
                userName:'userName',  
                token: 'token'  
            },  
            // 如果不指定过期时间，则会使用defaultExpires参数  
            // 如果设为null，则永不过期  
            // 8个小时后过期  
            expires:null
             // 1000 * 3600 * 8  
        });  
    global.user.loginState = true;//设置登录状态  
    global.user.userData = { userid: '1001', userName:'userName', token: 'token'};//保存用户数据  
  	var reg = /^[0-9]*$/;
  	// alert(reg.test('111666'));
  	let routename='Home';
	  const resetAction = NavigationActions.reset({index: 0,
                 actions: [
                 NavigationActions.navigate({ routeName: routename})
              ]});
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{width:100,height:40,backgroundColor:'red'}}
                          onPress={()=>this.login()}>
          <Text>登录</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
