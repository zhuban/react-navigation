import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  NativeModules
} from "react-native";
var { height, width } = Dimensions.get("window");
import { DrawerNavigator, DrawerItems } from "react-navigation";
import MyNav from "../Nav/MyNav";
import { connect } from "react-redux"; // 引入connect函数
import { bindActionCreators } from 'redux';
import * as limitedAction from "../Actions/limitedAction"; // 导入action方法
var BGNativeModuleExample = NativeModules.BGNativeModuleExample;
var page = 1;
@connect(
  state => {
    return {
      status: state.limitedReducer.status,
      isSuccess: state.limitedReducer.isSuccess,
      data: state.limitedReducer.data,
    };
  },
  dispatch => ({
    // request: () => dispatch(limitedAction.request())
    actions: bindActionCreators(limitedAction,dispatch)
  })
)
 export default class Friend extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    //alert(JSON.stringify(nextProps));
    // if (nextProps.status === '请求成功' && nextProps.isSuccess) {
     
    //   return true;
    // }
    return true;
  }
  static navigationOptions = ({navigation}) => ({
        // header:({state,setParams,goBack}) =>{
        //   //隐藏导航烂
        // },
        // tabBarVisible:false,//隐藏tabbar
  });
  constructor(props) {
    super(props);
  
    this.state = {
      data:[],
    };
  }
  leftbutton(){
      this.props.navigation.navigate("DrawerOpen")
  }
  
  render() {
    const { request,status,data } = this.props;
    return (
      <View style={styles.container}>
         <MyNav title={"朋友"}
                // color={"#1AA1E5"}
                leftIconWidth={31}
                leftIconHeight={24}
                textColor={"white"}
                leftIcon={require('../Images/leftIcon.png')}
                leftbutton={this.leftbutton.bind(this)}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  btnStyle: {
    height: 45,
    width: width - 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 1,
    backgroundColor: "orange"
  },
  chooseBtnStyle: {
    height: 40,
    marginTop:10,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange"
  },
   modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
    },
});
