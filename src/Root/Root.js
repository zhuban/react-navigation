
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {StackNavigator,TabNavigator,DrawerNavigator,NavigationActions} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import Home from '../Home/Home';
import Friend from '../Home/Friend';
import Find from '../Home/Find';
import FirstVC from '../FirstVC/FirstVC';
import SecondVC from '../SecondVC/SecondVC';
import ThirdVC from '../ThirdVC/ThirdVC';
import FourVC from '../FourVC/FourVC';
import FiveVC from '../FiveVC/FiveVC';
import MyNav from "../Nav/MyNav";
import Login from '../Home/Login';
import TabBar from './TabBar';
//全局存储  
import Stroage from './Storage';  
import './Global' 
var { height, width } = Dimensions.get("window");
const option = {
    headerTintColor: '#333',
    headerBackTitle: null,
    headerStyle: {
        backgroundColor: '#fff',
    },
    headerTitleStyle:{
        alignSelf:'center',
    },
    gesturesEnabled:false,//禁止左右滑动
};
const close = {
   //禁止打开菜单
   drawerLockMode: "locked-closed", 
   //允许使用返回手势
   gesturesEnabled: true,
}

const MainScreentNavigator=TabNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
           tabBarLabel:'首页',
           headerTitle:'首页',
            tabBarIcon: ({ tintColor }) => {
                // tintColor传递进来的是颜色，选中的颜色,那么图标颜色也要换
                return <Image source={require('../../images/book.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
            }
    }},
    Friend:{
        screen:Friend,
        navigationOptions:{
           tabBarLabel:'朋友',
           headerTitle:'朋友',
            tabBarIcon: ({ tintColor }) => {
                // tintColor传递进来的是颜色，选中的颜色,那么图标颜色也要换
                return <Image source={require('../../images/move.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
            }
    }},
    Find:{
        screen:Find,
        navigationOptions:{
           tabBarLabel:'好友',
           headerTitle:'好友',
            tabBarIcon: ({ tintColor }) => {
                // tintColor传递进来的是颜色，选中的颜色,那么图标颜色也要换
                return <Image source={require('../../images/message.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
            }
    }},
},
{
     tabBarPosition: 'bottom',
     swipeEnabled: false, // 禁止左右滑动
     animationEnabled:false,
     tabBarOptions: {
        activeTintColor: '#bb6b50', // 文字和图片选中颜色
        inactiveTintColor: '#333', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0
        }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        style: {
            backgroundColor: 'white', // TabBar 背景色
            height:50,
        },
        labelStyle: {
            fontSize: 12, // 文字大小
            marginTop:-1,
        },
        tabBarIconStyle:{
            marginTop:-3,
        }
      }
   }
);
const configAppNavigator = initialRouteName => {
 return StackNavigator(
 {
    Home:{
       screen:MainScreentNavigator,
    },
    FirstVC:{
       screen:FirstVC,
       navigationOptions:close
    },
    SecondVC:{
       screen:SecondVC,
       navigationOptions:close
    },
    ThirdVC:{
       screen:ThirdVC,
       navigationOptions:close
    },
    FourVC:{
       screen:FourVC,
       navigationOptions:close
    },
    FiveVC:{
      screen:FiveVC,
      navigationOptions:close
    },
    Login:{
      screen:Login,
      navigationOptions:close
    },
},
{
      initialRouteName: initialRouteName,
      navigationOptions: {
        header: null
      }
    }
  );
};
const TabBarBottom = props => {
  return (
    <View style={{backgroundColor:'red',width:width,height:55}}></View>
  );
};
const CustomDrawerContentComponent = props => {
  return (
    <ScrollView>
      <MyNav
        color={"#1AA1E5"}
        leftIconWidth={11}
        leftIconHeight={19}
        textColor={"white"}
      />
      <View
        style={{ backgroundColor: "white", height: height, width: width - 100 }}
      >
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => props.navigation.navigate("DrawerClose")}
        >
          <Text>首页</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => props.navigation.navigate("FirstVC")}
        >
          <Text>钱包</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => props.navigation.navigate("SecondVC")}
        >
          <Text>消息</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => props.navigation.navigate("ThirdVC")}
        >
          <Text>redux</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => props.navigation.navigate("FiveVC")}
        >
          <Text>商城</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => props.navigation.navigate("FourVC")}
        >
          <Text>设置</Text>
        </TouchableOpacity>
         <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => props.navigation.navigate("FourVC")}
        >
          <Text>退出登录</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const configDrawerNavigator = (initialRouteName) => DrawerNavigator({
    Home: {
        screen: configAppNavigator(),
    },
    Login:{
      screen:Login,
      navigationOptions:close
    },
}, {
    initialRouteName: initialRouteName,
    drawerWidth:  200, // 展示的宽度
    drawerPosition: 'left', // 抽屉在左边还是右边
    contentComponent: CustomDrawerContentComponent // 自定义抽屉组件
});


const styles = StyleSheet.create({
    tabBarImage: {
        width: 24,
        height: 24,
    },
   container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  btnStyle: {
    height: 45,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    margin: 1,
  },
  chooseBtnStyle: {
    height: 40,
    marginTop:10,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
   modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
    },
});
export default configDrawerNavigator;
