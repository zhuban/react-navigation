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
  Image,
  Dimensions
} from 'react-native';
import px2dp from './px2dp';
import MyNav from '../Nav/MyNav';
import Swiper from 'react-native-swiper';
var { height, width } = Dimensions.get("window");
export default class SecondVC extends Component<Props> {
  back() {
    // this.props.navigation.goBack();
    this.setState({
      apiData:['http://img.taopic.com/uploads/allimg/120727/201995-120HG1030762.jpg',
              'http://img.taopic.com/uploads/allimg/120727/201995-120HG1030762.jpg',
              'http://img.zcool.cn/community/018299554245910000019ae998f74d.jpg',
              'http://img.taopic.com/uploads/allimg/120727/201995-120HG1030762.jpg'],
      type:true,
    });
  }
  rightbutton(){
  
  }
  leftbutton(){
      this.props.navigation.goBack();
  }
  constructor(props) {
    super(props);
  
    this.state = {
      apiData:[],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <MyNav title={'消息'}//标题
               // color={'#1AA1E5'}//导航栏颜色
               leftIcon={require('../Images/back.png')}//左侧按钮的图片
               leftbutton={this.leftbutton.bind(this)}//左侧按钮的点击事件
               leftIconWidth={11}//左侧的按钮的高度
               leftIconHeight={19}//左侧的按钮的宽度
               rightIcon={require('../Images/new.png')}//右侧按钮的图片
               rightbutton={this.rightbutton.bind(this)}//右侧按钮的点击事件
               rightIconWidth={23}//右侧的按钮的宽度
               rightIconHeight={20}//右侧的按钮的高度
               stateType='3'//右侧按钮 0的时候什么也不显示 1的时候显示的是文字 2的时候显示的是两个按钮 3的时候显示一个右侧按钮
               textColor={'white'}//文字的颜色
               />
        {/*<TouchableOpacity onPress={()=>this.back()}
                          style={{width:80,
                                  height:40,
                                  backgroundColor:'orange',
                                  margin:100,
                                  justifyContent:'center',
                                  alignItems:'center',}}>
           <Text>返回</Text>
        </TouchableOpacity>
        <View style={{height:177,width:width}}>
          {this.state.apiData.length===0?null:
            <Swiper style={styles.wrapper}
                autoplay
                dot={<View style={{backgroundColor: 'rgba(195,195,195,0.9)',
                                   width: 8, 
                                   height: 4, 
                                   borderRadius: 2, 
                                   margin: 5}}/>}
                activeDot={<View style={{backgroundColor: 'rgba(0,0,0,0.9)',
                                 width: 26, 
                                 height: 4, 
                                 borderRadius: 2, 
                                 margin: 5}}/>}
                paginationStyle={{bottom: 0}}>
             {this.state.apiData.map(function(jsonData){
              return (
                <View key={'1'} style={styles.slide}>
                   <Image reaizeMode='strech' 
                          style={styles.image} 
                          source={{uri: jsonData}}/>
              </View>)
            })}
          </Swiper>
        }
        </View>*/}
         <View style={{height:px2dp(100),
                       backgroundColor:'orange',
                       flexDirection:'row',
                       width:width}}>
             <View style={{height:px2dp(100),
                           width:px2dp(120),
                           backgroundColor:'red'}}>
             </View>
             <View style={{width:width-px2dp(120),
                           backgroundColor:'green',
                           height:px2dp(100)}}></View>
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
  swiper: {
    height: 197.5,
  },
  wrapper: {
    height: 197.5,
    borderWidth: 1,
  },
  slide: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
     alignItems: 'center',
  },
  image: {
    width: 350,
    height: 177.5,
    borderRadius: 10
  },
});
