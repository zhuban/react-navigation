
import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
var { height, width } = Dimensions.get("window");

export default class TabBar extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
           bgColor:'yellow'
      };
    }
    aaa(jumpToIndex,index){
        if (index===0) {
          this.setState({
             bgColor:'yellow'
          });
        }else if(index===1){
          this.setState({
            bgColor:'orange'
          });
        }else if(index===2){
          this.setState({
            bgColor:'green'
          });
        }
        jumpToIndex(index);
    }
    renderItem = (route, index) => {
        const { navigation, jumpToIndex } = this.props;
        const focused = index === navigation.state.index;
        const color = focused ? this.props.activeTintColor : this.props.inactiveTintColor;
        let TabScene = { focused:focused, route:route, tintColor:color };

        // if(index === 2){
        //     return (<View
        //             key={route.key}
        //             style={[styles.tabItem,{backgroundColor:'transparent'}]}>
        //         </View>
        //     );
        // }
        return (
            <TouchableOpacity
                key={route.key}
                style={styles.tabItem}
                onPress={() => this.aaa(jumpToIndex,index)}
            >
                <View
                    style={styles.tabItem}>
                    {this.props.renderIcon(TabScene)}
                    <Text style={{ ...styles.tabText,marginTop:10,color }}>{this.props.getLabel(TabScene)}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    render(){
        const {navigation,jumpToIndex} = this.props;
        const {routes,} = navigation.state;
        const focused = 2 === navigation.state.index;
        const color = focused ? this.props.activeTintColor : this.props.inactiveTintColor;
        let TabScene = { focused:focused, route:routes[2], tintColor:color };
        return (<View style={{width:width}}>
            <View style={{width:width,
                          backgroundColor:this.state.bgColor,
                          flexDirection:'row',
                          justifyContent:'space-around',
                          alignItems:'flex-end'}}>
                {routes && routes.map((route,index) => this.renderItem(route, index))}
            </View>
            {/*设置中间按钮凸出样式  使用绝对定位*/}
            {/*<TouchableOpacity
                key={"centerView"}
                style={[styles.tabItem,{position:'absolute',bottom:0,left:(width-100)/2,right:width-100,height:120}]}
                onPress={() => jumpToIndex(2)}>
                <View
                    style={styles.tabItem}>
                    {this.props.renderIcon(TabScene)}
                    <Text style={{ ...styles.tabText,marginTop:10,color }}>{this.props.getLabel(TabScene)}</Text>
                </View>
            </TouchableOpacity>*/}
        </View>);
    }
}
const styles = {
    tabItem:{
        height:60,
        width:100,
        alignItems:'center',
        justifyContent:'center'
    },
    tabText:{
        marginTop:13,
        fontSize:10,
        color:'#7b7b7b'
    },tabTextChoose:{
        color:'#f3474b'
    },
    tabImage:{
        width:42,
        height:42,
    },
};