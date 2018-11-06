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
  TouchableOpacity,
  PanResponder,
  Animated
} from 'react-native';
import MyNav from '../Nav/MyNav';
import { NavigationActions } from 'react-navigation';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class FourVC extends Component<Props> {
  quite() {
    // alert('2');
    storage.save({  
            key: 'loginState',  // 注意:请不要在key中使用_下划线符号!  
            data: {  
                userid: '',  
                userName:'',  
                token: ''  
            },  
            // 如果不指定过期时间，则会使用defaultExpires参数  
            // 如果设为null，则永不过期  
            // 8个小时后过期  
            expires:null
             // 1000 * 3600 * 8  
    });  
    let routename='Login';
    const resetAction = NavigationActions.reset({index: 0,
                 actions: [
                 NavigationActions.navigate({ routeName: routename})
              ]});
    this.props.navigation.dispatch(resetAction);
  }
  leftbutton(){
    this.props.navigation.goBack();
  }
  editBtn(){

  }
  searchBtn(){

  }
  constructor(props) {
    super(props);
  
    this.state = {
      bg:'white',
      bg2:'white',
      top:0,
      left:0,
      imageWidth:100,
      imageHeight:80,
    };
  }
  componentWillMount(){
    this._gestureHandlers = {
        onStartShouldSetResponder: () => true,  //对触摸进行响应
        onMoveShouldSetResponder: ()=> true,  //对滑动进行响应
        onResponderGrant: ()=>{
          console.log("parent onResponseGrant");
          this.setState({bg: 'orange',imageWidth:120,imageHeight:100});
        }, //激活时做的动作
        onResponderMove: ()=>{
          console.log("parent onResponderMove");
        },  //移动时作出的动作
        onResponderRelease: ()=>{
          console.log("parent onResponseRelease");
          this.setState({bg: 'white',imageWidth:100,imageHeight:80})
        }, //动作释放后做的动作
      }
}
render() {
  //   const spin = this.spinValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['0deg', '360deg']
  // })
    return (
      <View style={styles.container}>
        <MyNav title={'首页'}
               // color={'#1AA1E5'}
               leftIcon={require('../Images/back.png')}
               leftbutton={this.leftbutton.bind(this)}
               leftIconWidth={11}
               leftIconHeight={19}
               textColor={'white'}
               editBtn={this.editBtn.bind(this)}
               searchBtn={this.searchBtn.bind(this)}
               stateType='2'/>
        <TouchableOpacity onPressOut={()=>this.quite()}
                          style={{width:120,
                                  height:40,
                                  backgroundColor:'orange',
                                  margin:100,
                                  justifyContent:'center',
                                  alignItems:'center',}}>
           <Text>退出登录</Text>
        </TouchableOpacity>
        <View {...this._gestureHandlers}
              style={[styles.rect,{"backgroundColor": this.state.bg}]}>
          <Animated.Image style={{width: this.state.imageWidth,height: this.state.imageHeight,}}
                          resizeMode='cover'
                          // transform: [{rotate: spin}] 
                          source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
          />
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
  rect: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rect2: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black'
  },
  rect3:{
    width:100,
    height:100,
    borderWidth:1,
    borderColor:'black',
    backgroundColor:'#223344',
    alignSelf:'flex-end',
  }
});
