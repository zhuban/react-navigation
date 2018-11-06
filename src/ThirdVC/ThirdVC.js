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
  Dimensions,
} from 'react-native';
import MyNav from '../Nav/MyNav';
import { connect } from "react-redux"; // 引入connect函数
import { bindActionCreators } from 'redux';
import * as operationAction from "../Actions/operationAction"; // 导入action方法
var { height, width } = Dimensions.get("window");
@connect(
  state => {
    return {
      count: state.operationReducer.count,
    };
  },
  dispatch => ({
    actions: bindActionCreators(operationAction,dispatch)
  })
)
export default class ThirdVC extends Component<Props> {

  back() {
    this.props.navigation.goBack();
  }
  leftbutton(){
    this.props.navigation.goBack(); 
  }
  //作减法
  decrement(){
     this.props.actions.decrement();
  }
  //做加法
  increment(){
     this.props.actions.increment();
  }
  render() {
    const { count } = this.props;
    alert(count);
    return (
      <View style={styles.container}>
        <MyNav title={'首页'}
               // color={'#1AA1E5'}
               leftIcon={require('../Images/back.png')}
               leftbutton={this.leftbutton.bind(this)}
               leftIconWidth={11}
               leftIconHeight={19}
               textColor={'white'}/>
        <TouchableOpacity onPress={()=>this.back()}
                          style={{width:80,
                                  height:40,
                                  backgroundColor:'orange',
                                  margin:100,
                                  justifyContent:'center',
                                  alignItems:'center',}}>
           <Text>返回</Text>
        </TouchableOpacity>
       <TouchableOpacity style={{backgroundColor:'orange',
                                 height:40,
                                 width:100,
                                 marginLeft:width/2-50,
                                 justifyContent:'center',
                                 alignItems: 'center',}}
                          onPress={()=>this.decrement()}>
          <Text>减号</Text>
       </TouchableOpacity>
       <View style={{justifyContent:'center',
                     alignItems:'center',
                     height:40,
                     width:width,
                    }}>
            <Text>{count}</Text>
       </View>
       <TouchableOpacity style={{backgroundColor:'orange',
                                 height:40,
                                 width:100,
                                 marginLeft:width/2-50,
                                 justifyContent:'center',
                                 alignItems: 'center',}}
                          onPress={()=>this.increment()}>
          <Text>加号</Text>
       </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
