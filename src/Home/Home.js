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
let BGNativeModuleExample = NativeModules.BGNativeModuleExample;
let page = 1;
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
 export default class Home extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    //alert(JSON.stringify(nextProps));
    // if (nextProps.status === '请求成功' && nextProps.isSuccess) {
     
    //   return true;
    // }
    return true;
  }
  constructor(props) {
    super(props);
  
    this.state = {
      data:[],
    };
  }
  static navigationOptions = ({navigation}) => ({
        header:({state,setParams,goBack}) =>{
          //隐藏导航烂
        },
        // tabBarVisible:false,//隐藏tabbar
  });
  componentDidMount() {
    page = 1;
    // const { request } = this.props;
    this.props.actions.request(page);
    // request();
  }
  // //下拉刷新
  // fetchPull(){
  //   page = 1;
  //   // const { request } = this.props;
  //   this.props.actions.request(page);
  //   // request();
  // }
  // //上拉加载
  // fetchDrop(){
  //   page = page+1;
  //   // const { request } = this.props;
  //   this.props.actions.request(page);
  //   // request();
  // }
  renderItemView({item}){
    return(
      <TouchableOpacity style={{flex:1,
                                height:60,
                                backgroundColor:'orange',
                        }}
                        activeOpacity={0.8}//设置点击的效果
                        onPress={()=>{this.Cellheader(item)}}
                       >
        <View style={{backgroundColor:'green',
                      height:59,justifyContent: 'center',
                      alignItems: 'center'}}>
           <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  //去除警告
  extraUniqueKey(item,index){
    return index+item;
  }
  leftbutton(){
      this.props.navigation.navigate("DrawerOpen")
  }
  Cellheader(){
    BGNativeModuleExample.addEventCeshi(('测试数据'),(error,events)=>{
        alert(events);
    });
    // alert('1');
  }
  render() {
    const { request,status,data } = this.props;
    return (
      <View style={styles.container}>
         <MyNav title={"首页"}
                color={"#1AA1E5"}
                leftIconWidth={31}
                leftIconHeight={24}
                textColor={"white"}
                leftIcon={require('../../images/sunflower.jpg')}
                leftbutton={this.leftbutton.bind(this)}
         />
        <View style={{marginTop: 10,
                      justifyContent: "center",
                      alignItems: "center"}}>
           <TouchableOpacity style={styles.chooseBtnStyle}
                             onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Text>打开侧滑</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.chooseBtnStyle}
                            onPress={() => this.props.navigation.navigate("DrawerClose")}>
            <Text>关闭侧滑</Text>
          </TouchableOpacity>
          {/*<TouchableOpacity style={styles.chooseBtnStyle}*/}
                            {/*onPress={() => request()}>*/}
            {/*<Text>吊接口</Text>*/}
          {/*</TouchableOpacity>*/}
        </View>

          <View style={{flex:1}}>
               <FlatList style={{flex:1,
                                 backgroundColor:'white',
                               }}
                         keyExtractor = {this.extraUniqueKey}//去除警告 
                         data = {data}
                         renderItem={this.renderItemView.bind(this)}
                         // onRefresh={()=>{
                         //    this.fetchPull();
                         // }}
                         // refreshing={false}
                         // onEndReachedThreshold={0.1}
                         // onEndReached={(info)=>{
                         //    this.fetchDrop();
                         // }}
                       >
           
               </FlatList>
               
          </View>
      </View>
    );
  }
}
// const CustomDrawerContentComponent = props => {
//   return (
//     <ScrollView>
//       <MyNav
//         color={"#1AA1E5"}
//         leftIconWidth={11}
//         leftIconHeight={19}
//         textColor={"white"}
//       />
//       <View
//         style={{ backgroundColor: "white", height: height, width: width - 100 }}
//       >
//         <TouchableOpacity
//           style={styles.btnStyle}
//           onPress={() => props.navigation.navigate("DrawerClose")}
//         >
//           <Text>首页</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.btnStyle}
//           onPress={() => props.navigation.navigate("FirstVC")}
//         >
//           <Text>钱包</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.btnStyle}
//           onPress={() => props.navigation.navigate("SecondVC")}
//         >
//           <Text>消息</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.btnStyle}
//           onPress={() => props.navigation.navigate("ThirdVC")}
//         >
//           <Text>redux</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.btnStyle}
//           onPress={() => props.navigation.navigate("FiveVC")}
//         >
//           <Text>商城</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.btnStyle}
//           onPress={() => props.navigation.navigate("FourVC")}
//         >
//           <Text>设置</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };
// const Draw = DrawerNavigator({
//   Home: {
//       screen: MyHomeScreen
//     }
//   },
//   {
//     headerMode: "none", //隐藏导航栏需要自定义导航栏
//     drawerWidth: width - 100, // 抽屉宽
//     drawerPosition: "left", // 抽屉在左边还是右边
//     contentComponent: CustomDrawerContentComponent // 自定义抽屉组件
//   }
// );

// module.exports = Draw;
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
