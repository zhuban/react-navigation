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
} from 'react-native';
import MyNav from '../Nav/MyNav';
import ScrollableTabView, { DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class FourVC extends Component<Props> {
  back() {
    this.props.navigation.goBack();
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView 
                     tabBarUnderlineStyle={{width:100,height: 3,backgroundColor: '#bb6b50',}}
                     initialPage={0}
                     renderTabBar={() => <ScrollableTabBar
                        style={{height:46}}
                        activeTextColor='#bb6b50'
                        inactiveTextColor='#666'
                        textStyle={{fontSize: 15}}
                        backgroundColor='#fff'
                        tabStyle={{width:100}}
                    />}
                     tabBarPosition='top'
                     style={{marginTop:20}}>
                     <View tabLabel='基础' 
                           style={{backgroundColor:'orange',flex:1}}></View>
                     <View tabLabel='内容' 
                           style={{backgroundColor:'green',flex:1}}></View>
                     <View tabLabel='附件' 
                           style={{backgroundColor:'yellow',flex:1}}></View>
                     <View tabLabel='位置' 
                           style={{backgroundColor:'gray',flex:1}}></View>
                     <View tabLabel='进度' 
                           style={{backgroundColor:'orange',flex:1}}></View>
                     <View tabLabel='检查' 
                           style={{backgroundColor:'orange',flex:1}}></View>
                     <View tabLabel='新型' 
                           style={{backgroundColor:'orange',flex:1}}></View>
                     <View tabLabel='建设' 
                           style={{backgroundColor:'orange',flex:1}}></View>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
